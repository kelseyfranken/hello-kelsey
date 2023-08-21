"use client";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Slide from "react-reveal/Slide";

export default function Home() {
  return (
    <>
      <Slide bottom>
        <section className="h-screen sm:pl-[10%]">
          <Landing />
        </section>
      </Slide>
      <Slide bottom delay={500}>
        <section className="h-screen sm:pl-[10%]" id="about">
          <About />
        </section>
      </Slide>
      <Slide bottom delay={500}>
        <section className="h-screen sm:pl-[10%]" id="experience">
          <Experience />
        </section>
      </Slide>
      <Slide bottom delay={500}>
        <section id="projects">
          <Projects />
        </section>
      </Slide>
      <Footer />
    </>
  );
}
