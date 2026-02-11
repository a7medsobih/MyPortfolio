// Project Fillter
import { useRef, useState } from "react";

const categorys = ["All Project", "Next.js", "React.js", "Tailwind CSS", "Bootstrap", "JavaScript", "jQuery"];

const ProjectFilter = ({ setProjectPreview, projectList, className }) => {
    const filterRef = useRef(null);

    const [currentActive, setCurrentActive] = useState("All Project");
    const handelFilter = (category) => {
        if (category === "All Project") {
            setProjectPreview(projectList); // رجّع الكل
        } else {
            const projectFiltered = projectList.filter((item) =>
                item.category.includes(category)
            );
            setProjectPreview(projectFiltered);
        }
    }

    return (
        <div className={`filter ${className || ""}`} ref={filterRef}>
            {categorys.map((category, i) => (
                <button
                    key={i}
                    onClick={() => {
                        setCurrentActive(category);
                        handelFilter(category);
                    }}
                    className={`glass-card ${currentActive == category ? "active" : ""}`}
                >
                    {category}
                </button>
            ))
            }
        </div >
    )
}

export default ProjectFilter