import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { SocialLinks } from "./social-links";

export function HomeSection() {
  return (
    <header className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-16 pt-28 md:grid-cols-[1.25fr_1fr]">
        <div className="space-y-6">
          <p className="text-lg text-black">Hi, I&apos;m Manideep.</p>

          <h1 className="text-4xl font-bold leading-[1.1] text-black sm:text-5xl md:text-6xl">
            I build AI agents and workflows that{" "}
            <span className="text-zinc-400">turn LLMs into action</span>.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
            From <span className="ink-underline">agentic workflows</span> to{" "}
            <span className="ink-underline">custom MCP integrations</span>, I
            design intelligent systems that automate real engineering work.
            Software Engineer at <span className="ink-underline">Razorpay</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#projects" className="btn-solid group">
              View my work
              <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
          </div>

          <SocialLinks />
        </div>

        <div className="mx-auto w-full max-w-[340px]">
          <div className="overflow-hidden rounded-3xl border border-zinc-200">
            <Image
              src="/img/Mani.jpg"
              width={680}
              height={680}
              priority
              className="aspect-square w-full object-cover"
              alt="Sachidananda Manideep"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
