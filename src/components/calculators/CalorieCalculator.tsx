import React, { useState } from 'react';
import { Flame, Sparkles, Target, ArrowRight, Info, AlertCircle, Apple, CheckCircle2, HelpCircle } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';
import { AdSlot } from '../common/AdSlot';
import { ADS_CONFIG } from '../../config/ads';

interface CalorieCalculatorProps {
  onNavigate: (path: string) => void;
}

export const CalorieCalculator: React.FC<CalorieCalculatorProps> = ({ onNavigate }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  
  // Metric state
  const [heightCm, setHeightCm] = useState<number>(172);
  const [weightKg, setWeightKg] = useState<number>(72);

  // Imperial state
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(8);
  const [weightLbs, setWeightLbs] = useState<number>(158);

  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(29);
  const [activity, setActivity] = useState<number>(1.375); // Light activity default
  const [goal, setGoal] = useState<'maintain' | 'mild_loss' | 'standard_loss' | 'gain'>('standard_loss');

  // Convert inputs to kg and cm
  let heightInCm = heightCm;
  let weightInKg = weightKg;

  if (unit === 'imperial') {
    const totalInches = heightFt * 12 + heightIn;
    heightInCm = totalInches * 2.54;
    weightInKg = weightLbs * 0.45359237;
  }

  // Mifflin-St Jeor Formula
  const bmr = Math.round(
    gender === 'male'
      ? 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5
      : 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161
  );

  const tdee = Math.round(bmr * activity);

  // Goal calculations
  let targetCalories = tdee;
  if (goal === 'mild_loss') targetCalories = Math.max(1200, tdee - 250);
  else if (goal === 'standard_loss') targetCalories = Math.max(1200, tdee - 500);
  else if (goal === 'gain') targetCalories = tdee + 350;

  // Recommended balanced macronutrients (30% Protein, 40% Carbs, 30% Fat)
  const proteinGrams = Math.round((targetCalories * 0.30) / 4);
  const carbsGrams = Math.round((targetCalories * 0.40) / 4);
  const fatGrams = Math.round((targetCalories * 0.30) / 9);

  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="Daily Calorie Calculator - TDEE, Maintenance & Weight Loss Targets"
        description="Free daily calorie calculator. Calculate your exact maintenance calories, TDEE, and daily deficit targets for healthy fat loss or muscle gain."
        canonicalUrl="https://fithisab.pages.dev/calculators/calorie/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Calculators', url: '/calculators/' },
            { label: 'Daily Calorie Calculator' }
          ]}
          onNavigate={onNavigate}
        />

        {/* Header */}
        <div className="my-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            Metabolism & Energy Balance
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B4F55] mt-2 tracking-tight">
            Daily Calorie & TDEE Calculator
          </h1>
          <p className="text-sm sm:text-base text-[#64787A] mt-2 leading-relaxed">
            Uses the clinically validated Mifflin-St Jeor formula to determine your maintenance calories and calculate a sustainable, healthy deficit or surplus.
          </p>

          {/* Quick Direct Answer Snippet */}
          <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#EAF8F7] to-[#FAFCFA] border-2 border-[#16A6A3]/30 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#087F82] text-white flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#0B4F55] block mb-1">
                  How Daily Calorie Targets Work:
                </strong>
                <p className="text-xs sm:text-sm text-[#183438] leading-relaxed">
                  Your daily calorie needs equal your <strong>Basal Metabolic Rate (BMR)</strong> multiplied by your physical activity level. To lose approximately 0.5 kg (1 lb) of fat per week sustainably, maintain a <strong>500-calorie daily deficit</strong> below your maintenance level (TDEE). Adjusting daily steps or cardio alongside portion control is the safest way to maintain muscle while dropping fat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#DCEBE9] my-6">
          
          {/* Unit Switcher */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DCEBE9]">
            <div className="text-sm font-bold text-[#183438]">System Units:</div>
            <div className="flex bg-[#F4F9F8] p-1 rounded-xl border border-[#DCEBE9]">
              <button
                type="button"
                onClick={() => setUnit('metric')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  unit === 'metric' ? 'bg-[#087F82] text-white shadow-xs' : 'text-[#64787A]'
                }`}
              >
                Metric (cm, kg)
              </button>
              <button
                type="button"
                onClick={() => setUnit('imperial')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  unit === 'imperial' ? 'bg-[#087F82] text-white shadow-xs' : 'text-[#64787A]'
                }`}
              >
                Imperial (ft/in, lbs)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Gender */}
            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Biological Sex
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2.5 text-sm font-bold rounded-xl border transition-all ${
                    gender === 'male' ? 'bg-[#EAF8F7] border-[#087F82] text-[#087F82]' : 'bg-[#FAFCFA] border-[#DCEBE9] text-[#64787A]'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2.5 text-sm font-bold rounded-xl border transition-all ${
                    gender === 'female' ? 'bg-[#EAF8F7] border-[#087F82] text-[#087F82]' : 'bg-[#FAFCFA] border-[#DCEBE9] text-[#64787A]'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Age (years)
              </label>
              <input
                type="number"
                min="14"
                max="95"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value) || 25)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] font-bold"
              />
            </div>

            {/* Height */}
            {unit === 'metric' ? (
              <div>
                <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  min="90"
                  max="240"
                  value={heightCm}
                  onChange={(e) => setHeightCm(parseInt(e.target.value) || 170)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] font-bold"
                />
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                  Height (ft / in)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    min="3"
                    max="7"
                    value={heightFt}
                    onChange={(e) => setHeightFt(parseInt(e.target.value) || 5)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] font-bold text-[#183438]"
                  />
                  <input
                    type="number"
                    min="0"
                    max="11"
                    value={heightIn}
                    onChange={(e) => setHeightIn(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] font-bold text-[#183438]"
                  />
                </div>
              </div>
            )}

            {/* Weight */}
            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Weight ({unit === 'metric' ? 'kg' : 'lbs'})
              </label>
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
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] font-bold"
              />
            </div>

            {/* Activity Level */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Physical Activity Level
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(parseFloat(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] bg-white text-sm font-semibold text-[#183438]"
              >
                <option value="1.2">Sedentary: Desk job, minimal walking, little or no exercise</option>
                <option value="1.375">Light Activity: 5,000–7,000 steps/day, light workouts 1-3 days/wk</option>
                <option value="1.55">Moderate Activity: 8,000–10,000 steps/day or gym workouts 3-5 days/wk</option>
                <option value="1.725">Very Active: Heavy physical labor, strenuous gym workouts 6-7 days/wk</option>
                <option value="1.9">Extremely Active: Athlete, 2x daily training or endurance sports</option>
              </select>
            </div>

            {/* Target Goal */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Select Your Goal
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setGoal('maintain')}
                  className={`p-3 text-xs font-bold rounded-xl border text-center transition-all ${
                    goal === 'maintain' ? 'bg-[#EAF8F7] border-[#087F82] text-[#087F82]' : 'bg-[#FAFCFA] border-[#DCEBE9] text-[#64787A]'
                  }`}
                >
                  Maintain Weight
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('mild_loss')}
                  className={`p-3 text-xs font-bold rounded-xl border text-center transition-all ${
                    goal === 'mild_loss' ? 'bg-[#EAF8F7] border-[#087F82] text-[#087F82]' : 'bg-[#FAFCFA] border-[#DCEBE9] text-[#64787A]'
                  }`}
                >
                  Mild Fat Loss (-250)
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('standard_loss')}
                  className={`p-3 text-xs font-bold rounded-xl border text-center transition-all ${
                    goal === 'standard_loss' ? 'bg-[#EAF8F7] border-[#087F82] text-[#087F82]' : 'bg-[#FAFCFA] border-[#DCEBE9] text-[#64787A]'
                  }`}
                >
                  Steady Fat Loss (-500)
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('gain')}
                  className={`p-3 text-xs font-bold rounded-xl border text-center transition-all ${
                    goal === 'gain' ? 'bg-[#EAF8F7] border-[#087F82] text-[#087F82]' : 'bg-[#FAFCFA] border-[#DCEBE9] text-[#64787A]'
                  }`}
                >
                  Muscle Gain (+350)
                </button>
              </div>
            </div>

          </div>

          {/* Results Area */}
          <div className="mt-8 p-6 rounded-2xl bg-[#FAFCFA] border-2 border-[#B6DBD7] space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#DCEBE9] pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#64787A]">
                  Your Target Daily Calorie Intake
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0B4F55] mt-1 flex items-baseline gap-2">
                  {targetCalories}
                  <span className="text-lg font-semibold text-[#087F82]">kcal / day</span>
                </div>
              </div>

              <div className="text-left sm:text-right text-xs text-[#64787A]">
                <div>Maintenance (TDEE): <strong>{tdee} kcal</strong></div>
                <div>Basal Metabolic Rate (BMR): <strong>{bmr} kcal</strong></div>
              </div>
            </div>

            {/* Macronutrient Split */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B4F55] mb-3 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#087F82]" />
                <span>Recommended Daily Macronutrient Targets</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="bg-[#EAF8F7] p-4 rounded-xl border border-[#B6DBD7]">
                  <span className="text-xs font-bold text-[#087F82] uppercase">Protein (30%)</span>
                  <div className="text-2xl font-extrabold text-[#0B4F55] mt-1">{proteinGrams}g</div>
                  <span className="text-[11px] text-[#64787A] block mt-0.5">Muscle retention & satiety</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DCEBE9]">
                  <span className="text-xs font-bold text-[#183438] uppercase">Carbohydrates (40%)</span>
                  <div className="text-2xl font-extrabold text-[#183438] mt-1">{carbsGrams}g</div>
                  <span className="text-[11px] text-[#64787A] block mt-0.5">Daily energy & endurance</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#DCEBE9]">
                  <span className="text-xs font-bold text-[#183438] uppercase">Healthy Fats (30%)</span>
                  <div className="text-2xl font-extrabold text-[#183438] mt-1">{fatGrams}g</div>
                  <span className="text-[11px] text-[#64787A] block mt-0.5">Hormone synthesis & joints</span>
                </div>
              </div>
            </div>

            {/* South Asian Food Context */}
            <div className="p-4 rounded-xl bg-white border border-[#DCEBE9] text-xs text-[#183438] flex items-start gap-2.5">
              <Apple className="w-4 h-4 text-[#63A944] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#087F82]">Fitting Desi Meals:</strong> Within a {targetCalories} kcal budget, you can comfortably fit 2 dry tawa rotis (240 kcal), 1 bowl of chicken salan (280 kcal), 1 bowl of yellow daal (165 kcal), and a cup of doodh patti tea (135 kcal), while maintaining your caloric deficit!
              </div>
            </div>

          </div>

        </div>

        {/* Daily Calorie FAQ & Informational Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCEBE9] my-8 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#0B4F55] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#087F82]" />
            <span>Frequently Asked Questions: Daily Calorie Calculation</span>
          </h3>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl bg-[#FAFCFA] border border-[#DCEBE9]">
              <h4 className="text-sm sm:text-base font-bold text-[#183438] mb-1.5 flex items-start gap-2">
                <span className="text-[#087F82] font-extrabold">Q:</span>
                <span>How many calories should I eat daily to lose weight?</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#64787A] leading-relaxed pl-5">
                A standard, safe recommendation is a <strong>500-calorie daily deficit</strong> beneath your Total Daily Energy Expenditure (TDEE). This produces a sustainable fat loss rate of roughly 0.5 kg (1 lb) of fat per week without sacrificing lean muscle tissue or slowing down your metabolic rate.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAFCFA] border border-[#DCEBE9]">
              <h4 className="text-sm sm:text-base font-bold text-[#183438] mb-1.5 flex items-start gap-2">
                <span className="text-[#087F82] font-extrabold">Q:</span>
                <span>What is the difference between BMR and TDEE?</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#64787A] leading-relaxed pl-5">
                <strong>BMR (Basal Metabolic Rate)</strong> is the baseline energy your body burns strictly staying alive at complete rest (breathing, cellular repair, organ function). <strong>TDEE (Total Daily Energy Expenditure)</strong> is your BMR plus all physical movement, digestion (TEF), and daily activities. Your daily calorie intake must be planned relative to your TDEE.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAFCFA] border border-[#DCEBE9]">
              <h4 className="text-sm sm:text-base font-bold text-[#183438] mb-1.5 flex items-start gap-2">
                <span className="text-[#087F82] font-extrabold">Q:</span>
                <span>What is the minimum safe daily calorie intake?</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#64787A] leading-relaxed pl-5">
                Generally, adult women should rarely consume below 1,200 calories per day, and adult men should rarely consume below 1,500 calories per day without direct clinical supervision, as eating below these thresholds can lead to nutritional deficiencies and metabolic adaptation.
              </p>
            </div>
          </div>
        </div>

        {/* Related Health Calculators */}
        <div className="my-8">
          <h3 className="text-lg font-bold text-[#0B4F55] mb-4">
            Related Health Tools & Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate('/calculators/steps-to-km/')}
              className="bg-white rounded-xl border border-[#DCEBE9] hover:border-[#16A6A3] p-4 text-left transition-all group"
            >
              <div className="font-bold text-sm text-[#183438] group-hover:text-[#087F82] mb-1">
                Steps to KM Calculator
              </div>
              <div className="text-xs text-[#64787A]">
                Calculate exact distance and calorie burn for 10,000 or 5,000 steps.
              </div>
            </button>
            <button
              onClick={() => onNavigate('/calculators/protein/')}
              className="bg-white rounded-xl border border-[#DCEBE9] hover:border-[#16A6A3] p-4 text-left transition-all group"
            >
              <div className="font-bold text-sm text-[#183438] group-hover:text-[#087F82] mb-1">
                Protein Calculator
              </div>
              <div className="text-xs text-[#64787A]">
                Optimize daily protein grams for muscle retention during calorie deficits.
              </div>
            </button>
            <button
              onClick={() => onNavigate('/food-calories/')}
              className="bg-white rounded-xl border border-[#DCEBE9] hover:border-[#16A6A3] p-4 text-left transition-all group"
            >
              <div className="font-bold text-sm text-[#183438] group-hover:text-[#087F82] mb-1">
                Food Calorie Database
              </div>
              <div className="text-xs text-[#64787A]">
                Accurate calorie counts for roti, chicken biryani, samosa, and paratha.
              </div>
            </button>
          </div>
        </div>

        {/* Ad Placement */}
        <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />

      </div>
    </div>
  );
};
