import { useEffect, useRef, useState } from "react";

const categorys = ["All Project", "Next.js", "React.js", "Tailwind CSS", "Bootstrap", "JavaScript", "jQuery"];

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
        <div className="filter" ref={filterRef}>
            {categorys.map((category, i) => (
                <button
                    key={i}
                    onClick={() => {
                        setCurrentActive(category);
                        handelFilter(category);
                    }}
                    className={currentActive == category ? "active" : ""}
                >
                    {category}
                </button>
            ))
            }
        </div >
    )
}

export default ProjectFilter