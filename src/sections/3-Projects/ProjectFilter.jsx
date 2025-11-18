import { useEffect, useRef, useState } from "react";

const skills = ["All Project", "React", "Tailwind CSS", "Bootstrap", "HTML & CSS", "JS Projects"];

const ProjectFilter = ({ setProjectPreview, projectList }) => {
    const filterRef = useRef(null);
    useEffect(() => {
        const handelScroll = () => {
            const el = filterRef.current;
            if (!el) return;

            if (el.getBoundingClientRect().top <= 0) {
                el.classList.add("stuck");
            } else {
                el.classList.remove("stuck");
            }
        }

        window.addEventListener("scroll", handelScroll);
        return () => window.removeEventListener("scroll", handelScroll);
    }, []);

    const [currentActive, setCurrentActive] = useState("All Project");
    const handelFilter = (skill) => {
        if (skill === "All Project") {
            setProjectPreview(projectList); // رجّع الكل
        } else {
            const projectFiltered = projectList.filter((item) =>
                item.category.includes(skill)
            );
            setProjectPreview(projectFiltered);
        }
    }

    return (
        <div className="filter" ref={filterRef}>
            {skills.map((skill, i) => (
                <button
                    key={i}
                    onClick={() => {
                        setCurrentActive(skill);
                        handelFilter(skill);
                    }}
                    className={currentActive == skill ? "active" : ""}
                >
                    {skill}
                </button>
            ))
            }
        </div >
    )
}

export default ProjectFilter