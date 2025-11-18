import './Projects.css'
import { FaGithub, FaGlobe, FaRocket } from 'react-icons/fa'
import ProjectImage from './ProjectImage';
import img1 from "../../images/salama.png"
import img2 from "../../images/02.png"
import img3 from "../../images/03.png"
import ProjectFilter from './ProjectFilter';
import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";


const projectList = [
    {
        title: "Landing Page for Engineering Services",
        description:
            "A modern and responsive landing page showcasing Salama Engineering Services' offerings in heavy machinery and construction equipment, designed to provide a smooth and user-friendly browsing experience.",
        images: [
            img1,
        ],
        github: "https://github.com/a7medsobih/project",
        live: "https://vercel.app/project",
        category: ["HTML & CSS", "JavaScript"]
    },
    {
        title: "Another Project",
        description: "Description for another project.",
        images: ["/images/another.png"],
        github: "#",
        live: "#",
        category: ["React"]
    },
    {
        title: "Another Project",
        description: "Description for another project.",
        images: ["/images/another.png"],
        github: "#",
        live: "#",
        category: ["React"]
    },
];
const Projects = () => {
    const [projectPreview, setProjectPreview] = useState(projectList);

    return (
        <main id='projects' className="lg:section flex flex-col lg:flex-row gap-2 lg:gap-6 py-16 items-center lg:items-start">
            {/* Filter Buttons */}
            <ProjectFilter
                setProjectPreview={setProjectPreview}
                projectList={projectList}
            />

            {/* Cards */}
            <div className="px-4 md:px-5 lg:px-0 grow grid sm:grid-cols-2 xl:grid-cols-3 gap-5  ">
                <AnimatePresence mode="layout">
                    {projectPreview.map((project, i) => (
                        <motion.div className="card" key={i}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            whileHover={{ scale: 1.01, borderColor: "#5dbcfc" }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectImage
                                images={project.images}
                                altText={project.title}
                            />

                            <div className="flex flex-col flex-grow gap-3 py-3 px-2">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed ">
                                    {project.description}
                                </p>
                            </div>

                            <div className=" flex items-center justify-between p-3">
                                {/* icons */}
                                <div className="flex items-center gap-4 text-slate-400">
                                    <a
                                        href={project.github} target="_blank" title="GitHub Repo"
                                        data-tooltip="GitHub Repo"
                                        className="icon-tooltip">
                                        <FaGithub size={28} />
                                    </a>

                                    <a
                                        href={project.live} target="_blank" title="Live Demo"
                                        data-tooltip="Live Demo"
                                        className="icon-tooltip ">
                                        <FaRocket size={28} />
                                    </a>
                                </div>

                                {/* optional button */}
                                <a
                                    href={project.live} target="_blank" title="Official Website"
                                    data-tooltip="Official Website"
                                    className="icon-tooltip ">
                                    <FaGlobe size={28} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </main >
    )
}

export default Projects