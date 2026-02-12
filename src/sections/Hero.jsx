import { motion } from "framer-motion";


const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center px-10 pt-20 overflow-hidden">
            <div className="max-w-6xl z-10 relative">
                <div className="relative mb-8">
                    <motion.h1
                        className="text-4xl md:text-6xl font-black leading-[0.9] text-gryffindor-gold font-display italic ink-reveal relative z-10"
                    >
                        SHRIDIPA<br />DHAR
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
                    className="mb-12 py-4 max-w-2xl"
                >
                    <p className="text-xl md:text-2xl text-parchment-light/80 font-serif font-light italic leading-[1.6]">
                        Conjuring <span className="text-gryffindor-gold font-bold">digital magic</span> through code.
                        I weave <span className="text-gryffindor-gold underline decoration-gryffindor-red/40 underline-offset-8">AI enchantments</span>,
                        automate mystical workflows with RPA sorcery, and architect spellbinding web realms that transcend the ordinary.
                    </p>
                    <p className="text-[11px] tracking-[0.4em] uppercase text-gryffindor-gold/30 mt-6 font-display font-bold">
                        &quot;Forti Animo Est&quot; — Courageous of Soul
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                    className="flex flex-wrap gap-8"
                >
                    <a href="#projects" className="group relative px-12 py-5 bg-gryffindor-red/90 text-parchment-light font-display font-black tracking-[0.2em] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_80px_rgba(127,29,29,0.3)]">
                        <span className="relative z-10 uppercase text-sm">Reveal Works</span>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            className="absolute inset-0 bg-gryffindor-gold transition-all duration-700"
                        />
                        <span className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                    </a>
                    <a href="#contact" className="px-12 py-5 border border-white/10 text-parchment-light font-display font-bold tracking-[0.2em] hover:bg-gryffindor-gold hover:text-ink transition-all uppercase hover:shadow-[0_0_60px_rgba(251,191,36,0.1)] bg-white/5 backdrop-blur-lg text-sm">
                        Direct Link
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
