import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rules } from './components/Rules';
import { Fields } from './components/Fields';
import { WebApp } from './components/WebApp';
import { Footer } from './components/Footer';
import { AboutUsPage } from './components/AboutUsPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about-us'>(() => 
    window.location.hash === '#about-us' ? 'about-us' : 'home'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash === '#about-us' ? 'about-us' : 'home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-clip">
      <Navbar />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <About />
            <Rules />
            <Fields />
            <WebApp />
          </>
        ) : (
          <AboutUsPage />
        )}
      </main>
      <Footer />
    </div>
  );
}
