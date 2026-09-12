import React from 'react';
import { ArrowRight, Activity, Flame, Dumbbell, Footprints, Scale, Droplets } from 'lucide-react';
import { CALCULATORS_DATA } from '../../data/calculatorsData';

interface PopularCalculatorsProps {
  onNavigate: (path: string) => void;
}

export const PopularCalculators: React.FC<PopularCalculatorsProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#087F82]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#087F82]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#087F82]" />;
      case 'Footprints':
        return <Footprints className="w-6 h-6 text-[#087F82]" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-[#087F82]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#087F82]" />;
      default:
        return <Activity className="w-6 h-6 text-[#087F82]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FAFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            Interactive Health Tools
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B4F55] mt-3 tracking-tight">
            Popular Fitness Calculators
          </h2>
          <p className="text-base text-[#64787A] mt-3 leading-relaxed">
            Science-informed algorithms calibrated for practical everyday health, weight management, and activity tracking. Instant calculations with no sign-ups or paywalls.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CALCULATORS_DATA.map((calc) => (
            <div
              key={calc.id}
              onClick={() => onNavigate(calc.path)}
              className="group cursor-pointer bg-white rounded-2xl p-6 sm:p-7 border border-[#DCEBE9] hover:border-[#16A6A3] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
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

                <h3 className="text-lg sm:text-xl font-bold text-[#183438] group-hover:text-[#087F82] transition-colors">
                  {calc.name}
                </h3>
                <p className="text-sm text-[#64787A] mt-2 leading-relaxed">
                  {calc.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1F7F6] flex items-center justify-between text-sm font-bold text-[#087F82] group-hover:text-[#0B4F55]">
                <span>Calculate Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
