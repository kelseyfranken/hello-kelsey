/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "./SectionTitle";
import Fade from "react-reveal/Fade";
import Image from "next/image";

export default function About() {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "MongoDB",
    "HTML & CSS",
    "Tailwind",
    "Figma",
    "Vercel",
  ];
  return (
    <div className="pt-28 sm:pt-60 sm:mb-60 flex flex-col">
      <SectionTitle name={"About"} number={"1"} />
      <div className="flex">
        <div className="flex flex-col gap-3 max-sm:pl-[10%] max-w-3xl text-justify text-lg pr-20">
          <p>
            I am currently a Software Engineer at{" "}
            <a
              href="https://www.somosmach.com/"
              target="_blank"
              className="underline text-aqua font-bold hover:text-lylla"
            >
              MACH
            </a>
            , working in the Web Team. I pioneered the development of the
            inaugural project utilizing React and Next.js within the company. My
            academic foundation is rooted in Computer Science (Software)
            Engineering, acquired at the{" "}
            <a
              href="https://www.ing.uc.cl/"
              target="_blank"
              className="underline text-aqua font-bold hover:text-lylla"
            >
              Pontifical Catholic University of Chile
            </a>
            .
          </p>
          <p>Here are some technologies I have been working with:</p>
          <Fade bottom cascade>
            <ul className="list-none grid grid-cols-2">
              {technologies.map((tech, index) => (
                <li
                  className="text-aqua before:content-['↳_'] hover:text-lylla hover:translate-y-[-2px]"
                  key={`${index}-${tech}`}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Fade>
          <p>
            Outside of work, I'm interested in following the developments of the
            tech world, living a healthy life-style and also enjoy making tik
            toks for the tech community.
          </p>
        </div>
        <div className="w-full max-md:hidden">
          <Image src="/kelsey.png" alt="Kelsey" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
