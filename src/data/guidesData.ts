import { GuideArticle } from '../types';

export const GUIDES_DATA: GuideArticle[] = [
  {
    slug: 'how-many-calories-per-day',
    title: 'How Many Calories Do I Need Per Day? Complete Guide to TDEE & BMR',
    category: 'Nutrition Fundamentals',
    readTime: '6 min read',
    excerpt: 'Understand how your body burns energy through BMR, NEAT, exercise, and digestion, and calculate your target deficit or surplus accurately.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    date: 'September 2026',
    relatedCalculator: '/calculators/calorie/',
    keyTakeaways: [
      'Your Basal Metabolic Rate (BMR) accounts for 60–70% of daily calories burned just keeping your organs alive.',
      'Total Daily Energy Expenditure (TDEE) factors in physical movement, gym sessions, and daily desk walking.',
      'A safe fat loss deficit is 300 to 500 calories below TDEE, resulting in roughly 0.3–0.5 kg of weekly fat loss without muscle wasting.',
      'Crush diets below 1,200 calories trigger metabolic adaptation and severe hunger hormonal rebound.'
    ],
    content: [
      'Energy balance governs body mass regulation. If you consume fewer calories than your body uses, you draw upon stored glycogen and triglyceride adipose tissue for fuel.',
      'Many individuals overestimate calories burned in a 30-minute workout (often just 200–250 kcal) while underestimating a single restaurant snack or sweet beverage.',
      'To build a sustainable routine: calculate your baseline TDEE using our Mifflin-St Jeor formula, track your food intake for 7 consecutive days, and adjust by small 10% increments based on scale and waist measurements.'
    ],
    faqs: [
      {
        question: 'What happens if I eat below my BMR?',
        answer: 'Consuming fewer calories than your BMR for prolonged periods causes lethargy, loss of lean muscle mass, hormonal disruptions, and reduced thyroid hormone production. Maintain a moderate deficit below TDEE, not below BMR.'
      },
      {
        question: 'Do men and women need different calories?',
        answer: 'Yes. On average, men have higher lean muscle mass and greater stature, requiring higher baseline energy, while women require adjustments calibrated for hormonal rhythms and body weight.'
      }
    ]
  },
  {
    slug: 'how-much-protein-do-you-need',
    title: 'How Much Protein Do You Need? Evidence-Based Daily Targets',
    category: 'Macronutrients',
    readTime: '5 min read',
    excerpt: 'From sedentary health to muscle hypertrophy and healthy aging: discover exactly how many grams of protein you should eat daily.',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    date: 'September 2026',
    relatedCalculator: '/calculators/protein/',
    keyTakeaways: [
      'Sedentary minimum is 0.8g per kg of body weight just to prevent nitrogen deficiency.',
      'Active adults and fat loss phases benefit from 1.4 to 2.0g per kg of body weight for muscle preservation and satiety.',
      'Protein possesses the highest Thermic Effect of Food (TEF) at 20–30%, meaning your body burns calories digesting it.',
      'South Asian diets often rely heavily on carbs and fat; intentional protein sources like eggs, lentils, chicken, and dairy are vital.'
    ],
    content: [
      'Protein provides amino acids essential for enzyme synthesis, immune function, hair, skin, and muscular tissue repair.',
      'During a caloric deficit, adequate protein prevents the breakdown of metabolic muscle mass, ensuring weight lost comes predominantly from fat stores.',
      'For vegetarians, combining complementary plant proteins (such as lentils/chickpeas with whole grains or dairy/paneer) ensures all 9 essential amino acids are bioavailable.'
    ],
    faqs: [
      {
        question: 'Can you eat too much protein?',
        answer: 'For healthy individuals without pre-existing renal disease, intakes up to 2.5g per kg have been shown safe in clinical literature. However, excess protein is converted into energy and stored if total calories exceed maintenance.'
      }
    ]
  },
  {
    slug: '10000-steps-distance-and-calories-explained',
    title: '10,000 Steps: Distance, Calories, and Health Benefits Explained',
    category: 'Daily Activity',
    readTime: '5 min read',
    excerpt: 'How far is 10,000 steps in kilometers and miles? Discover the scientific basis, calorie burn, and how to reach your daily step count without burnout.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80',
    date: 'September 2026',
    relatedCalculator: '/calculators/steps-to-km/',
    keyTakeaways: [
      '10,000 steps equals approximately 7.5 to 8.0 kilometers (4.7 to 5.0 miles) for an average adult stride.',
      'Walking 10,000 steps burns approximately 350 to 480 calories depending on body weight, pace, and incline.',
      'Health benefits begin steep reductions in all-cause mortality starting at 7,000 to 8,000 steps per day.',
      'Accumulating steps in three 15-minute post-meal walks substantially blunts postprandial blood glucose spikes.'
    ],
    content: [
      'The 10,000 steps goal originated as a marketing campaign for a Japanese pedometer in 1965, but modern epidemiologic studies confirm that 7,500 to 10,000 daily steps provide tremendous cardiovascular and metabolic improvements.',
      'Walking is low-impact and places near-zero stress on the central nervous system, making it the premier fat-loss activity that will not impair gym recovery or spike ravenous hunger.',
      'Small lifestyle additions—such as walking while on telephone calls, parking further away, and taking stairs—can effortlessly add 3,000 steps daily.'
    ]
  },
  {
    slug: 'calories-in-one-roti-size-and-ingredients',
    title: 'Calories in One Roti: How Size, Flour Type, and Ghee Change Everything',
    category: 'South Asian Nutrition',
    readTime: '4 min read',
    excerpt: 'Why saying "roti is 100 calories" is often wrong: see exact lab measurements for phulka, tawa roti, tandoori roti, and ghee-topped flatbreads.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    date: 'September 2026',
    relatedCalculator: '/food-calories/roti/',
    keyTakeaways: [
      'A small 35g homemade phulka has ~85 calories; a large 70g restaurant roti has ~170 calories.',
      'One teaspoon of ghee or butter adds 45 calories of 100% fat.',
      'Whole wheat chakki atta retains the germ and bran, offering 3.2g fiber per 50g serving.',
      'Weighing your raw dough ball (pera) once or twice removes all guesswork from your daily tracking.'
    ],
    content: [
      'Roti is the backbone of Pakistani, Indian, and South Asian dining. Yet many fitness seekers struggle with weight loss because their household rotis are twice the size of a standard USDA serving.',
      'If your household rolls 70g dough peras and brushes both sides with butter, two rotis provide 420 calories—equivalent to two large slices of pizza.',
      'By rolling thin 45–50g rotis and leaving them dry on the tawa, you can enjoy two satisfying breads for just 230–240 calories total.'
    ]
  },
  {
    slug: 'biryani-calories-understanding-portions',
    title: 'Biryani Calories: How to Enjoy South Asia’s Favorite Dish on a Diet',
    category: 'South Asian Nutrition',
    readTime: '6 min read',
    excerpt: 'Break down the calories in chicken biryani, Karachi beef biryani, and understand the massive impact of restaurant cooking oil.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    date: 'September 2026',
    relatedCalculator: '/food-calories/biryani/',
    keyTakeaways: [
      'One home-cooked plate of chicken biryani (350g) is typically 500–550 calories.',
      'Wedding or restaurant biryani often climbs to 850–1,000 calories due to copious banaspati ghee and fried aloo.',
      'Chicken breast pieces provide 25g+ lean protein that increases satiety.',
      'A side of cucumber-mint yogurt raita (low-fat) reduces blood glucose spikes from the white rice.'
    ],
    content: [
      'Biryani is celebrated across the subcontinent for its deep layers of whole spices, kewra water, saffron, and slow-cooked meat. It does not need to be banned from a healthy lifestyle.',
      'The main calorie drivers in biryani are not the spices or chicken, but the volume of cooking fat and unlimited rice refills. Rice easily absorbs cooking oils during the "dum" steaming process.',
      'When dining out, serve yourself 1 cup of spiced rice, 1 large chicken piece, discard visible fat skins, and fill the remaining half of your plate with fresh salad.'
    ]
  },
  {
    slug: 'beginners-guide-to-balanced-plate',
    title: 'Beginner’s Guide to a Balanced South Asian Plate',
    category: 'Meal Planning',
    readTime: '5 min read',
    excerpt: 'Traditional desi meals often look like 80% carbs and oil. Here is how to rebalance your thali for energy, fullness, and health.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    date: 'September 2026',
    relatedCalculator: '/calculators/calorie/',
    keyTakeaways: [
      'Divide your plate: 1/2 fresh raw vegetables/salad, 1/4 quality protein, 1/4 whole grains/complex carbs.',
      'Replace deep-fried starters with grilled seekh kababs or lentil salads.',
      'Cook curries with 1 tablespoon of oil per 2–3 servings instead of cooking until oil separates on top.',
      'Drink 1 full glass of water 15 minutes before meals to naturally moderate appetite.'
    ],
    content: [
      'A traditional dinner table might feature white rice, two rotis, oily aloo gosht, and sweet kheer. While culturally beloved, this delivers high refined starch and heavy saturated fats with limited micronutrients.',
      'By placing a bowl of sliced cucumbers, tomatoes, radish, and lemon at the center of the table, you automatically crowd out excess calorie-dense foods without feeling deprived.',
      'Nutrition is about addition, not punishment: add lean protein, add fiber, add hydration, and moderate cooking oils.'
    ]
  }
];
