import React, { useEffect, useRef } from 'react';
import { ADS_CONFIG, AdSlotConfig } from '../../config/ads';

interface AdSlotProps {
  slot: AdSlotConfig;
  className?: string;
}

/**
 * Isolated 300x250 Adsterra Banner component.
 * Executes inside an isolated iframe document to prevent global script collisions,
 * eliminate document.write conflicts in React SPA, and preserve component performance.
 */
const AdsterraBanner300x250: React.FC<{ adKey: string; scriptUrl?: string }> = React.memo(({ adKey, scriptUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset container DOM to prevent duplicate banner injections
    container.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.width = '300';
    iframe.height = '250';
    iframe.title = 'Advertisement';
    iframe.setAttribute('scrolling', 'no');
    iframe.style.width = '300px';
    iframe.style.height = '250px';
    iframe.style.border = '0';
    iframe.style.overflow = 'hidden';
    iframe.style.display = 'block';

    container.appendChild(iframe);

    const doc = iframe.contentWindow?.document || iframe.contentDocument;
    if (doc) {
      const targetScript = scriptUrl || `https://www.highrevenueformat.com/${adKey}/invoke.js`;
      doc.open();
      doc.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      width: 300px;
      height: 250px;
      overflow: hidden;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '${adKey}',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="${targetScript}"></script>
</body>
</html>`);
      doc.close();
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [adKey, scriptUrl]);

  return (
    <div
      ref={containerRef}
      className="w-[300px] h-[250px] min-h-[250px] max-w-full overflow-hidden flex items-center justify-center"
      style={{ width: '300px', height: '250px', minHeight: '250px', maxWidth: '100%' }}
    />
  );
});

export const AdSlot: React.FC<AdSlotProps> = ({ slot, className = '' }) => {
  // If ads are disabled and placeholders are turned off, return null
  if (!ADS_CONFIG.ENABLED && !ADS_CONFIG.SHOW_CLEAN_PLACEHOLDER) {
    return null;
  }

  // If slot has no key and clean placeholders are turned off, return null to avoid blank gaps
  if (!slot.adsterraKey && !ADS_CONFIG.SHOW_CLEAN_PLACEHOLDER) {
    return null;
  }

  const is300x250 = slot.format === 'banner-300x250';

  return (
    <aside
      id={slot.id}
      aria-label={`Advertisement - ${slot.name}`}
      className={`w-full max-w-full overflow-hidden mx-auto my-6 sm:my-8 flex flex-col items-center justify-center transition-all ${className}`}
      style={{ minHeight: `${slot.minHeight || 250}px` }}
    >
      <div className="flex flex-col items-center justify-center max-w-full w-full">
        {/* Subtle Advertisement label */}
        <span className="text-[10px] uppercase tracking-widest text-[#88999B] font-semibold mb-1.5 select-none text-center">
          Advertisement
        </span>

        {/* Ad Container with reserved 300x250 space to prevent Cumulative Layout Shift */}
        <div
          className="w-[300px] h-[250px] min-h-[250px] max-w-full overflow-hidden flex items-center justify-center bg-[#FAFCFA] rounded-xl border border-[#DCEBE9]/80 shadow-xs"
          style={{ width: '300px', height: '250px', minHeight: '250px', maxWidth: '100%' }}
        >
          {ADS_CONFIG.ENABLED && slot.adsterraKey && is300x250 ? (
            <AdsterraBanner300x250 adKey={slot.adsterraKey} scriptUrl={slot.scriptUrl} />
          ) : (
            <div className="py-2 px-4 text-xs text-[#64787A] flex flex-col items-center justify-center gap-1 text-center">
              <span className="inline-block w-2 h-2 rounded-full bg-[#16A6A3]/60" />
              <span className="font-medium text-[#0B4F55]">Ad Space ({slot.name})</span>
              <span className="text-[11px] text-gray-400">300 × 250 Placement</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
