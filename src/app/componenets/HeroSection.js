"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI/UX Designer",
        "Backend Developer",
        "Frontend Specialist",
        "Problem Solver",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      showCursor: false,
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto py-16 px-40">
      {/* HERO SECTION */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-24 mb-32">
        {/* Faded Text */}
        <div className="absolute text-gray-200 text-[20em] font-medium select-none bottom-[-46%]  left-[-10%] tracking-tightest transition-all duration-300">
          NK
        </div>

        {/* Left Section */}
        <div className="flex flex-col gap-5 w-3/5">
          <div className="text-5xl font-medium text-gray-800">
            Hello, I’m{" "}
            <span className="text-rose-500 text-6xl tracking-tighter font-semibold">
              NUPUR KALRA
            </span>
          </div>

          <div
            className="text-5xl text-indigo-700 uppercase "
            ref={typedRef}
            style={{ minHeight: "1.5em" }}
          ></div>

          <div className="mt-4 w-[80%] text-justify font-medium text-xl">
            Welcome to my professional portfolio! Here, you can explore my
            journey as a software developer, discover the skills I bring to the
            table, and see the projects I’ve worked on. Feel free to reach out
            and connect!
          </div>

          <button
            id="btn"
            className="relative z-10 bg-rose-500 text-white text-lg font-medium px-8 py-3 my-5 rounded-full shadow-lg overflow-hidden group hover:text-black transition-all duration-500 w-1/4"
          >
            <span className="absolute inset-0 bg-white scale-x-0 transition-transform duration-500 group-hover:scale-x-100 z-[-1] rounded-full"></span>
            Hire Me
          </button>
        </div>

        {/* Right Section */}
        <div className="relative w-2/5 ">
          {/* Floating Icons */}
          <img
            src="./images/userAsset/dots.png"
            alt="dots"
            className="absolute bottom-[-1rem] right-0 animate-bounce"
          />
          <img
            src="./images/userAsset/cube.png"
            alt="cube"
            className="absolute top-[-0.8rem] right-4 animate-spin-slow"
          />
          <img
            src="./images/userAsset/circle.png"
            alt="circle"
            className="absolute bottom-0 left-0 animate-pulse"
          />
          <img
            src="./images/userAsset/zigzags.png"
            alt="zigzag"
            className="absolute top-6 left-[-0.5rem] animate-wiggle"
          />
          <img
            src="./images/userAsset/plus.png"
            alt="plus"
            className="absolute top-[-0.8rem] left-[50%] animate-shake"
          />

          {/* Background Image */}
          <img
            src="./images/userAsset/Programming.gif"
            alt="Programming"
            className="  transition-all duranion-1000 mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
