import { motion } from "framer-motion";
import { Wand } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
    { id: "home", label: "Profile" },
    { id: "about", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
];

const WandPointer = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed right-12 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-8">
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center justify-end gap-6 group relative"
                >
                    <span className={`text-[10px] uppercase font-black tracking-[0.4em] transition-all duration-500 font-display ${activeSection === section.id ? "text-gryffindor-gold opacity-100" : "text-white/20 opacity-0 group-hover:opacity-100"
                        }`}>
                        {section.label}
                    </span>
                    <div className="relative flex items-center justify-center">
                        {activeSection === section.id ? (
                            <motion.div
                                layoutId="wand"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="text-gryffindor-gold relative"
                            >
                                <Wand size={18} className="translate-x-1" />
                                <div className="absolute inset-0 bg-gryffindor-gold blur-lg opacity-40" />
                            </motion.div>
                        ) : (
                            <div className="w-2.5 h-2.5 rounded-full border border-white/20 bg-white/5 group-hover:bg-gryffindor-gold/40 group-hover:border-gryffindor-gold/60 transition-all duration-300 shadow-[0_0_10px_rgba(251,191,36,0)] group-hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]" />
                        )}
                    </div>
                </a>
            ))}
        </div>
    );
};

export default WandPointer;
