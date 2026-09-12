import React from 'react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="Terms and Conditions - FitHisab"
        description="FitHisab terms and conditions governing website use, intellectual property, and limitations of liability."
        canonicalUrl="https://fithisab.com/terms/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} onNavigate={onNavigate} />

        <div className="my-8">
          <h1 className="text-3xl font-extrabold text-[#0B4F55] tracking-tight">Terms & Conditions</h1>
          <p className="text-xs text-[#64787A] mt-1">Effective Date: January 1, 2026</p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#DCEBE9] shadow-xs space-y-6 text-sm text-[#183438] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using FitHisab (the &ldquo;Website&rdquo;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">2. Non-Medical Nature of Service</h2>
            <p>
              FitHisab provides fitness calculators, nutrition estimates, step distance conversions, and recipes for informational and educational purposes only. Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">3. Accuracy of Calculations</h2>
            <p>
              While we strive to provide accurate calculations based on recognized formulas (such as Mifflin-St Jeor, Devine, and WHO thresholds) and verified nutritional science, real-world cooking methods, oil quantities, and individual metabolic rates will cause variations. FitHisab makes no warranty that calculations will guarantee specific weight loss or physical outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">4. Intellectual Property</h2>
            <p>
              All original text, interactive software tools, logos, graphics, and compilation of South Asian food nutrition data are protected by applicable copyright and intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">5. Limitation of Liability</h2>
            <p>
              In no event shall FitHisab or its creators be liable for any damages arising out of the use or inability to use the materials or calculators on FitHisab.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
