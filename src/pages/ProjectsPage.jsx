import { projectsList } from "../data/projectsData";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "../sections/3-Projects/ProjectCard";
import ProjectFilter from "../sections/3-Projects/ProjectFilter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import ScrollAnimation from "../components/ScrollAnimation";

const ProjectsPage = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const [projectPreview, setProjectPreview] = useState(projectsList);
    return (
        <main className="section">
            <div className='container'>
                <ScrollAnimation direction="right" duration={0.3} delay={0.2}>
                    {/* Back Link */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-4 text-subtitle hover:text-highlight smooth-transition mb-6"
                    >
                        <FiArrowLeft className="arrow-icon" />
                        Back to Home
                    </Link>

                    <h2 className="section-title">
                        All <span className="text-highlight">Projects</span>
                    </h2>

                    {/* Filter Buttons */}
                    <div className="mt-12 ">
                        <ProjectFilter
                            className="justify-start"
                            setProjectPreview={setProjectPreview}
                            projectList={projectsList}
                        />
                    </div>
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
                        {projectPreview.map((project) => (
                            <ScrollAnimation key={project.id} direction="up" duration={0.3} delay={0.2}>
                                <ProjectCard project={project} />
                            </ScrollAnimation>
                        ))}
                    </motion.div>
                </AnimatePresence>

            </div>
        </main >

    );
};

export default ProjectsPage;
