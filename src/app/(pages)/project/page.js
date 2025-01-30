import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiRedux,
  SiVercel,
  SiBootstrap,
} from "react-icons/si";
// const projects = [
//   {
//     id: 1,
//     name: "Doc Master",
//     description:
//       "It is a Pre made Document generator Website which provides you Document Templates for the User to make creating documentation easy.",
//     contribution: "Created New UI/UX Interface",
//     skills: [
//       { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
//       { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
//       {
//         name: "JavaScript",
//         icon: <FaJs className="text-yellow-500 text-3xl" />,
//       },
//       {
//         name: "Express",
//         icon: <SiExpress className="text-gray-500 text-3xl" />,
//       },
//       {
//         name: "Tailwind",
//         icon: <SiTailwindcss className="text-teal-500 text-3xl" />,
//       },
//       {
//         name: "Next.js",
//         icon: <SiNextdotjs className="text-black text-3xl" />,
//       },
//       {
//         name: "Node.js",
//         icon: <FaNodeJs className="text-green-500 text-3xl" />,
//       },
//       {
//         name: "MongoDB",
//         icon: <SiMongodb className="text-green-600 text-3xl" />,
//       },
//       { name: "Redux", icon: <SiRedux className="text-purple-600 text-3xl" /> },
//       { name: "Vercel", icon: <SiVercel className="text-black text-3xl" /> },
//     ],
//     githubLink: "",
//     liveLink: "",
//     backgroundImage: "images/projects/Project1.png",
//   },
//   // Add more projects here...
// ];
const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 text-3xl" /> },
  { name: "Express", icon: <SiExpress className="text-gray-500 text-3xl" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-teal-500 text-3xl" />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-indigo-500 text-3xl" />,
  },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-3xl" /> },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 text-3xl" />,
  },
  // { name: "Redux", icon: <SiRedux className="text-purple-600 text-3xl" /> },
  { name: "Vercel", icon: <SiVercel className="text-black text-3xl" /> },
];

