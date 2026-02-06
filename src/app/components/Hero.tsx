import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import mascotImg from 'figma:asset/3700863e7b78455d5b8e03280c10a9e790da5134.png';
import blueBoardImg from 'figma:asset/156065e583528690274d40a86aa42b0bf069b554.png';
import greenBoardImg from 'figma:asset/5e8e6965df39ef01133aaca64c2dd44212d6def8.png';

export const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/40 to-emerald-900/40 z-0" />

      {/* Animated Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/10 rounded-full blur-2xl"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-emerald-300 text-sm font-medium backdrop-blur-md mx-auto lg:mx-0 shadow-lg shadow-emerald-900/20"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>EconomySwitch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight"
          >
            One Game.<br />
            Two Boards.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">One Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0"
          >
            Meet <strong>Switch</strong>, your guide through the world of finance and ecology.
            A fun and dynamic game where flipping the board changes the rules, but not the goal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <button onClick={(e) => scrollToSection(e, '#mechanics')} className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold hover:shadow-xl hover:shadow-emerald-500/20 transition-all hover:scale-105 cursor-pointer">
              How to Play
            </button>
            <button onClick={(e) => scrollToSection(e, '#education')} className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 cursor-pointer">
              Educational Value
            </button>
          </motion.div>
        </div>

        {/* Visuals */}
        <div className="flex-1 relative w-full flex items-center justify-center min-h-[400px]">
          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative z-30 w-48 md:w-64 lg:w-80"
          >
            <img src={mascotImg} alt="Switch Mascot" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float" />
          </motion.div>

          {/* Boards in background - Refined Style */}
          <motion.div
            initial={{ opacity: 0, rotate: -10, x: -100 }}
            animate={{ opacity: 1, rotate: -12, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute left-0 top-10 md:left-10 w-48 md:w-72 lg:w-96 z-20"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/50 backdrop-blur-sm">
              <img src={blueBoardImg} alt="Blue Board" className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 10, x: 100 }}
            animate={{ opacity: 1, rotate: 12, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute right-0 top-20 md:right-10 w-48 md:w-72 lg:w-96 z-10"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/50 backdrop-blur-sm">
              <img src={greenBoardImg} alt="Green Board" className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};
