import { motion } from "framer-motion";
import { Github, ArrowUpRight, Folder, Sparkles } from "lucide-react";

const ProjectCard = ({ title, description, tags, github, index }) => {
    return (
        <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col h-full glass-parchment rounded-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-white/5 hover:border-gryffindor-gold/30"
        >
            <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-gryffindor-red/20 via-neutral-900 to-black">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                    <div className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-sm">
                        <Folder size={18} className="text-gryffindor-gold" />
                    </div>
                    <div className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Github size={18} className="text-gryffindor-gold" />
                    </div>
                </div>
                
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-gryffindor-red/20 backdrop-blur-md border border-gryffindor-red/30 rounded-full">
                    <Sparkles size={12} className="text-gryffindor-gold animate-pulse" />
                    <span className="text-[10px] text-parchment-light/80 font-display font-black uppercase tracking-tighter">Certified</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    <div className="px-6 py-2 border border-gryffindor-gold/50 bg-black/60 backdrop-blur-xl text-gryffindor-gold font-display font-black uppercase text-[10px] tracking-[0.4em]">
                        ACCESS_SOURCE
                    </div>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow relative">
                <div className="mb-4 flex justify-between items-start">
                    <h3 className="text-2xl font-black uppercase font-display italic text-parchment-light group-hover:text-gryffindor-gold transition-colors duration-500 leading-tight">
                        {title}
                    </h3>
                    <ArrowUpRight size={20} className="text-white/20 group-hover:text-gryffindor-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-parchment-light/50 font-serif italic text-base leading-relaxed mb-8 line-clamp-3 group-hover:text-parchment-light/80 transition-colors duration-500">
                    {description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-display font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 text-white/30 group-hover:border-gryffindor-gold/20 group-hover:text-gryffindor-gold/60 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="h-1 w-0 bg-gryffindor-gold group-hover:w-full transition-all duration-700 ease-out" />
        </motion.a>
    );
};

export default ProjectCard;

