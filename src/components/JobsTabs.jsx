import { useState } from "react";
import Fade from "react-reveal/Fade";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./styles/experience.css";

export default function JobsTabs() {
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth <= 639);
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  window.addEventListener("resize", () => {
    setIsHorizontal(window.innerWidth <= 639);
  });

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  }

  const jobsList = [
    {
      companyName: "MACH",
      jobTitle: "Software Engineer Web I",
      duration: "May 2023 - Present",
      description: [
        "Developed a React and Next.js powered internal Back Office web app, boosting operational efficiency while ensuring compliance with accessibility and security standards. The application is expected to save up to 21 hours per month, enhancing overall productivity.",
        "Led the company’s first project in React and Next.js, demonstrating technical leadership and a commitment to innovation.",
      ],
    },
    {
      companyName: "Evernote",
      jobTitle: "Associate Software Engineer",
      duration: "Mar 2022 - Feb 2023",
      description: [
        "Developed and maintained Evernote web and desktop applications, addressing UI issues and ensuring accessibility compliance.",
        "Implemented A/B testing, resulting in a 20% increase in user conversion, and managed event tracking for data analytics.",
        "Led the design and execution of an educational experiment, enhancing user loyalty, attraction, and feature adoption.",
        "Collaborated with designers and multidisciplinary teams to promote the adoption of a component library for efficient development.",
      ],
    },
    {
      companyName: "Evernote",
      jobTitle: "Software Engineer Intern",
      duration: "Jan 2022 - Feb 2022",
      description: [
        "Built a custom component library in React, adhering to the company's design system, to enhance development efficiency.",
        "",
      ],
    },
    {
      companyName: "Witby",
      jobTitle: "Mobile Developer (Capstone)",
      duration: "Aug 2021 - Dec 2021",
      description: [
        "Developed the frontend of the Insurtech application ”Witby” using JavaScript and React Native.",
        "Recognized by course instructors and Witby counterparts for on-time project delivery and outstanding work.",
      ],
    },
    {
      companyName: " PUC",
      jobTitle: "Teaching Assistant",
      duration: "Mar 2021 - Dec 2021",
      description: [
        "For ”Technology and Web Applications,” efficiently managed six groups in the development of JavaScript web applications, and created instructional video tutorials and demos for JavaScript, React, Github flow, and ESLint.",
        "In ”Introduction to Programming,” provided invaluable support to students in Python programming, handled weekly exercise corrections, and aided with basic to intermediate Python programming tasks.",
      ],
    },
  ];

  return (
    <div className="flex flex-row gap-10 max-sm:flex-col max-sm:pl-8 max-sm:pr-12 h-80 max-sm:h-auto max-sm:min-h-[560px]">
      <Tabs
        orientation={isHorizontal ? "horizontal" : "vertical"}
        value={value}
        onChange={handleTabChange}
        sx={{ borderRight: 3, borderColor: "divider" }}
        className="w-32 text-lylla max-sm:w-auto max-sm:border-0 sm:h-fit sm:max-h-48"
        textColor="lylla"
        variant="scrollable"
        scrollButtons={false}
      >
        {jobsList.map((job, idx) => (
          <Tab
            label={job.companyName}
            {...a11yProps(idx)}
            key={`${idx}-${job.companyName}-tab`}
            className="font-mono"
          />
        ))}
      </Tabs>

      {jobsList.map((job, idx) => (
        <TabPanel
          value={value}
          index={idx}
          key={`${idx}-${job.companyName}-tab-panel`}
        >
          <span className="text-lylla font-bold text-2xl max-sm:text-xl">
            {job.jobTitle + ", "}
          </span>
          <span className="text-aqua font-bold text-2xl max-sm:text-xl">
            {job.companyName}
          </span>
          <div className="mt-2 text-lg max-sm:text-base">{job.duration}</div>
          <ul className="mt-6 text-lg list-none list-inside max-sm:text-base max-w-2xl">
            <Fade bottom>
              {job.description.map((descriptionItem, i) => {
                return (
                  <li
                    key={i}
                    className={`before:content-['↳_'] before:text-aqua mb-4 ${
                      job.jobTitle === "Software Engineer Intern" && i === 1
                        ? "hidden"
                        : ""
                    }`}
                  >
                    {descriptionItem}
                  </li>
                );
              })}
            </Fade>
          </ul>
        </TabPanel>
      ))}
    </div>
  );
}
