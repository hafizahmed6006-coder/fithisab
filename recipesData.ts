import { Recipe } from '../types';

export const RECIPES_DATA: Recipe[] = [
  {
    slug: 'high-protein-desi-breakfast',
    title: 'High-Protein Desi Masala Omelette & Toast',
    tag: 'Quick Breakfast',
    prepTime: '5 mins',
    cookTime: '7 mins',
    servings: 1,
    caloriesPerServing: 320,
    proteinPerServing: 24,
    carbsPerServing: 26,
    fatsPerServing: 12,
    fiberPerServing: 3.8,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      '2 large whole eggs + 2 egg whites',
      '1/4 medium onion, finely chopped',
      '1 green chili, deseeded and minced',
      '1/4 cup fresh coriander leaves, chopped',
      '1/4 tsp turmeric powder & red chili powder',
      '1/2 tsp cumin seeds (zeera)',
      '1 slice whole grain bran bread (or 1 small 35g roti)',
      '1 tsp olive oil or light butter for pan'
    ],
    instructions: [
      'In a small bowl, whisk 2 whole eggs and 2 egg whites with turmeric, chili powder, salt, and cumin seeds until frothy.',
      'Heat 1 tsp oil in a non-stick frying pan over medium heat. Sauté the onions and green chili for 1 minute until fragrant.',
      'Pour in the egg mixture and swirl evenly. Cook for 2 minutes until bottom sets, flip gently, and cook another minute.',
      'Toast the whole grain slice and serve with a hot cup of black or green tea.'
    ],
    desiTip: 'Adding two extra egg whites increases the protein by 8 grams while adding only 34 calories and zero grams of fat.'
  },
  {
    slug: 'low-calorie-chicken-karahi',
    title: 'Low-Calorie Restaurant-Style Chicken Karahi',
    tag: 'Lunch & Dinner',
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 2,
    caloriesPerServing: 310,
    proteinPerServing: 38,
    carbsPerServing: 8,
    fatsPerServing: 12,
    fiberPerServing: 2.2,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      '400g skinless chicken breast or thigh, cut into bite-size pieces',
      '3 medium ripe tomatoes, halved',
      '1 tbsp ginger paste & 1 tbsp garlic paste',
      '1 tbsp olive oil or vegetable oil (measured with a spoon)',
      '1 tsp crushed black pepper & 1/2 tsp roasted cumin powder',
      '1/2 tsp red chili flakes & salt to taste',
      'Fresh julienned ginger and cilantro for finishing'
    ],
    instructions: [
      'Heat 1 tbsp oil in a wok (karahi). Add chicken with ginger and garlic paste and fry over high heat for 4–5 minutes until the chicken turns white.',
      'Place tomato halves skin-side up over the chicken. Cover and simmer on low heat for 7 minutes until skins soften.',
      'Remove tomato skins with tongs. Mash tomatoes into the gravy using a wooden spoon.',
      'Turn heat to high and roast (bhunai) for 5 minutes until tomato water evaporates and a thick gravy clings to the chicken.',
      'Finish with freshly crushed black pepper and julienned ginger.'
    ],
    desiTip: 'Traditional karahi recipes drown the chicken in half a cup of ghee (800+ calories of fat). Using just 1 tablespoon in a non-stick wok gives identical smoky flavor with a fraction of the calories.'
  },
  {
    slug: 'daal-roti-balanced-meal',
    title: 'Balanced Yellow Daal, Whole Wheat Roti & Kachumber Salad',
    tag: 'Vegetarian Staple',
    prepTime: '10 mins',
    cookTime: '25 mins',
    servings: 1,
    caloriesPerServing: 365,
    proteinPerServing: 16,
    carbsPerServing: 58,
    fatsPerServing: 7,
    fiberPerServing: 9.5,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      '1 bowl (180g) cooked split yellow moong/masoor lentils',
      '1 tsp olive oil or desi ghee for cumin-garlic tadka',
      '1 whole wheat tawa roti (50g dough, dry cooked)',
      '1 cup mixed diced cucumber, tomatoes, red onion, and fresh lemon juice',
      '1 pinch chaat masala and black salt'
    ],
    instructions: [
      'Boil lentils with turmeric, minced garlic, and salt until tender and smooth.',
      'In a small ladle, heat 1 tsp oil with sliced garlic and cumin seeds until golden brown; pour sizzling baghar over the daal.',
      'Puff a whole wheat roti dry on a hot tawa without brushing butter or ghee.',
      'Toss freshly chopped vegetables with lemon juice and chaat masala.',
      'Plate the fresh kachumber salad first to occupy half your plate, followed by the warm daal and roti.'
    ],
    desiTip: 'The 9.5 grams of dietary fiber from the lentils and fresh kachumber salad significantly delays stomach emptying, preventing afternoon sugar crashes.'
  },
  {
    slug: 'high-protein-desi-snack',
    title: 'Spiced Crunchy Roasted Chana & Boiled Egg Snack',
    tag: 'Afternoon Energy',
    prepTime: '3 mins',
    cookTime: '0 mins',
    servings: 1,
    caloriesPerServing: 215,
    proteinPerServing: 14,
    carbsPerServing: 22,
    fatsPerServing: 7,
    fiberPerServing: 5.2,
    image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      '35g roasted black chickpeas with skin (Bhuna Chana / Kala Chana)',
      '1 large hard-boiled egg, halved',
      '1/4 tsp chaat masala',
      'A squeeze of fresh lime juice'
    ],
    instructions: [
      'Peel and halve 1 cold boiled egg.',
      'Measure 35g of crunchy roasted chickpeas into a bowl.',
      'Dust with a sprinkle of tangy chaat masala and a squeeze of fresh lime.',
      'Eat alongside water or green tea for an instant clean 14g protein boost.'
    ],
    desiTip: 'Roasted chickpeas with peel are the ultimate budget South Asian superfood, packed with slow-digesting resistant starch and high plant protein.'
  }
];
