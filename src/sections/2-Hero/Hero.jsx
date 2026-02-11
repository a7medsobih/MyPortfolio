import { MdVerified } from 'react-icons/md'
import './Hero.css'
import { FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'
import Lottie from "lottie-react";
import web from "../../gif/Web Development.json";
import { motion } from "framer-motion";
import ScrollAnimation from '../../components/ScrollAnimation';
import { SiGmail } from 'react-icons/si';

const Hero = () => {

    const icons = [
        { link: "https://www.linkedin.com/in/ahmedsobih", icon: FaLinkedin },
        { link: "https://github.com/a7medsobih", icon: FaGithub },
        { link: "https://wa.me/201017320732", icon: FaWhatsapp },
        { link: "https://www.facebook.com/ahmed.sobih.39", icon: FaFacebook },
        { link: "mailto:ahmedsobih7@gmail.com", icon: SiGmail }
    ]
    return (
        <section id='about' className="section  pt-4 ">
            <div className="container ele-center flex-col md:flex-row justify-between gap-10">
                <div className='text-center md:text-left'>
                    <motion.div
                        className="relative inline-block cursor-pointer "
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            className="w-[150px] h-[150px] rounded-full object-cover border-2 border-[#d4a54e] shadow-md shadow-black/40"
                            src="./profile.png"
                            alt="profile"
                        />
                        <MdVerified
                            className="absolute bottom-1 right-0 text-[#d4a54e] bg-primary rounded-full p-[2px] text-[25px] border border-borderC shadow-sm"
                        />
                    </motion.div>
                    <ScrollAnimation direction="right" duration={0.4} delay={0.1}>
                        <h1 className="text-3xl md:text-4xl font-bold text-light leading-tight mt-4">
                            Ahmed Sobih
                        </h1>
                        <h2 className="text-2xl md:text-3xl mt-3 mb-6 font-semibold text-light">
                            Front-End Developer <span className='italic'>(React.js)</span> && Web Designer
                        </h2>
                    </ScrollAnimation>

                    <ScrollAnimation direction="right" duration={0.4} delay={0.1}>
                        <p className="text-subtitle leading-relaxed max-w-7xl">
                            Skilled in React.js, HTML, CSS, JavaScript, UI/UX, and performance optimization. I create beautiful, responsive, and user-friendly web applications.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation direction="right" duration={0.4} delay={0.2}>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 text-sm mt-6">
                            <a
                                className='flex items-center gap-2 px-4 py-2 glass-card rounded-lg'
                                href="tel:+201017320732"
                            >
                                <FaPhone className="text-highlight" />
                                <span>+20 101 732 0732</span>
                            </a>

                            <div className='flex items-center gap-2 px-4 py-2 glass-card rounded-lg'>
                                <FaMapMarkerAlt className="text-highlight" />
                                <span>6th of October, Egypt</span>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* icons */}
                    <div className="flex justify-center md:justify-start flex-wrap gap-3 mt-6">
                        {icons.map((ele, index) => (
                            <motion.a
                                key={index}
                                href={ele.link}
                                target="_blank"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2 + index * 0.1,
                                    ease: "easeOut"
                                }}
                                className="p-2.5 rounded-xl glass-card  text-subtitle hover:border-highlight  transition-all duration-300 group"
                            >
                                <ele.icon size={24} className="group-hover:text-highlight transition-colors" />
                            </motion.a>
                        ))}
                    </div>
                </div>
                <div className="w-[500px] p-8 hidden lg:block">
                    <Lottie animationData={web} />
                </div>
            </div>
        </section >
    )
}

export default Hero