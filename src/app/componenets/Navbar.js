"use client";
import React, { useState } from "react";

function Navbar() {
  const [isClick, setisClick] = useState(false);
  const ToggleNavMenu = () => {
    setisClick(!isClick);
  };
  return (
    <nav id="navBar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="" className="text-black tracking-tightest text-8xl">
                NK
              </a>
            </div>
          </div>

          <div className="hidden md:block w-3/4">
            <div className="  ml-4 flex items-center space-x-10  justify-end">
              <a
                href="#home  "
                className=" text-xl text-black hover:text-main-red  font-medium"
              >
                Home
              </a>
              <a
                href="#Project  "
                className=" text-lg  text-black hover:text-main-red font-medium"
              >
                My-Projects
              </a>
              <a
                href="#skills  "
                className=" text-xl text-black hover:text-main-red font-medium"
              >
                My Skills
              </a>
              <a
                href="#contactMe  "
                className=" text-xl text-black hover:text-main-red font-medium"
              >
                Contact Me
              </a>

            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-black  hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-800"
              onClick={ToggleNavMenu}
            >
              {isClick ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md-hidden flex justify-end ">
          <div className=" w-full space-y-1 bg-gradient-to-r from-main-red to-white rounded-lg py-1">
            <a
              href="/home  "
              className=" text-xl text-black block text-center hover:text-main-red  font-medium py-2"
            >
              Home
            </a>
            <a
              href="/my-project  "
              className=" text-xl text-black text-center block hover:text-red-600  font-medium py-2"
            >
              My-Projects
            </a>
            <a
              href="/my-skills  "
              className=" text-xl text-black text-center block hover:text-red-600   font-medium py-2"
            >
              My Skills
            </a>
            <a
              href="/contact-me  "
              className=" text-xl text-black text-center block hover:text-red-600   font-medium py-2"
            >
              Contact Me
            </a>
            <a
               href="/PDF/NUPUR KALRA.pdf"
                  download="Nupur_Kalra_Resume.pdf"
              className=" text-xl text-black text-center block hover:text-red-600   font-medium py-2"
            >
              Download CV
            </a>

           
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
