import { motion } from 'framer-motion';
import { Monitor, Smartphone, Users, Globe, Zap, Shield } from 'lucide-react';
import qrCodeImage from '../assets/adobe-express-qr-code.png';

const features = [
  {
    icon: Globe,
    title: 'Online Multiplayer',
    description: 'Play with friends from any part of the world. Support for 2-6 players in real time.',
  },
  {
    icon: Zap,
    title: 'Fast Games',
    description: 'The digital version enables faster games with automatic calculations and animations.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'All data is encrypted. Player privacy is our priority.',
  },
  {
    icon: Users,
    title: 'Educational Mode',
    description: 'A special mode for schools and educators with advanced statistics and reports.',
  },
];

export function WebApp() {
  return (
    <section id="webapp" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-full mb-4 border border-emerald-500/30">
            Digital Version
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            EconomySwitch{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              WebApp
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Experience EconomySwitch in a completely new way! Our digital platform brings all the benefits of a board game along with modern online gaming functionalities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl blur-3xl opacity-20" />

            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 p-8 overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="flex-1 bg-slate-700 rounded-lg px-4 py-2 text-sm text-slate-400 ml-4">
                  economyswitch.app/game
                </div>
              </div>

              {/* Game Board Preview */}
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 overflow-hidden">
                {/* Infinite Line Animation */}
                <div className="relative h-32 overflow-hidden flex items-center w-full">
                  <motion.div
                    className="flex space-x-4 absolute"
                    animate={{ x: [0, -960] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  >
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center text-3xl shadow-lg ${(i % 10) % 3 === 0
                          ? 'bg-gradient-to-br from-emerald-500 to-teal-600'
                          : (i % 10) % 3 === 1
                            ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                            : 'bg-gradient-to-br from-purple-500 to-pink-600'
                          }`}
                      >
                        {['💰', '🎲', '❓', '📈', '🔄', '🏦', '🎯', '⚡', '🌱', '🏆'][i % 10]}
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Player Info */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    { name: 'Player 1', money: '450.000', color: 'from-emerald-500 to-teal-600' },
                    { name: 'Player 2', money: '320.000', color: 'from-blue-500 to-indigo-600' },
                    { name: 'Player 3', money: '280.000', color: 'from-purple-500 to-pink-600' },
                  ].map((player, index) => (
                    <div
                      key={index}
                      className="bg-slate-700/50 rounded-xl p-3 text-center"
                    >
                      <div className="text-xs text-slate-400 mb-1">{player.name}</div>
                      <div className={`text-sm font-bold bg-gradient-to-r ${player.color} bg-clip-text text-transparent`}>
                        {player.money}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Current Turn */}
                <div className="mt-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-3 text-center">
                  <div className="text-sm text-emerald-400">Current turn: Player 1</div>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 flex justify-center space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
                  🎲 Roll the Dice
                </button>
                <button className="px-6 py-3 bg-slate-700 rounded-xl font-semibold hover:bg-slate-600 transition-all">
                  ⚙️ Settings
                </button>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Why choose the WebApp?
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                The digital version of EconomySwitch retains all the benefits of the original game with additional functionalities that only an online platform can offer.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Platform Availability */}
            <div className="pt-8 border-t border-slate-700">
              <h4 className="text-lg font-semibold mb-4">Available on all platforms</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Monitor, name: 'Desktop' },
                  { icon: Smartphone, name: 'Mobile' },
                  { icon: Globe, name: 'Web Browser' },
                ].map((platform, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700"
                  >
                    <platform.icon className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Play Now CTA */}
            <div className="pt-8 mt-8 border-t border-slate-700">
              <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 justify-between shadow-lg shadow-emerald-500/10">
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-bold mb-2 text-white">Try the WebApp now!</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    Access directly via the link or scan the QR code with your phone for quick access to the game.
                  </p>
                  <a
                    href="https://test-omega-five-24.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-emerald-500/40 transition-all hover:-translate-y-1 active:scale-95"
                  >
                    <span>Start Game</span>
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
                <div className="shrink-0 bg-white p-2.5 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105 transition-transform">
                  <img src={qrCodeImage} alt="EconomySwitch WebApp QR Code" className="w-28 h-28 object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Game Mode Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            Board Game vs. WebApp
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Board Game */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/20">
              <div className="text-4xl mb-4">🎲</div>
              <h4 className="text-xl font-bold mb-4">Board Game</h4>
              <ul className="space-y-3">
                {[
                  'Physical gathering of players',
                  'Tactical experience with cards and figures',
                  'Face-to-face interaction',
                  'Ideal for family gatherings',
                  'No need for internet',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-slate-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WebApp */}
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 border border-blue-500/20">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-xl font-bold mb-4">WebApp</h4>
              <ul className="space-y-3">
                {[
                  'Play from anywhere',
                  'Automatic calculations and animations',
                  'Online multiplayer',
                  'Statistics and progress',
                  'Faster games',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
