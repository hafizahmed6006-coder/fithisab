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
  adsterraKey?: string;
  adsterraFormatCode?: string;
}

export const ADS_CONFIG = {
  // Set to true once Adsterra codes are pasted
  ENABLED: false,
  
  // Show clean development placeholder for visual layout verification
  SHOW_CLEAN_PLACEHOLDER: true,

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
      adsterraKey: '', // e.g. 'YOUR_ADSTERRA_KEY_HERE'
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
      adsterraKey: '',
    },
    SIDEBAR_STICKY: {
      id: 'ad-sidebar-sticky',
      name: 'Desktop Sidebar Banner',
      format: 'banner-300x250' as const,
      minHeight: 250,
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
