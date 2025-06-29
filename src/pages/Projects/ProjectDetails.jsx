import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        setProject(found);
      })
      .catch((error) => console.error("Error loading project:", error));
  }, [id]);

  if (!project)
    return <div className="text-center p-10 text-xl">Loading project...</div>;

  return (
    <div className="min-h-screen py-10 px-4 md:px-10 bg-gradient-to-b hover:cursor-pointer">
      <div className="max-w-4xl mx-auto bg-white dark:bg-base-200 rounded-xl shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
          <p className="">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge badge-outline text-sm">
                {tech}
              </span>
            ))}
          </div>

          <div>
            <h2 className="font-semibold text-lg mt-4">Challenges Faced:</h2>
            <p className="">
              {project.challenges}
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mt-4">Future Improvements:</h2>
            <p className="">
              {project.futureImprovements}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2"
            >
              <FaExternalLinkAlt /> Live Site
            </a>
            <a
              href={project.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <Link to="/" className="btn btn-primary gap-2">
              <FaArrowLeft /> Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
