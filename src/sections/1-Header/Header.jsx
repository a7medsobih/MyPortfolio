import { useState } from 'react'
import './Header.css'
import { GrClose } from 'react-icons/gr';
import { FiMenu } from 'react-icons/fi';
import ThemeSwithBtn from './ThemeSwithBtn';
import ScrollAnimation from '../../components/ScrollAnimation';
import NavLinks from './NavLinks';

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
        <header className='container section ele-center justify-between relative pt-8 md:pb-0 pb-8'>
            {/* ✅ Mobile menu */}
            <button
                className='circle glass-card  block md:hidden'
                onClick={() => setshowModal(true)}
            >
                <FiMenu size={26} />
            </button>
            <div />
            {/* ✅ Desktop navigation */}
            <ScrollAnimation direction="down" duration={0.4} delay={0.1}>
                <nav className='glass-card py-3  px-9 rounded-3xl shadow-md hidden md:block'>
                    <ul className="flex gap-7 ">
                        <NavLinks />
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
                        <li className="text-right">
                            <button
                                onClick={handelCloseModal}
                                className='text-subtitle hover:text-red-700 hover:scale-125 hover:rotate-90 smooth-transition'
                            >
                                <GrClose />
                            </button>
                        </li>
                        {/* ✅ Mobile navigation links */}
                        <NavLinks onClickLink={handelCloseModal} />
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header