import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="Privacy Policy - FitHisab"
        description="FitHisab privacy policy covering cookie policies, client-side data handling, third-party advertising, and analytics."
        canonicalUrl="https://fithisab.pages.dev/privacy-policy/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} onNavigate={onNavigate} />

        <div className="my-8">
          <h1 className="text-3xl font-extrabold text-[#0B4F55] tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-[#64787A] mt-1">Last Updated: January 2026</p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#DCEBE9] shadow-xs space-y-6 text-sm text-[#183438] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">1. Overview and Commitment</h2>
            <p>
              At FitHisab (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), your privacy is a paramount priority. FitHisab is designed as a client-side health and nutrition utility. All calculator computations (such as BMI, daily calories, protein needs, and steps) execute locally in your web browser. We do not store your private body metrics, height, or weight on centralized database servers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">2. Information We Collect</h2>
            <p>
              We do not require user account registration, passwords, or personal identity documents to use any feature of FitHisab. If you contact us voluntarily via our contact form, we collect your name and email address solely to reply to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">3. Cookies & Advertising Partners</h2>
            <p>
              FitHisab utilizes standard web server logs and non-intrusive cookies to understand website performance and page engagement. We may partner with third-party advertising networks (such as Adsterra or Google AdSense) to display relevant advertisements that support our free services. These third-party vendors may use cookies or web beacons to serve ads based on user visits to this and other websites across the Internet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">4. Managing Your Cookies</h2>
            <p>
              You have the right to accept or decline cookies through your browser settings. Most browsers automatically accept cookies by default, but you can modify your settings to block cookies or notify you when a cookie is placed on your device.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">5. Children&apos;s Privacy</h2>
            <p>
              FitHisab is designed for general audiences interested in fitness and wellness. We do not knowingly collect personal identifiable information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">6. Contact Us</h2>
            <p>
              For any questions regarding this Privacy Policy, you may contact our privacy coordinator via the contact form on this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
