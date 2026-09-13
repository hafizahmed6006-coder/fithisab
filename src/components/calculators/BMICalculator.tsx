import React, { useState } from 'react';
import { Activity, Info, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';
import { AdSlot } from '../common/AdSlot';
import { ADS_CONFIG } from '../../config/ads';

interface BMICalculatorProps {
  onNavigate: (path: string) => void;
}

export const BMICalculator: React.FC<BMICalculatorProps> = ({ onNavigate }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  
  // Metric state
  const [heightCm, setHeightCm] = useState<number>(172);
  const [weightKg, setWeightKg] = useState<number>(70);

  // Imperial state
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(8);
  const [weightLbs, setWeightLbs] = useState<number>(154);

  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(28);

  // Calculation
  let heightMeters = 1.72;
  let weightInKg = 70;

  if (unit === 'metric') {
    heightMeters = heightCm / 100;
    weightInKg = weightKg;
  } else {
    const totalInches = heightFt * 12 + heightIn;
    heightMeters = (totalInches * 2.54) / 100;
    weightInKg = weightLbs * 0.45359237;
  }

  const bmi = heightMeters > 0 ? Number((weightInKg / (heightMeters * heightMeters)).toFixed(1)) : 0;

  // WHO Standard thresholds vs South Asian Specific cut-offs (WHO expert consultation)
  // Asian cut-offs: < 18.5 Underweight, 18.5 - 22.9 Normal, 23.0 - 27.4 Overweight (Increased risk), >= 27.5 Obese (High risk)
  const getAsianBMICategory = (val: number) => {
    if (val < 18.5) {
      return {
        label: 'Underweight',
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        description: 'Below recommended body weight. Prioritize nutrient-dense calories and strength training.',
        healthy: false
      };
    } else if (val <= 22.9) {
      return {
        label: 'Normal / Healthy (Asian Standard)',
        color: 'text-[#087F82]',
        bgColor: 'bg-[#EAF8F7]',
        borderColor: 'border-[#B6DBD7]',
        description: 'Within optimal low-risk metabolic zone for South Asian individuals.',
        healthy: true
      };
    } else if (val <= 27.4) {
      return {
        label: 'Overweight (Elevated Risk)',
        color: 'text-amber-700',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-300',
        description: 'South Asian genetics show increased visceral adiposity and diabetes risk above BMI 23.',
        healthy: false
      };
    } else {
      return {
        label: 'Obese (High Risk)',
        color: 'text-rose-700',
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-300',
        description: 'Significantly elevated cardiometabolic and insulin resistance risk.',
        healthy: false
      };
    }
  };

  const status = getAsianBMICategory(bmi);

  // Healthy weight range for this height (BMI 18.5 to 22.9 Asian normal)
  const minNormalKg = Number((18.5 * heightMeters * heightMeters).toFixed(1));
  const maxNormalKg = Number((22.9 * heightMeters * heightMeters).toFixed(1));
  const minNormalLbs = Math.round(minNormalKg * 2.20462);
  const maxNormalLbs = Math.round(maxNormalKg * 2.20462);

  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="BMI Calculator - South Asian & WHO Standard Cut-Offs"
        description="Free online Body Mass Index (BMI) calculator with specialized South Asian criteria. Calculate healthy weight ranges and understand your cardiometabolic risk."
        canonicalUrl="https://fithisab.pages.dev/calculators/bmi/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Calculators', url: '/calculators/' },
            { label: 'BMI Calculator' }
          ]}
          onNavigate={onNavigate}
        />

        {/* Page Title & Intro */}
        <div className="my-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            Body Composition Tool
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B4F55] mt-2 tracking-tight">
            BMI Calculator (with South Asian Cut-Offs)
          </h1>
          <p className="text-sm sm:text-base text-[#64787A] mt-2 leading-relaxed">
            Standard BMI calculators use Western benchmarks that miss the high visceral fat and diabetes risk present in South Asian bodies at lower weights. FitHisab evaluates both standard WHO and South Asian specific criteria.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#DCEBE9] my-6">
          
          {/* Unit Toggle */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DCEBE9]">
            <div className="text-sm font-bold text-[#183438]">Select Measurement System:</div>
            <div className="flex bg-[#F4F9F8] p-1 rounded-xl border border-[#DCEBE9]">
              <button
                type="button"
                onClick={() => setUnit('metric')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  unit === 'metric' ? 'bg-[#087F82] text-white shadow-xs' : 'text-[#64787A] hover:text-[#183438]'
                }`}
              >
                Metric (cm, kg)
              </button>
              <button
                type="button"
                onClick={() => setUnit('imperial')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  unit === 'imperial' ? 'bg-[#087F82] text-white shadow-xs' : 'text-[#64787A] hover:text-[#183438]'
                }`}
              >
                Imperial (ft/in, lbs)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Gender & Age */}
            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Gender
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2.5 text-sm font-bold rounded-xl border transition-all ${
                    gender === 'male'
                      ? 'bg-[#EAF8F7] border-[#087F82] text-[#087F82]'
                      : 'bg-[#FAFCFA] border-[#DCEBE9] text-[#64787A]'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2.5 text-sm font-bold rounded-xl border transition-all ${
                    gender === 'female'
                      ? 'bg-[#EAF8F7] border-[#087F82] text-[#087F82]'
                      : 'bg-[#FAFCFA] border-[#DCEBE9] text-[#64787A]'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Age
              </label>
              <input
                type="number"
                min="10"
                max="100"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value) || 25)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] font-bold"
              />
            </div>

            {/* Height Input */}
            {unit === 'metric' ? (
              <div>
                <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                  Height (Centimeters)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="90"
                    max="250"
                    value={heightCm}
                    onChange={(e) => setHeightCm(parseInt(e.target.value) || 170)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] font-bold"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#64787A]">cm</span>
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                  Height (Feet & Inches)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <input
                      type="number"
                      min="3"
                      max="7"
                      value={heightFt}
                      onChange={(e) => setHeightFt(parseInt(e.target.value) || 5)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] font-bold"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#64787A]">ft</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      max="11"
                      value={heightIn}
                      onChange={(e) => setHeightIn(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] font-bold"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#64787A]">in</span>
                  </div>
                </div>
              </div>
            )}

            {/* Weight Input */}
            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Weight ({unit === 'metric' ? 'Kilograms' : 'Pounds'})
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="25"
                  max="300"
                  value={unit === 'metric' ? weightKg : weightLbs}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 0;
                    if (unit === 'metric') setWeightKg(val);
                    else setWeightLbs(val);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] font-bold"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#64787A]">
                  {unit === 'metric' ? 'kg' : 'lbs'}
                </span>
              </div>
            </div>

          </div>

          {/* Results Display */}
          <div className="mt-8 p-6 rounded-2xl bg-[#FAFCFA] border-2 border-[#B6DBD7] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DCEBE9] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#64787A]">
                  Your Calculated Body Mass Index (BMI)
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0B4F55] mt-1">
                  {bmi}{' '}
                  <span className="text-base font-semibold text-[#64787A]">kg/m²</span>
                </div>
              </div>

              <div className={`p-4 rounded-xl border ${status.borderColor} ${status.bgColor} text-left sm:text-right max-w-sm`}>
                <div className={`text-base font-extrabold ${status.color}`}>
                  {status.label}
                </div>
                <div className="text-xs text-[#64787A] mt-1">
                  {status.description}
                </div>
              </div>
            </div>

            {/* Healthy Weight Target */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-4 rounded-xl border border-[#DCEBE9]">
                <span className="text-xs text-[#64787A] block">Healthy Weight Range (Asian standard):</span>
                <span className="text-lg font-bold text-[#087F82]">
                  {unit === 'metric' ? `${minNormalKg} kg - ${maxNormalKg} kg` : `${minNormalLbs} lbs - ${maxNormalLbs} lbs`}
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#DCEBE9]">
                <span className="text-xs text-[#64787A] block">WHO Standard Classification:</span>
                <span className="text-base font-bold text-[#183438]">
                  {bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal (18.5-24.9)' : bmi < 30 ? 'Overweight (25-29.9)' : 'Obese (≥30)'}
                </span>
              </div>
            </div>

            {/* South Asian Medical Context Alert */}
            <div className="p-4 rounded-xl bg-[#EAF8F7] border border-[#B6DBD7] text-xs text-[#183438] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#087F82] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0B4F55]">Why Asian cut-offs matter:</strong> The World Health Organization (WHO) confirmed that people of South Asian descent typically carry more abdominal visceral fat and higher risk of Type 2 diabetes and hypertension at lower BMIs than European populations. Therefore, maintaining a BMI below 23 kg/m² offers superior metabolic protection.
              </div>
            </div>
          </div>

        </div>

        {/* Ad Placement */}
        <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />

        {/* Educational Content & FAQ */}
        <div className="my-10 bg-white rounded-2xl p-6 sm:p-8 border border-[#DCEBE9] space-y-6">
          <h2 className="text-xl font-bold text-[#0B4F55]">
            Frequently Asked Questions about BMI
          </h2>

          <div className="space-y-4 text-sm text-[#64787A]">
            <div>
              <h3 className="font-bold text-[#183438]">What is the formula for calculating BMI?</h3>
              <p className="mt-1">
                BMI is calculated as weight in kilograms divided by height in meters squared: <code>BMI = weight (kg) / (height (m))²</code>. For imperial measurements: <code>BMI = 703 × weight (lbs) / (height (in))²</code>.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#183438]">Does BMI distinguish between muscle and body fat?</h3>
              <p className="mt-1">
                No. BMI cannot differentiate between skeletal muscle mass, bone density, and visceral fat. Bodybuilders or athletes with dense muscle may score in the &ldquo;overweight&rdquo; category despite having very low body fat percentages. For general populations, however, BMI correlates well with health risks.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#183438]">What should I do if my BMI is elevated?</h3>
              <p className="mt-1">
                Begin with small, consistent lifestyle changes: use our <button onClick={() => onNavigate('/calculators/calorie/')} className="text-[#087F82] underline font-semibold">Daily Calorie Calculator</button> to establish a mild 300 kcal deficit, walk 7,500+ daily steps, and reduce added cooking oils in traditional curries.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
