/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { SearchModal } from './components/common/SearchModal';
import { SEOHead } from './components/common/SEOHead';
import { AdSlot } from './components/common/AdSlot';
import { ADS_CONFIG } from './config/ads';

// Home Sections
import { Hero } from './components/home/Hero';
import { PopularCalculators } from './components/home/PopularCalculators';
import { FoodExplorerSection } from './components/home/FoodExplorerSection';
import { StepsSection } from './components/home/StepsSection';
import { GuidesSection } from './components/home/GuidesSection';
import { RecipesSection } from './components/home/RecipesSection';
import { WhyFitHisab } from './components/home/WhyFitHisab';
import { NewsletterCTA } from './components/home/NewsletterCTA';

// Calculator Pages
import { CalculatorsHub } from './components/calculators/CalculatorsHub';
import { BMICalculator } from './components/calculators/BMICalculator';
import { CalorieCalculator } from './components/calculators/CalorieCalculator';
import { ProteinCalculator } from './components/calculators/ProteinCalculator';
import { StepsCalculator } from './components/calculators/StepsCalculator';
import { IdealWeightCalculator } from './components/calculators/IdealWeightCalculator';
import { WaterCalculator } from './components/calculators/WaterCalculator';

// Detail Pages
import { FoodDetailPage } from './components/food/FoodDetailPage';
import { GuideDetailPage } from './components/guides/GuideDetailPage';
import { RecipeDetailPage } from './components/recipes/RecipeDetailPage';

// Company & Legal Pages
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';
import { TermsPage } from './components/pages/TermsPage';
import { DisclaimerPage } from './components/pages/DisclaimerPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      return pathname.endsWith('/') ? pathname : `${pathname}/`;
    }
    return '/';
  });

  const [searchOpen, setSearchOpen] = useState(false);

  // Synchronize browser history and popstate
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      setCurrentPath(pathname.endsWith('/') ? pathname : `${pathname}/`);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (path: string) => {
    const normalizedPath = path.endsWith('/') ? path : `${path}/`;
    if (normalizedPath !== currentPath) {
      if (typeof window !== 'undefined' && window.history) {
        window.history.pushState({}, '', normalizedPath);
      }
      setCurrentPath(normalizedPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route Dispatcher
  const renderContent = () => {
    // 1. Calculators Hub & Individual Calculators
    if (currentPath === '/calculators/') {
      return <CalculatorsHub onNavigate={navigate} />;
    }
    if (currentPath === '/calculators/bmi/') {
      return <BMICalculator onNavigate={navigate} />;
    }
    if (currentPath === '/calculators/calorie/') {
      return <CalorieCalculator onNavigate={navigate} />;
    }
    if (currentPath === '/calculators/protein/') {
      return <ProteinCalculator onNavigate={navigate} />;
    }
    if (currentPath === '/calculators/steps-to-km/') {
      return <StepsCalculator onNavigate={navigate} />;
    }
    if (currentPath === '/calculators/ideal-weight/') {
      return <IdealWeightCalculator onNavigate={navigate} />;
    }
    if (currentPath === '/calculators/water/') {
      return <WaterCalculator onNavigate={navigate} />;
    }

    // 2. Food Calories List & Detail Pages
    if (currentPath === '/food-calories/') {
      return (
        <div className="min-h-screen bg-[#FAFCFA] py-8">
          <FoodExplorerSection onNavigate={navigate} isFullPage={true} />
        </div>
      );
    }
    if (currentPath.startsWith('/food-calories/')) {
      const parts = currentPath.split('/').filter(Boolean);
      const slug = parts[1] || 'roti';
      return <FoodDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 3. Walking & Steps Tool
    if (currentPath === '/walking/') {
      return (
        <div className="min-h-screen bg-[#FAFCFA] py-8">
          <StepsSection onNavigate={navigate} isFullPage={true} />
        </div>
      );
    }

    // 4. Fitness Guides List & Detail Pages
    if (currentPath === '/guides/') {
      return (
        <div className="min-h-screen bg-[#FAFCFA] py-8">
          <GuidesSection onNavigate={navigate} isFullPage={true} />
        </div>
      );
    }
    if (currentPath.startsWith('/guides/')) {
      const parts = currentPath.split('/').filter(Boolean);
      const slug = parts[1] || 'how-many-calories-per-day';
      return <GuideDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 5. Recipes List & Detail Pages
    if (currentPath === '/recipes/') {
      return (
        <div className="min-h-screen bg-[#FAFCFA] py-8">
          <RecipesSection onNavigate={navigate} isFullPage={true} />
        </div>
      );
    }
    if (currentPath.startsWith('/recipes/')) {
      const parts = currentPath.split('/').filter(Boolean);
      const slug = parts[1] || 'high-protein-breakfast';
      return <RecipeDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 6. About, Contact & Legal Pages
    if (currentPath === '/about/') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (currentPath === '/contact/') {
      return <ContactPage onNavigate={navigate} />;
    }
    if (currentPath === '/privacy-policy/') {
      return <PrivacyPolicyPage onNavigate={navigate} />;
    }
    if (currentPath === '/terms/') {
      return <TermsPage onNavigate={navigate} />;
    }
    if (currentPath === '/disclaimer/') {
      return <DisclaimerPage onNavigate={navigate} />;
    }

    // 7. Default Homepage
    return (
      <main id="main-content">
        <SEOHead
          title="FitHisab - Smart Fitness Calculators & South Asian Food Calories"
          description="Calculate your BMI with South Asian criteria, daily calorie needs, protein requirements, and steps to kilometers. Accurate calories in roti, biryani, daal, and everyday foods."
          canonicalUrl="https://fithisab.com/"
        />

        {/* Hero Section */}
        <Hero onNavigate={navigate} />

        {/* Top Monetization Placement */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
          <AdSlot slot={ADS_CONFIG.SLOTS.HEADER_LEADERBOARD} />
        </div>

        {/* Popular Fitness Calculators */}
        <PopularCalculators onNavigate={navigate} />

        {/* Food Calorie Explorer */}
        <FoodExplorerSection onNavigate={navigate} />

        {/* Mid Page Monetization Placement */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />
        </div>

        {/* Steps and Walking Tool Section */}
        <StepsSection onNavigate={navigate} />

        {/* Fitness & Nutrition Guides */}
        <GuidesSection onNavigate={navigate} />

        {/* Healthy Desi Recipes Section */}
        <RecipesSection onNavigate={navigate} />

        {/* Why FitHisab Scientific Benefits */}
        <WhyFitHisab />

        {/* Newsletter / Return-Visitor CTA */}
        <NewsletterCTA onNavigate={navigate} />
      </main>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFA] text-[#183438] antialiased selection:bg-[#16A6A3] selection:text-white">
      {/* Sticky Translucent Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Content Rendered via Route Dispatcher */}
      <div className="flex-1">
        {renderContent()}
      </div>

      {/* Multi-Column Scientific Footer */}
      <Footer onNavigate={navigate} />

      {/* Quick Search Modal (Cmd+K) */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}
