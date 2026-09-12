import { CalculatorInfo } from '../types';

export const CALCULATORS_DATA: CalculatorInfo[] = [
  {
    id: 'bmi',
    slug: 'bmi',
    name: 'BMI Calculator',
    shortDesc: 'Calculate your Body Mass Index with WHO Asian-specific thresholds to assess healthy weight ranges.',
    iconName: 'Activity',
    badge: 'Most Popular',
    path: '/calculators/bmi/'
  },
  {
    id: 'calorie',
    slug: 'calorie',
    name: 'Daily Calorie Calculator',
    shortDesc: 'Determine your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) to reach your goal.',
    iconName: 'Flame',
    badge: 'Essential',
    path: '/calculators/calorie/'
  },
  {
    id: 'protein',
    slug: 'protein',
    name: 'Protein Calculator',
    shortDesc: 'Find your optimal daily protein target for muscle building, fat loss, or daily wellness.',
    iconName: 'Dumbbell',
    badge: 'Muscle & Fat Loss',
    path: '/calculators/protein/'
  },
  {
    id: 'steps-to-km',
    slug: 'steps-to-km',
    name: 'Steps to KM Calculator',
    shortDesc: 'Convert daily step counts (5,000, 10,000, etc.) into exact kilometers, miles, and calories burned.',
    iconName: 'Footprints',
    badge: 'Walking & Health',
    path: '/calculators/steps-to-km/'
  },
  {
    id: 'ideal-weight',
    slug: 'ideal-weight',
    name: 'Ideal Weight Calculator',
    shortDesc: 'Explore scientifically proven ideal weight ranges using Devine, Robinson, and BMI formulas.',
    iconName: 'Scale',
    badge: 'Target Goal',
    path: '/calculators/ideal-weight/'
  },
  {
    id: 'water',
    slug: 'water',
    name: 'Water Intake Calculator',
    shortDesc: 'Estimate your personalized daily hydration requirement based on weight and activity levels.',
    iconName: 'Droplets',
    badge: 'Daily Habit',
    path: '/calculators/water/'
  }
];
