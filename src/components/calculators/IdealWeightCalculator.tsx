import React, { useState } from 'react';
import { Scale, Info, ArrowRight, CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';
import { AdSlot } from '../common/AdSlot';
import { ADS_CONFIG } from '../../config/ads';

interface IdealWeightCalculatorProps {
  onNavigate: (path: string) => void;
}

export const IdealWeightCalculator: React.FC<IdealWeightCalculatorProps> = ({ onNavigate }) => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [heightCm, setHeightCm] = useState<number>(172);

  const heightInches = heightCm / 2.54;
  const inchesOver5Ft = Math.max(0, heightInches - 60);

  // Devine Formula (1974) - Medical standard for drug dosing
  // Men: 50.0 kg + 2.3 kg per inch over 5 feet
  // Women: 45.5 kg + 2.3 kg per inch over 5 feet
  const devineKg = gender === 'male' ? 50 + 2.3 * inchesOver5Ft : 45.5 + 2.3 * inchesOver5Ft;

  // Robinson Formula (1983)
  // Men: 52 kg + 1.9 kg/inch over 5ft; Women: 49 kg + 1.7 kg/inch over 5ft
  const robinsonKg = gender === 'male' ? 52 + 1.9 * inchesOver5Ft : 49 + 1.7 * inchesOver5Ft;

  // Miller Formula (1983)
  // Men: 56.2 kg + 1.41 kg/inch over 5ft; Women: 53.1 kg + 1.36 kg/inch over 5ft
  const millerKg = gender === 'male' ? 56.2 + 1.41 * inchesOver5Ft : 53.1 + 1.36 * inchesOver5Ft;

  // Healthy BMI Weight Range (Asian standard: 18.5 - 22.9)
  const heightM = heightCm / 100;
  const healthyBmiMin = (18.5 * heightM * heightM).toFixed(1);
  const healthyBmiMax = (22.9 * heightM * heightM).toFixed(1);

  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title="Ideal Body Weight (IBW) Calculator - Devine & Robinson Formulas"
        description="Calculate your Ideal Body Weight using verified clinical formulas (Devine, Robinson, Miller) and South Asian healthy BMI ranges."
        canonicalUrl="https://fithisab.pages.dev/calculators/ideal-weight/"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Calculators', url: '/calculators/' },
            { label: 'Ideal Weight Calculator' }
          ]}
          onNavigate={onNavigate}
        />

        <div className="my-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            Clinical Formulas
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B4F55] mt-2 tracking-tight">
            Ideal Body Weight (IBW) Calculator
          </h1>
          <p className="text-sm sm:text-base text-[#64787A] mt-2 leading-relaxed">
            There is no single &ldquo;perfect&rdquo; weight for every human. This tool calculates your target weight using four recognized medical formulas and provides your healthy Asian BMI range.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#DCEBE9] my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                min="130"
                max="230"
                value={heightCm}
                onChange={(e) => setHeightCm(parseInt(e.target.value) || 170)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438] font-bold"
              />
              <span className="text-[11px] text-[#64787A] mt-1 block">
                ≈ {Math.floor(heightInches / 12)} ft {Math.round(heightInches % 12)} in
              </span>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-[#FAFCFA] border-2 border-[#B6DBD7] space-y-6">
            <div className="border-b border-[#DCEBE9] pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64787A]">
                Primary Standard (Devine Formula):
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0B4F55] mt-1">
                {devineKg.toFixed(1)}{' '}
                <span className="text-xl font-bold text-[#087F82]">kg</span>
                <span className="text-base font-normal text-[#64787A] ml-2">
                  ({(devineKg * 2.20462).toFixed(1)} lbs)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-white p-3.5 rounded-xl border border-[#DCEBE9]">
                <strong className="text-[#183438] block text-sm">Robinson Formula</strong>
                <span className="text-lg font-bold text-[#087F82] mt-1 block">{robinsonKg.toFixed(1)} kg</span>
                <span className="text-[#64787A]">Popular in clinical medicine</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-[#DCEBE9]">
                <strong className="text-[#183438] block text-sm">Miller Formula</strong>
                <span className="text-lg font-bold text-[#087F82] mt-1 block">{millerKg.toFixed(1)} kg</span>
                <span className="text-[#64787A]">Frequently used in athletics</span>
              </div>

              <div className="bg-[#EAF8F7] p-3.5 rounded-xl border border-[#B6DBD7]">
                <strong className="text-[#0B4F55] block text-sm">Asian Healthy BMI Range</strong>
                <span className="text-lg font-bold text-[#087F82] mt-1 block">{healthyBmiMin} - {healthyBmiMax} kg</span>
                <span className="text-[#64787A]">BMI 18.5 – 22.9 kg/m²</span>
              </div>
            </div>
          </div>
        </div>

        <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />

      </div>
    </div>
  );
};