function page() {
  return (
    <section
      className="w-full py-16 bg-gradient-to-r from-pink-300 via-white to-rose-300"
      id="Project"
    >
      <div className="text-7xl text-main-red font-semibold text-center">
        MY PROJECTS
      </div>
      <div className=" text-2xl text-pink-500 text-center  mb-16 ">
        A Journey Through My Digital Creations
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-8 lg:px-16">
        {/* 01 Project */}
        <div className="relative group rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg">
          <img
            src="./images/projects/project1.png"
            alt="Project image"
            className="w-full h-64 md:h-80 object-cover transition-opacity duration-700"
          />
          <div
            className="topGrid absolute inset-0 backdrop-blur-[6px] border-2 rounded-2xl border-main-red text-black 
                       transform -translate-x-full transition-transform duration-300 delay-400 group-hover:translate-x-0 
                       flex flex-col justify-center items-center p-6"
          >
            <div className="grid grid-cols-7 gap-4 mb-6 pt-10">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center transform hover:scale-125 transition duration-300"
                >
                  {tech.icon}
                  
                </div>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold py-4 text-main-red transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100">
              Name: Docmaster.in
            </h1>
            <p className="text-sm md:text-base text-justify transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100">
              About Project: Website Monitoring: Maintained the high user
              experience level when analyzing and update the design and
              functionality flaws. UI/UX Design: Formed easy and clear designs
              for Docmaster.in using Figma. Web Development: Developed and
              designed comprehensive webpages for Docmaster.in with HTML, CSS,
              React.js and Node.js.
            </p>
          </div>
          <p
            className="absolute rounded-br-full text-main-red font-bold text-5xl md:text-8xl opacity-0 transition-opacity duration-700 delay-200 group-hover:opacity-100 
    top-0 left-0 bg-white pb-5 pe-8 ps-2 shadow-lg"
          >
            01
          </p>
        </div>

        {/* 02 Project */}
        <div className="relative group rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg">
          <img
            src="./images/projects/techsetGo.png"
            alt="Project image"
            className="w-full h-64 md:h-80 object-cover transition-opacity duration-700"
          />
          <div
            className="topGrid absolute inset-0 backdrop-blur-[6px] border-2 rounded-2xl border-main-red text-black 
                       transform -translate-x-full transition-transform duration-300 delay-400 group-hover:translate-x-0 
                       flex flex-col justify-center items-center p-6"
          >
            <div className="grid grid-cols-7 gap-4 mb-6 pt-10">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center transform hover:scale-125 transition duration-300"
                >
                  {tech.icon}
                </div>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold py-4 text-main-red transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100">
              Name: Tech Set Go
            </h1>
            <p className="text-sm md:text-base text-justify transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100">
              Tech Set Go is a dynamic platform dedicated to helping aspiring
              developers and tech professionals thrive in the fast-paced digital
              world. Through expert-led training, personalized mentorship, and
              hands-on development services, Tech Set Go bridges the gap between
              education and industry.
            </p>
          </div>
          <p
            className="absolute rounded-br-full text-main-red font-bold text-5xl md:text-8xl opacity-0 transition-opacity duration-700 delay-200 group-hover:opacity-100 
    top-0 left-0 bg-white pb-5 pe-8 ps-2 shadow-lg"
          >
            02
          </p>
        </div>
        {/* 03 Project */}
        <div className="relative group rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg">
          <img
            src="./images/projects/PasswordManager.png"
            alt="Project image"
            className="w-full h-64 md:h-80 object-cover transition-opacity duration-700"
          />
          <div
            className="topGrid absolute inset-0 backdrop-blur-[6px] border-2 rounded-2xl border-main-red text-black 
                       transform -translate-x-full transition-transform duration-300 delay-400 group-hover:translate-x-0 
                       flex flex-col justify-center items-center p-6"
          >
            <div className="grid grid-cols-7 gap-4 mb-6 pt-10">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center transform hover:scale-125 transition duration-300"
                >
                  {tech.icon}
                </div>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold py-4 text-main-red transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100">
              Name: Password Manager
            </h1>
            <p className="text-sm md:text-base text-justify transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100">
              About Project: Password Manager wa a project made to save password
              in one place to proctice my full stack.
            </p>
          </div>
          <p
            className="absolute rounded-br-full text-main-red font-bold text-5xl md:text-8xl opacity-0 transition-opacity duration-700 delay-200 group-hover:opacity-100 
    top-0 left-0 bg-white pb-5 pe-8 ps-2 shadow-lg"
          >
            03
          </p>
        </div>
        {/* 04 Project */}
        <div className="relative group rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg">
          <img
            src="./images/projects/coffeeshop.png"
            alt="Project image"
            className="w-full h-64 md:h-80 object-cover transition-opacity duration-700"
          />
          <div
            className="topGrid absolute inset-0 backdrop-blur-[6px] border-2 rounded-2xl border-main-red text-black 
                       transform -translate-x-full transition-transform duration-300 delay-400 group-hover:translate-x-0 
                       flex flex-col justify-center items-center p-6"
          >
            <div className="grid grid-cols-7 gap-4 mb-6 pt-10">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center transform hover:scale-125 transition duration-300"
                >
                  {tech.icon}
                </div>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold py-4 text-main-red transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100">
              Name: Coffee Moment
            </h1>
            <p className="text-sm md:text-base text-justify transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100">
              About Project: Coffee moment was a coffeeshop website with add to
              card and payment process option. It was a pratice Project.
            </p>
          </div>
          <p
            className="absolute rounded-br-full text-main-red font-bold text-5xl md:text-8xl opacity-0 transition-opacity duration-700 delay-200 group-hover:opacity-100 
    top-0 left-0 bg-white pb-5 pe-8 ps-2 shadow-lg"
          >
            04
          </p>
        </div>
        {/* 05 Project */}
        <div className="relative group rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg">
          <img
            src="./images/projects/passwordGen.png"
            alt="Project image"
            className="w-full h-64 md:h-80 object-cover transition-opacity duration-700"
          />
          <div
            className="topGrid absolute inset-0 backdrop-blur-[6px] border-2 rounded-2xl border-main-red text-black 
                       transform -translate-x-full transition-transform duration-300 delay-400 group-hover:translate-x-0 
                       flex flex-col justify-center items-center p-6"
          >
            <div className="grid grid-cols-7 gap-4 mb-6 pt-10">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center transform hover:scale-125 transition duration-300"
                >
                  {tech.icon}
                </div>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold py-4 text-main-red transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100">
              Name: Password Genrator
            </h1>
            <p className="text-sm md:text-base text-justify transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100 text-white">
              About Project: Website which genrate Passwords acording to your
              needs. you can set uppercase, Lowercase, Special caracter, and
              length of password and can also copy it. using HTML, CSS, Js
            </p>
          </div>
          <p
            className="absolute rounded-br-full text-main-red font-bold text-5xl md:text-8xl opacity-0 transition-opacity duration-700 delay-200 group-hover:opacity-100 
    top-0 left-0 bg-white pb-5 pe-8 ps-2 shadow-lg"
          >
            05
          </p>
        </div>
        {/* 06 Project */}
        <div className="relative group rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg">
          <img
            src="./images/projects/razorpay.png"
            alt="Project image"
            className="w-full h-64 md:h-80 object-cover transition-opacity duration-700"
          />
          <div
            className="topGrid absolute inset-0 backdrop-blur-[6px] border-2 rounded-2xl border-main-red text-black 
                       transform -translate-x-full transition-transform duration-300 delay-400 group-hover:translate-x-0 
                       flex flex-col justify-center items-center p-6"
          >
            <div className="grid grid-cols-7 gap-4 mb-6 pt-10">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center transform hover:scale-125 transition duration-300"
                >
                  {tech.icon}
                </div>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold py-4 text-main-red transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100">
              Name: Clone on Razorpay website
            </h1>
            <p className="text-sm md:text-base text-justify transition-opacity duration-700 delay-200 opacity-0 group-hover:opacity-100 text-white">
              About Project: Copy of html css design of Razorpay offical website
            </p>
          </div>
          <p
            className="absolute rounded-br-full text-main-red font-bold text-5xl md:text-8xl opacity-0 transition-opacity duration-700 delay-200 group-hover:opacity-100 
    top-0 left-0 bg-white pb-5 pe-8 ps-2 shadow-lg"
          >
            06
          </p>
        </div>
      </div>
    </section>
  );
}

export default page;
