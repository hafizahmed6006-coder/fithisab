import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Calculator, Apple, Footprints, BookOpen, ChefHat, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calcDropdownOpen, setCalcDropdownOpen] = useState(false);
  const [mobileCalcOpen, setMobileCalcOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    {
      label: 'Calculators',
      path: '/calculators/',
      hasDropdown: true,
      subItems: [
        { label: 'BMI Calculator', path: '/calculators/bmi/', icon: Calculator },
        { label: 'Daily Calorie (TDEE)', path: '/calculators/calorie/', icon: Sparkles },
        { label: 'Protein Calculator', path: '/calculators/protein/', icon: Apple },
        { label: 'Steps to KM', path: '/calculators/steps-to-km/', icon: Footprints },
        { label: 'Ideal Weight', path: '/calculators/ideal-weight/', icon: Calculator },
        { label: 'Water Intake', path: '/calculators/water/', icon: Sparkles },
      ]
    },
    { label: 'Food Calories', path: '/food-calories/' },
    { label: 'Walking & Steps', path: '/walking/' },
    { label: 'Fitness Guides', path: '/guides/' },
    { label: 'Healthy Recipes', path: '/recipes/' },
    { label: 'About', path: '/about/' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setCalcDropdownOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#DCEBE9]'
          : 'bg-[#FAFCFA]/90 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <button
              onClick={() => handleLinkClick('/')}
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#087F82]/30 rounded-xl p-1"
              aria-label="FitHisab Home"
            >
              {/* Custom SVG Icon combining Leaf, Heart curve, and Calculator tick */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#087F82] to-[#0B4F55] p-2 flex items-center justify-center shadow-xs shadow-[#087F82]/30 group-hover:scale-105 transition-transform">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-white"
                >
                  {/* Organic leaf-heart curve */}
                  <path
                    d="M16 4C22.5 4 27 8.5 27 15C27 22.5 16 28 16 28C16 28 5 22.5 5 15C5 8.5 9.5 4 16 4Z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="rgba(255,255,255,0.12)"
                  />
                  {/* Internal pulse tick + calculator grid marks */}
                  <path
                    d="M10 16L13.5 16L15.5 12L17.5 19L19.5 16L22 16"
                    stroke="#EAF8F7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="16" cy="22.5" r="1.2" fill="#63A944" />
                </svg>
              </div>

              {/* Wordmark */}
              <div className="flex flex-col text-left">
                <div className="flex items-center tracking-tight">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#087F82] font-sans">Fit</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#0B4F55] font-sans">Hisab</span>
                  <span className="w-2 h-2 rounded-full bg-[#63A944] ml-1 self-baseline mt-1.5" />
                </div>
                <span className="text-[10px] uppercase font-semibold text-[#64787A] tracking-wider -mt-1 hidden sm:block">
                  Smart Health & Calories
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="relative" onMouseLeave={() => setCalcDropdownOpen(false)}>
                    <button
                      onClick={() => handleLinkClick(link.path)}
                      onMouseEnter={() => setCalcDropdownOpen(true)}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${
                        isActive
                          ? 'text-[#087F82] bg-[#EAF8F7]'
                          : 'text-[#183438] hover:text-[#087F82] hover:bg-[#EAF8F7]/60'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </button>

                    {calcDropdownOpen && (
                      <div
                        className="absolute left-0 mt-1 w-56 rounded-2xl bg-white shadow-xl border border-[#DCEBE9] py-2 z-50 animate-fadeIn"
                        onMouseEnter={() => setCalcDropdownOpen(true)}
                      >
                        <div className="px-3 py-1 text-[11px] font-bold text-[#64787A] uppercase tracking-wider">
                          Fitness Calculators
                        </div>
                        {link.subItems?.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => handleLinkClick(sub.path)}
                            className="w-full text-left px-3 py-2 text-sm text-[#183438] hover:text-[#087F82] hover:bg-[#EAF8F7] flex items-center gap-2.5 transition-colors"
                          >
                            <sub.icon className="w-4 h-4 text-[#087F82]" />
                            <span>{sub.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-[#087F82] bg-[#EAF8F7]'
                      : 'text-[#183438] hover:text-[#087F82] hover:bg-[#EAF8F7]/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-2 text-[#183438] hover:text-[#087F82] hover:bg-[#EAF8F7] rounded-xl transition-colors flex items-center gap-2 border border-transparent hover:border-[#DCEBE9]"
              title="Search FitHisab (Ctrl+K)"
              aria-label="Search tools and foods"
            >
              <Search className="w-4 h-4 text-[#087F82]" />
              <span className="hidden xl:inline text-xs text-[#64787A] bg-white border border-[#DCEBE9] px-1.5 py-0.5 rounded font-mono">
                ⌘K
              </span>
            </button>

            {/* Primary CTA: Calculate Calories */}
            <button
              onClick={() => handleLinkClick('/calculators/calorie/')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#087F82] to-[#0B4F55] hover:brightness-105 shadow-xs shadow-[#087F82]/30 active:scale-98 transition-all"
            >
              Calculate Calories
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#183438] hover:text-[#087F82] hover:bg-[#EAF8F7] rounded-xl lg:hidden transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#DCEBE9] bg-white/98 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2 animate-fadeIn shadow-lg">
          <div className="mb-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#F4F9F8] border border-[#DCEBE9] text-sm text-[#64787A]"
            >
              <Search className="w-4 h-4 text-[#087F82]" />
              <span>Search foods, calculators, recipes...</span>
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="space-y-1">
                    <div className="flex items-center justify-between rounded-xl overflow-hidden">
                      <button
                        onClick={() => handleLinkClick(link.path)}
                        className={`flex-1 text-left px-3 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                          currentPath.startsWith('/calculators/')
                            ? 'text-[#087F82] bg-[#EAF8F7]'
                            : 'text-[#183438] hover:bg-[#F4F9F8]'
                        }`}
                      >
                        <span>{link.label}</span>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileCalcOpen(!mobileCalcOpen);
                        }}
                        className="p-2.5 text-[#64787A] hover:text-[#087F82] rounded-xl hover:bg-[#F4F9F8] transition-colors"
                        aria-label="Toggle calculators submenu"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCalcOpen ? 'rotate-180 text-[#087F82]' : ''}`} />
                      </button>
                    </div>

                    {mobileCalcOpen && (
                      <div className="pl-3 pr-2 py-1.5 space-y-1 bg-[#FAFCFA] rounded-xl border border-[#DCEBE9] my-1">
                        {link.subItems?.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => handleLinkClick(sub.path)}
                            className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-2.5 transition-colors ${
                              currentPath === sub.path
                                ? 'text-[#087F82] bg-[#EAF8F7] font-bold'
                                : 'text-[#183438] hover:bg-white'
                            }`}
                          >
                            <sub.icon className="w-4 h-4 text-[#087F82]" />
                            <span>{sub.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.path)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    currentPath === link.path
                      ? 'text-[#087F82] bg-[#EAF8F7]'
                      : 'text-[#183438] hover:bg-[#F4F9F8]'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#DCEBE9]">
            <button
              onClick={() => handleLinkClick('/calculators/calorie/')}
              className="w-full py-3 text-center rounded-xl font-bold text-white bg-gradient-to-r from-[#087F82] to-[#0B4F55] shadow-xs active:scale-98"
            >
              Calculate Calories Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
