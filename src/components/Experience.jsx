import SectionTitle from "./SectionTitle";
import "./styles/experience.css";
import JobsTabs from "./JobsTabs";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Experience() {
  return (
    <div className="pt-28 sm:pt-80 flex flex-col">
      <SectionTitle name={"Experience"} number={"2"} />
      <JobsTabs />
      <Button className="text-aqua w-fit hover:bg-aqua hover:text-darkNavy mt-12 ml-[15%] gap-2">
        View Full Resumee
        <ArrowForwardIcon />
      </Button>
    </div>
  );
}
