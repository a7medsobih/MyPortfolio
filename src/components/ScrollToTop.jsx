import { useEffect, useState } from "react"
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [])


    return (
        <button
            onClick={handleScrollTop}
            className={`hidden md:block fixed bottom-10 right-5 p-2 rounded-full bg-blue text-primary shadow-md shadow-black/80 hover:text-light smooth-transition z-50 
                    ${visible ? "opacity-80 hover:opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"}
                    `}
        >
            <IoIosArrowUp size={30} className="stroke-[10px]" />
        </button >
    )
}

export default ScrollToTop