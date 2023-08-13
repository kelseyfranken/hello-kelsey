/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "./SectionTitle";

export default function About() {
  const technologies = [
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
  ];
  return (
    <div className="pt-28 sm:pt-80 flex flex-col">
      <SectionTitle name={"About"} number={"1"} />
      <div className="flex flex-col gap-3 max-sm:pl-[10%] max-w-3xl text-justify text-lg pr-20">
        <p>
          I am currently a Software Engineer at Company, working in the [...]. I
          studied at Universidad.
        </p>
        <p>Here are some technologies I have been working with:</p>
        <ul>
          {technologies.map((tech, index) => (
            <li className="text-aqua" key={`${index}-${tech}`}>
              {tech}
            </li>
          ))}
        </ul>
        <p>Outside of work, I'm interested in ...</p>
      </div>
    </div>
  );
}
