import Landing from "@/components/Landing";

export default function Home() {
  return (
    <>
      <section className="h-screen" id="home">
        <Landing />
      </section>
      <section className="h-screen bg-lylla" id="about">
        About
      </section>
    </>
  );
}
