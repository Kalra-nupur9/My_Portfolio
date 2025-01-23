import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer text-center relative  bg-main-red py-10 w-screen" id="footer">
    
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 relative">
          

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-4 z-0 ">
          <a
              href="/"
              className="text-white text-xl no-underline hover:text-black transition-all duration-300"
            >
              Home
            </a>
            <a
              href="/project"
              className="text-white text-xl no-underline hover:text-black transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="/aboutme"
              className="text-white  text-xl no-underline hover:text-black transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="\contactme"
              className="text-white  text-xl no-underline hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          

          {/* Icons */}
          <div className="flex gap-4 px-5">
            
            <FaInstagram className="text-white text-3xl cursor-pointer hover:text-pink-200" />
            <FaGithub className="text-white text-3xl cursor-pointer hover:text-pink-200" />
            <FaLinkedin className="text-white text-3xl cursor-pointer hover:text-pink-200" />
            <FaXTwitter className="text-white text-3xl cursor-pointer hover:text-pink-200"/>
            
          </div>
        </div>
        <div className=" text-pink-200 text-7xl select-none justify-end flex w-full px-5 ">
            NUPUR KALRA
            
          </div>
          <p>© 2025 Nupur Kalra All Rights Reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
