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
      description: ["punto 1", "punto 2", "punto 3"],
    },
    {
      companyName: "Evernote",
      jobTitle: "Associate Software Engineer",
      duration: "Mar 2022 - Feb 2023",
      description: ["punto 1", "punto 2", "punto 3"],
    },
    {
      companyName: "Evernote",
      jobTitle: "Software Engineer Intern",
      duration: "Jan 2022 - Feb 2022",
      description: ["punto 1", "punto 2", "punto 3"],
    },
  ];

  return (
    <div className="flex flex-row gap-10 max-sm:flex-col max-sm:pl-8 max-sm:pr-12">
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
          <ul className="mt-6 text-lg list-disc list-inside max-sm:text-base">
            <Fade bottom>
              {job.description.map(function (descriptionItem, i) {
                return <li key={i}>{descriptionItem}</li>;
              })}
            </Fade>
          </ul>
        </TabPanel>
      ))}
    </div>
  );
}
