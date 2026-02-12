import { motion } from "framer-motion";
import { Zap, Globe, Database, ShieldCheck, Flame, Award } from "lucide-react";

const SkillsGrid = () => {
    const categories = [
        {
            title: "Core Languages",
            icon: <Flame className="text-gryffindor-gold w-6 h-6" />,
            desc: "The primal tongues of creation.",
            skills: ["Python", "Java", "C++", "C"]
        },
        {
            title: "Technical Domains",
            icon: <Zap className="text-gryffindor-gold w-6 h-6" />,
            desc: "Mastery over machine spirits.",
            skills: ["AI/ML", "RPA", "NLP", "Robotics"]
        },
        {
            title: "Web Engineering",
            icon: <Globe className="text-gryffindor-gold w-6 h-6" />,
            desc: "Weaving the world wide web.",
            skills: ["HTML", "CSS", "JS", "Flask", "AJAX"]
        },
        {
            title: "System & Logic",
            icon: <Database className="text-gryffindor-gold w-6 h-6" />,
            desc: "Architecting the unseen structures.",
            skills: ["Graphs", "DP", "System Design", "Logic"]
        },
        {
            title: "Soft Skills",
            icon: <ShieldCheck className="text-gryffindor-gold w-6 h-6" />,
            desc: "The human element of magic.",
            skills: ["Problem Solving", "Leadership", "Adaptability"]
        },
        {
            title: "Achievements",
            icon: <Award className="text-gryffindor-gold w-6 h-6" />,
            desc: " Honors bestowed by the order.",
            skills: ["Black Belt Karate", "CodeSprint 2.0", "Intraschool Creative Writing Winner"]
        }
    ];

    return (
        <section id="about" className="py-32 px-6 md:px-20 max-w-[90rem] mx-auto relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gryffindor-gold/5 blur-[150px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gryffindor-red/5 blur-[180px] rounded-full pointer-events-none -z-10" />

            <div className="flex flex-col items-center text-center mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex items-center gap-4 mb-6"
                >
                    <div className="h-[1px] w-12 bg-gryffindor-gold/50" />
                    <span className="text-gryffindor-gold text-xs font-black tracking-[0.6em] uppercase font-display">
                        Arsenal of Wizardry
                    </span>
                    <div className="h-[1px] w-12 bg-gryffindor-gold/50" />
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl font-black uppercase text-parchment-light leading-[0.9] font-display italic drop-shadow-lg">
                    TECHNICAL<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gryffindor-gold to-amber-700">CAPACITY</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                        className="group relative p-8 bg-black/40 backdrop-blur-md border border-white/10 hover:border-gryffindor-gold/50 rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="flex flex-col h-full relative z-10">
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-gryffindor-gold/10 rounded-lg border border-gryffindor-gold/20 group-hover:bg-gryffindor-gold/20 transition-colors">
                                    {cat.icon}
                                </div>
                                <span className="text-white/20 font-serif italic text-4xl opacity-10 group-hover:opacity-30 transition-opacity absolute right-4 top-4">
                                    0{idx + 1}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-parchment-light mb-2 font-display tracking-wide group-hover:text-gryffindor-gold transition-colors">
                                {cat.title}
                            </h3>
                            <p className="text-white/40 text-sm font-serif italic mb-6">
                                {cat.desc}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {cat.skills.map(skill => (
                                    <span 
                                        key={skill} 
                                        className="px-3 py-1 text-xs font-bold tracking-wider uppercase text-gryffindor-gold bg-gryffindor-gold/5 border border-gryffindor-gold/20 rounded hover:bg-gryffindor-gold hover:text-black transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsGrid;
