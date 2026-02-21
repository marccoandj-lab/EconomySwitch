import { motion } from 'framer-motion';
import { Mail, Instagram, Heart } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/economyswitchcompany/', label: 'Instagram' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@economyswitchcompany', label: 'TikTok' },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/assets/logo.png" alt="EconomySwitch Logo" className="w-16 h-16 object-contain" />
              <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                EconomySwitch
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              EconomySwitch je inovativna edukativna igra koja uči finansijskoj pismenosti
              i održivom razvoju kroz zabavno i interaktivno iskustvo.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-slate-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:hello@economyswitch.com" className="hover:text-emerald-400 transition-colors">
                economyswitchcompany@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Brzi Linkovi</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'O igri', href: '#about' },
                { name: 'Pravila', href: '#rules' },
                { name: 'Polja & Mehanike', href: '#fields' },
                { name: 'WebApp', href: '#webapp' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <div className="font-medium text-white mb-1">Email</div>
                <a href="mailto:hello@economyswitch.com" className="hover:text-emerald-400 transition-colors">
                  economyswitchcompany@gmail.com
                </a>
              </li>
              <li>
                <div className="font-medium text-white mb-1">Lokacija</div>
                <div>Krusevac, Srbija</div>
              </li>
            </ul>
          </div>
        </motion.div>



        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} EconomySwitch. Sva prava zadržana.
            </div>

            <div className="flex items-center space-x-2 text-slate-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>in Serbia</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
                Politika Privatnosti
              </a>
              <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
                Uslovi Korišćenja
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
