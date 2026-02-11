// skills section
import { motion } from "framer-motion";
import { skillsData } from '../../data/skillsData'
import './skills-style.css'
import ScrollAnimation from "../../components/ScrollAnimation";

const Skills = () => {
    return (
        <section id="skills" className="bg-primary section overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 "
            >
                <h2 className="section-title">
                    My <span className="text-highlight">Skills</span>
                </h2>
                <p className="text-subtitle text-md w-[90%] mx-auto mt-4">
                    Technologies and tools I work with on a daily basis
                </p>
            </motion.div>

            <ScrollAnimation direction="up" duration={0.5} delay={0.3}>
                <div className="skills-marquee">
                    <div className="skills-track">
                        {[...skillsData, ...skillsData].map((skill, index) => (
                            <div key={index} className="skill-card glass-card shadow-md  ">
                                <skill.icon
                                    className="w-10 h-10 "
                                    style={{ color: skill.color }}
                                />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    )
}

export default Skills