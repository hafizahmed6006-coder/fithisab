/**
 * FitHisab Centralized Advertising Configuration (Adsterra & Publisher Units)
 * 
 * To activate live Adsterra ads:
 * 1. Set `ENABLED: true`
 * 2. Paste your Adsterra script keys / banner code into the respective slot objects below
 * 3. Keep layout dimensions stable to prevent Cumulative Layout Shift (CLS)
 */

export interface AdSlotConfig {
  id: string;
  name: string;
  format: 'banner-728x90' | 'banner-300x250' | 'banner-responsive' | 'in-article';
  minHeight: number;
  width?: number;
  height?: number;
  adsterraKey?: string;
  scriptUrl?: string;
  adsterraFormatCode?: string;
}

export const ADS_CONFIG = {
  // Activated for live Adsterra monetization
  ENABLED: true,
  
  // Only show placeholder if ads are disabled or key is missing during local layout testing
  SHOW_CLEAN_PLACEHOLDER: false,

  SLOTS: {
    HEADER_LEADERBOARD: {
      id: 'ad-header-leaderboard',
      name: 'Top Header Leaderboard',
      format: 'banner-responsive' as const,
      minHeight: 90,
      adsterraKey: '',
    },
    HOME_HEADER_BELOW: {
      id: 'ad-home-header-below',
      name: 'Leaderboard Below Hero',
      format: 'banner-responsive' as const,
      minHeight: 90,
      adsterraKey: '',
    },
    BETWEEN_SECTIONS: {
      id: 'ad-between-sections',
      name: 'Mid-Page Responsive Banner',
      format: 'banner-responsive' as const,
      minHeight: 100,
      adsterraKey: '',
    },
    IN_ARTICLE_TOP: {
      id: 'ad-in-article-top',
      name: 'In-Article Top Header Banner',
      format: 'banner-responsive' as const,
      minHeight: 90,
      adsterraKey: '',
    },
    IN_ARTICLE_CONTENT: {
      id: 'ad-in-article',
      name: 'In-Article Content Rectangle',
      format: 'banner-300x250' as const,
      minHeight: 250,
      width: 300,
      height: 250,
      adsterraKey: '935f0d7c7792bd4183368994249d97ff',
      scriptUrl: 'https://www.highrevenueformat.com/935f0d7c7792bd4183368994249d97ff/invoke.js',
    },
    SIDEBAR_STICKY: {
      id: 'ad-sidebar-sticky',
      name: 'Desktop Sidebar Banner',
      format: 'banner-300x250' as const,
      minHeight: 250,
      width: 300,
      height: 250,
      adsterraKey: '',
    },
    FOOTER_ABOVE: {
      id: 'ad-footer-above',
      name: 'Bottom Content Banner',
      format: 'banner-responsive' as const,
      minHeight: 90,
      adsterraKey: '',
    }
  }
};
