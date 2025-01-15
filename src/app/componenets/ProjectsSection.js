import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiRedux,
  SiVercel,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "Doc Master",
    description:
      "It is a Pre made Document generator Website which provides you Document Templates for the User to make creating documentation easy.",
    contribution: "Created New UI/UX Interface",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-500 text-3xl" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-500 text-3xl" />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-teal-500 text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black text-3xl" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-3xl" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600 text-3xl" />,
      },
      { name: "Redux", icon: <SiRedux className="text-purple-600 text-3xl" /> },
      { name: "Vercel", icon: <SiVercel className="text-black text-3xl" /> },
    ],
    githubLink: "",
    liveLink: "",
    backgroundImage: "images/projects/Project1.png",
  },
  // Add more projects here...
];

const ProjectsSection = () => {
  return (
    <section className=" w-full bg-rose-200 py-16 " id="Project">
      <h2 className="text-center text-6xl font-medium mb-16">MY PROJECTS</h2>

      <div className="project-container flex flex-col gap-28 max-w-7xl mx-auto border-main-red border-5">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card w-full h-[550px] relative shadow-2xl overflow-hidden p-2`}
            style={{
              backgroundImage: `url(${project.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-pink-300 to-blue-800  hover:opacity-50 transition-transform duration-300 z-10 opacity-10`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

            <div
              className={`project-number text-[200px] font-bold text-white opacity-0 ${
                index % 2 === 0
                  ? "right-[-40px] top-[-45px]"
                  : "left-[-40px] top-[-45px]"
              } hover:opacity-100 transition-opacity duration-300 z-10`}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <div
              className={`project-content flex flex-col gap-4 text-white absolute ${
                index % 2 === 0 ? "left-10" : "right-10"
              } bottom-20 p-8 z-20`}
            >
              <div className="project-skills-container flex gap-4 flex-wrap">
                {project.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    title={skill.name}
                    className=" h-10 flex items-center justify-center"
                  >
                    {skill.icon}
                  </div>
                ))}
              </div>

              <h2 className="project-heading text-4xl font-bold">
                {project.name}
              </h2>

              <p className="project-sub-heading text-base italic">
                {project.description}
              </p>

              {project.contribution && (
                <p className="My_Contribution text-black">
                  <span className="My_Contribution_Span font-bold text-red-600">
                    My Contribution:
                  </span>{" "}
                  {project.contribution}
                </p>
              )}

              <div className="btn-grp flex items-center gap-4">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <i
                      title="GitHub Link"
                      className="fa-brands fa-github icon text-2xl text-white hover:text-gray-300 transition"
                    ></i>
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <i
                      title="Live Link"
                      className="fa-solid fa-link icon text-2xl text-white hover:text-gray-300 transition"
                    ></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
