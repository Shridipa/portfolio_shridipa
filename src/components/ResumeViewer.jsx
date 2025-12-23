import { motion } from "framer-motion";
import { Download, X } from "lucide-react";
import { useState } from "react";

const ResumeViewer = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative max-w-4xl w-full bg-ink/95 border border-gryffindor-gold/30 rounded-sm p-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-gryffindor-gold transition-colors"
                >
                    <X size={32} />
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-black uppercase text-gryffindor-gold font-display italic mb-2">
                        Resume Scroll
                    </h3>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-display">
                        Shridipa Dhar — Gryffindor Alchemist
                    </p>
                </div>

                {/* Resume Image */}
                <div className="bg-white rounded-sm mb-6 overflow-auto max-h-[60vh]">
                    <img
                        src="/resume.png"
                        alt="Shridipa Dhar Resume"
                        className="w-full h-auto"
                    />
                </div>

                {/* Download Button */}
                <a
                    href="/resume.pdf"
                    download="Shridipa_Dhar_Resume.pdf"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-gryffindor-gold hover:bg-gryffindor-gold/80 text-ink font-display font-black tracking-[0.2em] uppercase transition-all hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]"
                >
                    <Download size={20} />
                    Download Resume (PDF)
                </a>
            </motion.div>
        </motion.div>
    );
};

export default ResumeViewer;
