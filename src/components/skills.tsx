import React from "react";
import { PageTitle } from "./page-title";

const skills = [
  "C/C++",
  "HTML",
  "CSS",
  "React Js",
  "JavaScript",
  "Next.js",
  "Python",
  "Express.js",
  "Node.js",
  "REST",
  "SQL",
  "MySQL",
  "Git & GitHub",
  "Redis",
  "Docker",
  "Tailwind CSS",
  "Prisma",
  "Android Studio",
  "Flutter",
  "Dart",
  "Postman",
  "Vercel",
  "Netlify",
];

export default function SkillsSession() {
  return (
    <section
      className="mx-auto flex w-full max-w-6xl flex-col px-6 py-12 md:py-16 lg:py-20"
      id="skills"
    >
      <div className="z-10 my-auto">
        <PageTitle title="Skills" />
        <div className="mt-8 flex flex-wrap justify-start gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition-colors duration-200 hover:bg-gray-100"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
