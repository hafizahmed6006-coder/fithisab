import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  schemaJson?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl = window.location.href,
  ogType = 'website',
  schemaJson,
}) => {
  useEffect(() => {
    // Update Title
    const fullTitle = title.includes('FitHisab') ? title : `${title} | FitHisab`;
    document.title = fullTitle;

    // Helper to set or update meta tag
    const setMeta = (name: string, content: string, isProperty: boolean = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // Inject JSON-LD Schema
    const existingScript = document.getElementById('fithisab-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    if (schemaJson) {
      const script = document.createElement('script');
      script.id = 'fithisab-structured-data';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaJson);
      document.head.appendChild(script);
    }

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, canonicalUrl, ogType, schemaJson]);

  return null;
};
