"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Slide from "react-reveal/Slide";

function Sidebar() {
  const sections = [
    { title: "home", url: "#" },
    { title: "about", url: "#about" },
    { title: "experience", url: "#experience" },
    { title: "projects", url: "#projects" },
  ];
  return (
    <nav className="text-aqua flex flex-col gap-3 p-4 pb-16 pr-20 sticky bottom-0 left-full w-fit max-sm:hidden font-mono">
      <Slide bottom>
        <div className="flex flex-col">
          {sections.map((section, index) => (
            <a
              href={section.url}
              key={index}
              className="font-bold text-l leading-normal hover:text-lylla"
            >
              {index}. {section.title}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href="https://github.com/kelseyfranken"
            target="_blank"
            className="hover:text-lylla"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/kelseyfranken/"
            target="_blank"
            className="hover:text-lylla"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:kfrankenb@gmail.com" className="hover:text-lylla">
            <EmailIcon />
          </a>
        </div>
      </Slide>
    </nav>
  );
}

export default Sidebar;
