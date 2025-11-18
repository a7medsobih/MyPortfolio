// ScrollAnimation.jsx
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const ScrollAnimation = ({ children, direction = "up", duration = 0.5, delay = 0 }) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { once: false }); // يظهر مرة واحدة

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
            scale: direction === "scale" ? 0.8 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: { duration, delay },
        },
    };

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
