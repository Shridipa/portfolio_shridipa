import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CanvasContainer from "./components/CanvasContainer";
import Hero3D from "./components/Hero3D";
import HUDOverlay from "./components/HUDOverlay";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import SkillsGrid from "./sections/SkillsGrid";
import WandPointer from "./components/WandPointer";
import ResumeViewer from "./components/ResumeViewer";
import AmbientMusic from "./components/AmbientMusic";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="relative bg-neutral-950 min-h-screen text-neutral-100 overflow-hidden">
      <CustomCursor />
      <Navbar />
      <HUDOverlay />
      <WandPointer />
      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <AmbientMusic />

      {/* 3D Arc Reactor Background - Now themed as Golden Snitch */}
      <CanvasContainer>
        <Hero3D />
      </CanvasContainer>

      <Hero />
      <SkillsGrid />
      <Projects />

      {/* Footer / Contact */}
      <section id="contact" className="py-48 flex flex-col items-center justify-center px-10 bg-black relative border-t border-white/5">


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gryffindor-gold text-[10px] font-black tracking-[0.8em] uppercase mb-8 font-display"
          >
            Transmissions
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-widest font-display italic ink-reveal">
            DIRECT<br /><span className="text-gryffindor-red">CONNECTION</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            <a href="mailto:shridipa.mail@example.com" className="group relative px-12 py-5 bg-gryffindor-red/90 text-parchment-light font-display font-black tracking-[0.3em] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_80px_rgba(127,29,29,0.3)] min-w-[240px] flex items-center justify-center">
              <span className="relative z-10 uppercase text-sm">Send Owl Post</span>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 bg-gryffindor-gold transition-all duration-700"
              />
            </a>

            <button
              onClick={() => setIsResumeOpen(true)}
              className="group relative px-12 py-5 border-2 border-gryffindor-gold/60 text-gryffindor-gold font-display font-black tracking-[0.3em] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_80px_rgba(251,191,36,0.3)] min-w-[240px] bg-black/40 backdrop-blur-sm flex items-center justify-center"
            >
              <span className="relative z-10 uppercase text-sm">View My Resume</span>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 bg-gryffindor-gold transition-all duration-700"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 z-20"
              >
                <span className="relative z-30 flex items-center justify-center h-full uppercase text-ink font-black text-sm">View My Resume</span>
              </motion.div>
            </button>

            <div className="glass-parchment p-8 text-left border-white/5 rounded-sm min-w-[320px]">
              <div className="text-[9px] text-gryffindor-gold font-display font-black tracking-[0.4em] mb-4 uppercase opacity-40 italic">Registry_Information</div>
              <div className="space-y-2 font-serif italic text-base text-parchment-light/60">
                <div className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-gryffindor-red rounded-full"></span>
                  SHRIDIPA DHAR | GRYFFINDOR
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-gryffindor-red rounded-full"></span>
                  KIIT UNIVERSITY, BHUBANESWAR
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-gryffindor-red rounded-full"></span>
                  +91 84206 XXXXX
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-48 text-white/10 text-[10px] tracking-[1.5em] uppercase z-10 font-display font-bold italic">
          EST. 2024 // Gryffindor Alchemist // Shridipa Dhar
        </p>
      </section>
    </main>
  );
}

export default App;
