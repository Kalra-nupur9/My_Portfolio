import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub
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

function Skills() {
  const techStack = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-6xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-6xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-6xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-6xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-500 text-6xl" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-teal-500 text-6xl" />,
    },
    { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500 text-6xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-6xl" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-6xl" />,
    },
    { name: "Redux", icon: <SiRedux className="text-purple-600 text-6xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-black text-6xl" /> },
  ];
  return (
    <>
      <div
        id="skills"
        className="relative flex flex-wrap md:flex-nowrap px-36 py-24 "
      >
        {/* Faded Background Text */}
        <div className="absolute text-[15em]  font-bold text-main-red  opacity-25 -bottom-[13.4%] -right-[-1%] select-none overflow-hidden">
          SKILLS
        </div>

        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-6xl font-bold text-indigo-700 leading-tight">
            <span className="text-8xl">M</span>e and
            <br />
            My Tech Stack
          </h2>
          <div className="mt-1 text-justify z-10 text-lg">
            <p className="mb-4">
              I am a passionate and self-motivated software developer with 6
              months of hands-on experience in building and deploying websites.
              I’ve worked as a freelancer, honing my skills in full-stack web
              development, and have successfully delivered projects tailored to
              meet client needs.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              dolore voluptas quisquam quas magni aliquam blanditiis excepturi.
              Vel minus est veritatis! Rem sunt numquam eos quisquam et,
              voluptatum nemo fuga!
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              dolore voluptas quisquam quas magni aliquam blanditiis excepturi.
              Vel minus est veritatis! Rem sunt numquam eos quisquam et,
              voluptatum nemo fuga!
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-wrap w-full md:w-1/2 gap-8 justify-center">
          {/* Background Blob */}
          <img
            src="images/userAsset/blob vector.png"
            alt="blob"
            className="absolute -z-10 animate-pulse w-96"
          />
          <div className=" grid grid-cols-4 gap-10 ">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center animate-bounce  "
              >
                {tech.icon}
                <p className="text-lg font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
