import Image from "next/image";
import { SocialLinks } from "./social-links";

export function HomeSection() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-center px-6 pt-28 md:flex-row-reverse md:pb-0 md:pt-32">
      <div className="mt-14 flex w-full items-center justify-center md:mt-0 md:justify-end">
        <Image
          src= "/img/Mani.jpg"
          width={240}
          height={240}
          className="rounded-xl object-cover"
          alt="Sachidananda Manideep"
        />
      </div>
      <div className="z-10 flex w-full justify-center">
        <div className="flex w-full flex-col justify-center space-y-4 md:space-y-5">
          <h2 className="text-4xl font-bold leading-snug tracking-tight md:text-5xl">
            Hello,
          </h2>
          <h2 className="text-4xl font-bold leading-snug tracking-tight md:text-5xl">
            Sachidananda Manideep here! 👋🏻
          </h2>
          <h4 className="text-lg text-gray-700 md:text-xl">
            A Full Stack Developer & Flutter developer
          </h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
