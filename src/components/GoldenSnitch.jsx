import { motion } from "framer-motion";

const GoldenSnitch = () => {
    // Shared wing animation for layers
    const wingTransition = { duration: 0.1, repeat: Infinity, ease: "easeInOut" };

    return (
        <motion.div
            className="absolute z-20 pointer-events-none"
            initial={{ left: "60%", top: "30%" }}
            animate={{
                left: ["60%", "75%", "85%", "70%", "60%"],
                top: ["30%", "20%", "45%", "35%", "30%"],
                rotate: [0, 5, -5, 10, 0],
                scale: [1, 1.1, 0.9, 1.05, 1],
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{ width: "80px", height: "80px" }}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Core Sphere */}
                <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gryffindor-gold via-yellow-300 to-amber-600 shadow-[0_0_30px_rgba(251,191,36,0.8)] z-30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                />

                {/* Wing Assembly - Left */}
                <div className="absolute right-1/2 mr-[-4px] flex items-center z-20">
                    {/* Main Wing */}
                    <motion.div
                        className="w-16 h-6 bg-gradient-to-l from-white/40 to-transparent backdrop-blur-sm rounded-full origin-right"
                        style={{ clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)" }}
                        animate={{ rotateY: [0, 85, 0], rotateZ: [-20, 20, -20] }}
                        transition={wingTransition}
                    />
                    {/* Feather Layer 1 */}
                    <motion.div
                        className="absolute right-0 w-12 h-4 bg-white/20 blur-[1px] rounded-full origin-right"
                        style={{ clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)" }}
                        animate={{ rotateY: [10, 75, 10], rotateZ: [-30, 10, -30] }}
                        transition={{ ...wingTransition, delay: 0.05 }}
                    />
                </div>

                {/* Wing Assembly - Right */}
                <div className="absolute left-1/2 ml-[-4px] flex items-center z-20">
                    {/* Main Wing */}
                    <motion.div
                        className="w-16 h-6 bg-gradient-to-r from-white/40 to-transparent backdrop-blur-sm rounded-full origin-left"
                        style={{ clipPath: "polygon(100% 50%, 0% 0%, 0% 100%)" }}
                        animate={{ rotateY: [0, -85, 0], rotateZ: [20, -20, 20] }}
                        transition={wingTransition}
                    />
                    {/* Feather Layer 1 */}
                    <motion.div
                        className="absolute left-0 w-12 h-4 bg-white/20 blur-[1px] rounded-full origin-left"
                        style={{ clipPath: "polygon(100% 50%, 0% 0%, 0% 100%)" }}
                        animate={{ rotateY: [-10, -75, -10], rotateZ: [30, -10, 30] }}
                        transition={{ ...wingTransition, delay: 0.05 }}
                    />
                </div>

                {/* Magic Trail Particles */}
                <div className="absolute inset-0 -z-10">
                    {[1, 2, 3].map((id) => (
                        <motion.div
                            key={id}
                            className="absolute bg-gryffindor-gold rounded-full w-1 h-1 blur-[1px]"
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 2, 0],
                                x: [0, (Math.random() - 0.5) * 100],
                                y: [0, (Math.random() - 0.5) * 100],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: id * 0.4,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gryffindor-gold/10 blur-[40px] rounded-full scale-[2.5] animate-pulse -z-20" />
        </motion.div>
    );
};

export default GoldenSnitch;
