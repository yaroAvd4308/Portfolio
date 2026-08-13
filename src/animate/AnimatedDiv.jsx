import { motion, useReducedMotion } from "motion/react";

const hoverAnimation = {
    scale: 1.05,
    color: "#0bd3c1",
    backgroundColor: "#ffffff15",
    border: "2px solid #ffffff28",
    borderRadius: "30px",
    boxShadow: "1px 1px 15px 7px #ffffff3b",
    backdropFilter: "blur(3px)",
    transition: {
        duration: 0.3,
        ease: "easeOut"
    }
};

export default function AnimatedDiv({children, className, hover = false}){
    const shouldReduceMotion = useReducedMotion();

    return (
    <motion.div
        className={className}
        initial = {shouldReduceMotion ? false : {
            opacity: 0,
            y: 20
        }}
        animate = {{
            opacity: 1,
            y: 0
        }}
        exit = {shouldReduceMotion ? undefined : {
            opacity: 0,
            y: -20
        }}
        whileHover={hover && !shouldReduceMotion ? hoverAnimation : undefined}
        transition={{
            duration: 0.3
        }}>
        {children}
    </motion.div>
    );
}
