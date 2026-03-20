import { motion } from 'framer-motion';
import { Flag, Coins, XCircle, HelpCircle, List, TrendingUp, Gavel, FileText, Repeat, Lock, Trophy } from 'lucide-react';

const rules = [
  {
    icon: Flag,
    name: 'Start',
    color: 'from-green-500 to-emerald-600',
    description: 'Početno polje. Svaki igrač počinje ovde sa početnim kapitalom.',
    example: 'Svaki igrač dobija 100.000  na početku igre.',
  },
  {
    icon: Coins,
    name: 'Prihod',
    color: 'from-yellow-500 to-amber-600',
    description: 'Kada stanete na ovo polje, dobijate novac.',
    example: 'Plata: +50.000  | Bonus: +20.000 ',
  },
  {
    icon: XCircle,
    name: 'Trošak',
    color: 'from-red-500 to-rose-600',
    description: 'Neplanirani troškovi – gubite novac.',
    example: 'Popravka automobila: -15.000  | Računi: -10.000 ',
  },
  {
    icon: HelpCircle,
    name: 'Pitanje (Kviz)',
    color: 'from-purple-500 to-violet-600',
    description: 'Odgovarate na pitanje sa ponuđenim odgovorima (a, b, c, d).',
    example: 'Tačan odgovor: +20.000  | Netačan: -10.000 ',
  },
  {
    icon: List,
    name: 'Nabrajanje(Samo na fizickoj igri)',
    color: 'from-blue-500 to-indigo-600',
    description: 'Nabrojite što više pojmova iz određene oblasti u roku od 30 sekundi.',
    example: 'Nabroj 5 banaka: Tačan odgovor = +30.000 ',
  },
  {
    icon: TrendingUp,
    name: 'Investicija',
    color: 'from-emerald-500 to-teal-600',
    description: 'Ulažete novac. Bacate kockicu za ishod investicije.',
    example: 'Ulog: 50.000  | Kockica 1-3: Gubitak | 4-6: Dobitak (2x ulog)',
  },
  {
    icon: Gavel,
    name: 'Aukcija',
    color: 'from-orange-500 to-red-600',
    description: 'Igrači licitiraju za specijalnu karticu.',
    example: 'Kartica "Poreski Raj" – oslobađa od poreza jedan krug.',
  },
  {
    icon: FileText,
    name: 'Tax (Porez)',
    color: 'from-slate-500 to-gray-600',
    description: 'Plaćate porez ili prikupljate porez od drugih igrača.',
    example: 'Porez na imovinu: -20.000  | Prikupljeni porez: +40.000 ',
  },
  {
    icon: Repeat,
    name: 'SWITCH Polje',
    color: 'from-cyan-500 to-blue-600',
    description: 'Menja temu igre: Finansijska pismenost ⇄ Održivi razvoj.',
    example: 'Sva naredna polja se tumače u novom kontekstu dok se ne aktivira sledeći SWITCH.',
  },
  {
    icon: Lock,
    name: 'Zatvor',
    color: 'from-slate-600 to-slate-700',
    description: 'Preskačete 1-3 kruga ili plaćate kauciju.',
    example: 'Kaucija: -30.000  ili čekajte 2 kruga.',
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
            Pravila Igre
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Kako se{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              igra?
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            EconomySwitch ima jednostavna pravila koja se lako uče, ali duboku strategiju
            koja se razvija tokom igre. Upoznajte se sa svim poljima i mehanikama.
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
                    <p className="text-xs text-slate-400 font-medium">Primer:</p>
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
                <h3 className="text-2xl lg:text-3xl font-bold">Cilj Igre</h3>
              </div>
              <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                Prvi igrač koji dostigne <strong className="text-white font-bold">1.000.000</strong> pobeđuje u igri!
                Pažljivo upravljajte svojim finansijama, donosite pametne investicione odluke
                i iskoristite SWITCH mehaniku u svoju korist.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold">🎲</div>
                  <div className="text-sm text-emerald-100">Bacaj kockicu</div>
                </div>
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold">💰</div>
                  <div className="text-sm text-emerald-100">Upravljaj novcem</div>
                </div>
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold">🔄</div>
                  <div className="text-sm text-emerald-100">Koristi SWITCH</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                1.000.000
              </div>
              <div className="text-xl text-emerald-200">Pobednički iznos</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
