import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dice5, MessageCircle } from 'lucide-react';
import mascotImg from 'figma:asset/3700863e7b78455d5b8e03280c10a9e790da5134.png';

export const InteractiveMascot = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [isRolling, setIsRolling] = useState(false);
    const [diceValue, setDiceValue] = useState(1);

    const quotes = [
        "Remember: Every dinar invested in knowledge pays the best interest!",
        "Recycling isn't just a duty, it's your return on investment in the planet.",
        "Watch out for taxes! But don't worry, taxes build our roads and schools.",
        "The sun is free – use solar energy on the Green Board!",
        "If you land on Switch, be ready for a change of perspective!",
        "Saving today means security tomorrow. Plan wisely!",
        "The polluter pays! Protect the environment to protect your wallet."
    ];

    const handleRoll = () => {
        if (isRolling) return;
        setIsRolling(true);

        // Animate dice roll logic
        let rollCount = 0;
        const interval = setInterval(() => {
            setDiceValue(Math.floor(Math.random() * 6) + 1);
            rollCount++;
            if (rollCount > 12) {
                clearInterval(interval);
                setIsRolling(false);
                // Pick a random quote distinct from current
                let nextIndex;
                do {
                    nextIndex = Math.floor(Math.random() * quotes.length);
                } while (nextIndex === quoteIndex);
                setQuoteIndex(nextIndex);
            }
        }, 80);
    };

    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-blue-900/20 to-emerald-900/10" />

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white/5 rounded-full blur-xl"
                    style={{
                        width: Math.random() * 200 + 50,
                        height: Math.random() * 200 + 50,
                        left: Math.random() * 100 + "%",
                        top: Math.random() * 100 + "%",
                    }}
                    animate={{
                        y: [0, -50, 0],
                        x: [0, 30, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 border border-white/10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 shadow-2xl">

                    {/* Mascot Side */}
                    <div className="relative w-56 md:w-72 flex-shrink-0 group">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.img
                            src={mascotImg}
                            alt="Switch Mascot"
                            className="w-full h-auto drop-shadow-2xl relative z-10"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Interaction Side */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6"
                        >
                            <MessageCircle size={16} />
                            <span>TIP OF THE DAY</span>
                        </motion.div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Switch knows the answer!
                        </h3>

                        <div className="min-h-[100px] mb-10 relative">
                            <div className="absolute -left-4 -top-4 text-6xl text-white/10 font-serif">"</div>
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={quoteIndex}
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.05, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xl md:text-2xl text-slate-200 italic leading-relaxed relative z-10 font-medium"
                                >
                                    {quotes[quoteIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                            <button
                                onClick={handleRoll}
                                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl text-white font-bold text-lg shadow-lg shadow-emerald-900/20 transition-all hover:scale-105 active:scale-95 overflow-hidden"
                            >
                                {/* Button sheen effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

                                <Dice5 className={`transition-transform duration-700 ${isRolling ? 'animate-spin' : 'group-hover:rotate-180'}`} size={24} />
                                <span>Roll the Dice</span>
                            </button>

                            <div className="flex items-center gap-3">
                                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Result:</span>
                                <motion.div
                                    key={diceValue}
                                    initial={{ scale: 0.8, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    className="w-12 h-12 bg-white text-slate-900 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg"
                                >
                                    {diceValue}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
