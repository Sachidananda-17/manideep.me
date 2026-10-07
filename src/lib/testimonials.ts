import fallback from "@/data/testimonials.fallback.json";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  dummy?: boolean;
};

/** Minimal CSV parser: handles quoted fields, escaped quotes and newlines in quotes. */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

const find = (headers: string[], pattern: RegExp) =>
  headers.findIndex((h) => pattern.test(h));

/** Turn sheet rows into testimonials, matching columns by header name. */
export function rowsToTestimonials(rows: string[][]): Testimonial[] {
  if (rows.length < 2) return [];
  const headers = rows[0].map((h) => h.trim().toLowerCase());

  const iName = find(headers, /name/);
  const iRole = find(headers, /role|title|designation/);
  const iCompany = find(headers, /company|organi[sz]ation/);
  const iQuote = find(headers, /testimonial|message|recommend|words|feedback|quote/);
  const iApproved = find(headers, /approved/);
  if (iName < 0 || iQuote < 0) return [];

  return rows
    .slice(1)
    .filter((r) => iApproved < 0 || /^(yes|true|y|approved)$/i.test((r[iApproved] ?? "").trim()))
    .map((r) => {
      const role = (r[iRole] ?? "").trim();
      const company = (r[iCompany] ?? "").trim();
      return {
        quote: (r[iQuote] ?? "").trim(),
        name: (r[iName] ?? "").trim(),
        role: [role, company].filter(Boolean).join(", "),
      };
    })
    .filter((t) => t.quote && t.name);
}

/**
 * Approved testimonials from the published Google Sheet (CSV).
 * Never throws: on any problem (no URL, network error, bad data, no approved
 * rows) it falls back to the saved backup file so the section never breaks.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  const url = process.env.TESTIMONIALS_CSV_URL;
  if (!url) return fallback as Testimonial[];

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const items = rowsToTestimonials(parseCsv(await res.text()));
    return items.length ? items : (fallback as Testimonial[]);
  } catch (err) {
    console.error("[testimonials] sheet unavailable, using backup:", err);
    return fallback as Testimonial[];
  }
}
