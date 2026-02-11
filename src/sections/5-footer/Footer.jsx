import { links } from '../1-Header/NavLinks'
import myLogo from '../../images/logo.png'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const social = [
    { icon: FiGithub, href: 'https://github.com/a7medsobih', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/ahmedsobih', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:ahmedsobih7@gmail.com', label: 'Email' },
]
const Footer = () => {
    return (
        <footer className='py-9 bg-primary-dark section'>
            <div className='container md:px-12'>
                <div className='flex flex-col items-center md:flex-row md:justify-between gap-5'>
                    <div className="flex gap-3">
                        {social.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg glass-card text-subtitle hover:text-accent hover:border-accent smooth-transition"
                                aria-label={link.label}
                            >
                                <link.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright + Logo */}
                    <div className="flex items-center  gap-1">
                        <p className="text-xs text-subtitle">&copy; {new Date().getFullYear()} Ahmed Sobih. Made with React.js</p>
                        <a href="https://github.com/a7medsobih" target="_blank" className="inline-flex items-center">
                            <img
                                src={myLogo}
                                alt="Ahmed Sobih"
                                className="h-[23px] w-auto transition-transform duration-300 hover:scale-125 hover:opacity-80"
                            />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer