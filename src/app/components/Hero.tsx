import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import demoVideo from "../../assets/videos/demo.mp4";

const HERO_BG = "https://images.unsplash.com/photo-1744907895363-d351aa6019ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2l0eSUyMGFlcmlhbCUyMHZpZXclMjBza3lsaW5lfGVufDF8fHx8MTc3MjA1NjAzOXww&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  const ref = useRef(null);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background removed - now transparent */}
      
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full"
      >
        <div className="flex flex-col items-center text-center gap-16">
          {/* Top text */}
          <div className="max-w-4xl flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(31,175,90,0.15)",
                border: "1px solid rgba(31,175,90,0.3)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#1FAF5A] animate-pulse" />
              <span className="text-[#1FAF5A] text-sm tracking-wider">Solution environnementale pour l'Afrique</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-white mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1 }}
            >
              L'intelligence au service des villes{" "}
              <motion.span
                style={{ color: "#1FAF5A" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                africaines
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
              className="text-white/80 mb-6"
              style={{ fontSize: "1.6rem", lineHeight: 1.4, fontWeight: 700 }}
            >
              Parce que l'Afrique mérite des villes propres, modernes et intelligentes.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
              className="text-white/70 mb-4 max-w-2xl"
              style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              Ekolo connecte citoyens et municipalités pour détecter, analyser et traiter la pollution urbaine en temps réel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
              className="flex flex-wrap gap-4 justify-center mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNav("#solution")}
                className="px-8 py-4 rounded-full text-white transition-all duration-300 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #1FAF5A 0%, #0d7a3e 100%)",
                  boxShadow: "0 0 30px rgba(31,175,90,0.4)",
                  fontSize: "1rem",
                }}
              >
                Découvrir la plateforme
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNav("#prototypes")}
                className="px-8 py-4 rounded-full text-white flex items-center gap-2 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                  fontSize: "1rem",
                }}
              >
                Voir les prototypes
              </motion.button>
            </motion.div>
          </div>

          {/* Full Video */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-6xl relative"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden bg-black/40"
              style={{
                border: "1px solid rgba(31,175,90,0.3)",
                boxShadow: "0 0 80px rgba(31,175,90,0.15), 0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              <video
                src={demoVideo}
                controls
                autoPlay
                className="w-full aspect-video object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleNav("#apropos")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Défiler</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}