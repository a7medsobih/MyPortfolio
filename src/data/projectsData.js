// src/data/projects.js
import img1 from "../images/salama.png";
import img2 from "../images/02.png";
import img3 from "../images/03.png";
import next1 from "../images/next01.png";
import next2 from "../images/02.png";
import next3 from "../images/03.png";
import next4 from "../images/04.png";
import next5 from "../images/05.png";
import al01 from "../images/al01.png";
import al02 from "../images/al02.png";
import al03 from "../images/al03.png";
import al04 from "../images/al04.png";
import al05 from "../images/al05.png";
import wr1 from "../images/wr1.png";
import wr2 from "../images/wr2.png";
import wr3 from "../images/wr3.png";
import wr4 from "../images/wr4.png";
import wr5 from "../images/wr5.png";
import wr6 from "../images/wr6.png";
import wr7 from "../images/wr7.png";
import e from "../images/e.png";
import sc from "../images/smartcity.png";

export const projectsList = [
    {
        title: "E-Commerce Product Page – Next.js",
        description: `A modern product page built with Next.js, featuring API data integration, smooth user interactions, and a pixel-perfect UI based on a Figma design.`,
        images: [e],
        github: "https://github.com/a7medsobih/nextjs-ecommerce-task",
        live: " https://nextjs-ecommerce-task-three.vercel.app/product",
        category: ["React.js", "Next.js", "Tailwind CSS"],
        skills: ["React.js", "Next.js", "Tailwind CSS", "Swiper.js", "Rest API"],
        tags: ["new"]
    },
    {
        title: "Smart City System – Graduation Project (Digital Egypt Pioneers)",
        description: `A web platform linking citizens to city management with a Citizen Portal for requests and an Admin Dashboard for organized complaint tracking.`,
        images: [sc],
        live: " http://smartcitywebsite.runasp.net",
        github: " https://github.com/a7medsobih/Smart-City",
        category: ["React.js", "Tailwind CSS"],
        skills: ["React.js", "Tailwind CSS", "Axios", "Framer Motion", "Toastify"],
        tags: ["new", "featured"]
    },
    {
        title: "Real Estate Website – Next",
        description: "A modern real estate platform designed and developed from scratch, presenting property projects and residential units through a strong, engaging, and fully responsive user experience.",
        images: [next1, next2, next3, next4, next5],
        github: "https://github.com/a7medsobih/next-real-estate",
        live: "https://a7medsobih.github.io/next-real-estate",
        category: ["Bootstrap", "jQuery", "HTML & CSS"],
        tags: ["featured"],
        skills: ["jQuery", "Bootstrap"]
    },
    {
        title: "Pest Control Company Website",
        description: `A corporate pest control website designed and developed from scratch, focused on clear service presentation, easy customer communication, and a fully responsive user experience.`,
        images: [al01, al02, al03, al04, al05],
        github: "https://github.com/a7medsobih/elalmanya-top-control",
        live: "https://elalmanya-top-control.vercel.app",
        category: ["jQuery", "Bootstrap"],
        skills: ["jQuery", "Bootstrap"]
    },
    {
        title: "Industrial Company Website – Steel Wire Ropes",
        description: `A modern and professional industrial website showcasing the products of a company specialized in steel wire ropes, with a strong focus on highlighting products and their technical specifications.`,
        images: [wr1, wr2, wr3, wr4, wr5, wr6, wr7],
        github: "https://github.com/a7medsobih/wire-ropes",
        live: "https://a7medsobih.github.io/wire-ropes",
        category: ["jQuery", "Bootstrap"],
        skills: ["jQuery", "Bootstrap"],
        tags: ["featured"]
    },
    {
        title: "Engineering Services Landing Page",
        description:
            `A bilingual marketing landing page for a heavy equipment engineering company, presenting services and past projects in a modern, professional layout.`,
        images: [img1],
        live: "https://a7medsobih.github.io/salama-engineering-services",
        github: "https://github.com/a7medsobih/salama-engineering-services",
        category: ["HTML & CSS", "JavaScript", "Bootstrap"],
        tags: [],
        skills: ["Bootstrap", "JavaScript"]
    },

];
