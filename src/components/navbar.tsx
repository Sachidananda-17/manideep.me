import React from "react";

export const FloatingNavbar = () => {
  const links = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Experience",
      href: "#experience",
    },
    {
      title: "Blogs",
      href: "#blogs",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-center p-2 ">
        <ul className="flex space-x-6 rounded-full border bg-white bg-opacity-80  px-6 py-3 shadow-sm backdrop-blur-md">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-800 hover:text-gray-900 hover:underline"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
