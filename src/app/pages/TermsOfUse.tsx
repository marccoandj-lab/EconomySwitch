import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">Terms of Use</h1>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>Last updated: February 02, 2026</p>

          <p>
            Please read these terms and conditions carefully before using Our Service.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Acknowledgment</h2>
          <p>
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Intellectual Property</h2>
          <p>
            The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.
          </p>
          <p>
            The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Links to Other Websites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
          </p>
          <p>
            The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Termination</h2>
          <p>
            We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Governing Law</h2>
          <p>
            The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, You can contact us:
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
