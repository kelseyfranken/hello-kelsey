/* eslint-disable react/no-unescaped-entities */
"use client";

import Typist from "react-typist";
import "react-typist/dist/Typist.css"; // Import the Typist CSS file for cursor blink
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Landing() {
  return (
    <div className="pt-36 md:pt-[30%] lg:pt-80 flex flex-col max-sm:items-center">
      <h1 className="text-aqua text-3xl font-bold sm:text-5xl">
        <Typist avgTypingDelay={120}>
          <Typist.Delay ms={600} />
          <span className="text-lylla"> Hello, I'm</span> Kelsey
        </Typist>
      </h1>
      <h2 className="text-2xl text-snow sm:text-3xl ">Software Engineer</h2>
      <p className="pt-3 w-5/6 md:w-[500px] lg:w-[640px] text-justify text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor
        purus, fringilla a ligula ut, lacinia vulputate odio. Etiam sollicitudin
        vestibulum lacus, et condimentum enim vehicula quis. Morbi elementum
        tortor erat, suscipit commodo lacus tincidunt ut. Nulla ipsum orci,
        ultrices quis ligula et, tristique tincidunt nibh. Proin convallis, ex
        eget dictum vehicula, velit nulla elementum ante, non congue leo nisi
        quis dolor. Etiam ut massa ut lacus ullamcorper fermentum.
      </p>
      <Button
        variant="outlined"
        className="w-72 h-28 text-aqua border-aqua gap-2 mt-6 sm:mt-[57px] hover:bg-aqua hover:text-darkNavy hover:border-aqua"
        onClick={(e) => {
          window.location.href = "mailto:kfrankenb@gmail.com";
          e.preventDefault();
        }}
      >
        <MailOutlineIcon />
        Message Me
      </Button>
    </div>
  );
}

export default Landing;
