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
    projectLink: "https://www.loom.com/share/c7904325fba347adaaad6f623799d98a",
    projectLabel: "Watch demo",
    githubLink: "https://github.com/Sachidananda-17/sahayak-ucxp-sarvam",
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
  {
    title: "Fertiwise",
    description:
      "SIH 2024 product that helps farmers pick the best fertilizers for their crops using AI/ML.",
    imageSrc: "/img/projects/fertiwise.png",
    projectLink:
      "https://drive.google.com/drive/folders/1inDSo6sLhf9axZ2jm2H_YPwfybwUuEen",
    projectLabel: "View project",
    githubLink: "https://github.com/Venkat-Kolasani/SIH_2024_FertiWise",
  },
  {
    title: "Brain Anomaly Detection",
    description:
      "Detecting brain anomalies from MRI images using a deep learning model.",
    imageSrc: "/img/projects/brain-anamoly.png",
    projectLink: "",
    projectLabel: "",
    githubLink: "https://github.com/Sachidananda-17/Brain-Anamoly-Detection",
  },
];

const layers = [
  { name: "Client", note: "app · WhatsApp" },
  { name: "UCXP Runtime", note: "generic" },
  { name: "manifests/*.json", note: "per business" },
  { name: "AI Engine", note: "voice · text" },
  { name: "Sarvam APIs", note: "STT · LLM · TTS" },
];

/** Visual for UCXP, which has no screenshot: the layer stack as a compact panel. */
function UcxpVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-1.5 bg-black px-5 font-mono text-[11px] text-zinc-300">
      <span className="mb-1 text-zinc-500">ucxp.run(message)</span>
      {layers.map((layer, i) => (
        <div key={layer.name} className="flex items-center gap-2">
          <span className="text-zinc-600">{i + 1}</span>
          <span className="flex flex-1 items-center justify-between rounded border border-zinc-700 px-2 py-0.5 text-white">
            {layer.name}
            <span className="text-zinc-500">{layer.note}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <PageTitle title="Projects" eyebrow="04 / Things I've built" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 100}>
            <div className="group card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-black">
              <div className="relative h-48 overflow-hidden border-b border-zinc-200">
                {project.imageSrc ? (
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <UcxpVisual />
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
