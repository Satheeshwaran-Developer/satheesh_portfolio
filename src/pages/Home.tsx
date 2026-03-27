import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import About from "../components/About";
import Skills from "../components/Skills";
import ExperienceSection from "../components/Experience";
import ContactSection from "../components/Contact";

export default function Home() {
  return (
    <>
    
      <Cursor />
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Projects />
      <ExperienceSection/>
      <ContactSection/>
      <Footer />
    </>
  );
}