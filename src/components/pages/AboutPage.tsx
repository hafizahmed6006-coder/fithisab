import React from 'react';
import { ShieldCheck, Heart, Users, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="About FitHisab - Practical Health & South Asian Nutrition"
        description="Learn about FitHisab's mission: providing free, scientifically grounded fitness calculators and everyday South Asian food calorie transparency."
        canonicalUrl="https://fithisab.pages.dev/about/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[{ label: 'About FitHisab' }]}
          onNavigate={onNavigate}
        />

        <div className="my-8 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            Our Mission & Story
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B4F55] mt-3 tracking-tight">
            Making Fitness & Desi Nutrition Transparent
          </h1>
          <p className="text-base text-[#64787A] mt-3 leading-relaxed">
            FitHisab was born out of a simple frustration: mainstream Western fitness apps don’t understand how everyday South Asian dishes are cooked.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#DCEBE9] shadow-xs space-y-8 text-sm sm:text-base text-[#183438] leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#0B4F55] mb-3">
              The Problem with Standard Fitness Apps
            </h2>
            <p>
              When a Pakistani, Indian, or South Asian user downloads a calorie tracker, looking up a single homemade roti returns values from 60 calories to 350 calories with zero context on raw flour weight or cooking ghee. Searching for chicken salan or daal chawal yields either completely irrelevant Western equivalents or crowd-sourced entries riddled with errors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B4F55] mb-3">
              Why We Built FitHisab
            </h2>
            <p>
              “Hisab” signifies accountability and clear mathematical reckoning. We believe you shouldn’t have to abandon your cultural heritage or family dinners to reach your fitness targets. By measuring raw ingredients, dry flour weights, and oil fractions, FitHisab brings scientific clarity to traditional kitchens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#EAF8F7] border border-[#B6DBD7]">
              <ShieldCheck className="w-6 h-6 text-[#087F82] mb-2" />
              <h3 className="font-bold text-[#0B4F55] text-sm">100% Free Forever</h3>
              <p className="text-xs text-[#64787A] mt-1">No monthly subscription fees, paywalls, or forced accounts.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#EAF8F7] border border-[#B6DBD7]">
              <Sparkles className="w-6 h-6 text-[#087F82] mb-2" />
              <h3 className="font-bold text-[#0B4F55] text-sm">Evidence-Based</h3>
              <p className="text-xs text-[#64787A] mt-1">Mifflin-St Jeor, Devine formulas, and WHO South Asian BMI criteria.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#EAF8F7] border border-[#B6DBD7]">
              <Users className="w-6 h-6 text-[#087F82] mb-2" />
              <h3 className="font-bold text-[#0B4F55] text-sm">Community Focused</h3>
              <p className="text-xs text-[#64787A] mt-1">Refined by community feedback and traditional kitchen realities.</p>
            </div>
          </div>

          <div className="border-t border-[#DCEBE9] pt-6">
            <h2 className="text-lg font-bold text-[#0B4F55] mb-2">
              Ready to start your journey?
            </h2>
            <p className="text-[#64787A] mb-4">
              Explore our calculators or search our nutritional database:
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('/calculators/calorie/')}
                className="px-5 py-2.5 rounded-xl bg-[#087F82] text-white font-bold text-xs hover:bg-[#0B4F55] transition-all"
              >
                Calculate Daily Calories
              </button>
              <button
                onClick={() => onNavigate('/food-calories/')}
                className="px-5 py-2.5 rounded-xl bg-white border border-[#DCEBE9] text-[#087F82] font-bold text-xs hover:bg-[#EAF8F7] transition-all"
              >
                Browse Food Calories
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
