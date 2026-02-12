import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "Portfolio Shridipa",
        description: "A Harry Potter–themed portfolio website built with React, Vite, and Tailwind CSS. Features magical UI elements and a Gryffindor-inspired design.",
        tags: ["REACT", "VITE", "TAILWIND"],
        github: "https://github.com/Shridipa/portfolio_shridipa",
        isPinned: true
    },
    {
        title: "LecGenAI",
        description: "Intelligent lecture assistant for transforming recorded lectures into comprehensive study materials using generative AI.",
        tags: ["GEN AI", "NLP", "PYTHON"],
        github: "https://github.com/Shridipa/LecGenAI",
        isPinned: true
    },
    {
        title: "MoodMorph",
        description: "Emotion-aware product recommendation engine powered by mood detection and machine learning. Delivers personalized suggestions.",
        tags: ["AI/ML", "PYTHON", "EMOTION AI"],
        github: "https://github.com/Shridipa/MoodMorph",
        isPinned: true
    },
    {
        title: "PDF Genie",
        description: "Flask-based multilingual document automation engine. Handles complex NLP tasks and real-time text extraction from PDFs.",
        tags: ["PYTHON", "FLASK", "NLP"],
        github: "https://github.com/Shridipa/PDF-Genie",
        isPinned: true
    },
    {
        title: "Smart Attendance",
        description: "UiPath-powered attendance automation that detects absentees and generates weekly reports. Significantly reduces manual processing time.",
        tags: ["RPA", "UIPATH", "AUTOMATION"],
        github: "https://github.com/Shridipa/Smart_Automated_Attendance_Notification_System",
        isPinned: true
    },
    {
        title: "Amazon Scraper",
        description: "Automated RPA bot for extracting product data, prices, and ratings from Amazon for market intelligence.",
        tags: ["RPA", "DATA EXTRACTION", "BOT"],
        github: "https://github.com/Shridipa/Amazon_Product_Scrapper_Bot",
        isPinned: true
    },
];

const Projects = () => {
    const pinnedProjects = projects.filter(p => p.isPinned);

    return (
        <section id="projects" className="py-32 px-6 md:px-20 max-w-[100rem] mx-auto relative cursor-default overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gryffindor-red/5 blur-[150px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gryffindor-gold/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="flex flex-col items-center text-center mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex items-center gap-6 mb-8 group cursor-default"
                >
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gryffindor-gold to-transparent opacity-50 group-hover:w-24 transition-all duration-700" />
                    <Sparkles className="w-5 h-5 text-gryffindor-gold animate-pulse" />
                    <span className="text-gryffindor-gold text-xs font-black tracking-[0.5em] uppercase font-display drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                        Magical Archives
                    </span>
                    <Sparkles className="w-5 h-5 text-gryffindor-gold animate-pulse" />
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gryffindor-gold to-transparent opacity-50 group-hover:w-24 transition-all duration-700" />
                </motion.div>
                
                <h2 className="text-5xl md:text-7xl font-black uppercase text-parchment-light leading-[0.9] font-display italic drop-shadow-2xl relative">
                    FEATURED<br />
                    <span className="relative inline-block mt-2">
                        <span className="absolute inset-0 blur-xl bg-gradient-to-r from-gryffindor-red to-orange-900 opacity-30 animate-pulse"></span>
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#740001] via-[#ae0001] to-[#eeba30]">
                            SPELLBOOKS
                        </span>
                    </span>
                </h2>
                
                <p className="mt-10 text-white/50 font-serif italic text-xl max-w-2xl leading-relaxed">
                    Unseal the ancient tomes to discover <span className="text-gryffindor-gold/80">automated enchantments</span> and <span className="text-gryffindor-gold/80">alchemical code</span> forged in the digital fires.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 relative z-10 perspective-1000">
                {pinnedProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, rotateX: 10, y: 50 }}
                        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                            duration: 0.8, 
                            delay: index * 0.15, 
                            type: "spring", 
                            stiffness: 50 
                        }}
                    >
                        <ProjectCard {...project} index={index} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

