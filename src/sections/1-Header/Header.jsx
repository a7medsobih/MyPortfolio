import { useState } from 'react'
import './Header.css'
import { GrClose } from 'react-icons/gr';
import { FiDownload, FiMenu } from 'react-icons/fi';
import ThemeSwithBtn from './ThemeSwithBtn';
import ScrollAnimation from '../../components/ScrollAnimation';

// ✅ Navigation links data
export const links = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact Us" },
    { href: "/AhmedSobih CV.pdf", text: "Download CV", download: true },
]

const Header = () => {
    const [showModal, setshowModal] = useState(false);

    const handelCloseModal = () => {
        const modal = document.querySelector(".modal");
        const overlay = document.querySelector(".overlay");

        modal.classList.add("closing");
        overlay.classList.add("closing");

        setTimeout(() => setshowModal(false), 400);
    }

    return (
        <header className='section ele-center justify-between relative py-8'>
            {/* ✅ Mobile menu */}
            <button
                className='circle block md:hidden'
                onClick={() => setshowModal(true)}
            >
                <FiMenu size={26} />
            </button>
            <div />
            {/* ✅ Desktop navigation */}
            <ScrollAnimation direction="down" duration={0.4} delay={0.1}>
                <nav className='bg-primary-light py-2 px-7 rounded-3xl shadow-md shadow-black/20 hidden md:block'>
                    <ul className="flex gap-7  ">
                        {links.map((link, index) => (
                            <li key={index} className=''>
                                <a
                                    href={link.href}
                                    {...(link.download ? { download: true } : {})}
                                    className="flex gap-2 text-sm font-normal text-subtitle hover:text-accent smooth-transition"
                                >
                                    {link.text}
                                    {link.download && <FiDownload size={20} />}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </ScrollAnimation>
            {/* ✅ Theme switch button */}
            <ThemeSwithBtn />

            {/* ✅ modal */}
            {showModal && (
                <div
                    className='overlay md:hidden'
                    onClick={handelCloseModal} // هنا بنقفل المودال لما المستخدم يضغط على الخلفية
                >
                    <ul
                        className='modal'
                        onClick={(e) => e.stopPropagation()} // دي بتمنع إغلاق المودال لما تضغط عليه نفسه
                    >
                        {/* ✅ Close button */}
                        <li className="text-right ">
                            <button
                                onClick={handelCloseModal}
                                className='text-subtitle hover:text-red-700 hover:scale-125 hover:rotate-90 smooth-transition'
                            >
                                <GrClose />
                            </button>
                        </li>
                        {/* ✅ Mobile navigation links */}
                        {links.map((link, index) => (
                            <li key={index} className='border-b border-borderColor last:border-none py-2 text-center'>
                                <a
                                    href={link.href}
                                    {...(link.download ? { download: true } : {})}
                                    className='flex gap-2 justify-center text-base text-slate-300 hover:text-accent smooth-transition'
                                >
                                    {link.text}
                                    {link.download && <FiDownload size={20} />}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header