import { FaTwitter, FaGithub, FaLinkedin, FaMediumM, FaFilePdf } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const SocialMediaLinks = [
  {
    id: 1,
    name: "Resume",
    icon: <FaFilePdf className="h-4 w-4" />,
    link: "https://drive.google.com/file/d/1GZOha0d1XidAfuCvHIMG1JYeroIiE4gG/view?usp=sharing",
  },
  {
    id: 2,
    name: "Medium",
    icon: <FaMediumM className="h-4 w-4" />,
    link: "https://medium.com/@manideep.karalapati",
  },
  {
    id: 3,
    name: "Github",
    icon: <FaGithub className="h-4 w-4" />,
    link: "https://github.com/Sachidananda-17",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: <FaLinkedin className="h-4 w-4" />,
    link: "https://www.linkedin.com/in/sachidananda-manideep-649aa8239/",
  },
  {
    id: 5,
    name: "Mail",
    icon: <MdMailOutline className="h-[18px] w-[18px]" />,
    link: "mailto:manideep.karalapati@gmail.com",
  },
  {
    id: 6,
    name: "Twitter",
    icon: <FaTwitter className="h-4 w-4" />,
    link: "https://x.com/manikaralapati",
  },
];

import React from "react";

export const SocialLinks = ({ invert = false }: { invert?: boolean }) => {
  return (
    <div className="z-10 flex flex-wrap gap-2.5 pt-2">
      {SocialMediaLinks.map((link) => (
        <a
          href={link.link}
          target="_blank"
          aria-label={link.name}
          title={link.name}
          rel="noopener noreferrer"
          key={link.id}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5 ${
            invert
              ? "border-white/30 text-white hover:bg-white hover:text-black"
              : "border-zinc-300 text-zinc-700 hover:border-black hover:bg-black hover:text-white"
          }`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
