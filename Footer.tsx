import React from 'react';
import { Heart, AlertCircle, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#DCEBE9] mt-16 pt-12 pb-8 text-[#183438]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-[#DCEBE9]">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#087F82] to-[#0B4F55] p-1.5 flex items-center justify-center text-white shadow-xs">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
                  <path
                    d="M16 4C22.5 4 27 8.5 27 15C27 22.5 16 28 16 28C16 28 5 22.5 5 15C5 8.5 9.5 4 16 4Z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    fill="rgba(255,255,255,0.12)"
                  />
                  <path
                    d="M10 16L13.5 16L15.5 12L17.5 19L19.5 16L22 16"
                    stroke="#EAF8F7"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex items-center tracking-tight">
                <span className="text-2xl font-extrabold text-[#087F82]">Fit</span>
                <span className="text-2xl font-extrabold text-[#0B4F55]">Hisab</span>
                <span className="w-2 h-2 rounded-full bg-[#63A944] ml-1 self-baseline mt-1.5" />
              </div>
            </div>

            <p className="text-sm text-[#64787A] leading-relaxed max-w-sm">
              Practical, science-informed fitness calculators, step conversion tools, and accurate everyday South Asian food nutrition data. Designed to make healthy living accessible and transparent.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#64787A]">
              <span className="flex items-center gap-1 text-[#087F82] font-semibold bg-[#EAF8F7] px-2.5 py-1 rounded-full border border-[#B6DBD7]">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Free Tools
              </span>
              <span>No registration needed</span>
            </div>
          </div>

          {/* Col 2: Popular Calculators */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B4F55] mb-4">
              Calculators
            </h4>
            <ul className="space-y-2.5 text-sm text-[#64787A]">
              <li>
                <button onClick={() => onNavigate('/calculators/bmi/')} className="hover:text-[#087F82] transition-colors">
                  BMI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/calculators/calorie/')} className="hover:text-[#087F82] transition-colors">
                  Daily Calorie (TDEE)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/calculators/protein/')} className="hover:text-[#087F82] transition-colors">
                  Protein Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/calculators/steps-to-km/')} className="hover:text-[#087F82] transition-colors">
                  Steps to KM & Miles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/calculators/ideal-weight/')} className="hover:text-[#087F82] transition-colors">
                  Ideal Body Weight
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/calculators/water/')} className="hover:text-[#087F82] transition-colors">
                  Water Intake Needs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: South Asian Food Calories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B4F55] mb-4">
              Food Calories
            </h4>
            <ul className="space-y-2.5 text-sm text-[#64787A]">
              <li>
                <button onClick={() => onNavigate('/food-calories/roti/')} className="hover:text-[#087F82] transition-colors">
                  1 Roti Calories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/food-calories/biryani/')} className="hover:text-[#087F82] transition-colors">
                  Chicken Biryani Plate
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/food-calories/rice/')} className="hover:text-[#087F82] transition-colors">
                  Cooked Basmati Rice
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/food-calories/samosa/')} className="hover:text-[#087F82] transition-colors">
                  Aloo Samosa Calories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/food-calories/paratha/')} className="hover:text-[#087F82] transition-colors">
                  Tawa Paratha vs Roti
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/food-calories/chai/')} className="hover:text-[#087F82] transition-colors">
                  Doodh Patti Tea
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/food-calories/')} className="hover:text-[#087F82] font-semibold text-[#087F82] transition-colors">
                  Browse All 20+ Foods →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B4F55] mb-4">
              Guides & Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#64787A]">
              <li>
                <button onClick={() => onNavigate('/guides/')} className="hover:text-[#087F82] transition-colors">
                  Fitness & Diet Guides
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/recipes/')} className="hover:text-[#087F82] transition-colors">
                  Healthy Desi Recipes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/walking/')} className="hover:text-[#087F82] transition-colors">
                  Walking Distance Table
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/')} className="hover:text-[#087F82] transition-colors">
                  About FitHisab
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact/')} className="hover:text-[#087F82] transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/privacy-policy/')} className="hover:text-[#087F82] transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/terms/')} className="hover:text-[#087F82] transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/disclaimer/')} className="hover:text-[#087F82] transition-colors">
                  Medical Disclaimer
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Required Health Information Disclaimer Box */}
        <div className="my-8 p-4 rounded-2xl bg-[#EAF8F7]/60 border border-[#B6DBD7] text-xs text-[#183438] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#087F82] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-[#0B4F55] font-semibold">Informational Disclaimer:</strong> The calculations, calorie data, macronutrient values, and walking distances provided on FitHisab are scientific estimates intended solely for general health, educational, and fitness awareness. South Asian recipes naturally vary in oil, flour density, and serving sizes. None of our tools or content constitute personalized medical advice, diagnosis, or treatment. Always consult a qualified physician or registered dietitian before starting any significant caloric restriction, new dietary regimen, or strenuous exercise program.
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64787A]">
          <p>© {currentYear} FitHisab. All rights reserved. Built for health & fitness clarity.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#087F82] hover:text-[#0B4F55] font-semibold p-1 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
