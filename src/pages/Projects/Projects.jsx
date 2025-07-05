import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl text-primary md:text-5xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          My Projects
        </h2>

        <div className="space-y-16 hover:cursor-pointer">
          {projects.map((proj, i) => (
            <div
              key={proj.id}
              className="flex flex-col lg:flex-row bg-white dark:bg-base-200 rounded-xl shadow-lg overflow-hidden transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-[300px] md:h-[400px] lg:h-full object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-semibold mb-4">{proj.name}</h3>
                  <p className=" mb-4 text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Link
                    to={`/projectDetails/${proj.id}`}
                    className="btn btn-primary btn-sm gap-2 flex-1"
                  >
                    <FaInfoCircle /> Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
