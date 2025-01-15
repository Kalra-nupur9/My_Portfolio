import Image from "next/image";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import HeroSection from "./componenets/HeroSection";

import ProjectsSection from "./componenets/ProjectsSection";
import Skills from "./componenets/Skills";
import ContactMe from "./componenets/ContactMe";

export default function Home() {
  return (
   <>
   <div className="bg_color">
   <Navbar/>
   <HeroSection/>
   </div>
    
    <ProjectsSection/>
    <div className="bg_color">
    <Skills />
    </div>
    
    <ContactMe/>
    <Footer/>
   </>
  );
}
