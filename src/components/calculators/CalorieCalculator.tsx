import React, { useState } from 'react';
import { Flame, Sparkles, Target, ArrowRight, Info, AlertCircle, Apple } from 'lucide-react';
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
        title="Daily Calorie Calculator (TDEE & BMR) - Free Macro Targets"
        description="Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). Find the exact calories needed to lose fat, maintain weight, or build muscle."
        canonicalUrl="https://fithisab.com/calculators/calorie/"
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
            Uses the scientifically recognized Mifflin-St Jeor formula to determine your maintenance calories and calculate a sustainable, healthy deficit or surplus.
          </p>
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

        {/* Ad Placement */}
        <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />

      </div>
    </div>
  );
};
