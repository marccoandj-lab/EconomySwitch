import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Check if it's a route link (starts with /) or a hash link (starts with #)
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    // Helper function for offset scrolling
    const smoothScroll = (id: string) => {
      const element = document.querySelector(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (location.pathname === '/') {
      // If on home page, scroll to section
      smoothScroll(href);
    } else {
      // If on other pages, navigate to home with hash
      navigate('/');
      // We need to wait for navigation, then scroll. 
      setTimeout(() => {
        smoothScroll(href);
      }, 300);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#mechanics' },
    { name: 'Education', href: '#education' },
    { name: 'App', href: '/web-app' },
    { name: 'Contact', href: '#footer' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen
        ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo - Text Only */}
        <a
          href="#hero"
          onClick={(e) => handleNavigation(e, '#hero')}
          className="flex items-center group"
        >
          <span className={`font-bold text-2xl tracking-tight transition-colors ${isScrolled || mobileMenuOpen ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
            <span className="text-blue-600">Economy</span>
            <span className="text-emerald-500">Switch</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-slate-600' : 'text-slate-100 hover:text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#footer"
            onClick={(e) => handleNavigation(e, '#footer')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 cursor-pointer ${isScrolled
              ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white hover:shadow-lg'
              : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
          >
            Learn More
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg ${isScrolled || mobileMenuOpen ? 'text-slate-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  variants={itemVariants}
                  className="text-slate-600 font-medium hover:text-emerald-500 block px-4 py-3 text-lg rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                variants={itemVariants}
                href="#footer"
                onClick={(e) => handleNavigation(e, '#footer')}
                className="w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold block shadow-md active:scale-95 transition-transform"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
