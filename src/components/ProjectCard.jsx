import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Shield } from "lucide-react";

const ProjectCard = ({ title, description, tags, link, github }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-parchment group transition-all duration-1000 overflow-hidden border-white/5 hover:border-gryffindor-gold/40 rounded-sm flex flex-col"
        >
            <div className="h-80 bg-gradient-to-br from-gryffindor-red/20 via-black to-black p-16 flex flex-col justify-between relative overflow-hidden">
                {/* Cinematic Backdrop */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-gryffindor-gold/5 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000" />

                <div className="flex justify-between items-start z-10">
                    <div className="p-4 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-sm">
                        <Shield className="text-gryffindor-gold" size={28} />
                    </div>
                    <div className="flex gap-8">
                        {github && <a href={github} className="text-white/40 hover:text-gryffindor-gold hover:scale-125 transition-all duration-500"><Github size={28} /></a>}
                        {link && <a href={link} className="text-white/40 hover:text-gryffindor-gold hover:scale-125 transition-all duration-500"><ExternalLink size={28} /></a>}
                    </div>
                </div>

                <div className="z-10">
                    <div className="text-[11px] text-gryffindor-gold font-display font-black tracking-[0.6em] uppercase italic border-l-4 border-gryffindor-red pl-6 mb-4">
                        VAULT_SERIAL_00{Math.floor(Math.random() * 9 + 1)}
                    </div>
                    <div className="text-xs text-white/30 uppercase font-display font-bold tracking-widest px-6">Gryffindor Certified Project</div>
                </div>
            </div>

            <div className="p-10 relative flex-grow flex flex-col">
                <h3 className="text-2xl font-black uppercase mb-6 text-parchment-light group-hover:text-gryffindor-gold transition-colors duration-700 font-display italic leading-tight">{title}</h3>
                <p className="text-base text-white/50 mb-10 leading-[1.7] font-serif font-light italic group-hover:text-white/80 transition-colors duration-700">{description}</p>

                <div className="flex flex-wrap gap-4 mt-auto">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[11px] uppercase tracking-[0.3em] font-display font-black px-6 py-2.5 bg-white/5 border border-white/10 text-white/40 group-hover:bg-gryffindor-gold group-hover:text-ink transition-all cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>

                <motion.div
                    className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                >
                    <ArrowRight className="text-gryffindor-gold" size={32} />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
