import React from "react";
import Image from "next/image";
import { PageTitle } from "./page-title";

const ExperienceItem = ({
  logo,
  company,
  designation,
  date,
  location,
  companyLink,
}: {
  logo: string;
  company: string;
  designation: string;
  date: string;
  location: string;
  companyLink: string;
}) => {
  return (
    <div className="mb-6 flex rounded-xl border border-gray-300 bg-white px-6 py-4 shadow-md transition-shadow duration-200">
      <Image
        src={logo}
        alt={`${company} logo`}
        className="mr-6 mt-4 h-12 w-12 object-contain"
        width={48}
        height={48}
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-gray-800">{company}</h3>
        <p className="text-md text-gray-600">{designation}</p>
        <p className="text-sm text-gray-500">
          {date}  
        </p>
        <p className="text-md text-gray-600">{location}</p>
        <p>
          <a
            href={companyLink}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View website
          </a>
        </p>
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section
      className="mx-auto flex w-full max-w-6xl flex-col px-6 py-12 md:py-16 lg:py-20"
      id="experience"
    >
      <div className="z-10 my-auto">
        <PageTitle title="Experience" />
        <div className="mt-8">
          <ExperienceItem
            logo="/img/razorpay.png"
            company="Razorpay"
            designation="Product Engineer"
            date="March 2025 - Present"
            location="Bangalore, India"
            companyLink="https://razorpay.com/"
          />
          <ExperienceItem
            logo="/img/cognizant.png"
            company="Cognizant"
            designation="Program Analyst Trainee"
            date="December 2024 - Febuary 2025"
            location="Bangalore, India"
            companyLink="https://www.cognizant.com/in/en"
          />
          <ExperienceItem
            logo="/img/galway.png"
            company="University of Galway"
            designation="AIML reserach Intern"
            date="January 2023 - December 2023"
            location="Galyway, Ireland"
            companyLink="https://www.universityofgalway.ie/"
          />
          <ExperienceItem
            logo="/img/next-tech-lab-logo.png"
            company="Next Tech Lab"
            designation="Member"
            date="May 2022 - Present"
            location="Amaravathi, Andhra Pradesh, India"
            companyLink="https://nexttechlab.in"
          />
        </div>
      </div>
    </section>
  );
};
