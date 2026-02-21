import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rules } from './components/Rules';
import { Fields } from './components/Fields';
import { WebApp } from './components/WebApp';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rules />
        <Fields />
        <WebApp />
      </main>
      <Footer />
    </div>
  );
}
