import MediaCard from "./MediaCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const projects = [
    {
      title: "Work in Progress",
      description: "This is a sample project",
      img: "/projects/wip.jpeg",
      languages: ["React", "JavaScript", "HTML", "CSS"],
    },
  ];
  return (
    <div className="pt-28 sm:pt-80 flex flex-col">
      <SectionTitle name={"Projects"} number={"3"} styles="sm:pl-[10%]" />
      <div className="flex justify-center lg:pl-[10%] lg:justify-normal">
        {projects.map((project, index) => (
          <MediaCard
            key={`${index}-${project.title}`}
            img={project.img}
            description={project.description}
            title={project.title}
            languages={project.languages}
          />
        ))}
      </div>
    </div>
  );
}
