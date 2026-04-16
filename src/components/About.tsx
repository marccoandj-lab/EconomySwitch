import { motion } from 'framer-motion';
import { BookOpen, Users, Brain, Target, Award, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Educational Content',
    description: 'We turn complex financial concepts into simple and fun lessons through play.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Users,
    title: 'For All Generations',
    description: 'Adapted for children, youth, families, and schools – everyone can learn and have fun.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Brain,
    title: 'Skill Development',
    description: 'Develop competitive spirit, strategic planning, and decision making.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Target,
    title: 'Practical Application',
    description: 'Everything you learn in the game you can immediately apply in real life.',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Award,
    title: 'Competitive Spirit',
    description: 'Healthy competition motivates players to learn faster and more efficiently.',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Concept',
    description: 'Unique SWITCH mechanics that changes the perspective during the game.',
    color: 'from-green-500 to-emerald-600',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What is{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              EconomySwitch?
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            EconomySwitch is a student company that develops an educational board game and digital application intended for learning financial literacy and circular economy.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-transparent transition-all duration-300 hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Who is the game for?
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'High Schoolers (15+)', desc: 'Basics of financial literacy and circular economy through fun' },
                  { title: 'Youth and students', desc: 'Preparation for independent life and money management' },
                  { title: 'Families', desc: 'Joint learning and quality time spent together' },
                  { title: 'Schools and educators', desc: 'Interactive teaching tool for workshops' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-lg">{item.title}</div>
                      <div className="text-slate-400">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl blur-3xl opacity-20" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    1.000.000
                  </div>
                  <div className="text-slate-400 mb-6">Game goal – first to a million!</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-4 bg-slate-700/50 rounded-xl">
                      <div className="text-emerald-400 font-bold text-xl">2-8</div>
                      <div className="text-slate-400">Players</div>
                    </div>
                    <div className="p-4 bg-slate-700/50 rounded-xl">
                      <div className="text-blue-400 font-bold text-xl">60+</div>
                      <div className="text-slate-400">Minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
