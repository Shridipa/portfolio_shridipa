import { useState } from "react";
import { motion } from "framer-motion";

const MagicBackground = () => {
    const [sparkles] = useState(() => [...Array(15)].map((_, i) => ({
        id: i,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
        size: Math.random() * 2 + 1,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
        yMove: Math.random() * -150
    })));

    return (
        <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-[#050510]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#1a1a40] to-[#050510] opacity-90" />

            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-85 transition-all duration-1000"
                style={{ 
                    backgroundImage: `url('/src/assets/hogwartscastle.jpg')`,
                    filter: "contrast(1.2) brightness(1.0) saturate(1.2) hue-rotate(-5deg)" 
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c29]/80 via-transparent to-transparent mix-blend-overlay" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-amber-600/10 via-amber-500/5 to-transparent mix-blend-color-dodge opacity-60" />

            <motion.div 
                className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/foggy-birds.png')] opacity-10 mix-blend-screen"
                animate={{ x: ["-5%", "5%"], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            />
            
            <div className="absolute inset-0 pointer-events-none">
                {sparkles.map((spark) => (
                    <motion.div
                        key={spark.id}
                        className="absolute bg-white rounded-full blur-[0.5px] shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                        style={{ width: spark.size, height: spark.size }}
                        initial={{ 
                            x: spark.x, 
                            y: spark.y, 
                            opacity: 0 
                        }}
                        animate={{ 
                            y: [null, spark.yMove],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.2, 0]
                        }}
                        transition={{ 
                            duration: spark.duration, 
                            repeat: Infinity, 
                            delay: spark.delay,
                            ease: "easeInOut" 
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_30%,_#000000_100%] opacity-60 pointer-events-none mix-blend-multiply" />
        </div>
    );
};

export default MagicBackground;
