import { motion } from "framer-motion";
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
        <section id="projects" className="py-48 px-10 max-w-[100rem] mx-auto relative cursor-default overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gryffindor-red/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gryffindor-gold/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="flex flex-col mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 text-gryffindor-red font-display font-black tracking-[1em] uppercase text-xs mb-8"
                >
                    <div className="w-16 h-[1px] bg-gryffindor-red/40"></div>
                    Featured Vault
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black uppercase text-parchment-light leading-[0.85] font-display italic">
                    PINNED<br /><span className="text-gryffindor-red">REPOSITORIES</span>
                </h2>
                <div className="h-1 w-24 bg-gryffindor-gold mt-12 mb-8 opacity-40" />
                <p className="text-white/30 font-serif italic text-lg max-w-xl">
                    A curated selection of my most impactful alchemical creations and automated enchantments, directly accessible from the Great Vault.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                {pinnedProjects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;

