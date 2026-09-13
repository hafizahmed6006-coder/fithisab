import React from 'react';
import { ArrowRight, Clock, Flame, Dumbbell, ChefHat } from 'lucide-react';
import { RECIPES_DATA } from '../../data/recipesData';

interface RecipesSectionProps {
  onNavigate: (path: string) => void;
  isFullPage?: boolean;
}

export const RecipesSection: React.FC<RecipesSectionProps> = ({ onNavigate, isFullPage = false }) => {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-[#DCEBE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            Clean Desi Cooking
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B4F55] mt-3 tracking-tight">
            Healthy & Practical Recipes
          </h2>
          <p className="text-base text-[#64787A] mt-3 leading-relaxed">
            Real South Asian meals reimagined with measured healthy fats and high protein. Taste authentic spices without drowning ingredients in excess oil.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECIPES_DATA.map((recipe) => (
            <div
              key={recipe.slug}
              onClick={() => onNavigate(`/recipes/${recipe.slug}/`)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#DCEBE9] hover:border-[#16A6A3] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-[#0B4F55]">
                    {recipe.tag}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-[#0B4F55]/90 backdrop-blur-xs text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#16A6A3]" />
                    <span>{recipe.prepTime}</span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-[#183438] group-hover:text-[#087F82] transition-colors leading-snug line-clamp-2">
                    {recipe.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#F1F7F6]">
                    <div className="bg-[#EAF8F7] p-2 rounded-xl text-center">
                      <div className="text-[10px] text-[#64787A]">Energy</div>
                      <div className="text-sm font-extrabold text-[#087F82] flex items-center justify-center gap-0.5">
                        <Flame className="w-3.5 h-3.5 text-amber-500" />
                        <span>{recipe.caloriesPerServing} kcal</span>
                      </div>
                    </div>

                    <div className="bg-[#FAFCFA] border border-[#DCEBE9] p-2 rounded-xl text-center">
                      <div className="text-[10px] text-[#64787A]">Protein</div>
                      <div className="text-sm font-extrabold text-[#183438] flex items-center justify-center gap-0.5">
                        <Dumbbell className="w-3.5 h-3.5 text-[#63A944]" />
                        <span>{recipe.proteinPerServing}g</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#64787A] mt-3 italic line-clamp-2">
                    Desi Tip: {recipe.desiTip}
                  </p>
                </div>
              </div>

              <div className="px-4 py-3 bg-[#FAFCFA] border-t border-[#DCEBE9] flex items-center justify-between text-xs font-bold text-[#087F82] group-hover:bg-[#EAF8F7] transition-colors">
                <span>View Full Recipe</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
