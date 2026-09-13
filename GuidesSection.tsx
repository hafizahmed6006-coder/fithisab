import React from 'react';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { GUIDES_DATA } from '../../data/guidesData';

interface GuidesSectionProps {
  onNavigate: (path: string) => void;
  isFullPage?: boolean;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ onNavigate, isFullPage = false }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
            Editorial Fitness & Diet
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B4F55] mt-3 tracking-tight">
            Simple Fitness & Nutrition Guides
          </h2>
          <p className="text-base text-[#64787A] mt-3 leading-relaxed">
            Evidence-based nutritional science translated into practical everyday habits for South Asian diets. No fad diets, no pseudo-science.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GUIDES_DATA.map((guide) => (
            <article
              key={guide.slug}
              onClick={() => onNavigate(`/guides/${guide.slug}/`)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#DCEBE9] hover:border-[#16A6A3] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-xs font-bold text-[#087F82] shadow-2xs border border-white/60">
                    {guide.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-[#64787A] mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#087F82]" />
                    <span>{guide.readTime}</span>
                    <span>•</span>
                    <span>{guide.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#183438] group-hover:text-[#087F82] transition-colors leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-sm text-[#64787A] mt-2.5 line-clamp-2 leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-5 sm:px-6 py-4 bg-[#FAFCFA] border-t border-[#DCEBE9] flex items-center justify-between text-xs font-bold text-[#087F82] group-hover:bg-[#EAF8F7] transition-colors">
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {!isFullPage && (
          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('/guides/')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#087F82] bg-white border border-[#DCEBE9] hover:bg-[#EAF8F7] transition-all"
            >
              <span>Explore All Fitness & Nutrition Guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
