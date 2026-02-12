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
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group relative flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-all duration-500"
        >
            <div className="absolute inset-0 border border-gryffindor-gold/0 group-hover:border-gryffindor-gold/40 rounded-xl transition-colors duration-500 pointer-events-none z-20" />
            
            <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-neutral-900 to-black transition-transform duration-700 group-hover:scale-110" />
                
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                <div className="absolute top-4 left-4 z-10 flex gap-3">
                    <div className="p-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 group-hover:bg-gryffindor-gold/20 transition-colors">
                        <Folder size={16} className="text-gryffindor-gold" />
                    </div>
                </div>

                <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                        <Sparkles size={10} className="text-gryffindor-gold animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Public</span>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="px-5 py-2 border border-gryffindor-gold text-gryffindor-gold uppercase text-xs font-bold tracking-widest rounded bg-black/80 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                    >
                        View Grimoire
                    </motion.div>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-black/40">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display font-bold text-parchment-light group-hover:text-gryffindor-gold transition-colors duration-300 leading-tight">
                        {title}
                    </h3>
                    <ArrowUpRight size={18} className="text-white/20 group-hover:text-gryffindor-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-white/70 transition-colors font-serif italic">
                    {description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {tags.map((tag) => (
                        <span 
                            key={tag} 
                            className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 text-white/40 rounded border border-white/5 group-hover:border-gryffindor-gold/20 group-hover:text-gryffindor-gold/80 transition-all"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.a>
    );
};

export default ProjectCard;
