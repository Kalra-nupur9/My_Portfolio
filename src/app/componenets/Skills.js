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

    <div className="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-5 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
    <div className=" ">
          <h2 className="text-6xl font-bold text-indigo-700 leading-tight">
            <span className="text-8xl">M</span>e and
            <br />
            My Tech Stack
          </h2>
          <div className="mt-1 text-justify z-10 text-lg">
            <p className="mb-4">
            lor
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
    </div>
    {/* Right Section */}
    <div className="relative lg:mt-0 lg:col-span-5 lg:flex ">
          
          <div className=" grid grid-cols-4 gap-10 ">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center  transform  hover:scale-125 transition duration-300 h-full  "
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
