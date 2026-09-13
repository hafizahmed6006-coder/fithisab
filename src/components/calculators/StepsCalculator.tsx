import React, { useState } from 'react';
import { Footprints, Clock, Flame, Compass, Info, CheckCircle2, ArrowRight, HelpCircle, Activity } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';
import { AdSlot } from '../common/AdSlot';
import { ADS_CONFIG } from '../../config/ads';

interface StepsCalculatorProps {
  onNavigate: (path: string) => void;
}

export const StepsCalculator: React.FC<StepsCalculatorProps> = ({ onNavigate }) => {
  const [steps, setSteps] = useState<number>(10000);
  const [heightCm, setHeightCm] = useState<number>(172);
  const [unit, setUnit] = useState<'km' | 'miles'>('km');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [pace, setPace] = useState<'casual' | 'brisk' | 'fast'>('brisk');

  // Height-based stride estimation (Stride = Height * 0.415 for men, 0.413 for women)
  const strideMeters = (heightCm * (gender === 'male' ? 0.415 : 0.413)) / 100;
  
  const distanceKm = (steps * strideMeters) / 1000;
  const distanceMiles = distanceKm * 0.621371;

  // Pace speed in km/h: Casual = 4.0, Brisk = 5.2, Fast = 6.4
  const paceSpeed = pace === 'casual' ? 4.0 : pace === 'brisk' ? 5.2 : 6.4;
  const timeHours = distanceKm / paceSpeed;
  const totalMinutes = Math.round(timeHours * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Calories burned (approx 0.043 kcal/step at brisk, 0.038 at casual, 0.052 at fast)
  const calFactor = pace === 'casual' ? 0.038 : pace === 'brisk' ? 0.044 : 0.052;
  const caloriesBurned = Math.round(steps * calFactor);

  const stepEquivalents = [
    { count: 1000, km: (1000 * strideMeters / 1000).toFixed(2), cal: Math.round(1000 * calFactor) },
    { count: 3000, km: (3000 * strideMeters / 1000).toFixed(2), cal: Math.round(3000 * calFactor) },
    { count: 5000, km: (5000 * strideMeters / 1000).toFixed(2), cal: Math.round(5000 * calFactor) },
    { count: 8000, km: (8000 * strideMeters / 1000).toFixed(2), cal: Math.round(8000 * calFactor) },
    { count: 10000, km: (10000 * strideMeters / 1000).toFixed(2), cal: Math.round(10000 * calFactor) },
    { count: 12000, km: (12000 * strideMeters / 1000).toFixed(2), cal: Math.round(12000 * calFactor) },
    { count: 15000, km: (15000 * strideMeters / 1000).toFixed(2), cal: Math.round(15000 * calFactor) },
    { count: 20000, km: (20000 * strideMeters / 1000).toFixed(2), cal: Math.round(20000 * calFactor) },
  ];

  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="Steps to KM Calculator - 10000 Steps in KM & 5000 Steps in KM"
        description="Convert steps to kilometers and miles accurately. See how many km is 10,000 steps and 5,000 steps, estimated walking time, and calories burned."
        canonicalUrl="https://fithisab.pages.dev/calculators/steps-to-km/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Calculators', url: '/calculators/' },
            { label: 'Steps to KM Calculator' }
          ]}
          onNavigate={onNavigate}
        />

        <div className="my-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            Cardio & Step Tracking
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B4F55] mt-2 tracking-tight">
            Steps to Kilometers & Miles Calculator
          </h1>
          <p className="text-sm sm:text-base text-[#64787A] mt-2 leading-relaxed">
            Wondering &ldquo;how many km is 10,000 steps?&rdquo; Stride length changes significantly with height and pace. FitHisab calculates your exact personal stride for clinical accuracy.
          </p>

          {/* Quick Direct Answers for 10000 steps in km and 5000 steps in km */}
          <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#EAF8F7] to-[#FAFCFA] border-2 border-[#16A6A3]/30 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#087F82] text-white flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#0B4F55] block mb-1">
                  Quick Answer for Daily Step Goals:
                </strong>
                <ul className="text-sm text-[#183438] space-y-1.5 font-medium">
                  <li>
                    <strong>10,000 steps in km:</strong> Approximately <strong>7.0 to 7.8 kilometers</strong> (4.4 to 4.9 miles) for an average adult stride, burning ~380 to 450 calories in about 85 to 100 minutes of brisk walking.
                  </li>
                  <li>
                    <strong>5,000 steps in km:</strong> Approximately <strong>3.5 to 3.9 kilometers</strong> (2.2 to 2.4 miles), burning ~190 to 225 calories in about 40 to 50 minutes of walking.
                  </li>
                </ul>
                <p className="text-xs text-[#64787A] mt-2">
                  Use the calculator below to input your exact height for tailored kilometer conversions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#DCEBE9] my-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Steps Input */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Number of Steps
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="100000"
                  value={steps || ''}
                  onChange={(e) => setSteps(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-4 py-3.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-2xl font-bold text-[#183438]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#64787A]">
                  steps
                </span>
              </div>

              {/* Presets */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[5000, 8000, 10000, 12500, 15000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setSteps(val)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                      steps === val
                        ? 'bg-[#087F82] text-white border-[#087F82]'
                        : 'bg-[#FAFCFA] text-[#64787A] border-[#DCEBE9] hover:bg-[#EAF8F7]'
                    }`}
                  >
                    {val.toLocaleString()} steps
                  </button>
                ))}
              </div>
            </div>

            {/* Height (to derive stride) */}
            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Your Height (cm)
              </label>
              <input
                type="number"
                min="120"
                max="230"
                value={heightCm}
                onChange={(e) => setHeightCm(parseInt(e.target.value) || 170)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] font-bold text-[#183438]"
              />
              <span className="text-[11px] text-[#64787A] mt-1 block">
                Calculated Stride: ~{(strideMeters * 100).toFixed(1)} cm
              </span>
            </div>

            {/* Pace */}
            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Walking Pace
              </label>
              <select
                value={pace}
                onChange={(e) => setPace(e.target.value as any)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] bg-white font-semibold text-[#183438] text-sm"
              >
                <option value="casual">Casual Walk (~4 km/h)</option>
                <option value="brisk">Brisk Walk (~5.2 km/h)</option>
                <option value="fast">Power Walk (~6.4 km/h)</option>
              </select>
            </div>

          </div>

          {/* Results Area */}
          <div className="mt-8 p-6 rounded-2xl bg-[#FAFCFA] border-2 border-[#B6DBD7] space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#DCEBE9] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#64787A]">
                  Total Distance Covered
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0B4F55] mt-1">
                  {distanceKm.toFixed(2)}{' '}
                  <span className="text-xl font-bold text-[#087F82]">km</span>
                  <span className="text-base font-normal text-[#64787A] ml-2">
                    ({distanceMiles.toFixed(2)} miles)
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setUnit('km')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg border ${
                    unit === 'km' ? 'bg-[#087F82] text-white border-[#087F82]' : 'bg-white text-[#64787A]'
                  }`}
                >
                  Metric KM
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('miles')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg border ${
                    unit === 'miles' ? 'bg-[#087F82] text-white border-[#087F82]' : 'bg-white text-[#64787A]'
                  }`}
                >
                  Miles
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-[#DCEBE9] flex items-center gap-3">
                <Flame className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <div className="text-xs text-[#64787A]">Estimated Calories Burned</div>
                  <div className="text-xl font-extrabold text-[#183438]">{caloriesBurned} kcal</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#DCEBE9] flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#087F82] shrink-0" />
                <div>
                  <div className="text-xs text-[#64787A]">Estimated Walking Time</div>
                  <div className="text-xl font-extrabold text-[#183438]">
                    {hours > 0 ? `${hours}h ${minutes}m` : `${minutes} mins`}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Step Conversion Reference Table */}
          <div className="mt-8 pt-6 border-t border-[#DCEBE9]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B4F55] mb-4">
              Quick Step-to-Kilometer Reference Table
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-[#DCEBE9] rounded-xl overflow-hidden">
                <thead className="bg-[#EAF8F7] text-[#0B4F55] font-bold">
                  <tr>
                    <th className="p-3">Steps</th>
                    <th className="p-3">Distance (KM)</th>
                    <th className="p-3">Distance (Miles)</th>
                    <th className="p-3">Calories Burned</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DCEBE9]">
                  {stepEquivalents.map((row) => (
                    <tr key={row.count} className="hover:bg-[#F4F9F8] transition-colors">
                      <td className="p-3 font-bold text-[#183438]">{row.count.toLocaleString()} steps</td>
                      <td className="p-3 text-[#087F82] font-semibold">{row.km} km</td>
                      <td className="p-3 text-[#64787A]">{(parseFloat(row.km) * 0.621371).toFixed(2)} mi</td>
                      <td className="p-3 font-semibold text-amber-600">{row.cal} kcal</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-[#64787A] mt-2 italic">
              Estimated distances and calorie burns are approximate based on standard height-adjusted stride mechanics and moderate brisk pace.
            </p>
          </div>

        </div>

        {/* Steps to KM FAQ & Informational Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCEBE9] my-8 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#0B4F55] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#087F82]" />
            <span>Frequently Asked Questions: Steps, Kilometers & Walking Calories</span>
          </h3>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl bg-[#FAFCFA] border border-[#DCEBE9]">
              <h4 className="text-sm sm:text-base font-bold text-[#183438] mb-1.5 flex items-start gap-2">
                <span className="text-[#087F82] font-extrabold">Q:</span>
                <span>How many kilometers is 10,000 steps?</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#64787A] leading-relaxed pl-5">
                For most adults of average height (160 cm to 180 cm), 10,000 steps equals roughly <strong>7.0 to 7.8 kilometers</strong> (approximately 4.4 to 4.9 miles). A person with a taller stature has a longer stride length and may cover over 8.0 km, while a shorter person may cover around 6.8 km.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAFCFA] border border-[#DCEBE9]">
              <h4 className="text-sm sm:text-base font-bold text-[#183438] mb-1.5 flex items-start gap-2">
                <span className="text-[#087F82] font-extrabold">Q:</span>
                <span>How many kilometers is 5,000 steps?</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#64787A] leading-relaxed pl-5">
                5,000 steps equals roughly <strong>3.5 to 3.9 kilometers</strong> (approximately 2.2 to 2.4 miles). Walking 5,000 steps at a brisk pace typically takes 40 to 50 minutes and burns approximately 190 to 225 calories.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAFCFA] border border-[#DCEBE9]">
              <h4 className="text-sm sm:text-base font-bold text-[#183438] mb-1.5 flex items-start gap-2">
                <span className="text-[#087F82] font-extrabold">Q:</span>
                <span>How many calories do 10,000 steps burn?</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#64787A] leading-relaxed pl-5">
                A 10,000-step walk burns approximately <strong>380 to 460 calories</strong>, depending on your body weight, walking speed, and gradient. It represents an excellent daily cardio target to support a caloric deficit when paired with our{' '}
                <button
                  onClick={() => onNavigate('/calculators/calorie/')}
                  className="text-[#087F82] underline font-medium hover:text-[#0B4F55]"
                >
                  Daily Calorie Calculator
                </button>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAFCFA] border border-[#DCEBE9]">
              <h4 className="text-sm sm:text-base font-bold text-[#183438] mb-1.5 flex items-start gap-2">
                <span className="text-[#087F82] font-extrabold">Q:</span>
                <span>How does height affect steps-to-kilometer conversion?</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#64787A] leading-relaxed pl-5">
                Stride length is biologically proportional to leg length and height. On average, human stride length equals approximately 41.5% of height for men and 41.3% for women. A taller person takes fewer steps to travel one kilometer than someone shorter.
              </p>
            </div>
          </div>
        </div>

        {/* Related Health Calculators */}
        <div className="my-8">
          <h3 className="text-lg font-bold text-[#0B4F55] mb-4">
            Related Fitness Calculators
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate('/calculators/calorie/')}
              className="bg-white rounded-xl border border-[#DCEBE9] hover:border-[#16A6A3] p-4 text-left transition-all group"
            >
              <div className="font-bold text-sm text-[#183438] group-hover:text-[#087F82] mb-1">
                Daily Calorie Calculator
              </div>
              <div className="text-xs text-[#64787A]">
                Calculate your exact maintenance, weight loss, and surplus calorie targets.
              </div>
            </button>
            <button
              onClick={() => onNavigate('/calculators/bmi/')}
              className="bg-white rounded-xl border border-[#DCEBE9] hover:border-[#16A6A3] p-4 text-left transition-all group"
            >
              <div className="font-bold text-sm text-[#183438] group-hover:text-[#087F82] mb-1">
                South Asian BMI Calculator
              </div>
              <div className="text-xs text-[#64787A]">
                Check WHO cardiometabolic cut-offs tailored for South Asian body types.
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
                Look up calories and walking burn times for roti, biryani, samosa, and chai.
              </div>
            </button>
          </div>
        </div>

        <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />

      </div>
    </div>
  );
};
