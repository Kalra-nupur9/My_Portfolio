

"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Navbar from "./componenets/Navbar";


export default function Home() {
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
   <> 
   {/* <div className="bg_color ">
   
   
   </div>
    
    <ProjectsSection/>
    <div className="gradient">
    <Skills />
    </div> */}

    <div className=" bg-gradient-to-r from-pink-300 via-white to-rose-300">
   

         {/* HERO SECTION */}
         <div className="relative  ">
           {/* Faded Text */}
           {/* <div className="absolute visible lg:visible md:visible sm:invisible  text-gray-200 text-[20em] font-medium select-none bottom-[-18%]  left-[5%] tracking-tightest transition-all duration-300">
             NK
           </div> */}
           <div className="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
             <div className="mr-auto place-self-center lg:col-span-7">
               <h1 className="max-w-3xl mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                 Hello, I’m{" "}
                 <span className="text-rose-500 text-6xl tracking-tighter font-semibold">
                   NUPUR KALRA
                 </span>
               </h1>
               <div
                 className="text-5xl text-indigo-700 uppercase  "
                 ref={typedRef}
                 style={{ minHeight: "1.5em" }}
               ></div>
               <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                 Welcome to my professional portfolio! Here, you can explore my
                 journey as a software developer, discover the skills I bring to
                 the table, and see the projects I’ve worked on. Feel free to
                 reach out and connect!
               </p>
               <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                 <a
                   href="/PDF/NUPUR KALRA.pdf"
                   download="Nupur_Kalra_Resume.pdf"
                   className="relative z-10 bg-rose-500 text-white text-lg font-medium px-5 py-3 my-5 rounded-full shadow-lg overflow-hidden group hover:text-black transition-all duration-500 lg:w-auto md:w-auto sm:w-full w-full text-center"
                 >
                   <span className="absolute inset-0 bg-white scale-x-0 transition-transform duration-500 group-hover:scale-x-100 z-[-1] rounded-full"></span>
                   Download CV
                 </a>
                 
               </div>
             </div>
             <div className="hidden relative lg:mt-0 lg:col-span-5 lg:flex">
               {/* Floating Icons */}
               <img
                 src="./images/userAsset/dots.png"
                 alt="dots"
                 className="absolute bottom-[-1rem] right-0 animate-bounce"
               />
               <img
                 src="./images/userAsset/cube.png"
                 alt="cube"
                 className="absolute top-[-0.8rem] right-4 animate-bounce"
               />
               <img
                 src="./images/userAsset/circle.png"
                 alt="circle"
                 className="absolute bottom-0 left-0  animate-ping"
               />
               <img
                 src="./images/userAsset/zigzags.png"
                 alt="zigzag"
                 className="absolute top-6 left-[-0.5rem] animate-pulse"
               />
               <img
                 src="./images/userAsset/plus.png"
                 alt="plus"
                 className="absolute top-[-0.8rem] left-[50%] animate-spin"
               />
 
               {/* Background Image */}
               <img
                 src="./images/userAsset/Programming.gif"
                 alt="Programming"
                 className="  transition-all duranion-1000 mix-blend-multiply w-full"
               />
             </div>
           </div>
         </div>
       </div>
    
    
   </>
  );
}
