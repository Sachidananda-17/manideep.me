import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { PageTitle } from "./page-title";
import { Reveal } from "./reveal";

type Role = { title: string; date: string; note?: string };

type Experience = {
  logo: string;
  company: string;
  designation?: string;
  date?: string;
  roles?: Role[]; // newest first
  location: string;
  companyLink: string;
  current?: boolean;
};

const experiences: Experience[] = [
  {
    logo: "/img/razorpay.png",
    company: "Razorpay",
    roles: [
      {
        title: "Software Engineer",
        date: "March 2026 - Present",
      },
      { title: "Software Engineer Intern", date: "March 2025 - March 2026" },
    ],
    location: "Bangalore, India",
    companyLink: "https://razorpay.com/",
    current: true,
  },
  {
    logo: "/img/cognizant.png",
    company: "Cognizant",
    designation: "Program Analyst Trainee",
    date: "December 2024 - February 2025",
    location: "Bangalore, India",
    companyLink: "https://www.cognizant.com/in/en",
  },
  {
    logo: "/img/galway.png",
    company: "University of Galway",
    designation: "AIML Research Intern",
    date: "January 2023 - December 2023",
    location: "Galway, Ireland",
    companyLink: "https://www.universityofgalway.ie/",
  },
  {
    logo: "/img/next-tech-lab-logo.png",
    company: "Next Tech Lab",
    designation: "Member",
    date: "May 2022 - 2025",
    location: "Amaravathi, Andhra Pradesh, India",
    companyLink: "https://nexttechlab.in",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="section" id="experience">
      <PageTitle title="Experience" eyebrow="03 / Where I've worked" />
      <div className="relative space-y-6 pl-8 md:pl-10">
        <div className="absolute bottom-2 left-[11px] top-2 w-px bg-zinc-200 md:left-[15px]" />
        {experiences.map((e, i) => (
          <Reveal key={e.company} delay={i * 80}>
            <div className="relative">
              <span
                className={`absolute -left-8 top-7 h-3 w-3 rounded-full border-2 border-white md:-left-10 md:h-3.5 md:w-3.5 ${
                  e.current ? "bg-black ring-4 ring-zinc-200" : "bg-zinc-400"
                }`}
              />
              <div className="card flex flex-col gap-4 p-5 transition hover:border-black sm:flex-row sm:items-center sm:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white p-2">
                  <Image
                    src={e.logo}
                    alt={`${e.company} logo`}
                    className="h-full w-full object-contain"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-xl font-semibold text-black">
                      {e.company}
                    </h3>
                    {e.current && (
                      <span className="rounded-full bg-black px-2 py-0.5 font-mono text-[11px] text-white">
                        current
                      </span>
                    )}
                  </div>
                  {e.roles ? (
                    <>
                      <ol className="mt-2 space-y-2.5 border-l border-zinc-200 pl-4">
                        {e.roles.map((r, ri) => (
                          <li key={r.title} className="relative">
                            <span
                              className={`absolute -left-[21px] top-1.5 h-2 w-2 rounded-full ${
                                ri === 0 ? "bg-black" : "bg-zinc-300"
                              }`}
                            />
                            <p className="text-zinc-800">
                              {r.title}
                              {r.note && (
                                <span className="ml-2 rounded-full border border-zinc-300 px-2 py-0.5 font-mono text-[10px] text-zinc-500">
                                  {r.note}
                                </span>
                              )}
                            </p>
                            <p className="font-mono text-xs text-zinc-400">
                              {r.date}
                            </p>
                          </li>
                        ))}
                      </ol>
                      <p className="mt-2 font-mono text-xs text-zinc-400">
                        {e.location}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-zinc-700">{e.designation}</p>
                      <p className="font-mono text-xs text-zinc-400">
                        {e.date} · {e.location}
                      </p>
                    </>
                  )}
                </div>
                <a
                  href={e.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${e.company} website`}
                  className="flex h-10 w-10 items-center justify-center self-start rounded-full border border-zinc-300 text-zinc-600 transition hover:border-black hover:bg-black hover:text-white sm:self-center"
                >
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
