// src/sections/3-Projects/ProjectCard.jsx
import { FaGithub, FaGlobe, FaRocket } from "react-icons/fa"
import ProjectImage from "./ProjectImage"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({ project }) => {

    return (
        <div className="card  glass-card">
            <div className="flex flex-wrap gap-2 absolute top-2 right-2 z-10">
                {project.tags?.map((tag, idx) => (
                    <span key={idx} className={`project-tag ${tag.toLowerCase()}`}>
                        {tag}
                    </span>
                ))}
            </div>

            <ProjectImage
                images={project.images}
                altText={project.title}
            />
            <div className="p-3 flex flex-col gap-4 justify-between flex-grow ">

                <div className="flex flex-col flex-grow gap-2 ">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-400 leading-tight">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2  ">
                    {project.skills?.map((skill, idx) => (
                        <span key={idx} className={`skill-tag`}>
                            {skill}
                        </span>
                    ))}
                </div>

                <div className=" flex justify-center w-full gap-4 mt-2">
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary gap-3"
                    >
                        <FaArrowUpRightFromSquare size={16} />
                        View
                    </a>

                    <a
                        href={project.github}
                        title="GitHub Repo"
                        data-tooltip="GitHub Repo"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary gap-3 "
                    >
                        <FaGithub size={24} />
                        GitHub
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard