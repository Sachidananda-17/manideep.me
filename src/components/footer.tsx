import { SocialLinks } from "./social-links";

const nav = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Achievements", href: "#achievements" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-12 text-center">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-black">
          {nav.map((n) => (
            <li key={n.title}>
              <a href={n.href} className="hover:text-zinc-500">
                {n.title}
              </a>
            </li>
          ))}
        </ul>
        <SocialLinks />
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Sachidananda Manideep. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
