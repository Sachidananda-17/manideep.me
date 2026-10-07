import Image from "next/image";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { PageTitle } from "./page-title";
import { Proof } from "./proof";
import { Reveal } from "./reveal";

const LINKEDIN_HONORS =
  "https://www.linkedin.com/in/sachidananda-manideep-649aa8239/details/honors/";

const featured = {
  badge: "2nd Place",
  prize: "₹2L prize",
  title: "Sarvam Epoch Buildathon",
  meta: "Presented by GrowthX · India",
  description:
    "Secured 2nd place and a ₹2L prize among 200+ teams and 3000+ builders across India. We built Sahayak, a voice-first multilingual agent, on UCXP (Unified Customer Experience Protocol): a manifest-driven runtime where adding a business means adding a JSON manifest, with zero runtime changes. It runs over a mobile app and WhatsApp on Sarvam models, and we were evaluated by an expert judging panel at every stage of the buildathon.",
  image: "/img/achievements/sarvam-epoch-buildathon.jpg",
  tags: ["Sarvam AI", "Voice AI", "Agents", "UCXP"],
  link: "https://www.linkedin.com/feed/update/urn:li:activity:7489892804890877954/",
  linkLabel: "Read the LinkedIn post",
};

const awards = [
  {
    title: "AI Whisperer Track Winner",
    issuer: "Razorpay · Business Unit Awards",
    date: "May 2026",
    proof: { src: "/img/proof/linkedin-ai-whisperer.png", width: 1096, height: 470, source: "LinkedIn" as const },
    description:
      "Won the first-ever AI Whisperer track, awarded across 400+ employees for meaningful, high-impact contributions over the quarter. Conceptualized and shipped multiple AI skills, accessible directly from Slack, giving Business, Product and Ops teams self-serve visibility into workflows that used to need engineer intervention.",
  },
  {
    title: "MVP (Most Valued Person)",
    issuer: "Razorpay",
    date: "Jan 2026",
    proof: { src: "/img/proof/linkedin-mvp.png", width: 1096, height: 470, source: "LinkedIn" as const },
    description:
      "Recognized for exceptional contributions to the gift cards and wallets team. Took complete ownership of the pod from its enablement phase and restored business as usual. Became the go-to engineer across gift cards, wallets and the rewards marketplace, while mentoring and onboarding teammates.",
  },
];

const contributions: {
  metric: string;
  label: string;
  title: string;
  description: string;
  date: string;
  proof?: { src: string; width: number; height: number; source: "LinkedIn" | "Slack" };
}[] = [
  {
    metric: "55%",
    label: "of team bandwidth saved",
    title: "Manideep Bot: AI workflow assistant",
    description:
      "Built a Slack bot that watches an engineering channel, matches new work against 923 previously solved cases, runs the right diagnostic skill and closes the loop without leaving Slack. Most runs need a single word: \"Approve\". About 22% of historical work is fully automatable, and the workload dropped from 30-40 hours to 15-18 hours.",
    date: "Apr 2026",
    proof: { src: "/img/proof/slack-manideep-bot.png", width: 1311, height: 924, source: "Slack" },
  },
  {
    metric: "~20%",
    label: "fewer manual requests (expected)",
    title: "Self-serve AI diagnostics for order failures",
    description:
      "Built AI skills that trace why an order failed across the platform, with detailed insight for each case, plus on-demand redemption reports. Business and ops teams use them directly on Slack.",
    date: "May 2026",
    proof: { src: "/img/proof/slack-rmp-kudos.png", width: 1538, height: 326, source: "Slack" },
  },
];

export function AchievementsSection() {
  return (
    <section className="section" id="achievements">
      <PageTitle title="Achievements" eyebrow="02 / Recognition" />

      {/* featured: Sarvam */}
      <Reveal>
        <article className="group card overflow-hidden transition hover:border-black">
          <div className="grid items-stretch md:grid-cols-[1fr_1.15fr]">
            <div className="relative aspect-square w-full overflow-hidden md:aspect-auto md:min-h-[420px]">
              <Image
                src={featured.image}
                alt={`${featured.title} — team photo`}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-5 p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block rounded-full bg-black px-3 py-1 text-sm font-medium text-white">
                  {featured.badge}
                </span>
                <span className="inline-block rounded-full border border-black px-3 py-1 text-sm font-medium text-black">
                  {featured.prize}
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-black md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-1 font-mono text-sm text-zinc-400">
                  {featured.meta}
                </p>
              </div>
              <p className="leading-relaxed text-zinc-500">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-black underline underline-offset-4 transition hover:text-zinc-500"
              >
                {featured.linkLabel} <FiArrowUpRight />
              </a>
            </div>
          </div>
        </article>
      </Reveal>

      {/* Razorpay awards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {awards.map((a, i) => (
          <Reveal key={a.title} delay={i * 100}>
            <article className="card flex h-full flex-col p-7 transition hover:border-black">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white p-2">
                  <Image
                    src="/img/razorpay.png"
                    alt="Razorpay logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 font-mono text-xs text-white">
                  <FiAward /> {a.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-black">{a.title}</h3>
              <p className="mb-3 mt-1 font-mono text-xs text-zinc-400">
                {a.issuer}
              </p>
              <p className="flex-1 text-sm leading-relaxed text-zinc-500">
                {a.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <Proof {...a.proof} label={`${a.title} on LinkedIn`} />
                <a
                  href={LINKEDIN_HONORS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-zinc-500 transition hover:text-black"
                >
                  View on LinkedIn <FiArrowUpRight />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* key contributions */}
      <Reveal className="mb-6 mt-14">
        <h3 className="text-xl font-bold text-black md:text-2xl">
          Impact at Razorpay
        </h3>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {contributions.map((c, i) => (
          <Reveal key={c.title} delay={(i % 2) * 100}>
            <article className="card h-full p-6 transition hover:border-black">
              <div className="mb-4 flex items-start justify-between gap-4 border-b border-zinc-200 pb-4">
                <div>
                  <div className="text-2xl font-bold tracking-tight text-black">
                    {c.metric}
                  </div>
                  <div className="text-xs text-zinc-500">{c.label}</div>
                </div>
                <span className="font-mono text-xs text-zinc-400">{c.date}</span>
              </div>
              <h4 className="font-semibold text-black">{c.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                {c.description}
              </p>
              {c.proof && (
                <div className="mt-4">
                  <Proof {...c.proof} label={c.title} />
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
