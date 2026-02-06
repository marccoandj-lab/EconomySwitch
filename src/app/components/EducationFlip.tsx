import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DollarSign, TrendingUp, Briefcase, Sun, Recycle, AlertTriangle } from 'lucide-react';
import blueBoardImg from 'figma:asset/156065e583528690274d40a86aa42b0bf069b554.png';
import greenBoardImg from 'figma:asset/5e8e6965df39ef01133aaca64c2dd44212d6def8.png';

export const EducationFlip = () => {
  const [activeSide, setActiveSide] = useState<'blue' | 'green'>('blue');

  return (
    <section id="education" className={`py-24 relative overflow-hidden transition-colors duration-1000 ${activeSide === 'blue' ? 'bg-gradient-to-b from-blue-50 to-white' : 'bg-gradient-to-b from-emerald-50 to-white'}`}>

      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: activeSide === 'blue' ? [0, 20, 0] : [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className={`absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl transition-colors duration-1000 ${activeSide === 'blue' ? 'bg-blue-300' : 'bg-emerald-300'}`}
        />
        <motion.div
          animate={{
            x: activeSide === 'blue' ? [0, -20, 0] : [0, 20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className={`absolute top-1/2 -left-20 w-72 h-72 rounded-full blur-3xl transition-colors duration-1000 ${activeSide === 'blue' ? 'bg-indigo-200' : 'bg-teal-200'}`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            key={activeSide + "-title"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${activeSide === 'blue' ? 'text-blue-900' : 'text-emerald-900'}`}
          >
            {activeSide === 'blue' ? "Financial Challenges" : "Ecological Awareness"}
          </motion.h2>
          <p className="text-xl text-slate-600 max-w-2xl mb-10">
            EconomySwitch guides you through two worlds. Click the switch to explore how the focus shifts.
          </p>

          {/* Enhanced Toggle Switch */}
          <div className="bg-white p-1.5 rounded-full shadow-xl flex items-center gap-2 cursor-pointer relative w-72 h-16 border border-slate-100 ring-4 ring-slate-50/50" onClick={() => setActiveSide(activeSide === 'blue' ? 'green' : 'blue')}>
            <motion.div
              layout
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full shadow-lg z-10 ${activeSide === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-500 left-1.5' : 'bg-gradient-to-r from-emerald-500 to-emerald-400 right-1.5'}`}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <div className={`flex-1 text-center font-bold text-lg z-20 transition-colors duration-300 ${activeSide === 'blue' ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`}>
              Finance
            </div>
            <div className={`flex-1 text-center font-bold text-lg z-20 transition-colors duration-300 ${activeSide === 'green' ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`}>
              Sustainability
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Showcase - Reimagined */}
          <div className="relative group perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSide}
                initial={{ opacity: 0, rotateX: 10, scale: 0.95 }}
                animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                exit={{ opacity: 0, rotateX: -10, scale: 0.95 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative z-10"
              >
                {/* Glow Effect behind the board */}
                <div className={`absolute -inset-4 rounded-[3rem] blur-2xl opacity-40 transition-colors duration-1000 ${activeSide === 'blue' ? 'bg-blue-400' : 'bg-emerald-400'}`} />

                {/* The Image Container */}
                <div className="relative rounded-[2rem] overflow-hidden bg-white/40 backdrop-blur-sm border border-white/60 shadow-2xl p-6 md:p-8">
                  <img
                    src={activeSide === 'blue' ? blueBoardImg : greenBoardImg}
                    alt={activeSide === 'blue' ? "EconomySwitch Blue Board" : "EconomySwitch Green Board"}
                    className="w-full h-auto object-contain drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Decorative Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none rounded-[2rem]" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Side - Animated List */}
          <div className="pl-0 lg:pl-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSide + "-content"}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                <motion.div className="space-y-6">
                  {(activeSide === 'blue' ? [
                    { icon: DollarSign, color: "text-blue-600", bg: "bg-blue-100", title: "Income & Tax", desc: "Manage budget through Income and Tax fields." },
                    { icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-100", title: "Investments", desc: "Take calculated risks for higher profits." },
                    { icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100", title: "Business Decisions", desc: "Understand markets and financial terms." }
                  ] : [
                    { icon: Recycle, color: "text-emerald-600", bg: "bg-emerald-100", title: "Recycling", desc: "Rewards for responsible waste management." },
                    { icon: Sun, color: "text-emerald-600", bg: "bg-emerald-100", title: "Solar Energy", desc: "Investing in renewable energy sources." },
                    { icon: AlertTriangle, color: "text-emerald-600", bg: "bg-emerald-100", title: "Ecological Fines", desc: "Pollution Fine fields teach consequences of negligence." }
                  ]).map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                    >
                      <div className={`p-3 rounded-xl ${item.bg} ${item.color} mr-5`}>
                        <item.icon size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                        <p className="text-slate-600 leading-snug">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
