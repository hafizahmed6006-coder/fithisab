import React, { useState, useId } from 'react';
import { Footprints, ArrowRight, Flame, Clock, Compass, Info, CheckCircle2 } from 'lucide-react';

interface StepsSectionProps {
  onNavigate: (path: string) => void;
  isFullPage?: boolean;
}

export const StepsSection: React.FC<StepsSectionProps> = ({ onNavigate, isFullPage = false }) => {
  const stepsInputId = useId();
  const strideInputId = useId();
  const unitSelectId = useId();
  const [steps, setSteps] = useState<number>(10000);
  const [unit, setUnit] = useState<'km' | 'miles'>('km');
  const [customStride, setCustomStride] = useState<string>(''); // in cm

  // Standard average stride length is approx 76.2 cm (0.762 meters) for men, 67 cm for women ~ average 74 cm (0.74m)
  const defaultStrideMeters = 0.76;
  const effectiveStrideMeters = customStride && Number(customStride) > 30 ? Number(customStride) / 100 : defaultStrideMeters;

  const distanceKm = (steps * effectiveStrideMeters) / 1000;
  const distanceMiles = distanceKm * 0.621371;

  // Average calorie burn per step is approx 0.04 to 0.05 kcal for a 70kg person
  const estimatedCalories = Math.round(steps * 0.042);
  // Average brisk walking time (approx 100 to 120 steps per min)
  const minutesWalked = Math.round(steps / 110);
  const hoursWalked = (minutesWalked / 60).toFixed(1);

  const presets = [
    {
      count: 5000,
      label: '5,000 Steps',
      approxKm: '3.8 km',
      burn: '~210 kcal',
      purpose: 'Basic daily activity baseline'
    },
    {
      count: 8000,
      label: '8,000 Steps',
      approxKm: '6.1 km',
      burn: '~335 kcal',
      purpose: 'Optimal longevity sweet spot'
    },
    {
      count: 10000,
      label: '10,000 Steps',
      approxKm: '7.6 km',
      burn: '~420 kcal',
      purpose: 'Golden standard fitness target'
    },
    {
      count: 15000,
      label: '15,000 Steps',
      approxKm: '11.4 km',
      burn: '~630 kcal',
      purpose: 'High active endurance & fat loss'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#EAF8F7]/70 border-b border-[#DCEBE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-white px-3 py-1 rounded-full border border-[#B6DBD7] shadow-2xs">
            Step & Distance Conversion
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B4F55] mt-3 tracking-tight">
            Turn Your Steps Into Useful Numbers
          </h2>
          <p className="text-base text-[#64787A] mt-3 leading-relaxed">
            Wondering what your pedometer or smartwatch count really means? Convert step counts into exact distance, calories burned, and estimated walking time based on stride length.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Step Calculator Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#DCEBE9]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DCEBE9]">
              <div className="w-10 h-10 rounded-xl bg-[#EAF8F7] flex items-center justify-center text-[#087F82]">
                <Footprints className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#183438]">Live Steps to Distance Converter</h3>
                <p className="text-xs text-[#64787A]">Instant calculation with optional stride customization</p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Step Input */}
              <div>
                <label htmlFor={stepsInputId} className="block text-sm font-bold text-[#183438] mb-1.5">
                  Number of Steps
                </label>
                <div className="relative">
                  <input
                    id={stepsInputId}
                    type="number"
                    min="1"
                    max="100000"
                    step="100"
                    value={steps || ''}
                    onChange={(e) => setSteps(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-4 pr-16 py-3 rounded-xl border border-[#DCEBE9] focus:border-[#087F82] focus:ring-4 focus:ring-[#087F82]/10 text-xl font-bold text-[#183438]"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#64787A]">
                    steps
                  </span>
                </div>
              </div>

              {/* Quick Slider */}
              <div>
                <input
                  type="range"
                  min="1000"
                  max="30000"
                  step="500"
                  value={steps}
                  onChange={(e) => setSteps(Number(e.target.value))}
                  className="w-full accent-[#087F82] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#64787A] mt-1">
                  <span>1,000 steps</span>
                  <span>10,000</span>
                  <span>20,000</span>
                  <span>30,000 steps</span>
                </div>
              </div>

              {/* Units & Stride Length Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label htmlFor={unitSelectId} className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-1.5">
                    Unit Preference
                  </label>
                  <div className="flex rounded-xl p-1 bg-[#F4F9F8] border border-[#DCEBE9]">
                    <button
                      type="button"
                      onClick={() => setUnit('km')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        unit === 'km' ? 'bg-[#087F82] text-white shadow-xs' : 'text-[#64787A] hover:text-[#183438]'
                      }`}
                    >
                      Kilometers (km)
                    </button>
                    <button
                      type="button"
                      onClick={() => setUnit('miles')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        unit === 'miles' ? 'bg-[#087F82] text-white shadow-xs' : 'text-[#64787A] hover:text-[#183438]'
                      }`}
                    >
                      Miles (mi)
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor={strideInputId} className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-1.5">
                    Custom Stride Length (Optional)
                  </label>
                  <div className="relative">
                    <input
                      id={strideInputId}
                      type="number"
                      placeholder="Default ~76 cm"
                      value={customStride}
                      onChange={(e) => setCustomStride(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-[#DCEBE9] focus:border-[#087F82] text-[#183438]"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#64787A]">cm</span>
                  </div>
                </div>
              </div>

              {/* Results Display Area */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#EAF8F7] to-[#FAFCFA] border-2 border-[#16A6A3]/30 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#DCEBE9] pb-3">
                  <span className="text-sm font-semibold text-[#0B4F55]">Calculated Distance:</span>
                  <div className="text-3xl font-extrabold text-[#087F82]">
                    {unit === 'km' ? `${distanceKm.toFixed(2)} km` : `${distanceMiles.toFixed(2)} miles`}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white p-3 rounded-xl border border-[#DCEBE9] flex items-center gap-2.5">
                    <Flame className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                      <div className="text-[11px] text-[#64787A]">Est. Calories Burned</div>
                      <div className="font-bold text-[#183438]">{estimatedCalories} kcal</div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-[#DCEBE9] flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-[#087F82] shrink-0" />
                    <div>
                      <div className="text-[11px] text-[#64787A]">Walking Duration</div>
                      <div className="font-bold text-[#183438]">{minutesWalked} mins ({hoursWalked} hrs)</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#64787A] flex items-start gap-1.5 pt-1">
                  <Info className="w-3.5 h-3.5 text-[#087F82] shrink-0 mt-0.5" />
                  <span>
                    Distance depends on individual height and stride. Taller people cover more distance per step, whereas shorter cadences require more steps per kilometer.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Popular Clickable Step Milestone Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-[#DCEBE9] shadow-xs">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B4F55] mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#087F82]" />
                <span>Popular Step Milestones</span>
              </h4>
              <p className="text-xs text-[#64787A] mb-4">
                Click any preset to load its exact measurements into the calculator:
              </p>

              <div className="space-y-2.5">
                {presets.map((preset) => (
                  <button
                    key={preset.count}
                    type="button"
                    onClick={() => setSteps(preset.count)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                      steps === preset.count
                        ? 'bg-[#EAF8F7] border-[#087F82] shadow-xs'
                        : 'bg-[#FAFCFA] border-[#DCEBE9] hover:border-[#16A6A3] hover:bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#183438] group-hover:text-[#087F82] transition-colors">
                          {preset.label}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white border border-[#DCEBE9] text-[#087F82]">
                          {preset.approxKm}
                        </span>
                      </div>
                      <div className="text-xs text-[#64787A] mt-0.5">
                        Burns {preset.burn} • {preset.purpose}
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${steps === preset.count ? 'text-[#087F82] translate-x-1' : 'text-gray-300 group-hover:text-[#087F82]'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Health Tip Box */}
            <div className="bg-[#FAFCFA] rounded-2xl p-5 border border-[#DCEBE9] text-xs text-[#183438] space-y-2">
              <div className="font-bold text-sm text-[#0B4F55] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#63A944]" />
                <span>Did you know?</span>
              </div>
              <p className="text-[#64787A] leading-relaxed">
                Breaking 10,000 steps into three brisk 15-minute walks immediately after meals (breakfast, lunch, dinner) can reduce post-meal blood sugar surges by up to 30% compared to sitting.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
