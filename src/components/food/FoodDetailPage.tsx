import React, { useState } from 'react';
import { Flame, Utensils, CheckCircle2, AlertCircle, ArrowRight, Footprints, Clock, Scale } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';
import { AdSlot } from '../common/AdSlot';
import { ADS_CONFIG } from '../../config/ads';
import { FOODS_DATA } from '../../data/foodsData';

interface FoodDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const FoodDetailPage: React.FC<FoodDetailPageProps> = ({ slug, onNavigate }) => {
  const food = FOODS_DATA.find((f) => f.slug === slug) || FOODS_DATA[0];

  // Dynamic portion options fallback if not custom defined
  const availablePortions = food.portionOptions || [
    { label: `Small Portion (${Math.round(food.servingGrams * 0.75)}g)`, calories: Math.round(food.calories * 0.75), multiplier: 0.75 },
    { label: `Standard Serving (${food.typicalServing})`, calories: food.calories, multiplier: 1.0 },
    { label: `Large Portion (${Math.round(food.servingGrams * 1.35)}g)`, calories: Math.round(food.calories * 1.35), multiplier: 1.35 },
    { label: `2 Servings`, calories: food.calories * 2, multiplier: 2.0 },
  ];

  // Dynamic portion adjuster
  const [selectedPortionIdx, setSelectedPortionIdx] = useState<number>(1); // Default to medium/standard
  const [withGhee, setWithGhee] = useState<boolean>(false);

  const currentPortion = availablePortions[selectedPortionIdx] || availablePortions[0];
  const gheeCalories = withGhee ? (food.gheeOption?.extraCalories || 45) : 0;
  const gheeFat = withGhee ? (food.gheeOption?.extraFat || 5) : 0;

  const totalCalories = Math.round(currentPortion.calories + gheeCalories);
  const totalProtein = Number((food.protein * currentPortion.multiplier).toFixed(1));
  const totalCarbs = Number((food.carbs * currentPortion.multiplier).toFixed(1));
  const totalFats = Number((food.fats * currentPortion.multiplier + gheeFat).toFixed(1));
  const totalFiber = Number(((food.fiber ?? 2) * currentPortion.multiplier).toFixed(1));

  // Burn It Off calculation (Brisk walking: ~4.5 kcal per min, ~110 steps per min)
  const walkingMinutes = Math.round(totalCalories / 4.5);
  const walkingSteps = Math.round(walkingMinutes * 110);

  // Related foods
  const relatedFoods = FOODS_DATA.filter((f) => food.relatedSlugs?.includes(f.slug) || (f.id !== food.id && f.category === food.category)).slice(0, 4);

  const quickAnswerText = food.quickAnswer || `One typical serving of ${food.name} (${food.typicalServing}) contains approximately ${food.calories} calories, ${food.protein}g protein, ${food.carbs}g carbohydrates, and ${food.fats}g fats.`;

  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title={food.seoTitle || `Calories in ${food.name} - FitHisab`}
        description={food.seoDesc || `Discover exact calories, protein, carbs, and fat in ${food.name}. Interactive portion size calculator and walking burn time.`}
        canonicalUrl={`https://fithisab.com/food-calories/${food.slug}/`}
        imageUrl={food.image}
        articleData={{
          datePublished: '2026-01-10T08:00:00Z',
          dateModified: '2026-03-01T08:00:00Z',
          authorName: 'FitHisab Nutrition Team',
          category: food.category
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Food Calories', url: '/food-calories/' },
            { label: food.name }
          ]}
          onNavigate={onNavigate}
        />

