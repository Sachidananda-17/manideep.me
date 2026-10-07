import { FiArrowUpRight } from "react-icons/fi";
import { SocialLinks } from "./social-links";
import { Reveal } from "./reveal";

export function ContactSection() {
  return (
    <section className="section" id="contact">
      <Reveal className="border-t border-zinc-200 pt-16 text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-black md:text-6xl">
            Let&apos;s build something together
          </h2>
          <p className="text-lg text-zinc-500">
            My inbox is always open. Whether it&apos;s a project, an
            opportunity, or just to say hello.
          </p>
          <a
            href="mailto:manideep.karalapati@gmail.com"
            className="btn-solid group"
          >
            manideep.karalapati@gmail.com
            <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <SocialLinks />
        </div>
      </Reveal>
    </section>
  );
}
