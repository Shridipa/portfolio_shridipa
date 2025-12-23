import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 250,
                mass: 0.5,
            }
        },
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-gryffindor-gold rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(251,191,36,0.8)]"
            variants={variants}
            animate="default"
        />
    );
};

export default CustomCursor;
