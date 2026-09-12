import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Flame, Footprints, Dumbbell } from 'lucide-react';
import heroImg from '../../assets/images/fithisab_nutrition_hero_1789232229933.jpg';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
      {/* Background soft ambient radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#16A6A3]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#63A944]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headings, Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF8F7] border border-[#B6DBD7] text-[#087F82] text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-[#16A6A3]" />
              <span>Simple tools for smarter fitness</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B4F55] tracking-tight leading-[1.15]">
              Know Your Calories.{' '}
              <span className="text-[#087F82] block sm:inline">Understand Your Fitness.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#64787A] leading-relaxed max-w-2xl">
              Calculate your BMI, daily calorie needs, protein requirements, and walking distance in seconds. Quickly look up calories and macros in everyday South Asian foods—from plain tawa roti and chicken biryani to chai and lentils.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('/calculators/calorie/')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#087F82] to-[#0B4F55] hover:brightness-105 shadow-md shadow-[#087F82]/25 active:scale-98 transition-all"
              >
                <span>Calculate My Calories</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/food-calories/')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-[#087F82] bg-white hover:bg-[#EAF8F7] border-2 border-[#DCEBE9] hover:border-[#087F82]/40 active:scale-98 transition-all"
              >
                <span>Explore Food Calories</span>
              </button>
            </div>

            {/* Compact Trust Message */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-medium text-[#64787A]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#63A944]" />
                <span>Free tools</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#63A944]" />
                <span>No signup required</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#63A944]" />
                <span>Easy to understand</span>
              </div>
            </div>

          </div>

          {/* Right Column: Nutrition Visual with Floating Glassmorphic Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DCEBE9] bg-white p-2 group">
                <img
                  src={heroImg}
                  alt="FitHisab healthy fresh foods arrangement including apples, citrus, berries, avocados and wholesome nutrition"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  width="700"
                  height="450"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#087F82]/10 via-transparent to-transparent pointer-events-none rounded-2xl" />
              </div>

              {/* Floating Glassmorphism Data Card 1: 520 kcal (Biryani / Meal) */}
              <div
                onClick={() => onNavigate('/food-calories/biryani/')}
                className="cursor-pointer absolute -top-4 sm:-top-6 -left-3 sm:-left-6 glass-panel rounded-2xl p-3 sm:p-3.5 shadow-lg shadow-[#087F82]/10 border border-white/80 hover:border-[#16A6A3] transition-all hover:scale-105 flex items-center gap-3 animate-float"
                title="View Biryani calories"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF8F7] flex items-center justify-center text-[#087F82] shrink-0">
                  <Flame className="w-5 h-5 text-[#087F82]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-bold text-[#64787A] tracking-wider">Meal Energy</div>
                  <div className="text-base font-extrabold text-[#183438]">520 kcal</div>
                </div>
              </div>

              {/* Floating Glassmorphism Data Card 2: 8,000 Steps */}
              <div
                onClick={() => onNavigate('/calculators/steps-to-km/')}
                className="cursor-pointer absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-4 glass-panel rounded-2xl p-3 sm:p-3.5 shadow-lg shadow-[#087F82]/10 border border-white/80 hover:border-[#16A6A3] transition-all hover:scale-105 flex items-center gap-3"
                title="Calculate 8,000 steps distance"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF8F7] flex items-center justify-center text-[#16A6A3] shrink-0">
                  <Footprints className="w-5 h-5 text-[#16A6A3]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-bold text-[#64787A] tracking-wider">Daily Walk</div>
                  <div className="text-base font-extrabold text-[#183438]">8,000 Steps <span className="text-xs font-medium text-[#64787A]">≈ 6.2 km</span></div>
                </div>
              </div>

              {/* Floating Glassmorphism Data Card 3: Protein 25g */}
              <div
                onClick={() => onNavigate('/calculators/protein/')}
                className="cursor-pointer absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 glass-panel rounded-2xl p-3 sm:p-3.5 shadow-lg shadow-[#087F82]/10 border border-white/80 hover:border-[#63A944] transition-all hover:scale-105 flex items-center gap-3"
                title="Calculate protein needs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF8F7] flex items-center justify-center text-[#63A944] shrink-0">
                  <Dumbbell className="w-5 h-5 text-[#63A944]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-bold text-[#64787A] tracking-wider">Protein Target</div>
                  <div className="text-base font-extrabold text-[#183438]">25g <span className="text-xs font-normal text-[#64787A]">/ meal</span></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
