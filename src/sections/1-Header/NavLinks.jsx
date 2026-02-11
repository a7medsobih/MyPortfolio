import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

// ✅ Navigation links data
export const links = [
    { type: "section", id: "about", text: "About" },
    { type: "page", to: "/projects", text: "Projects" },
    { type: "section", id: "skills", text: "Skills" },
    { type: "section", id: "contact", text: "Contact Us" },
    { type: "file", href: "/AhmedSobih CV.pdf", text: "Download CV", download: true },
];

const NavLinks = ({ onClickLink }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSectionClick = (id) => {
        if (location.pathname !== "/") {
            navigate(`/#${id}`);
        } else {
            const el = document.getElementById(id);
            el?.scrollIntoView({ behavior: "smooth" });
        }
        if (onClickLink) onClickLink(); // لو فيه callback نغلق المودال
    };

    return (
        <ul className="flex flex-col md:flex-row gap-7">
            {links.map((link, index) => (
                <li key={index} className="text-sm">
                    {link.type === "page" && (
                        <Link
                            to={link.to}
                            onClick={onClickLink}
                            className={`hover:text-accent smooth-transition ${location.pathname === link.to
                                ? "text-accent font-semibold"
                                : "text-subtitle"
                                }`}
                        >
                            {link.text}
                        </Link>
                    )}

                    {link.type === "section" && (
                        <button
                            onClick={() => handleSectionClick(link.id)}
                            className="text-subtitle hover:text-accent smooth-transition"
                        >
                            {link.text}
                        </button>
                    )}

                    {link.type === "file" && (
                        <a
                            href={link.href}
                            download
                            className="flex gap-2  text-subtitle hover:text-accent smooth-transition"
                        >
                            {link.text}
                            <FiDownload size={20} />
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
