import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">Privacy Policy</h1>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>Last updated: February 02, 2026</p>

          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Interpretation and Definitions</h2>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Collecting and Using Your Personal Data</h2>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Types of Data Collected</h3>
          <p>
            <strong>Personal Data</strong><br />
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, Usage Data.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-2">Usage Data</h3>
          <p>
            Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, You can contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>By email: info@economyswitch.rs</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
