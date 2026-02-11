// src/sections/3-Projects/Projects.jsx
import './Projects.css'
import ProjectFilter from './ProjectFilter';
import { useState } from 'react';
import { AnimatePresence } from "motion/react";
import { projectsList } from '../../data/projectsData';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';
import ScrollAnimation from '../../components/ScrollAnimation';
import { Link } from 'react-router-dom';

const MAX_HOME_PROJECTS = 9;
const Projects = () => {
    const [projectPreview, setProjectPreview] = useState(projectsList);
    const displayedProjects = projectPreview.slice(0, MAX_HOME_PROJECTS);

    return (
        <main id='projects' className="bg-primary-dark section ">
            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 "
                >
                    <h2 className="section-title">
                        Featured <span className="text-highlight">Projects</span>
                    </h2>
                    <p className="text-subtitle text-md w-[90%] mx-auto mt-4">
                        A collection of my recent work showcasing my skills and creativity
                    </p>
                </motion.div>


                {/* Filter Buttons */}
                <ScrollAnimation direction="up" duration={0.3} delay={0.2}>
                    <ProjectFilter
                        className="justify-center"
                        setProjectPreview={setProjectPreview}
                        projectList={projectsList}
                    />
                </ScrollAnimation>

                {/* Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={projectPreview.length} // بيتغير عند الفلترة
                        className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        {displayedProjects.map((project) => (
                            <ScrollAnimation key={project.id} direction="up" duration={0.3} delay={0.2}>
                                <ProjectCard project={project} />
                            </ScrollAnimation>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* View All Button */}
                <ScrollAnimation direction="up" duration={0.3} delay={0.2}>
                    <div className="mt-8 w-fit mx-auto">
                        <Link
                            to="/projects"
                            className="btn btn-secondary font-semibold px-8 py-3 flex items-center gap-2 group "
                        >
                            View All Projects
                            <FaArrowRight className="arrow-icon" />
                        </Link>
                    </div>
                </ScrollAnimation>
            </div>
        </main >
    )
}

export default Projects