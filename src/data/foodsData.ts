import { FoodItem } from '../types';
import rotiImg from '../assets/images/fithisab_roti_chapati_1789232275859.jpg';
import biryaniImg from '../assets/images/fithisab_chicken_biryani_1789232292138.jpg';
import samosaImg from '../assets/images/fithisab_crispy_samosa_1789232314462.jpg';

export const FOODS_DATA: FoodItem[] = [
  {
    id: 'roti',
    slug: 'roti',
    name: 'Roti / Chapati (Plain Wheat)',
    urduName: 'روٹی / چپاتی',
    category: 'Breads & Grains',
    image: rotiImg,
    typicalServing: '1 medium plain chapati (no oil/ghee)',
    servingGrams: 50,
    calories: 120,
    protein: 3.5,
    carbs: 24,
    fats: 0.8,
    fiber: 3.2,
    description: 'Freshly puffed whole-wheat flatbread cooked dry on a traditional tawa. A staple carb in South Asian diets providing complex carbohydrates, magnesium, and dietary fiber.',
    variations: [
      { name: 'Small Tawa Roti (35g)', calories: 85, protein: 2.5, carbs: 17, fats: 0.5, notes: 'Home cooked thin phulka' },
      { name: 'Medium Tawa Roti (50g)', calories: 120, protein: 3.5, carbs: 24, fats: 0.8, notes: 'Standard 6 to 7-inch whole wheat roti' },
      { name: 'Large Restaurant Roti (70g)', calories: 170, protein: 5.0, carbs: 34, fats: 1.1, notes: 'Thicker dough ball common in eateries' },
      { name: 'Roti with 1 tsp Ghee/Butter', calories: 165, protein: 3.5, carbs: 24, fats: 5.3, notes: 'Adds ~45 calories purely from fat' },
      { name: 'Tandoori Roti (Plain)', calories: 140, protein: 4.2, carbs: 28, fats: 0.9, notes: 'Baked on clay tandoor wall' }
    ],
    oilImpact: 'A plain tawa roti has under 1 gram of fat. Applying just 1 small teaspoon of desi ghee or butter adds 45 kcal. Two ghee-topped rotis add 90 extra calories with minimal satiety increase.',
    healthTip: 'Choose whole grain chakki atta with bran intact rather than refined white maida for sustained energy and better blood sugar control.',
    faqs: [
      {
        question: 'How many calories are in 1 standard roti?',
        answer: 'One standard home-cooked medium whole wheat roti (around 50g of dough) without oil or ghee has approximately 115 to 125 calories, with 3.5g protein, 24g complex carbohydrates, and 3g dietary fiber.'
      },
      {
        question: 'Does applying ghee on roti cause weight gain?',
        answer: 'Ghee adds 45 calories per teaspoon. While authentic desi ghee contains fat-soluble vitamins (A, D, E), if you are in a caloric deficit for fat loss, skipping ghee on 3 daily rotis saves ~135 calories daily (equivalent to 1 lb of fat loss every 26 days).'
      },
      {
        question: 'Is roti better than white rice for weight loss?',
        answer: 'Whole wheat roti provides higher dietary fiber (3.2g vs 0.6g per 100g) and has a lower glycemic index than white basmati rice, keeping you full longer and reducing blood sugar spikes.'
      }
    ]
  },
  {
    id: 'biryani',
    slug: 'biryani',
    name: 'Chicken Biryani',
    urduName: 'چکن بریانی',
    category: 'Rice Dishes',
    image: biryaniImg,
    typicalServing: '1 standard dining plate (350g) with 1 chicken piece',
    servingGrams: 350,
    calories: 520,
    protein: 26,
    carbs: 68,
    fats: 16,
    fiber: 2.5,
    description: 'Fragrant basmati rice layered with spiced marinated chicken, caramelized onions (birista), yogurt, and aromatic saffron spices. Nutrient-dense with substantial protein from chicken, but calorie density depends heavily on the cooking oil used.',
    variations: [
      { name: '1 Measuring Cup (150g)', calories: 230, protein: 11, carbs: 30, fats: 7, notes: 'Snack or light lunch portion' },
      { name: '1 Standard Plate (350g with 1 leg/breast)', calories: 520, protein: 26, carbs: 68, fats: 16, notes: 'Typical home serving' },
      { name: 'Large Restaurant Serving (500g)', calories: 780, protein: 34, carbs: 98, fats: 28, notes: 'Heavy oil and fried potato included' },
      { name: 'Sindhi Biryani with Aloo (400g)', calories: 610, protein: 24, carbs: 82, fats: 20, notes: 'Potato absorbs cooking oils' },
      { name: 'Lean Homemade Chicken Biryani (300g)', calories: 410, protein: 28, carbs: 55, fats: 8, notes: 'Cooked with breast fillet and 1 tbsp oil total' }
    ],
    oilImpact: 'Commercial restaurant biryanis use 3 to 4 tablespoons of oil or banaspati ghee per plate, adding 250+ empty fat calories. Homemade biryani with measured olive oil or mustard oil cuts total calories by 30%.',
    healthTip: 'Eat biryani with a large bowl of fresh chopped cucumber-tomato salad and skim yogurt raita. Start by eating the protein (chicken) first to trigger satiety hormones.',
    faqs: [
      {
        question: 'How many calories are in 1 plate of chicken biryani?',
        answer: 'A standard home-cooked plate of chicken biryani (around 350g, including 1 piece of chicken) contains approximately 480 to 550 calories. Restaurant or wedding-style biryanis with heavy oil and fried potatoes frequently reach 750 to 900 calories.'
      },
      {
        question: 'Can I eat biryani while trying to lose weight?',
        answer: 'Yes! Measure your portion to 1 cup of rice (approx 200 kcal), choose skinless chicken breast for lean protein (120 kcal), and fill half your plate with fresh cucumber and onion salad.'
      },
      {
        question: 'How much protein is in chicken biryani?',
        answer: 'One standard serving with a 100g cooked chicken piece contains approximately 24 to 28 grams of high-quality complete protein.'
      }
    ]
  },
  {
    id: 'samosa',
    slug: 'samosa',
    name: 'Aloo Samosa (Deep Fried)',
    urduName: 'آلو سموسہ',
    category: 'Snacks & Sweets',
    image: samosaImg,
    typicalServing: '1 medium fried aloo samosa',
    servingGrams: 90,
    calories: 260,
    protein: 4.2,
    carbs: 28,
    fats: 15,
    fiber: 2.1,
    description: 'Crisp, triangular pastry shell stuffed with spiced mashed potatoes, cumin, coriander, and green peas, deep-fried in vegetable oil or vanaspati ghee.',
    variations: [
      { name: '1 Medium Aloo Samosa (90g)', calories: 260, protein: 4.2, carbs: 28, fats: 15, notes: 'Classic street food samosa' },
      { name: '1 Keema / Mutton Samosa (80g)', calories: 240, protein: 8.5, carbs: 19, fats: 14, notes: 'Higher protein, minced meat filling' },
      { name: 'Mini Cocktail Samosa (35g)', calories: 110, protein: 2.0, carbs: 12, fats: 6, notes: 'Party appetizer size' },
      { name: 'Air-Fried / Baked Samosa (90g)', calories: 155, protein: 4.5, carbs: 27, fats: 3.5, notes: 'Brush with 1 tsp oil, saves over 100 kcal' }
    ],
    oilImpact: 'The flour crust absorbs up to 15g of oil during deep-frying at standard street stall temperatures. Air-frying reduces fat content by over 70%.',
    healthTip: 'Pair samosas with mint-coriander yogurt chutney rather than sugary tamarind-gur sauce to avoid unnecessary simple sugars.',
    faqs: [
      {
        question: 'How many calories are in 1 aloo samosa?',
        answer: 'One standard medium deep-fried potato samosa contains roughly 250 to 280 calories and 14-16 grams of fat. Two samosas provide over 500 calories, equivalent to an entire full meal.'
      },
      {
        question: 'How much exercise burns off 1 samosa?',
        answer: 'Burning 260 calories requires approximately 5,500 to 6,000 steps of brisk walking (about 45 to 55 minutes) for a 70 kg individual.'
      }
    ]
  },
  {
    id: 'rice',
    slug: 'rice',
    name: 'Plain Boiled Basmati Rice',
    urduName: 'ابل ہوا باسمتی چاول',
    category: 'Rice Dishes',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
    typicalServing: '1 cup cooked rice (approx 160g)',
    servingGrams: 160,
    calories: 205,
    protein: 4.3,
    carbs: 45,
    fats: 0.4,
    fiber: 0.6,
    description: 'Fluffy long-grain aromatic basmati rice cooked by boiling or steaming without oil or butter. Naturally gluten-free, easily digestible carbohydrate source.',
    variations: [
      { name: '1/2 Cup Cooked Rice (80g)', calories: 102, protein: 2.1, carbs: 22, fats: 0.2, notes: 'Portion controlled side' },
      { name: '1 Cup Cooked Plain Rice (160g)', calories: 205, protein: 4.3, carbs: 45, fats: 0.4, notes: 'Standard measuring cup' },
      { name: 'Zeera Rice with 1 tsp Oil (170g)', calories: 250, protein: 4.4, carbs: 46, fats: 5.2, notes: 'Tempered with cumin and oil' },
      { name: 'Brown Basmati Rice (160g)', calories: 215, protein: 5.0, carbs: 44, fats: 1.6, notes: 'Higher fiber (3.5g fiber)' }
    ],
    oilImpact: 'Plain boiled basmati rice contains almost 0 fat. Adding butter, ghee, or oil while steaming or tempering adds 45-90 calories per tablespoon.',
    healthTip: 'Cooling cooked rice in the refrigerator overnight creates resistant starch, lowering glycemic spike and calorie absorption by 10-15%.',
    faqs: [
      {
        question: 'How many calories are in 1 cup of boiled rice?',
        answer: 'One standard metric cup (approx 160 grams cooked) of boiled white basmati rice contains 205 calories, 4.3g protein, 45g carbohydrates, and 0.4g fat.'
      },
      {
        question: 'Is rice fattening?',
        answer: 'Rice itself is not inherently fattening; total caloric balance dictates weight changes. However, rice is easy to overeat because 2 cups can be consumed rapidly without realizing it equals 410 calories.'
      }
    ]
  },
  {
    id: 'daal',
    slug: 'daal',
    name: 'Yellow Daal (Lentil Soup / Tadka)',
    urduName: 'دال تڑکا (مونگ / مسور)',
    category: 'Lentils & Veg',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    typicalServing: '1 medium katori / bowl (180g)',
    servingGrams: 180,
    calories: 165,
    protein: 8.5,
    carbs: 22,
    fats: 4.8,
    fiber: 5.5,
    description: 'Nutritious split lentils (masoor/moong) simmered with turmeric, garlic, ginger, and cumin, finished with a tempered tadka of spices.',
    variations: [
      { name: 'Boiled Daal without Tadka (180g)', calories: 120, protein: 8.5, carbs: 21, fats: 0.8, notes: 'Virtually zero added fat' },
      { name: 'Light Home Tadka (1 tsp oil, 180g)', calories: 165, protein: 8.5, carbs: 22, fats: 4.8, notes: 'Standard garlic-cumin baghar' },
      { name: 'Dhaba / Restaurant Daal Makhani (200g)', calories: 340, protein: 9.2, carbs: 26, fats: 22, notes: 'Heavy cream and butter added' },
      { name: 'Chana Daal with Tadka (180g)', calories: 195, protein: 9.8, carbs: 26, fats: 5.5, notes: 'Higher protein and fiber content' }
    ],
    oilImpact: 'The baghar/tadka accounts for over 60% of the fat in standard daal recipes. Limiting oil to 1 teaspoon per bowl keeps this an ideal high-fiber fat-loss food.',
    healthTip: 'Combining daal with whole wheat roti or brown rice creates a complete amino acid profile, offering all 9 essential amino acids for vegetarian muscle maintenance.',
    faqs: [
      {
        question: 'How many calories are in 1 bowl of daal?',
        answer: 'A standard bowl (katori, ~180g) of homemade yellow daal with a light oil tadka contains roughly 150 to 180 calories, with 8.5g protein and 5.5g dietary fiber.'
      },
      {
        question: 'Is daal a good protein source?',
        answer: 'Yes! Daal is a staple plant protein source. For fitness enthusiasts aiming for 100g+ daily protein, combine daal with eggs, chicken, or paneer to hit higher targets efficiently.'
      }
    ]
  },
  {
    id: 'paratha',
    slug: 'paratha',
    name: 'Plain Tawa Paratha',
    urduName: 'سادہ توا پراٹھا',
    category: 'Breads & Grains',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    typicalServing: '1 medium layered flaky paratha',
    servingGrams: 80,
    calories: 290,
    protein: 5.2,
    carbs: 34,
    fats: 14.5,
    fiber: 3.4,
    description: 'Flaky, layered flatbread made with whole wheat flour rolled with ghee/oil inside the dough layers and shallow-fried on a tawa.',
    variations: [
      { name: 'Light Home Paratha (1 tsp oil, 70g)', calories: 220, protein: 4.8, carbs: 30, fats: 9, notes: 'Moderate oil used' },
      { name: 'Crisp Desi Ghee Paratha (80g)', calories: 310, protein: 5.2, carbs: 34, fats: 17, notes: 'Flaky layers saturated with ghee' },
      { name: 'Stuffed Aloo Paratha (120g)', calories: 340, protein: 6.0, carbs: 46, fats: 15, notes: 'Spiced potato mash stuffing' },
      { name: 'Market Fried Lachha Paratha (100g)', calories: 410, protein: 6.5, carbs: 45, fats: 23, notes: 'Maida flour + deep pan fried' }
    ],
    oilImpact: 'A plain roti is 120 calories, whereas a traditional layered paratha is 290–320 calories. The extra 170–200 calories come entirely from cooking fat.',
    healthTip: 'For breakfast lovers: replace daily parathas with boiled eggs and dry tawa roti, or try a dry roasted paratha brushed with half a teaspoon of olive oil right before serving.',
    faqs: [
      {
        question: 'How many calories are in 1 plain paratha?',
        answer: 'One standard home-cooked plain paratha (approx 80g) shallow fried with 1 tablespoon of ghee or oil contains 280 to 310 calories. Restaurant flaky lachha parathas can easily exceed 400 calories.'
      },
      {
        question: 'Can I eat paratha while dieting?',
        answer: 'You can fit paratha into a caloric deficit by making it small (50g dough) and using an oil spray to reduce added fat from 15g down to 3g (saving ~110 kcal).'
      }
    ]
  },
  {
    id: 'chai',
    slug: 'chai',
    name: 'Chai with Whole Milk & Sugar',
    urduName: 'دودھ پتی چائے',
    category: 'Beverages & Dairy',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80',
    typicalServing: '1 standard cup (180ml) with whole milk and 1.5 tsp sugar',
    servingGrams: 180,
    calories: 135,
    protein: 4.1,
    carbs: 16,
    fats: 6.2,
    fiber: 0,
    description: 'Traditional South Asian brewed black tea simmered with milk, cardamom, and refined sugar. A ubiquitous daily beverage consumed 2 to 4 times a day.',
    variations: [
      { name: 'Black Tea (No Milk, No Sugar, 200ml)', calories: 2, protein: 0, carbs: 0.5, fats: 0, notes: 'Zero calorie beverage' },
      { name: 'Skim Milk Chai, No Sugar (180ml)', calories: 45, protein: 3.8, carbs: 5, fats: 0.5, notes: 'Weight-loss friendly option' },
      { name: 'Half Milk / Half Water with 1 tsp Sugar', calories: 85, protein: 2.8, carbs: 9, fats: 3.5, notes: 'Balanced everyday cup' },
      { name: 'Traditional Doodh Patti (Full Milk + 2 tsp sugar)', calories: 190, protein: 6.2, carbs: 22, fats: 8.8, notes: 'Made entirely with whole milk and boiled down' }
    ],
    oilImpact: 'Whole buffalo milk commonly used in Pakistan has 6-7% fat. Drinking 3 cups of doodh patti with 2 spoons of sugar equals ~550 daily calories—an invisible calorie culprit!',
    healthTip: 'Switching to stevia or half-teaspoon sugar and low-fat milk saves over 100 calories per cup. If you drink 3 cups a day, that is 300 calories saved daily.',
    faqs: [
      {
        question: 'How many calories are in 1 cup of chai?',
        answer: 'A regular cup of milk tea with whole milk and 1.5 tsp of sugar has 120 to 140 calories. A rich "doodh patti" made with pure whole milk and 2 teaspoons of sugar contains around 180 to 200 calories.'
      },
      {
        question: 'Why is chai making me gain weight?',
        answer: 'People often drink 3 to 4 cups of chai a day without realizing each cup contains milk fat and sugar, quietly contributing 400 to 700 uncounted calories.'
      }
    ]
  },
  {
    id: 'chicken-curry',
    slug: 'chicken-curry',
    name: 'Chicken Curry (Tari Wala Salan)',
    urduName: 'چکن سالن',
    category: 'Meat & Poultry',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    typicalServing: '1 serving (approx 200g: chicken piece + gravy)',
    servingGrams: 200,
    calories: 280,
    protein: 24,
    carbs: 8,
    fats: 16,
    fiber: 1.8,
    description: 'Traditional home-cooked chicken stew in an onion, tomato, ginger, garlic, and yogurt gravy with whole spices.',
    variations: [
      { name: 'Lean Breast Fillet Curry (Light oil, 200g)', calories: 210, protein: 29, carbs: 7, fats: 7, notes: 'Ideal fitness & fat-loss option' },
      { name: 'Chicken Salan with Leg Quarter (200g)', calories: 280, protein: 24, carbs: 8, fats: 16, notes: 'Standard home recipe' },
      { name: 'Chicken Karahi Restaurant Style (250g)', calories: 440, protein: 32, carbs: 10, fats: 30, notes: 'Heavy oil, fried in wok' },
      { name: 'Chicken Korma (Cashew/Cream, 200g)', calories: 380, protein: 22, carbs: 9, fats: 28, notes: 'Rich yogurt and fried onion paste' }
    ],
    oilImpact: 'The "tari" (floating oil layer on top) consists almost entirely of cooking oil. Skimming off 1 tablespoon of floating tari before plating removes 120 calories of pure fat.',
    healthTip: 'Opt for skinless chicken breast pieces and spoon less of the liquid oil gravy onto your plate to maximize protein per calorie.',
    faqs: [
      {
        question: 'How many calories are in 1 bowl of chicken curry?',
        answer: 'A standard home serving of chicken salan (one piece of chicken and moderate gravy) has 250 to 290 calories, with 22-26g of protein and 14-17g of fat.'
      }
    ]
  },
  {
    id: 'boiled-egg',
    slug: 'boiled-egg',
    name: 'Boiled Egg (Large)',
    urduName: 'ابلا ہوا انڈا',
    category: 'Meat & Poultry',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80',
    typicalServing: '1 large hard-boiled egg (50g)',
    servingGrams: 50,
    calories: 74,
    protein: 6.3,
    carbs: 0.4,
    fats: 5.0,
    fiber: 0,
    description: 'Nature’s most bioavailable complete protein source containing all 9 essential amino acids, choline, lutein, and vitamin B12.',
    variations: [
      { name: '1 Whole Boiled Egg (50g)', calories: 74, protein: 6.3, carbs: 0.4, fats: 5.0, notes: 'Complete nutrition and healthy yolk fats' },
      { name: '1 Boiled Egg White Only (33g)', calories: 17, protein: 3.6, carbs: 0.2, fats: 0.1, notes: 'Pure protein, zero fat' },
      { name: '2 Boiled Eggs + 2 Egg Whites', calories: 182, protein: 20, carbs: 1.2, fats: 10.2, notes: 'Gold-standard 20g post-workout breakfast' },
      { name: 'Desi Fried Egg in 1 tsp Ghee (50g)', calories: 125, protein: 6.3, carbs: 0.4, fats: 10.5, notes: 'Fried on tawa' }
    ],
    oilImpact: 'Boiling requires zero oil, making hard-boiled eggs one of the lowest-calorie, highest-satiety foods on Earth.',
    healthTip: 'The egg yolk contains nearly all the micronutrients (vitamins A, D, E, K, B12, and choline). Keep at least 1-2 whole yolks daily unless medically restricted.',
    faqs: [
      {
        question: 'How many calories are in 1 boiled egg?',
        answer: 'One large hard-boiled egg contains approximately 72 to 74 calories, with 6.3g high-quality protein and 5g healthy fats.'
      },
      {
        question: 'How many boiled eggs can I eat a day?',
        answer: 'For healthy individuals, 2 to 3 whole eggs daily are safe and beneficial for cholesterol ratios according to modern nutritional studies.'
      }
    ]
  },
  {
    id: 'banana',
    slug: 'banana',
    name: 'Fresh Banana (Medium)',
    urduName: 'کیلا',
    category: 'Fruits & Pantry',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80',
    typicalServing: '1 medium banana (approx 118g peeled)',
    servingGrams: 118,
    calories: 105,
    protein: 1.3,
    carbs: 27,
    fats: 0.3,
    fiber: 3.1,
    description: 'Fast-acting natural carbohydrate and potassium powerhouse. Excellent pre-workout fuel for endurance and workout pumps.',
    variations: [
      { name: 'Small Banana (100g)', calories: 90, protein: 1.1, carbs: 23, fats: 0.3, notes: '6 to 7 inches' },
      { name: 'Medium Banana (118g)', calories: 105, protein: 1.3, carbs: 27, fats: 0.3, notes: '7 to 8 inches' },
      { name: 'Large Banana (136g)', calories: 121, protein: 1.5, carbs: 31, fats: 0.4, notes: '8 to 9 inches' },
      { name: 'Banana Milkshake (1 cup milk + 1 banana + 1 tsp sugar)', calories: 260, protein: 9.5, carbs: 42, fats: 6.8, notes: 'Calorie-dense shake' }
    ],
    oilImpact: 'Naturally fat-free fruit.',
    healthTip: 'Eating a banana 30 to 45 minutes before a gym session or brisk walk provides instant glycogen without causing digestive heaviness.',
    faqs: [
      {
        question: 'Is banana good for weight loss?',
        answer: 'Yes! Bananas are high in pectin and resistant starch when slightly green, keeping you full. Just count the ~105 calories within your daily budget.'
      }
    ]
  },
  {
    id: 'apple',
    slug: 'apple',
    name: 'Fresh Crisp Apple (Medium)',
    urduName: 'سیب',
    category: 'Fruits & Pantry',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80',
    typicalServing: '1 medium fresh apple with skin (180g)',
    servingGrams: 180,
    calories: 95,
    protein: 0.5,
    carbs: 25,
    fats: 0.3,
    fiber: 4.4,
    description: 'Crisp fruit rich in soluble fiber (pectin) and polyphenols. Great for appetite suppression between main meals.',
    variations: [
      { name: 'Small Apple (150g)', calories: 77, protein: 0.4, carbs: 20, fats: 0.2, notes: 'Pocket snack' },
      { name: 'Medium Apple (180g)', calories: 95, protein: 0.5, carbs: 25, fats: 0.3, notes: 'Standard apple' },
      { name: 'Large Apple (220g)', calories: 116, protein: 0.6, carbs: 31, fats: 0.4, notes: 'Big Red Delicious / Fuji' }
    ],
    oilImpact: 'Naturally 0 fat.',
    healthTip: 'Always eat the skin! More than 50% of the fiber and antioxidant quercetin resides in the outer peel.',
    faqs: [
      {
        question: 'How many calories are in 1 apple?',
        answer: 'A medium raw apple (around 180g) contains roughly 95 calories and 4.4g of beneficial dietary fiber.'
      }
    ]
  },
  {
    id: 'dates',
    slug: 'dates',
    name: 'Dates / Khajoor (Aseel / Medjool)',
    urduName: 'کھجور',
    category: 'Fruits & Pantry',
    image: 'https://images.unsplash.com/photo-1550411294-733f11d13f98?auto=format&fit=crop&w=800&q=80',
    typicalServing: '3 medium dates (approx 24g pitted)',
    servingGrams: 24,
    calories: 66,
    protein: 0.6,
    carbs: 18,
    fats: 0.1,
    fiber: 1.6,
    description: 'Natural sun-dried fruit revered for its rapid energizing fructose and glucose, magnesium, potassium, and antioxidants. Staple in Ramadan iftar and daily sunnah.',
    variations: [
      { name: '1 Single Aseel Date (8g)', calories: 22, protein: 0.2, carbs: 6, fats: 0, notes: 'Popular Pakistani variety' },
      { name: '3 Dates Serving (24g)', calories: 66, protein: 0.6, carbs: 18, fats: 0.1, notes: 'Ideal pre-workout snack' },
      { name: '1 Medjool Date (Large, 24g)', calories: 66, protein: 0.4, carbs: 18, fats: 0, notes: 'Plump soft date' }
    ],
    oilImpact: 'Naturally fat-free.',
    healthTip: 'Pair dates with a handful of raw almonds or a spoonful of Greek yogurt to slow the absorption of sugars and prevent hunger crashes.',
    faqs: [
      {
        question: 'How many calories are in 1 date?',
        answer: 'One standard Pakistani Aseel date contains roughly 20 to 23 calories. A large Medjool date has about 66 calories.'
      }
    ]
  },
  {
    id: 'nihari',
    slug: 'nihari',
    name: 'Beef Nihari',
    urduName: 'بیف نہاری',
    category: 'Meat & Poultry',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    typicalServing: '1 bowl (250g) with beef shank + gravy',
    servingGrams: 250,
    calories: 510,
    protein: 34,
    carbs: 18,
    fats: 34,
    fiber: 1.2,
    description: 'Slow-cooked beef shank stew simmered overnight with aromatic spices, fennel seeds, and thickened with wheat flour roux, garnished with julienned ginger and lemon.',
    variations: [
      { name: 'Home Light-Tari Nihari (200g)', calories: 390, protein: 30, carbs: 16, fats: 22, notes: 'Measured oil, trimmed beef' },
      { name: 'Restaurant Special Nihari with Nalli (300g)', calories: 680, protein: 38, carbs: 22, fats: 48, notes: 'Bone marrow (nalli) & floating ghee' }
    ],
    oilImpact: 'Traditional nihari recipes use a thick layer of roghan (floating spiced ghee) and marrow fat. Removing excess surface roghan cuts 150-200 calories.',
    healthTip: 'Enjoy beef nihari with fresh tawa roti rather than deep-fried or oily naan to balance total meal fats.',
    faqs: [
      {
        question: 'How many calories are in 1 plate of nihari?',
        answer: 'A standard bowl of beef nihari has roughly 480 to 550 calories. If bone marrow (nalli) and extra roghan are added, it can exceed 700 calories.'
      }
    ]
  },
  {
    id: 'haleem',
    slug: 'haleem',
    name: 'Chicken / Beef Haleem',
    urduName: 'حلیم / دلیا',
    category: 'Meat & Poultry',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c4?auto=format&fit=crop&w=800&q=80',
    typicalServing: '1 bowl (250g) with garnishes',
    servingGrams: 250,
    calories: 360,
    protein: 24,
    carbs: 42,
    fats: 11,
    fiber: 7.5,
    description: 'Nutritious slow-cooked blend of broken wheat, barley, 4 types of lentils, shredded tender meat, and spices. Very high in soluble fiber and sustained satiety.',
    variations: [
      { name: 'Chicken Haleem without Fried Onions (220g)', calories: 290, protein: 25, carbs: 38, fats: 6, notes: 'High fiber, lean protein' },
      { name: 'Standard Beef Haleem with Birista (250g)', calories: 360, protein: 24, carbs: 42, fats: 11, notes: 'Classic garnish' }
    ],
    oilImpact: 'The stew itself is clean and fibrous; the majority of calories come from the deep-fried caramelized onion (birista) and hot oil baghar on top.',
    healthTip: 'Haleem is one of the healthiest traditional dishes if you limit the fried onion garnish and top it with plenty of fresh ginger, coriander, and lemon juice.',
    faqs: [
      {
        question: 'Is haleem good for weight loss?',
        answer: 'Yes! Due to the combination of whole wheat, barley, and lentils, haleem has over 7g of fiber and 24g of protein per bowl, making it remarkably filling.'
      }
    ]
  }
];
