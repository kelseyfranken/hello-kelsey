"use client";
import About from "@/components/About";
import Landing from "@/components/Landing";
import Slide from "react-reveal/Slide";

export default function Home() {
  return (
    <div className="sm:pl-[10%]">
      <Slide bottom>
        <section className="h-screen">
          <Landing />
        </section>
      </Slide>
      <Slide bottom delay={1000}>
        <section className="h-screen" id="about">
          <About />
        </section>
      </Slide>
    </div>
  );
}
