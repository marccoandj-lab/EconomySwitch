import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-bold text-slate-200">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mt-4">Page Not Found</h2>
        <p className="text-slate-600 mt-4 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold hover:shadow-lg transition-all hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};
