import React from "react";
import { PageTitle } from "./page-title";

export function AboutMeSection() {
  return (
    <section
      className="mx-auto flex w-full max-w-6xl flex-col px-6 py-12 md:py-16 lg:py-20"
      id="about"
    >
      <div className="z-10 my-auto flex flex-col space-y-8 text-start text-lg md:space-y-10 md:text-xl lg:space-y-12">
        <PageTitle title="About Me" />

        <p className="mb-8 text-justify leading-relaxed text-gray-700">
        I am a  passionate web and app developer from India .
        I am a Full Stack and Flutter developer with experience in DevOps and Data Structures. Contributed as a Freelancer to various corporate projects.
        In my free time, I show interest in learning new technologies and working on industry-level projects to enhance my skills.
        Additionally, I have a strong interest in research, which has led me to achieve notable accomplishments in the fields of <b>Machine learning</b> and <b>Blockchain technologies.</b>
        </p>

        <p className="text-justify leading-relaxed text-gray-700">
        I am always open to new professional connections 🤝 and exploring opportunities to work 🧑‍💻. Feel free to reach out and discuss potential collaborations or internship prospects.
        </p>
        
      </div>
    </section>
  );
}
