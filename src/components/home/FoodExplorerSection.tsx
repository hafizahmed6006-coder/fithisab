import React, { useState } from 'react';
import { Search, ArrowRight, Flame, Info, Check, Filter } from 'lucide-react';
import { FOODS_DATA } from '../../data/foodsData';
import { FoodItem } from '../../types';

interface FoodExplorerSectionProps {
  onNavigate: (path: string) => void;
  isFullPage?: boolean;
}

export const FoodExplorerSection: React.FC<FoodExplorerSectionProps> = ({ onNavigate, isFullPage = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Breads & Grains',
    'Rice Dishes',
    'Meat & Poultry',
    'Lentils & Veg',
    'Snacks & Sweets',
    'Beverages & Dairy',
    'Fruits & Pantry'
  ];

  const filteredFoods = FOODS_DATA.filter((food) => {
    const matchesSearch =
      food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      food.urduName.includes(searchTerm) ||
      food.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || food.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // If on homepage preview, show up to 12 foods
  const displayedFoods = isFullPage ? filteredFoods : filteredFoods.slice(0, 12);

  return (
    <section className={`py-12 sm:py-16 ${isFullPage ? 'bg-white' : 'bg-white border-y border-[#DCEBE9]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            South Asian Nutrition Database
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B4F55] mt-3 tracking-tight">
            Calories in Everyday Foods
          </h2>
          <p className="text-base text-[#64787A] mt-3 leading-relaxed">
            Accurate nutritional breakdown for staple Desi dishes. Values are calibrated for typical home cooking, with clear adjustments for oil, ghee, and serving sizes.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#087F82] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search roti, biryani, chai, banana, samosa..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#FAFCFA] border border-[#DCEBE9] focus:border-[#087F82] focus:ring-4 focus:ring-[#087F82]/10 text-base text-[#183438] placeholder-[#64787A] transition-all shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#087F82] text-white shadow-xs'
                    : 'bg-[#FAFCFA] text-[#64787A] hover:bg-[#EAF8F7] hover:text-[#087F82] border border-[#DCEBE9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Calorie Note Disclaimer */}
          <div className="flex items-center gap-2 text-xs text-[#64787A] bg-[#FAFCFA] p-2.5 rounded-xl border border-[#DCEBE9]/80">
            <Info className="w-4 h-4 text-[#087F82] shrink-0" />
            <span>
              <strong>Approximate Values:</strong> Recipe styles, oil quantities, and dough weights naturally vary. Click any food for deep portion calculators and ghee adjustments.
            </span>
          </div>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedFoods.map((food) => (
            <div
              key={food.id}
              onClick={() => onNavigate(`/food-calories/${food.slug}/`)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#DCEBE9] hover:border-[#16A6A3] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                  <img
                    src={food.image}
                    alt={food.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-[#0B4F55] border border-white/60 shadow-xs">
                    {food.urduName}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-[#0B4F55]/90 backdrop-blur-xs text-white px-2.5 py-1 rounded-xl text-xs font-extrabold flex items-center gap-1 shadow-md">
                    <Flame className="w-3.5 h-3.5 text-[#63A944]" />
                    <span>{food.calories} kcal</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 sm:p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#087F82]">
                    {food.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#183438] group-hover:text-[#087F82] transition-colors mt-0.5 line-clamp-1">
                    {food.name}
                  </h3>
                  <p className="text-xs text-[#64787A] mt-1 line-clamp-1">
                    Typical serving: {food.typicalServing}
                  </p>

                  {/* Macronutrient Pills */}
                  <div className="grid grid-cols-3 gap-1.5 mt-3 pt-3 border-t border-[#F1F7F6] text-center">
                    <div className="bg-[#EAF8F7] py-1.5 px-1 rounded-lg">
                      <span className="text-[10px] block text-[#64787A]">Protein</span>
                      <span className="text-xs font-bold text-[#087F82]">{food.protein}g</span>
                    </div>
                    <div className="bg-[#FAFCFA] border border-[#DCEBE9] py-1.5 px-1 rounded-lg">
                      <span className="text-[10px] block text-[#64787A]">Carbs</span>
                      <span className="text-xs font-bold text-[#183438]">{food.carbs}g</span>
                    </div>
                    <div className="bg-[#FAFCFA] border border-[#DCEBE9] py-1.5 px-1 rounded-lg">
                      <span className="text-[10px] block text-[#64787A]">Fat</span>
                      <span className="text-xs font-bold text-[#183438]">{food.fats}g</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-4 py-3 bg-[#FAFCFA] border-t border-[#DCEBE9] flex items-center justify-between text-xs font-bold text-[#087F82] group-hover:bg-[#EAF8F7] transition-colors">
                <span>View Full Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Foods CTA */}
        {!isFullPage && (
          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('/food-calories/')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#087F82] to-[#0B4F55] hover:brightness-105 shadow-md shadow-[#087F82]/20 active:scale-98 transition-all"
            >
              <span>View All South Asian Foods & Nutrition Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
