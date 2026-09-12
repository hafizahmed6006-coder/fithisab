import React from 'react';
import { AlertTriangle, HeartPulse, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="Medical & Health Disclaimer - FitHisab"
        description="FitHisab medical and nutritional disclaimer. Understand how our calculations, estimates, and food values are designed for general educational use."
        canonicalUrl="https://fithisab.com/disclaimer/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: 'Medical Disclaimer' }]} onNavigate={onNavigate} />

        <div className="my-8">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Important Notice
          </span>
          <h1 className="text-3xl font-extrabold text-[#0B4F55] mt-2 tracking-tight">
            Medical & Nutritional Disclaimer
          </h1>
          <p className="text-xs text-[#64787A] mt-1">Please read carefully before using FitHisab</p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#DCEBE9] shadow-xs space-y-6 text-sm text-[#183438] leading-relaxed">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Summary:</strong> FitHisab is not a medical practice, healthcare provider, or licensed dietitian. All content and calculators are strictly for informational and educational purposes.
            </p>
          </div>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">1. No Medical Advice</h2>
            <p>
              The information provided by FitHisab—including BMI calculations, basal metabolic rate estimates, total daily energy expenditure (TDEE), protein recommendations, step conversions, and South Asian food calorie counts—does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician, endocrinologist, or other qualified healthcare provider with any questions you may have regarding a medical condition, severe caloric restriction, or vigorous exercise regimen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">2. Nutritional Variance in Traditional Cooking</h2>
            <p>
              South Asian cooking methods vary widely across regions, households, and commercial restaurants. A single tablespoon of cooking oil or desi ghee contains approximately 120 calories and 14 grams of fat. Depending on the amount of oil used in the tarka, frying times, flour grain variety, and portion size, the actual calories in a dish may be higher or lower than our representative estimates.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">3. Health Conditions & Special Populations</h2>
            <p>
              Calculations are based on general population standards and may not be suitable for:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#64787A]">
              <li>Pregnant or lactating individuals</li>
              <li>Children and growing adolescents under 18</li>
              <li>Individuals with clinical eating disorders or a history of disordered eating</li>
              <li>Individuals with chronic kidney disease (who require clinical protein restriction)</li>
              <li>Individuals with uncontrolled diabetes, thyroid disorders, or metabolic conditions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">4. User Responsibility</h2>
            <p>
              You understand and agree that any reliance on the information provided on FitHisab is solely at your own risk. FitHisab disclaims any liability for adverse health outcomes, injuries, or metabolic complications arising from dietary changes or exercise programs initiated based on calculations from this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
