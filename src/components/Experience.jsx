import SectionTitle from "./SectionTitle";
import JobsTabs from "./JobsTabs";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Experience() {
  const showCVButton = false; // TODO: Set to true and add link to CV
  return (
    <div className="pt-28 sm:mb-60 sm:pt-0 flex flex-col">
      <SectionTitle name={"Experience"} number={"2"} />
      <JobsTabs />
      {showCVButton && (
        <Button className="text-aqua w-fit hover:bg-aqua hover:text-darkNavy mt-12 ml-[15%] gap-2">
          View Full Resumee
          <ArrowForwardIcon />
        </Button>
      )}
    </div>
  );
}
