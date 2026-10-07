import React from "react";
import type { IconType } from "react-icons";
import {
  FiBox,
  FiCheckSquare,
  FiCpu,
  FiDatabase,
  FiEdit3,
  FiGitMerge,
  FiLink,
  FiMessageSquare,
  FiRepeat,
  FiServer,
} from "react-icons/fi";
import {
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGo,
  SiKubernetes,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { PageTitle } from "./page-title";
import { Reveal } from "./reveal";

type Skill = { name: string; icon: IconType };

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: "AI & Agents",
    skills: [
      { name: "AI Agents", icon: FiCpu },
      { name: "Agentic Workflows", icon: FiGitMerge },
      { name: "Custom MCP Servers", icon: FiServer },
      { name: "LLM Orchestration", icon: FiRepeat },
      { name: "LangChain", icon: FiLink },
      { name: "Prompt & Context Engineering", icon: FiEdit3 },
      { name: "RAG & Vector Search", icon: FiDatabase },
      { name: "Agent Evals", icon: FiCheckSquare },
      { name: "Voice AI (STT / TTS)", icon: FiMessageSquare },
      { name: "ADLC", icon: FiBox },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C/C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "Go", icon: SiGo },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: FiDatabase },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST", icon: FiServer },
      { name: "Prisma", icon: SiPrisma },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export default function SkillsSession() {
  return (
    <section className="section" id="skills">
      <PageTitle title="Skills" />
      <div className="space-y-8">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 60}>
            <h3 className="mb-3 text-sm font-medium text-black">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3.5 py-1.5 text-sm text-zinc-700 transition hover:border-black hover:text-black"
                >
                  <Icon aria-hidden className="h-4 w-4 shrink-0 text-black" />
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
