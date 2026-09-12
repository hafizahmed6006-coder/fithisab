import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Calculator, Utensils, BookOpen, ChefHat, ArrowRight } from 'lucide-react';
import { FOODS_DATA } from '../../data/foodsData';
import { CALCULATORS_DATA } from '../../data/calculatorsData';
import { GUIDES_DATA } from '../../data/guidesData';
import { RECIPES_DATA } from '../../data/recipesData';
import { SearchResultItem } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal via custom event or prop
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      // Default recommended quick items
      const defaults: SearchResultItem[] = [
        {
          title: 'BMI Calculator',
          category: 'Calculator',
          url: '/calculators/bmi/',
          description: 'Assess body mass index with Asian risk thresholds'
        },
        {
          title: 'Roti / Chapati Calories',
          category: 'Food Calorie',
          url: '/food-calories/roti/',
          description: '120 kcal per medium plain tawa roti (50g)'
        },
        {
          title: 'Chicken Biryani Calories',
          category: 'Food Calorie',
          url: '/food-calories/biryani/',
          description: '520 kcal per 350g plate with chicken'
        },
        {
          title: 'Steps to KM Calculator',
          category: 'Walking Tool',
          url: '/calculators/steps-to-km/',
          description: 'Convert steps into kilometers, miles & calories'
        },
        {
          title: 'Daily Calorie Needs (TDEE/BMR)',
          category: 'Calculator',
          url: '/calculators/calorie/',
          description: 'Calculate daily calories for fat loss or maintenance'
        }
      ];
      setResults(defaults);
      return;
    }

    const matched: SearchResultItem[] = [];

    // Search Calculators
    CALCULATORS_DATA.forEach(c => {
      if (c.name.toLowerCase().includes(trimmed) || c.shortDesc.toLowerCase().includes(trimmed)) {
        matched.push({
          title: c.name,
          category: 'Calculator',
          url: c.path,
          description: c.shortDesc
        });
      }
    });

    // Search Foods
    FOODS_DATA.forEach(f => {
      if (
        f.name.toLowerCase().includes(trimmed) ||
        f.urduName.includes(trimmed) ||
        f.description.toLowerCase().includes(trimmed) ||
        f.category.toLowerCase().includes(trimmed)
      ) {
        matched.push({
          title: `${f.name} (${f.calories} kcal)`,
          category: 'Food Calorie',
          url: `/food-calories/${f.slug}/`,
          description: `${f.typicalServing} • ${f.protein}g Protein`
        });
      }
    });

    // Search Guides
    GUIDES_DATA.forEach(g => {
      if (g.title.toLowerCase().includes(trimmed) || g.excerpt.toLowerCase().includes(trimmed)) {
        matched.push({
          title: g.title,
          category: 'Fitness Guide',
          url: `/guides/${g.slug}/`,
          description: `${g.readTime} • ${g.excerpt.substring(0, 75)}...`
        });
      }
    });

    // Search Recipes
    RECIPES_DATA.forEach(r => {
      if (r.title.toLowerCase().includes(trimmed) || r.tag.toLowerCase().includes(trimmed)) {
        matched.push({
          title: r.title,
          category: 'Healthy Recipe',
          url: `/recipes/${r.slug}/`,
          description: `${r.caloriesPerServing} kcal • ${r.proteinPerServing}g Protein`
        });
      }
    });

    setResults(matched);
  }, [query]);

  if (!isOpen) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Calculator':
      case 'Walking Tool':
        return <Calculator className="w-4 h-4 text-[#087F82]" />;
      case 'Food Calorie':
        return <Utensils className="w-4 h-4 text-[#16A6A3]" />;
      case 'Healthy Recipe':
        return <ChefHat className="w-4 h-4 text-[#63A944]" />;
      default:
        return <BookOpen className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search FitHisab"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#DCEBE9] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-[#DCEBE9] bg-[#FAFCFA]">
          <Search className="w-5 h-5 text-[#087F82] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search roti, biryani, BMI, 10000 steps, protein..."
            className="w-full text-base bg-transparent text-[#183438] placeholder-[#64787A] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-gray-600 mr-2"
              title="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-medium text-gray-500 hover:text-gray-700 bg-gray-100 rounded-md border border-gray-200"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-1.5 flex-1">
          {results.length === 0 ? (
            <div className="text-center py-12 text-[#64787A]">
              <p className="text-base font-medium">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1 text-gray-400">Try searching for &quot;roti&quot;, &quot;biryani&quot;, &quot;BMI&quot;, or &quot;protein&quot;</p>
            </div>
          ) : (
            <>
              <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-[#64787A]">
                {query ? `Search Results (${results.length})` : 'Popular Quick Searches'}
              </div>
              {results.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onNavigate(item.url);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl hover:bg-[#EAF8F7] transition-colors flex items-center justify-between group border border-transparent hover:border-[#B6DBD7]"
                >
                  <div className="flex items-start gap-3 min-w-0 pr-3">
                    <div className="p-2 rounded-lg bg-white shadow-xs border border-[#DCEBE9] shrink-0 mt-0.5">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-[#183438] group-hover:text-[#087F82] transition-colors truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-[#64787A] shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#64787A] mt-0.5 truncate">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#087F82] group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              ))}
            </>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[#F4F9F8] border-t border-[#DCEBE9] text-[11px] text-[#64787A] flex justify-between items-center">
          <span>FitHisab Quick Finder</span>
          <span className="hidden sm:inline">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};
