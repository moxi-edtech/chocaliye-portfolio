import { Footer } from "../components/layout/Footer";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Expertise } from "../components/sections/Expertise";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Expertise />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
