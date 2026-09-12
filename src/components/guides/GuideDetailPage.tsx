import React from 'react';
import { Clock, Calendar, ArrowLeft, ArrowRight, BookOpen, Share2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SEOHead } from '../common/SEOHead';
import { AdSlot } from '../common/AdSlot';
import { ADS_CONFIG } from '../../config/ads';
import { GUIDES_DATA } from '../../data/guidesData';

interface GuideDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const GuideDetailPage: React.FC<GuideDetailPageProps> = ({ slug, onNavigate }) => {
  const guide = GUIDES_DATA.find((g) => g.slug === slug) || GUIDES_DATA[0];
  const authorName = guide.author || 'FitHisab Clinical Review Board';
  const contentParagraphs = Array.isArray(guide.content) ? guide.content : guide.content.split('\n\n');

  return (
    <div className="min-h-screen bg-[#FAFCFA] py-6 sm:py-10">
      <SEOHead
        title={`${guide.title} - FitHisab`}
        description={guide.excerpt}
        canonicalUrl={`https://fithisab.com/guides/${guide.slug}/`}
        imageUrl={guide.image}
        articleData={{
          datePublished: guide.date,
          dateModified: guide.date,
          authorName: authorName,
          category: guide.category
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Fitness Guides', url: '/guides/' },
            { label: guide.title }
          ]}
          onNavigate={onNavigate}
        />

        <article className="my-6">
          {/* Category & Meta */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#087F82] bg-[#EAF8F7] px-3 py-1 rounded-full border border-[#B6DBD7]">
              {guide.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#64787A]">
              <Clock className="w-3.5 h-3.5 text-[#087F82]" />
              <span>{guide.readTime}</span>
              <span>•</span>
              <Calendar className="w-3.5 h-3.5 text-[#087F82]" />
              <span>{guide.date}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B4F55] tracking-tight leading-tight mb-4">
            {guide.title}
          </h1>

          <p className="text-base sm:text-lg text-[#64787A] leading-relaxed mb-6 font-medium">
            {guide.excerpt}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-3 py-3 border-y border-[#DCEBE9] mb-8">
            <div className="w-10 h-10 rounded-full bg-[#EAF8F7] border border-[#087F82] flex items-center justify-center font-bold text-[#087F82]">
              FH
            </div>
            <div>
              <div className="text-xs font-bold text-[#183438]">{authorName}</div>
              <div className="text-[11px] text-[#64787A] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#63A944]" />
                <span>Evidence-based clinical guidelines</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-[#DCEBE9] mb-8">
            <img
              src={guide.image}
              alt={guide.title}
              referrerPolicy="no-referrer"
              className="w-full aspect-16/9 object-cover"
            />
          </div>

          {/* Ad Slot */}
          <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_TOP} />

          {/* Markdown / Body Content */}
          <div className="prose prose-teal max-w-none text-[#183438] space-y-5 my-8 text-base sm:text-lg leading-relaxed">
            {contentParagraphs.map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl sm:text-2xl font-extrabold text-[#0B4F55] pt-6 pb-2 border-b border-[#DCEBE9]">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg sm:text-xl font-bold text-[#087F82] pt-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="space-y-2 my-3 pl-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-[#183438]">
                        <CheckCircle2 className="w-4 h-4 text-[#63A944] shrink-0 mt-1" />
                        <span>{item.replace('- ', '')}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-[#183438] text-base leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Ad Slot */}
          <AdSlot slot={ADS_CONFIG.SLOTS.IN_ARTICLE_CONTENT} />

          {/* Quick CTA to Calculators */}
          <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-[#087F82] to-[#0B4F55] text-white space-y-4">
            <h3 className="text-lg font-bold">Put This Knowledge Into Practice</h3>
            <p className="text-sm text-white/80">
              Use FitHisab’s instant calculators to calculate your exact caloric budget, BMI category, and protein targets today.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('/calculators/calorie/')}
                className="px-4 py-2 rounded-xl bg-white text-[#0B4F55] text-xs font-bold hover:bg-[#EAF8F7]"
              >
                Calculate Daily Calories
              </button>
              <button
                onClick={() => onNavigate('/calculators/protein/')}
                className="px-4 py-2 rounded-xl bg-white/20 text-white border border-white/40 text-xs font-bold hover:bg-white/30"
              >
                Calculate Protein Needs
              </button>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
};
