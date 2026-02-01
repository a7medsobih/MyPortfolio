import { links } from '../1-Header/Header'
import myLogo from '../../images/logo.png'

const Footer = () => {
    return (
        <footer className='py-5 section'>
            <div className='flex flex-col items-center md:flex-row md:justify-between gap-2'>
                <ul className="flex gap-5 ">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className="text-xs font-normal text-subtitle hover:text-accent smooth-transition"
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Copyright + Logo */}
                <div className="flex items-center  gap-1">
                    <p className="text-xs text-subtitle">&copy; {new Date().getFullYear()}  All rights reserved.</p>
                    <a href="https://github.com/a7medsobih" target="_blank" className="inline-flex items-center">
                        <img
                            src={myLogo}
                            alt="Ahmed Sobih"
                            className="h-[23px] w-auto transition-transform duration-300 hover:scale-125 hover:opacity-80"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer