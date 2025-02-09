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


function page() {
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
     {
       name: "Bootstrap",
       icon: <SiBootstrap className="text-indigo-500 text-6xl" />,
     },
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
      <div className="bg-gradient-to-r from-pink-300 via-white to-rose-300 p-5">
      <div
        className="grid max-w-screen-xl mx-auto gap-8 lg:gap-5 lg:py-5 lg:grid-cols-12 box-content"
        id="skills"
      >
        {/* Left Section */}
        <div className="place-self-center lg:col-span-7">
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl text-main-red font-semibold text-start">
              MY TECH STACK
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-pink-500 text-start">
              AND ME
            </h3>
            <div className="mt-3 text-justify text-base sm:text-lg">
              <p className="mb-4">
                I am a passionate and self-motivated software developer with 6
                months of hands-on experience in building and deploying
                websites. I’ve worked as a freelancer, honing my skills in
                full-stack web development, and have successfully delivered
                projects tailored to meet client needs. My journey in web
                development is driven by a strong commitment to creating
                intuitive and impactful user experiences.
              </p>
              <p className="mb-4">
                My tech stack includes HTML, CSS, JavaScript, React, Next.js,
                Node.js, MongoDB, and Redux, with version control expertise in
                Git and GitHub. I’ve developed e-commerce platforms, dynamic
                portfolios, and other responsive projects that emphasize
                scalability and user-focused design.
              </p>
              <p className="mb-4">
                I’ve also completed practice projects like a task manager with
                React, a blog platform with Next.js, and RESTful APIs using
                Node.js and Express, further enhancing my technical proficiency,
                debugging, and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-9">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center transform hover:scale-125 transition duration-300 h-full"
              >
                {tech.icon}
                <p className="text-sm sm:text-base md:text-lg font-medium">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
       
     </>
   );
}

export default page