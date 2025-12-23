import { motion } from "framer-motion";
import { Zap, Globe, Database, ShieldCheck, Flame, Award } from "lucide-react";

const SkillsGrid = () => {
    const categories = [
        {
            title: "Core Languages",
            icon: <Flame className="text-gryffindor-gold" />,
            skills: ["Python", "Java", "C++", "C"]
        },
        {
            title: "Technical Domains",
            icon: <Zap className="text-gryffindor-gold" />,
            skills: ["AI/ML", "RPA", "NLP", "Robotics"]
        },
        {
            title: "Web Engineering",
            icon: <Globe className="text-gryffindor-gold" />,
            skills: ["HTML", "CSS", "JS", "Flask", "AJAX"]
        },
        {
            title: "System & Logic",
            icon: <Database className="text-gryffindor-gold" />,
            skills: ["Graphs", "DP", "System Design", "Logic"]
        },
        {
            title: "Soft Skills",
            icon: <ShieldCheck className="text-gryffindor-gold" />,
            skills: ["Problem Solving", "Leadership", "Adaptability"]
        },
        {
            title: "Achievements",
            icon: <Award className="text-gryffindor-gold" />,
            skills: ["Black Belt Karate", "CodeSprint 2.0", "Winner"]
        }
    ];

    return (
        <section id="about" className="py-24 px-10 max-w-[90rem] mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gryffindor-red/5 blur-[200px] rounded-full pointer-events-none" />

            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 relative">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-gryffindor-gold text-[10px] font-black tracking-[0.8em] uppercase mb-6 font-display"
                    >
                        Excellence & Skillset
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase text-parchment-light leading-[1] font-display italic">TECHNICAL<br /><span className="text-gryffindor-red">CAPACITY</span></h2>
                </div>
                <div className="hidden lg:block w-96 h-[2px] bg-white/10 mb-10" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="glass-parchment p-16 group hover:scale-[1.02] transition-all duration-1000 cursor-default border-white/5 hover:border-gryffindor-gold/30 rounded-sm"
                    >
                        <div className="flex flex-col items-start mb-10 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="p-6 rounded-full border border-white/5 bg-white/5 shadow-[0_0_40px_rgba(251,191,36,0.05)]"
                            >
                                {cat.icon}
                            </motion.div>
                            <h3 className="text-xl font-black uppercase tracking-widest text-parchment-light italic font-display">{cat.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {cat.skills.map(skill => (
                                <span key={skill} className="px-5 py-2.5 bg-white/5 border border-white/5 text-base text-white/40 font-serif font-light hover:text-gryffindor-gold hover:border-gryffindor-gold/40 transition-all italic hover:bg-white/[0.08]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsGrid;
