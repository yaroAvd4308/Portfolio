import { motion, useReducedMotion } from "motion/react";

export default function AnimatedDiv({children, className}){
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
        }}>
        {children}
    </motion.div>
    );
}
