import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import char1 from '../assets/1.png';
import char2 from '../assets/2.png';
import char3 from '../assets/3.png';
import char4 from '../assets/4.png';
import char5 from '../assets/5.png';
import char6 from '../assets/6.png';
import char7 from '../assets/7.png';
import char8 from '../assets/8.png';
import char9 from '../assets/9.png';

const heroSteps = [
  {
    title: 'Dobrodošli u EconomySwitch',
    subtitle: 'Igra koja menja način razmišljanja',
    description: 'EconomySwitch je revolucionarna edukativna društvena igra koja kombinuje zabavu sa učenjem. Kroz dinamično iskustvo, igrači razvijaju finansijsku inteligenciju i svest o održivom razvoju.',
    character: char9,
    characterName: 'Switch',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Upravljanje Novcem',
    subtitle: 'Osnove finansijske pismenosti',
    description: 'Naučite kako da balansirate prihode i troškove, pravite budžet i razumete vrednost novca. Svaka odluka ima posledice – baš kao u stvarnom životu!',
    character: char1,
    characterName: 'Novak - Sportista',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Investicije i Rizik',
    subtitle: 'Pametno ulaganje',
    description: 'Upoznajte se sa svetom investicija! Od berze do nekretnina, naučite kako da procenite rizik i nagradu. Bacite kockicu i vidite da li će vaša investicija doneti profit.',
    character: char2,
    characterName: 'Leonardo Da Switchy',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Kvizovi i Znanje',
    subtitle: 'Proverite svoje znanje',
    description: 'Na poljima sa pitanjima odgovarate na kvizove iz finansijske pismenosti i održivog razvoja. Tačni odgovori donose bonus novac, a netačni – male kazne.',
    character: char3,
    characterName: 'Switchola Jokić',
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Održivi Razvoj',
    subtitle: 'Zelena ekonomija budućnosti',
    description: 'EconomySwitch vas uči kako da donosite odluke koje su dobre i za vaš novčanik i za planetu. Zelene investicije, ekološki projekti i održive prakse su ključ uspeha.',
    character: char4,
    characterName: 'Switchopatra',
    color: 'from-red-500 to-rose-600',
  },
  {
    title: 'Inovacije i Nauka',
    subtitle: 'Tehnologija menja svet',
    description: 'Ulažite in inovativne tehnologije i naučna otkrića. Od solarnih panela do električnih vozila – budućnost pripada onima koji razumeju trendove.',
    character: char5,
    characterName: 'Wolfgang Switchodeus Mozart',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Poslovni Svet',
    subtitle: 'Preduzetništvo i liderstvo',
    description: 'Pokrenite svoj biznis, zapošljavajte radnike i širite carstvo. Dobri lideri donose pametne odluke i inspirišu druge da ih prate.',
    character: char6,
    characterName: 'Switchbert Einstein',
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Kreativnost i Kultura',
    subtitle: 'Umetnost kao investicija',
    description: 'Kultura i umetnost su takođe vredne investicije. Sakupljajte umetnička dela, podržavajte kreativce i gradite kulturno bogatstvo.',
    character: char7,
    characterName: 'Switchola Tesla',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Cilj: 1.000.000 €',
    subtitle: 'Postanite milioner!',
    description: 'Prvi igrač koji dostigne milion evra pobeđuje! Koristite sve strategije, iskoristite SWITCH mehaniku i donosite pametne odluke na putu do uspeha.',
    character: char8,
    characterName: 'Frida - Umetnica',
    color: 'from-purple-500 to-pink-600',
  },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const stepIndex = useTransform(scrollYProgress, [0, 1], [0, heroSteps.length - 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-[500vh]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Animated Background Characters - Three Horizontal Rows (Seamless Infinite Loop) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          {[0, 1, 2].map((rowIdx) => (
            <div
              key={`row-${rowIdx}`}
              className="absolute w-full flex items-center overflow-hidden"
              style={{
                top: `${25 + rowIdx * 25}%`,
                height: '150px',
                zIndex: 10 + rowIdx
              }}
            >
              <motion.div
                className="flex space-x-24 whitespace-nowrap"
                initial={{ x: rowIdx === 1 ? "-50%" : "0%" }}
                animate={{ x: rowIdx === 1 ? "0%" : "-50%" }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ width: "fit-content" }}
              >
                {/* Render the characters twice for a perfect seamless loop */}
                {[...heroSteps.slice(1, 9), ...heroSteps.slice(1, 9), ...heroSteps.slice(1, 9)].map((step, idx) => (
                  <img
                    key={`bg-char-${rowIdx}-${idx}`}
                    src={step.character}
                    alt=""
                    className="w-24 h-24 md:w-32 md:h-32 object-contain grayscale opacity-10 inline-block"
                    style={{ filter: 'blur(1px)' }}
                  />
                ))}
              </motion.div>
            </div>
          ))}
          <div className="absolute inset-0 bg-slate-900/40 z-[5]" />
        </div>

        {/* Floating Elements removed */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 lg:space-y-8"
            >

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight"
              >
                Uči o{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  finansijama
                </span>{' '}
                kroz{' '}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  igru
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl hidden sm:block"
              >
                EconomySwitch je inovativna društvena igra koja kombinuje zabavu sa edukacijom.
                Razvijte finansijsku inteligenciju, naučite o održivom razvoju i donosite pametne
                odluke – sve kroz uzbudljivo iskustvo igranja!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-3 text-emerald-400 font-medium tracking-wide group"
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-lg"
                >
                  ↓
                </motion.span>
                <span className="text-lg bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent italic">
                  Skrolaj da saznaš više
                </span>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-4 lg:pt-8"
              >
                {[
                  { value: '2-6', label: 'Igrača' },
                  { value: '60+', label: 'Minuta' },
                  { value: '10+', label: 'Godina' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative h-[300px] md:h-[400px] lg:h-[600px]">
                {heroSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    style={{
                      opacity: useTransform(stepIndex, [index - 0.5, index, index + 0.5], [0, 1, 0]),
                      scale: useTransform(stepIndex, [index - 0.5, index, index + 0.5], [0.8, 1, 0.8]),
                      x: useTransform(stepIndex, [index - 0.5, index, index + 0.5], [100, 0, -100]),
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    {/* Character Image */}
                    <motion.div
                      className="relative w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 mb-2 lg:mb-6"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-3xl opacity-20`} />
                      <img
                        src={step.character}
                        alt={step.characterName}
                        className="relative w-full h-full object-contain drop-shadow-2xl"
                        style={{ imageRendering: 'auto' }}
                      />
                    </motion.div>

                    {/* Character Info */}
                    <motion.div
                      className="text-center space-y-1 lg:space-y-3 max-w-md px-4"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className={`inline-block px-3 py-0.5 lg:px-4 lg:py-1 bg-gradient-to-r ${step.color} text-white text-xs lg:text-sm font-semibold rounded-full`}>
                        {step.characterName}
                      </div>
                      <h3 className="text-lg md:text-2xl font-bold text-white">{step.title}</h3>
                      <p className="text-xs md:text-base text-slate-300">{step.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <motion.div
                style={{ opacity }}
                className="absolute -bottom-8 lg:-bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 lg:space-y-2"
              >
                <span className="text-xs lg:text-sm text-slate-500">Skroluj za više</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
