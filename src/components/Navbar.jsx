import { motion } from "framer-motion";
import { Menu, X, Share2 } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Profile", href: "#home" },
        { name: "Skills", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-6">
            <div className="max-w-[100rem] mx-auto flex justify-between items-center glass-parchment px-8 py-4 border-white/5 rounded-sm">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 cursor-pointer group"
                >
                    <span
                        className="text-xl font-black tracking-tighter uppercase italic flex gap-2 font-display text-gryffindor-gold"
                        style={{
                            textShadow: '0 0 15px rgba(251, 191, 36, 0.8), 0 0 30px rgba(251, 191, 36, 0.6), 0 0 45px rgba(251, 191, 36, 0.4)'
                        }}
                    >
                        PORTFOLIO
                    </span>
                </motion.div>

                <div className="hidden md:flex gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40 hover:text-gryffindor-gold transition-all relative group font-display"
                        >
                            {link.name}
                            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-gryffindor-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="p-3 text-gryffindor-gold">
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="md:hidden mt-8 glass-parchment p-16 flex flex-col gap-14 items-center rounded-sm"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl uppercase tracking-[0.4em] font-black text-white hover:text-gryffindor-gold transition-colors italic font-display"
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
