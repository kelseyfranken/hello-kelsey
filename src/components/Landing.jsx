/* eslint-disable react/no-unescaped-entities */
"use client";

import Typist from "react-typist";
import "react-typist/dist/Typist.css"; // Import the Typist CSS file for cursor blink

function Landing(props) {
  return (
    <div className="pt-60 pl-56">
      <div className="pt-32">
        <h1 className="text-aqua text-5xl font-bold">
          <Typist avgTypingDelay={120}>
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
          Proin convallis, ex eget dictum vehicula, velit nulla elementum ante,
          non congue leo nisi quis dolor. Etiam ut massa ut lacus ullamcorper
          fermentum.
        </p>
      </div>
    </div>
  );
}

export default Landing;
