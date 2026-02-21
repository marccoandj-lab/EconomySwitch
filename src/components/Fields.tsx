import { motion } from 'framer-motion';
import { Shield, HelpCircle, List, FileText } from 'lucide-react';

const specialCards = [
  {
    icon: HelpCircle,
    name: 'Pitanja',
    effect: 'Kartice sa pitanjima a odgovori pod A, B, C i D',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: List,
    name: 'Nabrajanje',
    effect: 'Igrač nabraja pojmove iz određenih oblasti',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: FileText,
    name: 'Porez',
    effect: 'Igrač uzima karticu i vidi za šta plaća porez',
    color: 'from-rose-500 to-red-600',
  },
  {
    icon: Shield,
    name: 'Osiguranje',
    effect: 'Kada se osvoji ili kupi, osoba je oslobođena plaćanja poreza jedan ceo krug',
    color: 'from-amber-500 to-orange-600',
  },
];

export function Fields() {
  return (
    <section id="fields" className="bg-slate-900">
      {/* 3D Rotating Cube Full Screen Section */}
      <div className="min-h-screen flex flex-col justify-center items-center relative py-20 overflow-hidden" style={{ perspective: '1000px' }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center z-20 px-4 mt-16 mb-12 sm:mb-20 w-full"
        >
          <span className="inline-block px-4 py-2 bg-purple-900/30 text-purple-300 text-sm font-semibold rounded-full mb-4">
            Polja & Mehanike
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Dubina{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              igre
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            EconomySwitch nije samo igra na sreću – strategija, planiranje i pametne odluke
            su ključni za pobedu. Upoznajte se sa svim mehanikama.
          </p>
        </motion.div>

        <div className="flex justify-center items-center flex-1 w-full" style={{ perspective: '1000px' }}>
          <motion.div
            className="relative w-80 h-80 cube-container-scale"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: [0, 360], rotateX: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {/* Front Face */}
            <div className="absolute w-full h-full border-2 border-white/50 rounded-3xl flex flex-col items-center justify-center text-white font-bold bg-[#8dd5ff]/80 backdrop-blur-md shadow-lg" style={{ transform: 'rotateY(0deg) translateZ(160px)' }}>
              <span className="text-3xl mb-2">🎲</span>
              <span className="text-xl">Tabla 1</span>
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full border-2 border-white/50 rounded-3xl flex flex-col items-center justify-center text-white font-bold bg-[#66b3e0]/80 backdrop-blur-md shadow-lg" style={{ transform: 'rotateY(180deg) translateZ(160px)' }}>
              <span className="text-3xl mb-2">🎲</span>
              <span className="text-xl">Tabla 2</span>
            </div>
            {/* Right Face */}
            <div className="absolute w-full h-full border-2 border-white/50 rounded-3xl flex flex-col items-center justify-center text-slate-800 font-bold bg-[#b8eeb7]/80 backdrop-blur-md shadow-lg" style={{ transform: 'rotateY(90deg) translateZ(160px)' }}>
              <span className="text-3xl mb-2">🎲</span>
              <span className="text-xl">Tabla 3</span>
            </div>
            {/* Left Face */}
            <div className="absolute w-full h-full border-2 border-white/50 rounded-3xl flex flex-col items-center justify-center text-white font-bold bg-[#8dc3a9]/80 backdrop-blur-md shadow-lg" style={{ transform: 'rotateY(-90deg) translateZ(160px)' }}>
              <span className="text-3xl mb-2">🎲</span>
              <span className="text-xl">Tabla 4</span>
            </div>
            {/* Top Face */}
            <div className="absolute w-full h-full border-2 border-white/50 rounded-3xl flex flex-col items-center justify-center text-white font-bold bg-[#8dd5ff]/80 backdrop-blur-md shadow-lg" style={{ transform: 'rotateX(90deg) translateZ(160px)' }}>
              <span className="text-3xl mb-2">🎲</span>
              <span className="text-xl">Tabla 5</span>
            </div>
            {/* Bottom Face */}
            <div className="absolute w-full h-full border-2 border-white/50 rounded-3xl flex flex-col items-center justify-center text-slate-800 font-bold bg-[#b8eeb7]/80 backdrop-blur-md shadow-lg" style={{ transform: 'rotateX(-90deg) translateZ(160px)' }}>
              <span className="text-3xl mb-2">🎲</span>
              <span className="text-xl">Tabla 6</span>
            </div>
          </motion.div>
          {/* Responsive adjustment for mobile (translateZ differs for w-64 vs w-80). 
              To avoid complex media queries in inline styles, we just use a single size (w-80 = 320px, translateZ = 160px), 
              and visually scale it down on smaller screens. */}
          <style dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 768px) {
              .cube-container-scale { transform: scale(0.75); }
            }
          `}} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Special Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            Specijalne Kartice
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`} />

                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex flex-col items-center text-center shadow-2xl">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <card.icon className="w-8 h-8 text-white drop-shadow-sm" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">{card.name}</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">{card.effect}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SWITCH Mechanic Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative overflow-hidden rounded-3xl p-8 lg:p-12 border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center z-10">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-xl bg-slate-900/50 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl text-purple-400">🔄</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">SWITCH Mehanika</h3>
                  <p className="text-slate-400 font-medium">Najunikatniji deo igre</p>
                </div>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Kada igrač stane na SWITCH polje, cela igra menja kontekst!
                Iz finansijske pismenosti prelazite u svet održivog razvoja i obrnuto.
                Ova mehanika uči igrače da razmišljaju iz više perspektiva.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-5 hover:bg-slate-800/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3">
                    <div className="text-2xl">💰</div>
                  </div>
                  <div className="font-semibold text-white mb-1">Finansije</div>
                  <div className="text-sm text-slate-400">Prihodi, troškovi, investicije</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-5 hover:bg-slate-800/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                    <div className="text-2xl">🌱</div>
                  </div>
                  <div className="font-semibold text-white mb-1">Održivost</div>
                  <div className="text-sm text-slate-400">Zelene tehnologije, ekologija</div>
                </div>
              </div>
            </div>

            <div className="relative perspective-1000">
              <motion.div
                className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-1 border border-slate-700 shadow-2xl"
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl" />
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-[23px] p-8">
                  <div className="text-center space-y-8">
                    <div className="flex items-center justify-center space-x-6">
                      <div className="text-center group">
                        <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-slate-700 transition-all shadow-lg mx-auto">
                          <span className="text-4xl filter drop-shadow-md">💰</span>
                        </div>
                        <div className="text-sm font-semibold text-slate-300">Finansije</div>
                      </div>

                      <motion.div
                        animate={{ rotate: 180 }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20 text-white flex-shrink-0"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </motion.div>

                      <div className="text-center group">
                        <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-slate-700 transition-all shadow-lg mx-auto">
                          <span className="text-4xl filter drop-shadow-md">🌱</span>
                        </div>
                        <div className="text-sm font-semibold text-slate-300">Održivost</div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-700/50">
                      <p className="text-sm text-slate-400 italic">
                        "SWITCH mehanika čini EconomySwitch jedinstvenom igrom koja
                        povezuje dva naizgled različita sveta u koherentnu celinu."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
