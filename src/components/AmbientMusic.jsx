import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AmbientMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        // Hide tooltip after 5 seconds
        const timer = setTimeout(() => setShowTooltip(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            {/* Audio Element - Replace src with your music file */}
            <audio
                ref={audioRef}
                loop
                src="/ambient-music.mp3"
                preload="auto"
            />

            {/* Music Toggle Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed bottom-8 right-8 z-[9998]"
            >
                <motion.button
                    onClick={toggleMusic}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative p-4 bg-gryffindor-gold/90 backdrop-blur-md rounded-full shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_rgba(251,191,36,0.6)] transition-all border-2 border-gryffindor-gold"
                >
                    {isPlaying ? (
                        <Volume2 className="text-ink" size={24} />
                    ) : (
                        <VolumeX className="text-ink" size={24} />
                    )}

                    {/* Pulsing ring animation when playing */}
                    {isPlaying && (
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-gryffindor-gold"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    )}
                </motion.button>

                {/* Tooltip */}
                <AnimatePresence>
                    {showTooltip && !isPlaying && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
                        >
                            <div className="bg-ink/90 backdrop-blur-sm px-4 py-2 rounded-sm border border-gryffindor-gold/30">
                                <p className="text-xs text-gryffindor-gold font-display font-bold tracking-wider uppercase">
                                    Enable Ambient Magic
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default AmbientMusic;
