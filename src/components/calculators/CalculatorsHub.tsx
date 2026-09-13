import React from 'react';
import { Activity, Flame, Dumbbell, Footprints, Scale, Droplets, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';
import { AdSlot } from '../common/AdSlot';
import { ADS_CONFIG } from '../../config/ads';
import { CALCULATORS_DATA } from '../../data/calculatorsData';

interface CalculatorsHubProps {
  onNavigate: (path: string) => void;
}

export const CalculatorsHub: React.FC<CalculatorsHubProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6 text-[#087F82]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#087F82]" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-[#087F82]" />;
      case 'Footprints': return <Footprints className="w-6 h-6 text-[#087F82]" />;
      case 'Scale': return <Scale className="w-6 h-6 text-[#087F82]" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-[#087F82]" />;
      default: return <Activity className="w-6 h-6 text-[#087F82]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="Fitness & Health Calculators - FitHisab"
        description="Explore all free fitness calculators on FitHisab: BMI with South Asian criteria, TDEE daily calories, protein targets, steps to km, and ideal body weight."
        canonicalUrl="https://fithisab.pages.dev/calculators/"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Fitness Calculators' }]} onNavigate={onNavigate} />

        <div className="my-8 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3.5 py-1 rounded-full border border-[#B6DBD7]">
            Interactive Health Tools
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B4F55] mt-3 tracking-tight">
            Scientific Fitness & Nutrition Calculators
          </h1>
          <p className="text-base text-[#64787A] mt-3 leading-relaxed">
            Every calculator is calibrated with recognized scientific formulas to give you clear, actionable health insights. Choose a tool below to begin.
          </p>
        </div>

        {/* Calculators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {CALCULATORS_DATA.map((calc) => (
            <div
              key={calc.id}
              onClick={() => onNavigate(calc.path)}
              className="group cursor-pointer bg-white rounded-2xl p-6 sm:p-7 border border-[#DCEBE9] hover:border-[#16A6A3] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF8F7] group-hover:bg-[#087F82] flex items-center justify-center transition-colors">
                    <div className="group-hover:text-white transition-colors">
                      {getIcon(calc.iconName)}
                    </div>
                  </div>
                  {calc.badge && (
                    <span className="text-[11px] font-semibold text-[#087F82] bg-[#EAF8F7] px-2.5 py-0.5 rounded-full border border-[#B6DBD7]">
                      {calc.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-[#183438] group-hover:text-[#087F82] transition-colors">
                  {calc.name}
                </h2>
                <p className="text-sm text-[#64787A] mt-2.5 leading-relaxed">
                  {calc.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1F7F6] flex items-center justify-between text-sm font-bold text-[#087F82] group-hover:text-[#0B4F55]">
                <span>Launch Calculator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />

      </div>
    </div>
  );
};
