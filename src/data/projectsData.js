// src/data/projects.js
import img1 from "../images/salama.png";
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
import sc2 from "../images/smartcity1.png";
import sc3 from "../images/smartcity2.png";
import sc4 from "../images/smartcity3.png";
import sc5 from "../images/smartcity4.png";
import sc6 from "../images/smartcity5.png";
import ha1 from "../images/ha1.png";
import ha2 from "../images/ha2.png";
import ha3 from "../images/ha3.png";
import ha4 from "../images/ha4.png";
import ha5 from "../images/ha5.png";
import tl from "../images/tailwindland.png";
import edu from "../images/edu.png";
import myp from "../images/myPortfolio.png";
import trust1 from "../images/trust1.png";
import trust2 from "../images/trust2.png";
import trust3 from "../images/trust3.png";
import trust4 from "../images/trust4.png";
import trust5 from "../images/trust5.png";
import trust6 from "../images/trust6.png";

export const projectsList = [
    {
        id: 11,
        title: "TRUST BUSINESS – CMS Dynamic Website ",
        description: `A full-stack CMS platform with a powerful admin dashboard for real-time content management, built using dynamic sections and optimized with ISR and caching.`,

        images: [trust1, trust4, trust3, trust2, trust5, trust6],

        live: "https://trustbusiness.org",
        // github: "https://github.com/a7medsobih/trust",

        category: ["Next.js", "Full Stack"],

        skills: [
            "Next.js",
            "Prisma ORM",
            "REST API",
            "Dynamic Rendering",
            "ISR",
            "Tailwind CSS",
            "next-intl (i18n)",
            "Caching & Revalidation"
        ],

        tags: ["new", "featured"]
    },
    {
        id: 1,
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
        id: 2,
        title: "Smart City System – Graduation Project (Digital Egypt Pioneers)",
        description: `A web platform linking citizens to city management with a Citizen Portal for requests and an Admin Dashboard for organized complaint tracking.`,
        images: [sc, sc3, sc2, sc4, sc5, sc6],
        live: " http://smartcitywebsite.runasp.net",
        github: " https://github.com/a7medsobih/Smart-City",
        category: ["React.js", "Tailwind CSS"],
        skills: ["React.js", "Tailwind CSS", "Axios", "Framer Motion", "Toastify"],
        tags: ["new", "featured"]
    },
    {
        id: 3,
        title: "Real Estate Website – Next",
        description: "A modern real estate platform designed and developed from scratch, presenting property projects and residential units through a strong, engaging, and fully responsive user experience.",
        images: [next1, next2, next3, next4, next5],
        github: "https://github.com/a7medsobih/next-real-estate",
        live: "https://a7medsobih.github.io/next-real-estate",
        category: ["Bootstrap", "jQuery", "JavaScript"],
        tags: ["featured"],
        skills: ["jQuery", "Bootstrap"]
    },
    {
        id: 4,
        title: "Pest Control Company Website",
        description: `A corporate pest control website designed and developed from scratch, focused on clear service presentation, easy customer communication, and a fully responsive user experience.`,
        images: [al01, al02, al03, al04, al05],
        github: "https://github.com/a7medsobih/elalmanya-top-control",
        live: "https://elalmanya-top-control.vercel.app",
        category: ["jQuery", "Bootstrap", "JavaScript"],
        tags: ["featured"],
        skills: ["jQuery", "Bootstrap"]
    },
    {
        id: 5,
        title: "Industrial Company Website – Steel Wire Ropes",
        description: `A modern and professional industrial website showcasing the products of a company specialized in steel wire ropes, with a strong focus on highlighting products and their technical specifications.`,
        images: [wr1, wr2, wr3, wr4, wr5, wr6, wr7],
        github: "https://github.com/a7medsobih/wire-ropes",
        live: "https://a7medsobih.github.io/wire-ropes",
        category: ["jQuery", "Bootstrap", "JavaScript"],
        skills: ["jQuery", "Bootstrap"],
        tags: ["featured"]
    },
    {
        id: 6,
        title: "myPortfolio",
        description:
            `A modern, responsive portfolio website built to showcase my projects, skills, and experience through a clean design, smooth animations, and an engaging user experience.`,
        images: [myp],
        live: "https://ahmedsobih-portfolio.vercel.app",
        github: "https://github.com/a7medsobih/MyPortfolio",
        category: ["React.js", "Tailwind CSS"],
        tags: ["New"],
        skills: ["React.js", "Tailwind CSS", "Framer Motion", "Fancybox"]
    },
    {
        id: 7,
        title: "Tailwind-Land",
        description:
            `A modern, responsive landing page built with Tailwind CSS, showcasing the power of utility-first design. Features clean design, optimized performance, and reusable React components .`,
        images: [tl],
        live: "https://tailwind-land-theta.vercel.app",
        github: "https://github.com/a7medsobih/tailwind-land",
        category: ["React.js", "Tailwind CSS"],
        tags: [],
        skills: ["React.js", "Tailwind CSS"]
    },
    {
        id: 8,
        title: "Engineering Services Landing Page",
        description:
            `A bilingual marketing landing page for a heavy equipment engineering company, presenting services and past projects in a modern, professional layout.`,
        images: [img1],
        live: "https://a7medsobih.github.io/salama-engineering-services",
        github: "https://github.com/a7medsobih/salama-engineering-services",
        category: ["JavaScript", "Bootstrap"],
        tags: [],
        skills: ["Bootstrap", "jQuery"]
    },
    {
        id: 9,
        title: "Abualhamed Shipping Website",
        description:
            `A website for a shipping company, designed to showcase logistics services, company information, and contact details. Built with a clean, structured layout tailored for the transport and shipping sector.`,
        images: [ha1, ha2, ha3, ha4, ha5],
        live: "https://a7medsobih.github.io/abualhamed-shipping",
        github: "https://github.com/a7medsobih/abualhamed-shipping",
        category: ["Bootstrap"],
        tags: [],
        skills: ["HTML & CSS", "Bootstrap"]
    },
    {
        id: 10,
        title: "🎓 EduBridge",
        description:
            `An interactive educational website designed to deliver an engaging and user-friendly learning experience`,
        images: [edu],
        live: "https://edubridge-red.vercel.app",
        github: "https://github.com/a7medsobih/edubridge",
        category: ["React.js"],
        tags: [],
        skills: ["React.js", "AOS"]
    },
];
