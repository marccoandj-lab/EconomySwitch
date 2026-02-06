import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Monitor, Globe, Users, Zap, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import qrCode from 'figma:asset/c0c50de14a46617bed364859804caf96a6b44e7f.png';

export const WebApp = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-emerald-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Digitalna Verzija Igre
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            EconomySwitch je sada dostupan na svim uređajima. Igrajte bilo kada, bilo gde, bez potrebe za postavljanjem table.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left Column: Description & How to Play */}
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">
                  <Monitor size={16} />
                  <span>O aplikaciji</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Moderna evolucija društvene igre</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Naša web aplikacija donosi kompletno iskustvo EconomySwitch igre u digitalni svet.
                  Zadržali smo svu dubinu i strategiju originalne igre, ali smo eliminisali potrebu za računanjem, papirologijom i fizičkim komponentama.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Idealno za učionice, online radionice ili brzo igranje kod kuće. Sve što vam treba je internet konekcija.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Award className="text-emerald-500" />
                  Kako se igra?
                </h3>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Pravila</h4>
                      <p className="text-slate-600 text-sm">Identicna pravila kao u društvenoj igri. Krećite se po tabli, donosite finansijske odluke i reagujte na ekološke izazove.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Trajanje & Igrači</h4>
                      <p className="text-slate-600 text-sm">Partija traje 30-45 minuta. Podržava 2-6 igrača u istoj sobi ili online.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Bodovanje</h4>
                      <p className="text-slate-600 text-sm">Aplikacija automatski računa sav profit, poreze i ekološki uticaj. Fokusirajte se na strategiju, ne na matematiku.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Benefits & QR */}
            <div className="space-y-8">
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: "Dostupnost", desc: "Pristupite sa telefona, tableta ili računara." },
                  { icon: Users, title: "Multiplayer", desc: "Igrajte sa prijateljima u istoj sobi ili na daljinu." },
                  { icon: Zap, title: "Automatizacija", desc: "Trenutni proračuni i brži tok igre." },
                  { icon: CheckCircle2, title: "Bez papira", desc: "Eco-friendly pristup bez štampanja materijala." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <item.icon className="text-blue-600 mb-4" size={24} />
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Call to Action Card */}
              <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4">Započni igru odmah</h3>
                    <p className="text-blue-100 mb-6">Skeniraj QR kod da pristupiš aplikaciji direktno sa svog telefona.</p>
                    <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 mx-auto md:mx-0">
                      Pokreni u browseru <ArrowRight size={16} />
                    </button>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-lg shrink-0">
                    <img src={qrCode} alt="QR Code" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
