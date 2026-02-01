import { MdVerified } from 'react-icons/md'
import './Hero.css'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Lottie from "lottie-react";
import computer from "../../gif/Programming Computer.json";
import * as motion from "motion/react-client"
import ScrollAnimation from '../../components/ScrollAnimation';
import { SiGmail } from 'react-icons/si';

const Hero = () => {
    const icons = [
        { link: "https://www.linkedin.com/in/ahmedsobih", icon: <FaLinkedin size={29} /> },
        { link: "https://github.com/a7medsobih", icon: <FaGithub size={29} /> },
        { link: "https://wa.me/201017320732", icon: <FaWhatsapp size={29} /> },
        { link: "https://www.facebook.com/ahmed.sobih.39", icon: <FaFacebook size={29} /> },
        { link: "mailto:ahmedsobih7@gmail.com", icon: <SiGmail size={29} /> }
    ]
    return (
        <section id='about' className="section ele-center flex-col md:flex-row justify-between pt-8 pb-10    ">
            <div>
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
                        className="absolute bottom-1 right-0 text-[#d4a54e] bg-primary rounded-full p-[2px] text-[25px] border border-borderColor shadow-sm"
                    />
                </motion.div>
                <ScrollAnimation direction="right" duration={0.4} delay={0.1}>
                    <h1 className="text-3xl md:text-4xl font-bold text-light leading-tight mt-4">
                        Ahmed Sobih
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-light/90 mt-3 mb-6">
                        Front-End Developer <span className='italic'>(React.js)</span> && Web Designer
                    </h2>
                </ScrollAnimation>

                <ScrollAnimation direction="right" duration={0.4} delay={0.1}>
                    <p className="text-subtitle leading-relaxed max-w-7xl">
                        Front-End Developer & Web Designer passionate about creating elegant, user-friendly web experiences.
                        Skilled in <span className="font-bold italic ">React.js, TypeScript, HTML, CSS,</span> and
                        <span className="font-bold italic"> JavaScript</span>, with a strong eye for UI/UX design and performance optimization.
                        Experienced in designing and building responsive, user-centered websites from scratch.
                    </p>
                </ScrollAnimation>

                {/* icons */}
                <div className="flex justify-center md:justify-start gap-6 mt-8">
                    {icons.map((ele, index) => (
                        <a
                            key={index}
                            href={ele.link}
                            target="_blank"
                            className="text-subtitle hover:text-light hover:scale-125 smooth-transition"
                        >
                            {ele.icon}
                        </a>
                    ))}
                </div>
            </div>
            <Lottie
                className='w-full translate-x-5 hidden lg:block'
                animationData={computer}
            />
        </section>
    )
}

export default Hero