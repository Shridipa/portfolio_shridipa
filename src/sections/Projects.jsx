import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "MoodMorph",
        description: "Emotion-aware product recommendation engine powered by mood detection, MBTI analysis, and machine learning. Delivers personalized suggestions through an interactive Streamlit interface.",
        tags: ["AI/ML", "PYTHON", "EMOTION AI", "STREAMLIT"],
        github: "https://github.com/Shridipa/MoodMorph",
        link: "https://github.com/Shridipa/MoodMorph",
    },
    {
        title: "Smart Attendance System",
        description: "UiPath-powered attendance automation that detects absentees, sends personalized notifications, and generates weekly reports. Reduces a 30-minute manual process to just 2 minutes.",
        tags: ["RPA", "UIPATH", "AUTOMATION", "ANALYTICS"],
        github: "https://github.com/Shridipa/Smart_Automated_Attendance_Notification_System",
        link: "https://github.com/Shridipa/Smart_Automated_Attendance_Notification_System",
    },
    {
        title: "PDF Genie",
        description: "Flask-based multilingual document automation engine. Handles complex NLP tasks and deep translations across 10+ languages with precision and editorial quality.",
        tags: ["PYTHON", "FLASK", "NLP", "TRANSLATION"],
        github: "https://github.com/Shridipa/PDF-Genie",
        link: "https://github.com/Shridipa/PDF-Genie",
    },
    {
        title: "IMDB Rating Bot",
        description: "RPA bot that extracts and synthesizes movie ratings and metadata from IMDB. Automates data collection for streaming intelligence and content analysis.",
        tags: ["RPA", "UIPATH", "WEB SCRAPING"],
        github: "https://github.com/Shridipa/IMDB_Rating_Bot",
        link: "https://github.com/Shridipa/IMDB_Rating_Bot",
    },
    {
        title: "Amazon Scraper",
        description: "Automated RPA bot for extracting product data, prices, and ratings from Amazon. Delivers real-time market intelligence for strategic e-commerce decision-making.",
        tags: ["RPA", "DATA EXTRACTION", "E-COMMERCE"],
        github: "https://github.com/Shridipa/Amazon_Product_Scrapper_Bot",
        link: "https://github.com/Shridipa/Amazon_Product_Scrapper_Bot",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-48 px-10 max-w-[100rem] mx-auto relative cursor-default">


            <div className="flex flex-col mb-16 relative">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-6 text-gryffindor-red font-display font-black tracking-[1em] uppercase text-xs mb-8"
                >
                    <div className="w-16 h-[1px] bg-gryffindor-red/40"></div>
                    Featured Assets
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black uppercase text-parchment-light leading-[0.85] font-display italic ink-reveal">ENCHANTED<br /><span className="text-gryffindor-red">PROJECTS</span></h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
