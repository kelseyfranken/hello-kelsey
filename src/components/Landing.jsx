/* eslint-disable react/no-unescaped-entities */
"use client";

import FadeIn from "react-fade-in/lib/FadeIn";
import Typist from "react-typist";
import "react-typist/dist/Typist.css"; // Import the Typist CSS file for cursor blink
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Landing(props) {
  return (
    <FadeIn delay={50}>
      <div className="pt-60 pl-56 flex gap-28">
        <div className="pt-32">
          <h1 className="text-aqua text-5xl font-bold">
            <Typist avgTypingDelay={120}>
              <Typist.Delay ms={600} />
              <span className="text-lylla"> Hello, I'm</span> Kelsey
            </Typist>
          </h1>
          <h2 className="text-3xl text-snow">Software Engineer</h2>
          <p className="pt-3 lg:w-[640px] w-3/5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tortor purus, fringilla a ligula ut, lacinia vulputate odio. Etiam
            sollicitudin vestibulum lacus, et condimentum enim vehicula quis.
            Morbi elementum tortor erat, suscipit commodo lacus tincidunt ut.
            Nulla ipsum orci, ultrices quis ligula et, tristique tincidunt nibh.
            Proin convallis, ex eget dictum vehicula, velit nulla elementum
            ante, non congue leo nisi quis dolor. Etiam ut massa ut lacus
            ullamcorper fermentum.
          </p>
          <Button
            variant="outlined"
            className="w-[301px] h-[139px] text-aqua border-aqua gap-2 mt-[57px] hover:bg-aqua hover:text-darkNavy hover:border-aqua"
            onClick={(e) => {
              window.location.href = "mailto:kfrankenb@gmail.com";
              e.preventDefault();
            }}
          >
            <MailOutlineIcon />
            Message Me
          </Button>
        </div>
      </div>
    </FadeIn>
  );
}

export default Landing;
