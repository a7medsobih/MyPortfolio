// src/sections/3-Projects/Projects.jsx
import './Projects.css'
import ProjectFilter from './ProjectFilter';
import { useState } from 'react';
import { AnimatePresence } from "motion/react";
import { projectsList } from '../../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projectPreview, setProjectPreview] = useState(projectsList);

    return (
        <main id='projects' className="lg:section flex flex-col lg:flex-row gap-2 lg:gap-6 py-16 items-center lg:items-start">
            {/* Filter Buttons */}
            <ProjectFilter
                setProjectPreview={setProjectPreview}
                projectList={projectsList}
            />

            {/* Cards */}
            <div className="px-4 md:px-5 lg:px-0 grow grid sm:grid-cols-2 xl:grid-cols-3 gap-5  ">
                <AnimatePresence mode="layout">
                    {projectPreview.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </AnimatePresence>
            </div>
        </main >
    )
}

export default Projects