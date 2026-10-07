import React from "react";
import { PageTitle } from "./page-title";
import { Reveal } from "./reveal";
import { getTestimonials, type Testimonial } from "@/lib/testimonials";

function Card({ t }: { t: Testimonial }) {
  const initials = t.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <figure className="flex w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 sm:w-[360px]">
      <blockquote className="text-[15px] leading-relaxed text-zinc-700">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
          {initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-black">
            {t.name}
          </span>
          <span className="block text-xs text-zinc-500">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export async function TestimonialsSection() {
  const testimonials = await getTestimonials();
  const hasDummy = testimonials.some((t) => t.dummy);
  const formUrl = process.env.TESTIMONIAL_FORM_URL;

  return (
    <section className="section" id="testimonials">
      <PageTitle title="Kind words" />
      {hasDummy && (
        <Reveal className="-mt-6 mb-8">
          <p className="inline-block rounded-full border border-dashed border-zinc-400 px-3 py-1 font-mono text-xs text-zinc-500">
            Preview with placeholder text, real recommendations coming
          </p>
        </Reveal>
      )}

      <div
        className="marquee -mx-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex gap-5 pr-5"
              aria-hidden={copy === 1}
            >
              {testimonials.map((t) => (
                <Card key={`${copy}-${t.name}`} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {formUrl && (
        <Reveal className="mt-10 text-center">
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Leave a testimonial
          </a>
        </Reveal>
      )}
    </section>
  );
}
