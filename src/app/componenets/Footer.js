import React from "react";

const Footer = () => {
  return (
    <footer className="relative  bg-main-red py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 relative">
          <div className="absolute left-[65%] bottom-[-52%] text-pink-200 text-7xl select-none -z-1">
            NUPUR KALRA
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-4 z-0 ">
            <a
              href="#projects"
              className="text-white text-xl no-underline hover:text-black transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-white  text-xl no-underline hover:text-black transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="#Contactme"
              className="text-white  text-xl no-underline hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Icons */}
          <div className="flex gap-4">
            <i className="fab fa-linkedin text-white text-xl cursor-pointer hover:text-gray-300"></i>
            <i className="fab fa-github text-white text-xl cursor-pointer hover:text-gray-300"></i>
            <i className="fab fa-twitter text-white text-xl cursor-pointer hover:text-gray-300"></i>
            <i className="fab fa-instagram text-white text-xl cursor-pointer hover:text-gray-300"></i>
            <i className="fa fa-envelope text-white text-xl cursor-pointer hover:text-gray-300"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
