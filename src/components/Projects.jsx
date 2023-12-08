import MediaCard from "./MediaCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const projects = [
    {
      title: "Promptopia",
      description: "Open-source AI prompting tool",
      img: "/projects/promptopia.png",
      languages: [
        "React",
        "JavaScript",
        "Tailwind",
        "Next.js",
        "MongoDB",
        "Vercel",
      ],
      urls: {
        git: "https://github.com/kelseyfranken/project_promptopia",
        live: "https://promptopiaai.vercel.app/",
      },
    },
  ];
  return (
    <div className="pt-28 sm:pt-0 flex flex-col">
      <SectionTitle name={"Projects"} number={"3"} styles="sm:pl-[10%]" />
      <div className="flex justify-center lg:pl-[10%] lg:justify-normal max-sm:flex-col max-sm:items-center">
        {projects.map((project, index) => (
          <MediaCard
            key={`${index}-${project.title}`}
            img={project.img}
            description={project.description}
            title={project.title}
            languages={project.languages}
            urls={project.urls}
          />
        ))}
      </div>
    </div>
  );
}
