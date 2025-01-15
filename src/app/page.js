import Image from "next/image";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import HeroSection from "./componenets/HeroSection";
import Project from "./componenets/Project";

export default function Home() {
  return (
   <>
    <Navbar/>
    <HeroSection/>
    <Project/>
    <Footer/>
   </>
  );
}
