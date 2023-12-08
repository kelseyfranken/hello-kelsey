/* eslint-disable react/no-unescaped-entities */
"use client";

import Typist from "react-typist";
import "react-typist/dist/Typist.css"; // Import the Typist CSS file for cursor blink
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MinimalCat from "./MinimalCat";

function Landing() {
  return (
    <div className="flex flex-row">
      <div className="pt-36 md:pt-[30%] lg:pt-60 flex flex-col max-sm:items-center">
        <div className="self-center pt-[10%] min-[1167px]:hidden max-sm:hidden">
          <MinimalCat />
        </div>
        <h1 className="text-aqua text-3xl font-bold sm:text-5xl font-mono max-[1166px]:mt-[50px]">
          <Typist avgTypingDelay={120}>
            <Typist.Delay ms={600} />
            <span className="text-lylla"> Hello, I'm</span> Kelsey
          </Typist>
        </h1>
        <h2 className="text-2xl text-snow sm:text-3xl font-mono">
          Software Engineer
        </h2>
        <p className="pt-3 w-5/6 md:w-[500px] lg:w-[640px] text-justify text-lg tracking-wider max-sm:text-base max-sm:tracking-wide">
          I'm a Software Engineer currently based in Santiago, Chile. I have a
          strong focus and passion for{" "}
          <span className="font-bold text-aqua">Full Stack development</span>. I
          focus on crafting visually appealing and user-friendly interfaces,
          with a keen eye for optimization. I love all things coding and I am
          always looking for new opportunities to learn and grow.
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
      <div className="self-center pt-[10%] max-[1166px]:hidden">
        <MinimalCat />
      </div>
    </div>
  );
}

export default Landing;
