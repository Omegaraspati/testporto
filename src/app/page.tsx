import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Education/>
    <Portfolio />
    <Experience/>
    <Skills />
    <Contact />
    <Footer/>
    </>
  );
}
