import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { DigitalAppCallout } from '../components/DigitalAppCallout';
import { BoardMechanic } from '../components/BoardMechanic';
import { EducationFlip } from '../components/EducationFlip';
import { InteractiveMascot } from '../components/InteractiveMascot';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Hero />
      <DigitalAppCallout />
      <BoardMechanic />
      <EducationFlip />
      <InteractiveMascot />
      <Footer />
    </div>
  );
};
