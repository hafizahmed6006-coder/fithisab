import React from 'react';
import { Zap, Database, CheckCircle, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyFitHisab: React.FC = () => {
  const benefits = [
    {
      title: 'Quick Calculations',
      description: 'Zero delay and zero pop-ups. Instant mathematical feedback on your BMI, BMR, daily step distance, and protein targets right in your browser.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#087F82]" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      techSymbol: 'ms < 10'
    },
    {
      title: 'Everyday Food Data',
      description: 'Specifically tailored for Pakistani and South Asian cuisine. See how your rotis, chicken salan, biryanis, and afternoon chai affect your daily caloric deficit.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#087F82]" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" />
          <path strokeLinecap="round" d="M9 9h6M9 13h6M9 17h3" />
        </svg>
      ),
      techSymbol: 'DESI LAB'
    },
    {
      title: 'Easy-to-Understand Results',
      description: 'Clear, plain English insights with zero confusing clinical jargon. We explain what your numbers mean for real fat loss, cardiovascular health, and daily energy.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#087F82]" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      techSymbol: 'CLEAR UI'
    },
    {
      title: '100% Free Fitness Tools',
      description: 'No paywalls, no forced subscriptions, and no email sign-ups required. Open the page and compute your health targets instantly on any device.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#087F82]" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      techSymbol: 'NO LOCK'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAFCFA] relative overflow-hidden">
      {/* Subtle technological circuit line grid accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#DCEBE9_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3.5 py-1 rounded-full border border-[#B6DBD7]">
            Why Use FitHisab
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B4F55] mt-3 tracking-tight">
            Science-Informed Fitness Made Transparent
          </h2>
          <p className="text-base text-[#64787A] mt-3 leading-relaxed">
            Most fitness apps ignore cultural foods or bury simple calculators behind aggressive monthly subscriptions. FitHisab was created to solve both problems.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCEBE9] shadow-xs hover:border-[#087F82] transition-all hover:shadow-md group relative overflow-hidden"
            >
              {/* Top technological accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#087F82] to-[#16A6A3] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF8F7] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {b.icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#16A6A3] bg-[#EAF8F7] px-2 py-0.5 rounded border border-[#B6DBD7]">
                  {b.techSymbol}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#183438] group-hover:text-[#087F82] transition-colors">
                {b.title}
              </h3>

              <p className="text-sm text-[#64787A] mt-2 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
