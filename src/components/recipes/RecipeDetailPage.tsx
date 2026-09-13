import React from 'react';
import { Clock, Flame, Dumbbell, ChefHat, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';
import { AdSlot } from '../common/AdSlot';
import { ADS_CONFIG } from '../../config/ads';
import { RECIPES_DATA } from '../../data/recipesData';

interface RecipeDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ slug, onNavigate }) => {
  const recipe = RECIPES_DATA.find((r) => r.slug === slug) || RECIPES_DATA[0];

  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title={`${recipe.title} - FitHisab Clean Desi Recipes`}
        description={recipe.description || `Healthy, high-protein ${recipe.title} with ${recipe.caloriesPerServing} kcal and ${recipe.proteinPerServing}g protein.`}
        canonicalUrl={`https://fithisab.pages.dev/recipes/${recipe.slug}/`}
        imageUrl={recipe.image}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Healthy Recipes', url: '/recipes/' },
            { label: recipe.title }
          ]}
          onNavigate={onNavigate}
        />

        <div className="my-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
              {recipe.tag}
            </span>
            <span className="text-xs text-[#64787A] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#087F82]" />
              <span>Prep Time: {recipe.prepTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B4F55] tracking-tight">
            {recipe.title}
          </h1>

          <p className="text-base text-[#64787A] mt-2 leading-relaxed">
            {recipe.description || `Enjoy this clean, delicious take on ${recipe.title}. Provides ${recipe.proteinPerServing}g protein at only ${recipe.caloriesPerServing} calories.`}
          </p>
        </div>

        {/* Recipe Visual & Macros Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8 items-start">
          <div className="md:col-span-6 rounded-2xl overflow-hidden shadow-md border border-[#DCEBE9] bg-white p-2">
            <img
              src={recipe.image}
              alt={recipe.title}
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover rounded-xl"
            />
          </div>

          <div className="md:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-[#DCEBE9] shadow-xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#64787A] mb-3">
                Nutrition Breakdown (Per Serving)
              </h2>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-[#EAF8F7] p-3 rounded-xl">
                  <span className="text-xs text-[#64787A] block">Energy</span>
                  <span className="text-2xl font-extrabold text-[#087F82]">{recipe.caloriesPerServing} kcal</span>
                </div>

                <div className="bg-[#FAFCFA] border border-[#DCEBE9] p-3 rounded-xl">
                  <span className="text-xs text-[#64787A] block">Protein</span>
                  <span className="text-2xl font-extrabold text-[#183438]">{recipe.proteinPerServing}g</span>
                </div>

                <div className="bg-[#FAFCFA] border border-[#DCEBE9] p-3 rounded-xl">
                  <span className="text-xs text-[#64787A] block">Carbohydrates</span>
                  <span className="text-xl font-bold text-[#183438]">{recipe.carbsPerServing}g</span>
                </div>

                <div className="bg-[#FAFCFA] border border-[#DCEBE9] p-3 rounded-xl">
                  <span className="text-xs text-[#64787A] block">Healthy Fats</span>
                  <span className="text-xl font-bold text-[#183438]">{recipe.fatsPerServing}g</span>
                </div>
              </div>
            </div>

            {/* Desi Cooking Secret */}
            <div className="p-4 rounded-2xl bg-[#EAF8F7] border border-[#B6DBD7] text-xs text-[#183438]">
              <strong className="text-[#087F82] block mb-1">Desi Health Tip:</strong>
              {recipe.desiTip}
            </div>
          </div>
        </div>

        <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_TOP} />

        {/* Ingredients & Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          
          {/* Ingredients */}
          <div className="bg-white rounded-2xl p-6 border border-[#DCEBE9] shadow-xs">
            <h3 className="text-lg font-bold text-[#0B4F55] mb-4 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-[#087F82]" />
              <span>Ingredients</span>
            </h3>
            <ul className="space-y-2 text-sm text-[#183438]">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2.5 pb-2 border-b border-[#F4F9F8]">
                  <span className="w-2 h-2 rounded-full bg-[#087F82] mt-1.5 shrink-0" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-2xl p-6 border border-[#DCEBE9] shadow-xs">
            <h3 className="text-lg font-bold text-[#0B4F55] mb-4">
              Step-by-Step Instructions
            </h3>
            <ol className="space-y-3 text-sm text-[#183438]">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#EAF8F7] text-[#087F82] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>

        <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />

      </div>
    </div>
  );
};