        {/* Title & Category Badge */}
        <div className="my-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
              {food.category}
            </span>
            <span className="text-xs font-semibold text-[#64787A] bg-white border border-[#DCEBE9] px-2.5 py-1 rounded-full">
              {food.urduName}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B4F55] mt-3 tracking-tight">
            Calories in {food.name}
          </h1>

          {/* Direct Answer Box (Google Featured Snippet optimized) */}
          <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-[#EAF8F7] to-[#FAFCFA] border-2 border-[#16A6A3]/30 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#087F82] text-white flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#0B4F55] block mb-1">
                  Quick Answer:
                </strong>
                <p className="text-base text-[#183438] leading-relaxed font-medium">
                  {quickAnswerText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Food Visual & Portion Adjuster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8 items-start">
          
          {/* Food Image */}
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#DCEBE9] bg-white p-2">
              <img
                src={food.image}
                alt={`${food.name} high quality nutrition photo`}
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-4/3 object-cover rounded-xl"
              />
              <div className="p-3 text-center text-xs text-[#64787A]">
                {food.servingDetails || `Standard portion: ${food.typicalServing}`}
              </div>
            </div>

            {/* Burn It Off Box */}
            <div className="mt-4 p-4 rounded-2xl bg-white border border-[#DCEBE9] shadow-2xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B4F55] mb-2 flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-[#087F82]" />
                <span>How to Burn It Off</span>
              </h3>
              <p className="text-xs text-[#64787A]">
                To burn off this <strong>{totalCalories} kcal</strong> portion:
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#F1F7F6] text-center">
                <div className="bg-[#EAF8F7] p-2 rounded-xl">
                  <div className="text-[10px] text-[#64787A]">Brisk Walking</div>
                  <div className="text-sm font-extrabold text-[#087F82]">{walkingMinutes} mins</div>
                </div>
                <div className="bg-[#FAFCFA] border border-[#DCEBE9] p-2 rounded-xl">
                  <div className="text-[10px] text-[#64787A]">Steps Count</div>
                  <div className="text-sm font-extrabold text-[#183438]">{walkingSteps.toLocaleString()} steps</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Portion Adjuster */}
          <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-[#DCEBE9] shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#DCEBE9] pb-3">
              <h2 className="text-lg font-bold text-[#183438] flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#087F82]" />
                <span>Interactive Portion Adjuster</span>
              </h2>
              <span className="text-xs font-mono text-[#087F82] font-semibold">Live recalculation</span>
            </div>

            {/* Portion Options */}
            <div>
              <label className="block text-xs font-bold text-[#64787A] uppercase tracking-wider mb-2">
                Select Serving Portion
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                {availablePortions.map((portion, idx) => (
                  <button
                    key={portion.label}
                    type="button"
                    onClick={() => setSelectedPortionIdx(idx)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedPortionIdx === idx
                        ? 'bg-[#EAF8F7] border-[#087F82] shadow-2xs'
                        : 'bg-[#FAFCFA] border-[#DCEBE9] hover:bg-white'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-[#183438]">{portion.label}</div>
                    <div className="text-xs text-[#087F82] font-semibold mt-0.5">{portion.calories} kcal</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Ghee/Oil Toggle */}
            {food.gheeOption && (
              <div className="p-3.5 rounded-xl bg-[#FAFCFA] border border-[#DCEBE9] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#183438]">{food.gheeOption.label}</div>
                  <div className="text-xs text-[#64787A]">
                    Adds +{food.gheeOption.extraCalories} kcal and +{food.gheeOption.extraFat}g pure fat
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={withGhee}
                  onChange={(e) => setWithGhee(e.target.checked)}
                  className="w-5 h-5 accent-[#087F82] rounded cursor-pointer"
                />
              </div>
            )}

            {/* Live Result Output */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#087F82] to-[#0B4F55] text-white">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/80">
                Calculated Energy for {currentPortion.label} {withGhee ? '(with Ghee/Oil)' : ''}
              </div>
              <div className="text-4xl font-extrabold mt-1">
                {totalCalories} <span className="text-lg font-normal text-white/90">kcal</span>
              </div>
            </div>

            {/* Macronutrient breakdown */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-[#EAF8F7] p-2.5 rounded-xl border border-[#B6DBD7]">
                <div className="text-[10px] text-[#64787A] uppercase font-bold">Protein</div>
                <div className="text-base font-extrabold text-[#087F82] mt-0.5">{totalProtein}g</div>
              </div>
              <div className="bg-[#FAFCFA] p-2.5 rounded-xl border border-[#DCEBE9]">
                <div className="text-[10px] text-[#64787A] uppercase font-bold">Carbs</div>
                <div className="text-base font-extrabold text-[#183438] mt-0.5">{totalCarbs}g</div>
              </div>
              <div className="bg-[#FAFCFA] p-2.5 rounded-xl border border-[#DCEBE9]">
                <div className="text-[10px] text-[#64787A] uppercase font-bold">Fat</div>
                <div className="text-base font-extrabold text-[#183438] mt-0.5">{totalFats}g</div>
              </div>
              <div className="bg-[#FAFCFA] p-2.5 rounded-xl border border-[#DCEBE9]">
                <div className="text-[10px] text-[#64787A] uppercase font-bold">Fiber</div>
                <div className="text-base font-extrabold text-[#183438] mt-0.5">{totalFiber}g</div>
              </div>
            </div>

          </div>

        </div>

        {/* Ad Placement */}
        <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />

        {/* Detailed Nutrition Facts Table & Explanation */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCEBE9] my-8 space-y-6">
          <h2 className="text-xl font-bold text-[#0B4F55]">
            Nutrition Facts & Nutritional Breakdown
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border border-[#DCEBE9] rounded-xl overflow-hidden">
              <thead className="bg-[#EAF8F7] text-[#0B4F55] font-bold">
                <tr>
                  <th className="p-3">Nutrient</th>
                  <th className="p-3">Amount per Serving ({food.typicalServing})</th>
                  <th className="p-3">% Daily Value*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCEBE9]">
                <tr>
                  <td className="p-3 font-semibold text-[#183438]">Calories</td>
                  <td className="p-3 font-bold text-[#087F82]">{food.calories} kcal</td>
                  <td className="p-3 text-[#64787A]">{Math.round((food.calories / 2000) * 100)}%</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#183438]">Total Fat</td>
                  <td className="p-3">{food.fats} g</td>
                  <td className="p-3 text-[#64787A]">{Math.round((food.fats / 70) * 100)}%</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#183438]">Total Carbohydrates</td>
                  <td className="p-3">{food.carbs} g</td>
                  <td className="p-3 text-[#64787A]">{Math.round((food.carbs / 260) * 100)}%</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#183438]">Dietary Fiber</td>
                  <td className="p-3">{food.fiber} g</td>
                  <td className="p-3 text-[#64787A]">{Math.round((food.fiber / 28) * 100)}%</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#183438]">Protein</td>
                  <td className="p-3">{food.protein} g</td>
                  <td className="p-3 text-[#64787A]">{Math.round((food.protein / 60) * 100)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#64787A]">
            *Percent Daily Values are based on a 2,000 calorie reference diet. Your daily values may be higher or lower depending on your calorie needs.
          </p>
        </div>

        {/* Oil / Cooking Impact Explanation */}
        <div className="bg-[#EAF8F7]/60 rounded-2xl p-6 sm:p-8 border border-[#B6DBD7] my-8 space-y-3">
          <h3 className="text-lg font-bold text-[#0B4F55] flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#087F82]" />
            <span>How Cooking Oil and Ghee Alter Calories</span>
          </h3>
          <p className="text-sm text-[#183438] leading-relaxed">
            {food.oilImpact}
          </p>
        </div>

        {/* Food Comparison Section */}
        {food.comparison && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCEBE9] my-8 space-y-3">
            <h3 className="text-lg font-bold text-[#0B4F55]">
              Dietary Comparison: {food.name}
            </h3>
            <p className="text-sm text-[#64787A] leading-relaxed">
              {food.comparison}
            </p>
          </div>
        )}

        {/* Related Foods */}
        <div className="my-10">
          <h3 className="text-lg font-bold text-[#0B4F55] mb-4">
            Related South Asian Foods
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedFoods.map((rel) => (
              <button
                key={rel.id}
                onClick={() => onNavigate(`/food-calories/${rel.slug}/`)}
                className="bg-white rounded-xl border border-[#DCEBE9] hover:border-[#16A6A3] p-3 text-left group transition-all"
              >
                <img
                  src={rel.image}
                  alt={rel.name}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 object-cover rounded-lg mb-2"
                />
                <div className="font-bold text-xs text-[#183438] group-hover:text-[#087F82] line-clamp-1">
                  {rel.name}
                </div>
                <div className="text-[11px] text-[#64787A]">
                  ~{rel.calories} kcal ({rel.typicalServing})
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
