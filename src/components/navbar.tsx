"use client";

import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { title: "About", href: "#about" },
  { title: "Achievements", href: "#achievements" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

export const FloatingNavbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-[17px] font-bold tracking-tight text-black">
          <span className="mr-1 text-zinc-300">{"//"}</span>
          Manideep
        </a>

        {/* desktop / tablet links */}
        <ul className="hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`whitespace-nowrap text-sm transition-colors ${
                  active === l.href
                    ? "font-medium text-black"
                    : "text-zinc-600 hover:text-black"
                }`}
              >
                {l.title}
              </a>
            </li>
          ))}
        </ul>

        {/* phone menu button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-black sm:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <ul className="border-t border-zinc-200 bg-white px-6 py-2 sm:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-zinc-100 py-3 text-base last:border-0 ${
                  active === l.href ? "font-medium text-black" : "text-zinc-600"
                }`}
              >
                {l.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
