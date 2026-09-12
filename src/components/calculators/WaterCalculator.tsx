import React, { useState } from 'react';
import { Droplets, Sun, Activity, Info, Check } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';
import { AdSlot } from '../common/AdSlot';
import { ADS_CONFIG } from '../../config/ads';

interface WaterCalculatorProps {
  onNavigate: (path: string) => void;
}

export const WaterCalculator: React.FC<WaterCalculatorProps> = ({ onNavigate }) => {
  const [weightKg, setWeightKg] = useState<number>(70);
  const [exerciseMinutes, setExerciseMinutes] = useState<number>(30);
  const [climate, setClimate] = useState<'moderate' | 'hot'>('hot'); // South Asian default is often warm/hot

  // Baseline water need: 35ml per kg of body weight
  let baselineLiters = (weightKg * 35) / 1000;

  // Add 350ml per 30 minutes of exercise
  const exerciseAdditionLiters = (exerciseMinutes / 30) * 0.35;

  // Add 500ml for hot/humid climate
  const climateAdditionLiters = climate === 'hot' ? 0.5 : 0;

  const totalLiters = (baselineLiters + exerciseAdditionLiters + climateAdditionLiters).toFixed(1);
  const totalGlasses = Math.round(parseFloat(totalLiters) / 0.25); // 250ml glass
  const totalBottles = (parseFloat(totalLiters) / 0.5).toFixed(1); // 500ml bottle
  const totalOunces = Math.round(parseFloat(totalLiters) * 33.814);

  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="Water Intake Calculator - Daily Hydration & Glass Count"
        description="Calculate your optimal daily water intake based on body weight, daily exercise time, and hot climate factors. Keep your metabolism running smoothly."
        canonicalUrl="https://fithisab.com/calculators/water/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Calculators', url: '/calculators/' },
            { label: 'Water Intake Calculator' }
          ]}
          onNavigate={onNavigate}
        />

        <div className="my-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            Vital Hydration
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B4F55] mt-2 tracking-tight">
            Daily Water Intake Calculator
          </h1>
          <p className="text-sm sm:text-base text-[#64787A] mt-2 leading-relaxed">
            Hydration affects energy levels, kidney filtration, hunger regulation, and workout stamina. Calculate your ideal daily fluid target based on your lifestyle.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#DCEBE9] my-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Body Weight (kg)
              </label>
              <input
                type="number"
                min="30"
                max="250"
                value={weightKg}
                onChange={(e) => setWeightKg(parseInt(e.target.value) || 60)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Daily Exercise (Minutes)
              </label>
              <input
                type="number"
                min="0"
                max="240"
                step="15"
                value={exerciseMinutes}
                onChange={(e) => setExerciseMinutes(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Weather Climate
              </label>
              <select
                value={climate}
                onChange={(e) => setClimate(e.target.value as any)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] bg-white font-semibold text-[#183438] text-sm"
              >
                <option value="hot">Hot / Summer / Humid (+0.5L)</option>
                <option value="moderate">Moderate / Air-Conditioned</option>
              </select>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-[#FAFCFA] border-2 border-[#B6DBD7] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#DCEBE9] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#64787A]">
                  Recommended Total Fluid Intake
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0B4F55] mt-1">
                  {totalLiters}{' '}
                  <span className="text-xl font-bold text-[#087F82]">Liters / day</span>
                  <span className="text-sm font-normal text-[#64787A] ml-2">
                    ({totalOunces} fl oz)
                  </span>
                </div>
              </div>

              <div className="text-left sm:text-right bg-[#EAF8F7] p-3 rounded-xl border border-[#B6DBD7]">
                <div className="text-xl font-extrabold text-[#087F82]">{totalGlasses} Glasses</div>
                <div className="text-xs text-[#64787A]">Standard 250ml glasses</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-3.5 rounded-xl border border-[#DCEBE9]">
                <strong className="text-[#183438] block text-sm">500ml Water Bottles</strong>
                <span className="text-lg font-bold text-[#087F82] mt-1 block">{totalBottles} bottles</span>
                <span className="text-[#64787A]">Convenient for work or gym bags</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-[#DCEBE9]">
                <strong className="text-[#183438] block text-sm">Tea & Coffee Note</strong>
                <span className="text-[#64787A] block mt-1">
                  Unsweetened green tea or light chai counts toward fluids, but pure water should form the core 75%+ of your intake.
                </span>
              </div>
            </div>
          </div>
        </div>

        <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />

      </div>
    </div>
  );
};
