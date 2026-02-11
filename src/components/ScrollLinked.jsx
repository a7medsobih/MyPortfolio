// ScrollLinked.jsx
import { motion, useSpring, useScroll } from "motion/react";

const ScrollLinked = ({ children }) => {
    const { scrollYProgress } = useScroll();

    // smooth animation for the progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.1,
    });

    return (
        <>
            {/* Scroll progress bar */}
            <motion.div
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    transformOrigin: "0%",
                    // backgroundColor: "#ff0088",
                    backgroundColor: "var(--color-accent)",
                    borderRadius: 20,
                    zIndex: 9999,
                }}
            />
            {children}
        </>
    );
};

export default ScrollLinked;
