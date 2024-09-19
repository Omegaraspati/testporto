import About from "@/components/About";
import Contact from "@/components/Contact";
// import Contact2 from "@/components/Contact2";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import PortfolioGallery from "@/components/PortfolioGallery";
import PortfolioUT from "@/components/PortfolioUT";
import PortfolioVideo from "@/components/PortfolioVideo";
import Skills from "@/components/Skills";

export default function Home() {
  
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Education/>
    <Portfolio />
    <PortfolioGallery/>
    <PortfolioUT/>
    <PortfolioVideo/>
    <Experience/>
    <Skills />
    <Contact/>
    <Footer/>
    </>
  );
}
