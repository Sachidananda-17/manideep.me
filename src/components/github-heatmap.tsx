"use client";

import { useState } from "react";

export type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const levelClass = [
  "bg-zinc-100",
  "bg-zinc-300",
  "bg-zinc-500",
  "bg-zinc-700",
  "bg-black",
];

const utc = (date: string) => new Date(date + "T00:00:00Z");

function buildWeeks(days: Day[]) {
  const first = utc(days[0].date).getUTCDay();
  const cells: (Day | null)[] = [...Array(first).fill(null), ...days];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

export function GithubHeatmap({
  username,
  days,
}: {
  username: string;
  days: Day[];
}) {
  const byYear = new Map<string, Day[]>();
  for (const d of days) {
    const y = d.date.slice(0, 4);
    byYear.set(y, [...(byYear.get(y) ?? []), d]);
  }
  const years = Array.from(byYear.keys()).sort((a, b) => Number(b) - Number(a));
  const [year, setYear] = useState(years[0]);

  const yearDays = byYear.get(year)!;
  const weeks = buildWeeks(yearDays);
  const total = yearDays.reduce((n, d) => n + d.count, 0);
  const activeDays = yearDays.filter((d) => d.count > 0).length;
  const best = Math.max(...yearDays.map((d) => d.count));

  const months = weeks.map((week, i) => {
    const d = week.find(Boolean);
    if (!d) return "";
    const prev = i > 0 ? weeks[i - 1].find(Boolean) : null;
    const m = utc(d.date).getUTCMonth();
    return !prev || utc(prev.date).getUTCMonth() !== m
      ? utc(d.date).toLocaleString("en", { month: "short", timeZone: "UTC" })
      : "";
  });

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="card min-w-0 flex-1 p-6">
        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="mb-2 flex gap-[3px] text-[10px] text-zinc-500">
              {months.map((m, i) => (
                <span key={i} className="w-[11px] whitespace-nowrap">
                  {m}
                </span>
              ))}
            </div>
            <div className="flex gap-[3px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) =>
                    day ? (
                      <div
                        key={di}
                        title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                        className={`h-[11px] w-[11px] rounded-[2px] ${levelClass[day.level]}`}
                      />
                    ) : (
                      <div key={di} className="h-[11px] w-[11px]" />
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black"
          >
            <span className="font-semibold text-black">{total}</span>{" "}
            contributions in {year} · {activeDays} active days · best day {best}
          </a>
          <span className="flex items-center gap-1">
            Less
            {levelClass.map((c) => (
              <span key={c} className={`h-[11px] w-[11px] rounded-[2px] ${c}`} />
            ))}
            More
          </span>
        </div>
      </div>

      <div className="flex gap-2 md:w-24 md:flex-col">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
              y === year
                ? "border-black bg-black text-white"
                : "border-zinc-200 text-zinc-500 hover:border-black hover:text-black"
            }`}
          >
            {y}
          </button>
        ))}
      </div>
    </div>
  );
}
