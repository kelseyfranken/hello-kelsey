import About from "@/components/About";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <div className="sm:pl-[10%]">
      <section className="h-screen" id="home">
        <Landing />
      </section>
      <section className="h-screen" id="about">
        <About />
      </section>
    </div>
  );
}
