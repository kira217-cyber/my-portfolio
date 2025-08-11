import React from "react";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiDaisyui,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-600 text-4xl" />,
    category: "Frontend",
    description: "Semantic structure, accessibility, responsive markup.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500 text-4xl" />,
    category: "Frontend",
    description: "Dynamic functionality, ES6+, and DOM manipulation.",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-500 text-4xl" />,
    category: "Frontend",
    description: "Component-based UI, hooks, router, and SPA structure.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
    category: "Frontend",
    description: "Utility-first styling with fast responsive design.",
  },
  {
    name: "DaisyUI",
    icon: <SiDaisyui className="text-purple-500 text-4xl" />,
    category: "Frontend",
    description: "Prebuilt styled components with theme support.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 text-4xl" />,
    category: "Backend",
    description: "NoSQL database for flexible data storage.",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 text-4xl" />,
    category: "Backend",
    description: "Backend framework for RESTful APIs and routing.",
  },
  {
    name: "Firebase Auth",
    icon: <SiFirebase className="text-orange-400 text-4xl" />,
    category: "Tool",
    description: "Authentication system for user login and registration.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-700 text-4xl" />,
    category: "Backend",
    description:
      "JavaScript runtime for building fast, scalable server-side apps.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-10 lg:px-20 ">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-primary mb-12"
          data-aos="fade-up"
        >
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 dark:bg-base-200">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="hover:cursor-pointer dark:bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </p>
                </div>
              </div>
              <p className="text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
