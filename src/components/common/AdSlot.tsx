import React, { useEffect, useRef } from 'react';
import { ADS_CONFIG, AdSlotConfig } from '../../config/ads';

interface AdSlotProps {
  slot: AdSlotConfig;
  className?: string;
}

/**
 * Adsterra 300x250 Banner Component.
 * Injects and executes the required configuration and invoke scripts directly
 * after the ad container mounts in React/Vite.
 */
const AdsterraBanner300x250: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset container DOM to prevent duplicate script executions
    container.innerHTML = '';

    // Assign atOptions to global window scope
    (window as any).atOptions = {
      'key' : '935f0d7c7792bd4183368994249d97ff',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
    };

    // Configuration script tag
    const confScript = document.createElement('script');
    confScript.type = 'text/javascript';
    confScript.text = `
      atOptions = {
        'key' : '935f0d7c7792bd4183368994249d97ff',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;

    // External Adsterra invoke script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = 'https://www.highrevenueformat.com/935f0d7c7792bd4183368994249d97ff/invoke.js';

    // Append both in sequence to trigger execution
    container.appendChild(confScript);
    container.appendChild(invokeScript);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[300px] h-[250px] min-h-[250px] max-w-full overflow-hidden flex items-center justify-center text-center"
      style={{ width: '300px', height: '250px', minHeight: '250px', maxWidth: '100%' }}
    />
  );
});

/**
 * Adsterra Native Banner Component.
 * Injects and executes the second Adsterra ad unit using the exact Native Banner script and container ID.
 */
const AdsterraNativeBanner: React.FC<{ containerId: string; scriptUrl: string }> = React.memo(({ containerId, scriptUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset container DOM to prevent duplicate banner injections
    container.innerHTML = '';

    // Create the target div element for the native banner
    const targetDiv = document.createElement('div');
    targetDiv.id = containerId;

    // Create the external native banner invoke script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = scriptUrl;

    // Append script then container
    container.appendChild(script);
    container.appendChild(targetDiv);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [containerId, scriptUrl]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-full overflow-hidden flex flex-col items-center justify-center min-h-[100px]"
    />
  );
});

export const AdSlot: React.FC<AdSlotProps> = ({ slot, className = '' }) => {
  // If ads are disabled globally, do not render
  if (!ADS_CONFIG.ENABLED) {
    return null;
  }

  // Handle Native Banner Slot
  if (slot.format === 'native' && slot.containerId && slot.scriptUrl) {
    return (
      <aside
        id={slot.id}
        aria-label={`Advertisement - ${slot.name}`}
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 flex flex-col items-center justify-center transition-all ${className}`}
        style={{ minHeight: `${slot.minHeight || 120}px` }}
      >
        <div className="flex flex-col items-center justify-center max-w-full w-full">
          {/* Subtle Advertisement label */}
          <span className="text-[10px] uppercase tracking-widest text-[#88999B] font-semibold mb-2 select-none text-center">
            Advertisement
          </span>

          {/* Native Banner Responsive Container with safe border and background */}
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-[#FAFCFA] border border-[#DCEBE9]/80 p-3 sm:p-5 shadow-xs">
            <AdsterraNativeBanner
              containerId={slot.containerId}
              scriptUrl={slot.scriptUrl}
            />
          </div>
        </div>
      </aside>
    );
  }

  // Handle 300x250 Banner Slot
  if (!slot.adsterraKey) {
    return null;
  }

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

        {/* Ad Container with fixed 300x250 reserved space to prevent layout shift */}
        <div
          className="w-[300px] h-[250px] min-h-[250px] max-w-full overflow-hidden flex items-center justify-center bg-[#FAFCFA] rounded-xl border border-[#DCEBE9]/80 shadow-xs"
          style={{ width: '300px', height: '250px', minHeight: '250px', maxWidth: '100%' }}
        >
          <AdsterraBanner300x250 />
        </div>
      </div>
    </aside>
  );
};
