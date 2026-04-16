import { motion } from 'framer-motion';
import { Flag, Coins, XCircle, HelpCircle, List, TrendingUp, Gavel, FileText, Repeat, Lock, Trophy } from 'lucide-react';

const rules = [
  {
    icon: Flag,
    name: 'Start',
    color: 'from-green-500 to-emerald-600',
    description: 'Starting field. Each player starts here with initial capital.',
    example: 'Each player receives 150,000 at the start of the game.',
  },
  {
    icon: Coins,
    name: 'Income',
    color: 'from-yellow-500 to-amber-600',
    description: 'When you land on this field, you get money.',
    example: 'Salary: +50,000 | Bonus: +20,000',
  },
  {
    icon: XCircle,
    name: 'Expense',
    color: 'from-red-500 to-rose-600',
    description: 'Unplanned expenses – you lose money.',
    example: 'Car repair: -15,000 | Bills: -10,000',
  },
  {
    icon: HelpCircle,
    name: 'Question (Quiz)',
    color: 'from-purple-500 to-violet-600',
    description: 'You answer a question with multiple-choice answers (a, b, c, d).',
    example: 'Correct answer: +20,000 | Incorrect: -10,000',
  },
  {
    icon: List,
    name: 'Enumeration (Physical game only)',
    color: 'from-blue-500 to-indigo-600',
    description: 'List as many terms from a certain field as possible within 30 seconds.',
    example: 'List 5 banks: Correct answer = +30,000',
  },
  {
    icon: TrendingUp,
    name: 'Investment',
    color: 'from-emerald-500 to-teal-600',
    description: 'You invest money. Roll the dice for the outcome of the investment.',
    example: 'Stake: 50,000 | Dice 1-3: Loss | 4-6: Profit (2x stake)',
  },
  {
    icon: Gavel,
    name: 'Auction',
    color: 'from-orange-500 to-red-600',
    description: 'Players bid for a special card.',
    example: 'Card "Tax Haven" – exempts from tax for one round.',
  },
  {
    icon: FileText,
    name: 'Tax',
    color: 'from-slate-500 to-gray-600',
    description: 'You pay tax or collect tax from other players.',
    example: 'Property tax: -20,000 | Collected tax: +40,000',
  },
  {
    icon: Repeat,
    name: 'SWITCH Field',
    color: 'from-cyan-500 to-blue-600',
    description: 'Changes the game theme: Financial Literacy ⇄ Sustainable Development.',
    example: 'All subsequent fields are interpreted in the new context until the next SWITCH is activated.',
  },
  {
    icon: Lock,
    name: 'Jail',
    color: 'from-slate-600 to-slate-700',
    description: 'Skip 1-3 rounds or pay bail.',
    example: 'Bail: -30,000 or wait 2 rounds.',
  },
];

export function Rules() {
  return (
    <section id="rules" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-900/40 text-blue-400 text-sm font-semibold rounded-full mb-4">
            Game Rules
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            How to{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              play?
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            EconomySwitch has simple rules that are easy to learn, but deep strategy
            that develops during the game. Get to know all the fields and mechanics.
          </p>
        </motion.div>

        {/* Rules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-transparent overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${rule.color}`} />

              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${rule.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <rule.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{rule.name}</h3>
                  <p className="text-slate-300 text-sm mb-3">{rule.description}</p>
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <p className="text-xs text-slate-400 font-medium">Example:</p>
                    <p className="text-sm text-slate-300">{rule.example}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Win Condition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Trophy className="w-12 h-12 text-yellow-300" />
                <h3 className="text-2xl lg:text-3xl font-bold">Game Goal</h3>
              </div>
              <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                The first player to reach <strong className="text-white font-bold">1,000,000 SwitchCoins</strong> wins the game!
                Manage your finances carefully, make smart investment decisions
                and use the SWITCH mechanic to your advantage.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold">🎲</div>
                  <div className="text-sm text-emerald-100">Roll the dice</div>
                </div>
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold">💰</div>
                  <div className="text-sm text-emerald-100">Manage money</div>
                </div>
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold">🔄</div>
                  <div className="text-sm text-emerald-100">Use SWITCH</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                1,000,000 SC
              </div>
              <div className="text-xl text-emerald-200">Winning amount</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
