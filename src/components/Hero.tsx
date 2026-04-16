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
    title: 'Welcome to EconomySwitch',
    subtitle: 'The game that changes the way you think',
    description: 'EconomySwitch is an innovative, educational board game that combines fun with learning. Through a dynamic experience, players develop financial literacy and awareness of sustainable development.',
    character: char9,
    characterName: 'Switch',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Money Management',
    subtitle: 'Financial literacy basics',
    description: 'Learn how to balance income and expenses, create a budget, and understand the value of money. Every decision has consequences – just like in real life!',
    character: char1,
    characterName: 'Novak Switchovic',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Investment and Risk',
    subtitle: 'Smart investing',
    description: 'Enter the world of investments! Invest your money, then roll the dice to see if your investment brings a profit.',
    character: char2,
    characterName: 'Leonardo Da Switchy',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Quizzes and Knowledge',
    subtitle: 'Test your knowledge',
    description: 'On question fields, answer questions about financial literacy, sustainable development, and circular economy. Correct answers bring bonus money, while incorrect ones bring minor penalties.',
    character: char3,
    characterName: 'Switchola Jokić',
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Sustainable Development',
    subtitle: 'Green economy of the future',
    description: 'EconomySwitch teaches you how to make decisions that are good for both your wallet and the planet.',
    character: char4,
    characterName: 'Switchopatra',
    color: 'from-red-500 to-rose-600',
  },
  {
    title: 'Innovation',
    subtitle: 'Technology changes the world',
    description: 'The SWITCH mechanic will force you to change your way of thinking.',
    character: char5,
    characterName: 'Wolfgang Switchodeus Mozart',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'New Fields',
    subtitle: 'Entrepreneurship and leadership',
    description: 'Our game features new fields such as listing, investment, auction, insurance, and taxes.',
    character: char6,
    characterName: 'Switchbert Einstein',
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Creativity',
    subtitle: 'Art as an investment',
    description: 'The game pieces represent our mascot Switch as various famous personalities.',
    character: char7,
    characterName: 'Switchola Tesla',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Goal: 1,000,000',
    subtitle: 'Become a millionaire!',
    description: 'The first player to reach one million euros wins! Use all strategies, leverage the SWITCH mechanic, and make smart decisions on your way to success.',
    character: char8,
    characterName: 'Frida Switchlo',
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
                Learn about{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  finance
                </span>{' '}
                through{' '}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  play
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl hidden sm:block"
              >
                EconomySwitch is an innovative board game that combines fun with education.
                Develop financial intelligence, learn about sustainable development, and make
                smart decisions – all through an exciting gaming experience!
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
                  Scroll to learn more
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
                  { value: '2-8', label: 'Players' },
                  { value: '60+', label: 'Minutes' },
                  { value: '15+', label: 'Years' },
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
                <span className="text-xs lg:text-sm text-slate-500">Scroll for more</span>
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
