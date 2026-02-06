import React from 'react';
import { Mail, Instagram, Facebook, Twitter, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        navigate('/');
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
  };

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <span className="text-3xl font-bold">
                    <span className="text-blue-500">Economy</span>
                    <span className="text-emerald-500">Switch</span>
                </span>
             </div>
             <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
               The first educational board game merging finance and ecology.
               Designed for schools, workshops, and family fun.
             </p>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                 <Instagram size={20} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                 <Facebook size={20} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                 <Twitter size={20} />
               </a>
             </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#hero" onClick={(e) => handleNavigation(e, '#hero')} className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#mechanics" onClick={(e) => handleNavigation(e, '#mechanics')} className="hover:text-emerald-400 transition-colors">How to Play</a></li>
              <li><a href="#education" onClick={(e) => handleNavigation(e, '#education')} className="hover:text-emerald-400 transition-colors">Education</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>info@economyswitch.rs</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-emerald-500" />
                <span>Belgrade, Serbia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} EconomySwitch. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
