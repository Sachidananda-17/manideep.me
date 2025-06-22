import { FaTwitter, FaGithub, FaLinkedin, FaMedium, FaMediumM, FaFilePdf } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const SocialMediaLinks = [
  {
    id: 1,
    name: "Resume",
    icon: <FaFilePdf className="h-6 w-6 text-[#1DA1F2]" />,
    link: "https://drive.google.com/file/d/1q9-F87jvEQrcZrZ8CvAx7oukN8gHtooT/view?usp=sharing",
  },

  {
    id: 2,
    name: "Medium",
    icon: <FaMediumM className="h-6 w-6 text-[#1DA1F2]" />,
    link: "https://medium.com/@manideep.karalapati",
  },
  {
    id: 3,
    name: "Github",
    icon: <FaGithub className="h-6 w-6 text-[#333]" />,
    link: "https://github.com/Sachidananda-17",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: <FaLinkedin className="h-6 w-6 text-[#0077B5]" />,
    link: "https://www.linkedin.com/in/sachidananda-manideep-649aa8239/",
  },
  {
    id: 5,
    name: "Mail",
    icon: <MdMailOutline className="h-6 w-6 text-[#EA4335]" />,
    link: "mailto:manideep.karalapati@gmail.com",
  },
  {
    id: 6,
    name: "Twitter",
    icon: <FaTwitter className="h-6 w-6 text-[#1DA1F2]" />,
    link: "https://x.com/ManideepKarala1",
  },
];

import React from "react";

export const SocialLinks = () => {
  return (
    <div className="z-10 flex flex-wrap gap-6 pt-2">
      {SocialMediaLinks.map((link) => (
        <a
          href={link.link}
          target="_blank"
          aria-label={link.name}
          rel="noopener noreferrer"
          key={link.id}
          className="flex items-center justify-center space-x-2 rounded-full border border-gray-200 bg-white p-3 shadow-sm transition-shadow duration-300 ease-in-out hover:border-gray-900"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
