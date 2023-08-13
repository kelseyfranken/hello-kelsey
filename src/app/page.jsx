"use client";
import About from "@/components/About";
import Experience from "@/components/Experience";
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
      <Slide bottom delay={500}>
        <section className="h-screen" id="about">
          <About />
        </section>
      </Slide>

      <Slide bottom delay={500}>
        <section className="h-screen" id="about">
          <Experience />
        </section>
      </Slide>
    </div>
  );
}
