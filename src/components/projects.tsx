import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { PageTitle } from "./page-title";
import { Reveal } from "./reveal";

type Project = {
  title: string;
  description: string;
  imageSrc?: string;
  projectLink: string;
  projectLabel: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    title: "Sahayak — UCXP Protocol",
    description:
      "Sahayak agent on UCXP, the Unified Customer Experience Protocol: a manifest-driven runtime where one agent serves any business with zero business-specific code. Voice-first, multilingual, on Sarvam.",
    imageSrc: "/img/projects/sahayak.png",
    projectLink: "https://sahayak-ucxp.vercel.app",
    projectLabel: "Live demo",
    githubLink: "https://github.com/akashmeruva9/sahayak-ucxp-sarvam",
  },
  {
    title: "OpenLens — AI Media House",
    description:
      "An AI media house that shows its work: one story becomes a reviewed Claim & Evidence Ledger, then web and mobile apps, narrated multilingual videos and channel-ready posts. Built on Gemini + Google Cloud.",
    imageSrc: "/img/projects/openlens.png",
    projectLink: "https://openlens-web-948923830185.us-central1.run.app/",
    projectLabel: "Live demo",
    githubLink: "https://github.com/akashmeruva9/open-lens",
  },
  {
    title: "Connect-Celeb",
    description:
      "A platform where users can interact with the celebrity they wanted.",
    imageSrc: "/img/projects/connect-celeb.png",
    projectLink: "https://connect-celeb.vercel.app/",
    projectLabel: "View project",
    githubLink: "https://github.com/Sachidananda-17/Connect_Celeb",
  },
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <PageTitle title="Projects" eyebrow="04 / Things I've built" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 100}>
            <div className="group card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-black">
              <div className="relative h-48 overflow-hidden border-b border-zinc-200">
                {project.imageSrc && (
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-semibold text-black">
                  {project.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  {project.projectLink ? (
                    <Link
                      href={project.projectLink}
                      target="_blank"
                      className="inline-flex items-center gap-1 font-semibold text-black underline underline-offset-4 transition hover:text-zinc-500"
                      prefetch={false}
                    >
                      {project.projectLabel} <FiArrowUpRight />
                    </Link>
                  ) : (
                    <span />
                  )}
                  <Link
                    className="flex items-center gap-2 text-zinc-500 transition hover:text-black"
                    target="_blank"
                    href={project.githubLink}
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
