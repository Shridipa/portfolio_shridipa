import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [cursorVariant, setCursorVariant] = useState("default");
    const [isClicking, setIsClicking] = useState(false);

    // Smooth physics for the trailing ring
    const ringSpringConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const dotSpringConfig = { damping: 30, stiffness: 400, mass: 0.2 };

    const ringX = useSpring(0, ringSpringConfig);
    const ringY = useSpring(0, ringSpringConfig);
    const dotX = useSpring(0, dotSpringConfig);
    const dotY = useSpring(0, dotSpringConfig);

    useEffect(() => {
        const mouseMove = (e) => {
            ringX.set(e.clientX);
            ringY.set(e.clientY);
            dotX.set(e.clientX);
            dotY.set(e.clientY);
        };

        const handleMouseEnter = () => setCursorVariant("hover");
        const handleMouseLeave = () => setCursorVariant("default");
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Track hover state for links and buttons
        const clickables = document.querySelectorAll('a, button, .cursor-pointer, [role="button"]');
        clickables.forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            clickables.forEach(el => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [ringX, ringY, dotX, dotY]);

    const dotVariants = {
        default: {
            scale: isClicking ? 0.8 : 1,
            backgroundColor: "#FBBF24",
        },
        hover: {
            scale: isClicking ? 1.2 : 1.8,
            backgroundColor: "#FBBF24",
        }
    };

    const ringVariants = {
        default: {
            scale: isClicking ? 0.9 : 1,
            opacity: 0.4,
            borderWidth: "1.5px"
        },
        hover: {
            scale: isClicking ? 1.5 : 2.2,
            opacity: 0.8,
            borderWidth: "2px",
            borderColor: "#FBBF24"
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999]">
            {/* Trailing Ring */}
            <motion.div
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute w-10 h-10 rounded-full border border-gryffindor-gold shadow-[0_0_20px_rgba(251,191,36,0.2)]"
                variants={ringVariants}
                animate={cursorVariant}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
            />

            {/* Main Dot */}
            <motion.div
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute w-3 h-3 bg-gryffindor-gold rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)]"
                variants={dotVariants}
                animate={cursorVariant}
            />

            {/* Glowing Aura (Pulse) */}
            <motion.div
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute w-3 h-3 bg-gryffindor-gold rounded-full blur-[6px] opacity-40"
                animate={{
                    scale: cursorVariant === "hover" ? [1.5, 2.5, 1.5] : [1, 2, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default CustomCursor;


