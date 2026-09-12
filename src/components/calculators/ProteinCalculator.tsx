import React, { useState } from 'react';
import { Dumbbell, Target, Check, Info, ArrowRight, Utensils } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';
import { AdSlot } from '../common/AdSlot';
import { ADS_CONFIG } from '../../config/ads';

interface ProteinCalculatorProps {
  onNavigate: (path: string) => void;
}

export const ProteinCalculator: React.FC<ProteinCalculatorProps> = ({ onNavigate }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weightKg, setWeightKg] = useState<number>(70);
  const [weightLbs, setWeightLbs] = useState<number>(154);
  const [goal, setGoal] = useState<'sedentary' | 'active' | 'fat_loss' | 'hypertrophy'>('fat_loss');
  const [mealsCount, setMealsCount] = useState<number>(3);

  const effectiveWeightKg = unit === 'metric' ? weightKg : weightLbs * 0.45359237;

  // Protein coefficients (grams per kg)
  const getMultiplierRange = (g: string) => {
    switch (g) {
      case 'sedentary':
        return { min: 0.8, max: 1.0, label: 'Sedentary Wellness (0.8–1.0 g/kg)' };
      case 'active':
        return { min: 1.2, max: 1.4, label: 'Active Lifestyle (1.2–1.4 g/kg)' };
      case 'fat_loss':
        return { min: 1.6, max: 2.0, label: 'Fat Loss & Muscle Retention (1.6–2.0 g/kg)' };
      case 'hypertrophy':
        return { min: 1.8, max: 2.2, label: 'Muscle Building & Strength (1.8–2.2 g/kg)' };
      default:
        return { min: 1.2, max: 1.6, label: 'Balanced' };
    }
  };

  const range = getMultiplierRange(goal);
  const minProtein = Math.round(effectiveWeightKg * range.min);
  const maxProtein = Math.round(effectiveWeightKg * range.max);
  const avgProtein = Math.round((minProtein + maxProtein) / 2);
  const proteinPerMeal = Math.round(avgProtein / mealsCount);

  // South Asian protein food equivalents to reach target
  const eggsNeeded = (avgProtein / 6.3).toFixed(1);
  const chickenGrams = Math.round((avgProtein / 31) * 100);
  const daalBowls = (avgProtein / 8.5).toFixed(1);

  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="Protein Calculator - Daily Grams Target & Desi Food Sources"
        description="Calculate your daily protein intake based on body weight and fitness goals. See practical South Asian meal distributions and food equivalents."
        canonicalUrl="https://fithisab.com/calculators/protein/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Calculators', url: '/calculators/' },
            { label: 'Protein Calculator' }
          ]}
          onNavigate={onNavigate}
        />

        <div className="my-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            Muscle & Satiety
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B4F55] mt-2 tracking-tight">
            Daily Protein Calculator
          </h1>
          <p className="text-sm sm:text-base text-[#64787A] mt-2 leading-relaxed">
            Determine your optimal daily protein target to preserve lean metabolic mass, stay full longer, and fuel muscle recovery.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#DCEBE9] my-6">
          
          {/* Unit Toggle */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DCEBE9]">
            <div className="text-sm font-bold text-[#183438]">Unit System:</div>
            <div className="flex bg-[#F4F9F8] p-1 rounded-xl border border-[#DCEBE9]">
              <button
                type="button"
                onClick={() => setUnit('metric')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  unit === 'metric' ? 'bg-[#087F82] text-white shadow-xs' : 'text-[#64787A]'
                }`}
              >
                Metric (kg)
              </button>
              <button
                type="button"
                onClick={() => setUnit('imperial')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  unit === 'imperial' ? 'bg-[#087F82] text-white shadow-xs' : 'text-[#64787A]'
                }`}
              >
                Imperial (lbs)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Weight Input */}
            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Your Body Weight
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="30"
                  max="300"
                  value={unit === 'metric' ? weightKg : weightLbs}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 0;
                    if (unit === 'metric') setWeightKg(val);
                    else setWeightLbs(val);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-xl font-bold text-[#183438]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#64787A]">
                  {unit === 'metric' ? 'kg' : 'lbs'}
                </span>
              </div>
            </div>

            {/* Meals Count */}
            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Target Meals Per Day
              </label>
              <div className="flex rounded-xl p-1 bg-[#F4F9F8] border border-[#DCEBE9]">
                {[2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setMealsCount(num)}
                    className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                      mealsCount === num ? 'bg-[#087F82] text-white shadow-xs' : 'text-[#64787A]'
                    }`}
                  >
                    {num} Meals
                  </button>
                ))}
              </div>
            </div>

            {/* Goals Selection */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Your Fitness & Health Goal
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'sedentary', title: 'Sedentary Wellness', desc: '0.8–1.0 g/kg (Basic bodily maintenance)' },
                  { id: 'active', title: 'Active Lifestyle', desc: '1.2–1.4 g/kg (Recreational cardio & walking)' },
                  { id: 'fat_loss', title: 'Fat Loss & Muscle Retention', desc: '1.6–2.0 g/kg (Prevents metabolic muscle loss)' },
                  { id: 'hypertrophy', title: 'Muscle Building / Strength', desc: '1.8–2.2 g/kg (Optimal resistance training growth)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      goal === item.id
                        ? 'bg-[#EAF8F7] border-[#087F82] shadow-xs'
                        : 'bg-[#FAFCFA] border-[#DCEBE9] hover:bg-white'
                    }`}
                  >
                    <div className="font-bold text-sm text-[#183438]">{item.title}</div>
                    <div className="text-xs text-[#64787A] mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Area */}
          <div className="mt-8 p-6 rounded-2xl bg-[#FAFCFA] border-2 border-[#B6DBD7] space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#DCEBE9] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#64787A]">
                  Target Daily Protein Target
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0B4F55] mt-1">
                  {minProtein} - {maxProtein}{' '}
                  <span className="text-lg font-bold text-[#087F82]">grams / day</span>
                </div>
              </div>

              <div className="bg-[#EAF8F7] p-3 rounded-xl border border-[#B6DBD7] text-left sm:text-right">
                <span className="text-xs text-[#64787A] block">Per Meal Target ({mealsCount} meals):</span>
                <span className="text-xl font-extrabold text-[#087F82]">~{proteinPerMeal}g / meal</span>
              </div>
            </div>

            {/* South Asian Food Equivalents */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B4F55] mb-3 flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-[#087F82]" />
                <span>How to Hit {avgProtein}g Protein with Common Foods</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-[#DCEBE9]">
                  <strong className="text-[#183438] block text-sm">Large Whole Eggs</strong>
                  <span className="text-[#64787A]">6.3g protein per egg</span>
                  <div className="font-bold text-[#087F82] mt-1">{eggsNeeded} eggs total</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#DCEBE9]">
                  <strong className="text-[#183438] block text-sm">Skinless Chicken Breast</strong>
                  <span className="text-[#64787A]">31g protein per 100g</span>
                  <div className="font-bold text-[#087F82] mt-1">{chickenGrams}g cooked breast</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#DCEBE9]">
                  <strong className="text-[#183438] block text-sm">Yellow Daal Bowls</strong>
                  <span className="text-[#64787A]">8.5g protein per bowl</span>
                  <div className="font-bold text-[#087F82] mt-1">{daalBowls} bowls (combine with roti)</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Ad Placement */}
        <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />

      </div>
    </div>
  );
};
