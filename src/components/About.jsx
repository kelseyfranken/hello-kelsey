/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "./SectionTitle";
import Fade from "react-reveal/Fade";

export default function About() {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "HTML & CSS",
  ];
  return (
    <div className="pt-28 sm:pt-60 sm:mb-60 flex flex-col">
      <SectionTitle name={"About"} number={"1"} />
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
          , working in the Web Team where I developed the first project in React
          and Next.js in the company. I studied Computer Science (Software)
          Engineering at{" "}
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
          tech world and living a healthy life-style.
        </p>
      </div>
    </div>
  );
}
