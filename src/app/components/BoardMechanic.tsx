import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, RefreshCw, Sun, AlertTriangle } from 'lucide-react';
import blueBoardImg from 'figma:asset/156065e583528690274d40a86aa42b0bf069b554.png';
import greenBoardImg from 'figma:asset/5e8e6965df39ef01133aaca64c2dd44212d6def8.png';

export const BoardMechanic = () => {
  const fields = [
    {
      icon: <TrendingUp size={32} />,
      title: "Income",
      desc: "The basis of every budget. Learn how to manage cash flow.",
      color: "text-blue-500",
      bg: "bg-blue-50",
      side: "Blue",
      borderColor: "border-blue-100 hover:border-blue-300"
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Tax",
      desc: "An inevitable part of the economy. Plan your expenses ahead.",
      color: "text-red-500",
      bg: "bg-red-50",
      side: "Blue",
      borderColor: "border-red-100 hover:border-red-300"
    },
    {
      icon: <Sun size={32} />,
      title: "Solar Energy",
      desc: "Investment in the future. Renewable sources bring long-term profit.",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      side: "Green",
      borderColor: "border-yellow-100 hover:border-yellow-300"
    },
    {
      icon: <AlertTriangle size={32} />,
      title: "Pollution Fine",
      desc: "Pollution costs. Fines teach you responsibility towards the environment.",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      side: "Green",
      borderColor: "border-emerald-100 hover:border-emerald-300"
    }
  ];

  return (
    <section id="mechanics" className="py-24 bg-slate-50 relative overflow-hidden">

      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-500 mb-4 shadow-sm"
          >
            GAME MECHANICS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            How does <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Switch</span> work?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto"
          >
            A dynamic system making the game unpredictable. Every move can change the flow.
          </motion.p>
        </div>

        {/* The Switch Concept - 3D Card Style */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 mb-24 border border-slate-100 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/50 to-emerald-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full text-white text-sm font-bold mb-8 shadow-lg shadow-blue-500/20">
                <RefreshCw className="animate-spin-reverse-slow" size={18} />
                SWITCH FIELD
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                When you land on Switch,<br /> <span className="text-blue-600">the world turns.</span>
              </h3>

              <div className="space-y-6">
                {[
                  { id: 1, title: "Physical Board Flip", desc: "Players literally flip the board to the other side.", color: "bg-blue-100 text-blue-700" },
                  { id: 2, title: "Context Change", desc: "Financial problems become ecological challenges.", color: "bg-emerald-100 text-emerald-700" },
                  { id: 3, title: "Game Continuity", desc: "Play continues from the same position, but on new fields.", color: "bg-purple-100 text-purple-700" }
                ].map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex items-start gap-5 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-sm`}>
                      {item.id}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative h-[450px] w-full flex items-center justify-center perspective-1000">
              {/* Enhanced 3D Board Flip Animation */}
              <motion.div
                className="relative w-80 h-80 preserve-3d"
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {/* Floating Elements around */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -right-12 z-20 bg-white p-3 rounded-2xl shadow-xl"
                >
                  <Sun className="text-yellow-500 w-8 h-8" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-8 z-20 bg-white p-3 rounded-2xl shadow-xl"
                >
                  <TrendingUp className="text-blue-500 w-8 h-8" />
                </motion.div>

                {/* Front - Blue */}
                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white">
                  <img src={blueBoardImg} alt="Blue Board" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay" />
                </div>

                {/* Back - Green */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white">
                  <img src={greenBoardImg} alt="Green Board" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-emerald-900/5 mix-blend-overlay" />
                </div>
              </motion.div>

              {/* Shadow */}
              <div className="absolute bottom-10 w-64 h-8 bg-black/10 blur-xl rounded-[100%]" />
            </div>
          </div>
        </div>

        {/* Field Types - Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fields.map((field, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl bg-white shadow-lg border-2 ${field.borderColor} transition-all duration-300 group overflow-hidden`}
            >
              {/* Card Background Gradient on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${field.side === 'Blue' ? 'bg-blue-600' : 'bg-emerald-600'}`} />

              <div className={`absolute top-0 right-0 px-4 py-2 text-xs font-bold rounded-bl-2xl ${field.side === 'Blue' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                {field.side}
              </div>

              <div className={`w-16 h-16 rounded-2xl ${field.bg} ${field.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm`}>
                {field.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{field.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{field.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
