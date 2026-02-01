import { useEffect, useState } from "react"
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"

const ThemeSwithBtn = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("currentMode") || "dark";
    });

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
        }
        localStorage.setItem("currentMode", theme);
    }, [theme]);

    return (
        <button disabled
            className='circle'
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
            }}
        >
            {theme === "dark" ? (
                <IoSunnyOutline size={25} />
            ) : (
                <IoMoonOutline size={25} />
            )}
        </button>
    )
}

export default ThemeSwithBtn