import React from "react";
import { FiCpu, FiGitMerge, FiLayers, FiTool } from "react-icons/fi";
import { PageTitle } from "./page-title";
import { Reveal } from "./reveal";

const pillars = [
  {
    icon: <FiCpu />,
    title: "AI agents",
    text: "Tool-using agents and voice agents that plan, call tools and complete multi-step tasks in production.",
  },
  {
    icon: <FiTool />,
    title: "MCP & tool integrations",
    text: "Custom MCP servers and skills that connect LLMs to internal systems, so agents act instead of just answering.",
  },
  {
    icon: <FiGitMerge />,
    title: "Agentic workflows",
    text: "Multi-step workflows with approval gates, from trigger to completion, running right inside Slack.",
  },
  {
    icon: <FiLayers />,
    title: "Full stack foundation",
    text: "React, Next.js, Node, Python and Go: the product surfaces and the services behind the agents.",
  },
];

export function AboutMeSection() {
  return (
    <section className="section" id="about">
      <PageTitle title="About me" eyebrow="01 / Who I am" />
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-zinc-500">
          <p>
            I&apos;m a <b className="text-black">Software Engineer at Razorpay</b>{" "}
            who builds <b className="ink-underline text-black">AI agents</b>,{" "}
            <b className="ink-underline text-black">agentic workflows</b> and{" "}
            <b className="ink-underline text-black">MCP-based tool integrations</b>. My work
            turns LLMs into systems that take real action: agents that use
            tools, follow multi-step workflows and run where teams already
            work, like Slack.
          </p>
          <p>
            I work across <b className="ink-underline text-black">LLM orchestration</b>,{" "}
            <b className="ink-underline text-black">tool use</b>,{" "}
            <b className="ink-underline text-black">custom MCP servers</b>, prompt and context
            engineering, RAG and voice AI, so{" "}
            agents are reliable enough to run in
            production, not just in demos.
          </p>
          <p>
            I follow an agent development life cycle: scope, design, build,
            evaluate, deploy and observe. It&apos;s grounded in full-stack
            engineering and machine learning research (including a stint at the
            University of Galway). Open to collaborations and{" "}
            <span className="ink-underline">hard problems</span>, so say hello.
          </p>
        </Reveal>

        <div className="space-y-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="card flex gap-4 p-5 transition hover:border-black">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-xl text-white">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-black">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
