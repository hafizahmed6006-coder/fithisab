export interface FoodVariation {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  notes: string;
}

export interface FoodFAQ {
  question: string;
  answer: string;
}

export interface PortionOption {
  label: string;
  calories: number;
  multiplier: number;
}

export interface GheeOption {
  label: string;
  extraCalories: number;
  extraFat: number;
}

export interface FoodItem {
  id: string;
  slug: string;
  name: string;
  urduName: string;
  category: 'Breads & Grains' | 'Rice Dishes' | 'Meat & Poultry' | 'Lentils & Veg' | 'Snacks & Sweets' | 'Beverages & Dairy' | 'Fruits & Pantry';
  image: string;
  typicalServing: string;
  servingGrams: number;
  calories: number;
  protein: number; // in grams
  carbs: number;   // in grams
  fats: number;    // in grams
  fiber: number;   // in grams
  description: string;
  quickAnswer?: string;
  servingDetails?: string;
  portionOptions?: PortionOption[];
  gheeOption?: GheeOption;
  oilImpact: string;
  comparison?: string;
  relatedSlugs?: string[];
  healthTip?: string;
  seoTitle?: string;
  seoDesc?: string;
  variations?: FoodVariation[];
  faqs?: FoodFAQ[];
}

export interface CalculatorInfo {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  iconName: string;
  badge?: string;
  path: string;
}

export interface GuideArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string | string[];
  keyTakeaways?: string[];
  image: string;
  date: string;
  author?: string;
  relatedCalculator?: string;
  faqs?: FoodFAQ[];
}

export interface Recipe {
  slug: string;
  title: string;
  tag: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  caloriesPerServing: number;
  proteinPerServing: number;
  carbsPerServing: number;
  fatsPerServing: number;
  fiberPerServing?: number;
  image: string;
  description?: string;
  ingredients: string[];
  instructions: string[];
  desiTip: string;
}

export interface SearchResultItem {
  title: string;
  category: 'Calculator' | 'Food Calorie' | 'Fitness Guide' | 'Healthy Recipe' | 'Walking Tool';
  url: string;
  description: string;
  highlight?: string;
}
