import { motion } from 'motion/react';
import { Smartphone, Globe, Zap, Users, Check } from 'lucide-react';
import qrCode from 'figma:asset/c0c50de14a46617bed364859804caf96a6b44e7f.png';

export const DigitalAppCallout = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">

          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

          {/* Text Content */}
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30"
            >
              <Smartphone size={16} />
              <span>Digital Edition</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Play EconomySwitch <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Anytime, Anywhere.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Experience the full game digitally. Track scores automatically, play with friends remotely, and switch between boards with a tap.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Globe size={18} className="text-blue-400" />
                <span>Browser Based</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Users size={18} className="text-emerald-400" />
                <span>Multiplayer</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Zap size={18} className="text-yellow-400" />
                <span>Instant Setup</span>
              </div>
            </motion.div>
          </div>

          {/* QR Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="relative z-10"
          >
            <div className="bg-white p-6 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-[320px]">
              <div className="bg-slate-100 rounded-2xl p-4 mb-4 border border-slate-200">
                <div className="bg-white rounded-xl p-4 shadow-inner">
                  {/* Quiet Zone handled by padding */}
                  <img src={qrCode} alt="Scan to play EconomySwitch Digital" className="w-full h-auto mix-blend-multiply contrast-125" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Scan to Play</h3>
                <p className="text-slate-500 text-sm mb-4">Open camera & scan for instant access</p>

                <a
                  href="https://economy-switch.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-2 px-4 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors mb-4"
                >
                  Open in Browser
                </a>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
                  <Check size={14} className="text-emerald-500" />
                  <span>No download required</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
