import React from 'react';
import { ArrowRight, Calculator, Utensils, CheckCircle2, Bookmark } from 'lucide-react';

interface NewsletterCTAProps {
  onNavigate: (path: string) => void;
}

export const NewsletterCTA: React.FC<NewsletterCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B4F55] via-[#087F82] to-[#16A6A3] p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          
          {/* Subtle decorative background circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs border border-white/25 text-xs font-semibold tracking-wide">
              <Bookmark className="w-3.5 h-3.5 text-[#EAF8F7]" />
              <span>Bookmark FitHisab for Daily Reference</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Make Fitness Easier to Understand
            </h2>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
              Skip the expensive nutrition apps with broken food databases. Use FitHisab’s free suite of calculators and verified South Asian food numbers anytime you plan a meal or track your progress.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('/calculators/')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base text-[#0B4F55] bg-white hover:bg-[#EAF8F7] active:scale-98 shadow-md transition-all"
              >
                <Calculator className="w-4 h-4 text-[#087F82]" />
                <span>Explore All Calculators</span>
              </button>

              <button
                onClick={() => onNavigate('/food-calories/')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base text-white bg-white/15 hover:bg-white/25 border border-white/30 active:scale-98 transition-all"
              >
                <Utensils className="w-4 h-4 text-white" />
                <span>Look Up South Asian Foods</span>
              </button>
            </div>

            <div className="pt-4 flex items-center justify-center gap-6 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EAF8F7]" /> No account required
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EAF8F7]" /> 100% Free forever
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
