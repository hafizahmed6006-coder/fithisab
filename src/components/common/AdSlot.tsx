import React from 'react';
import { ADS_CONFIG, AdSlotConfig } from '../../config/ads';

interface AdSlotProps {
  slot: AdSlotConfig;
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ slot, className = '' }) => {
  // If ads are completely disabled and placeholders are turned off, return null
  if (!ADS_CONFIG.ENABLED && !ADS_CONFIG.SHOW_CLEAN_PLACEHOLDER) {
    return null;
  }

  return (
    <div
      id={slot.id}
      aria-label={`Sponsored Content - ${slot.name}`}
      className={`w-full mx-auto my-6 flex flex-col items-center justify-center transition-all ${className}`}
      style={{ minHeight: `${slot.minHeight}px` }}
    >
      <div className="w-full max-w-4xl bg-[#F4F9F8] border border-dashed border-[#B6DBD7] rounded-xl p-3 flex flex-col items-center justify-center text-center">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#64787A] mb-1">
          Advertisement
        </span>
        
        {ADS_CONFIG.ENABLED && slot.adsterraKey ? (
          <div className="w-full flex justify-center overflow-hidden">
            {/* Adsterra container unit: Script or iframe will be injected here */}
            <div data-adsterra-slot={slot.adsterraKey} className="w-full min-h-[90px]" />
          </div>
        ) : (
          <div className="py-2 text-xs text-[#64787A] flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#16A6A3]/60" />
            <span>Adsterra Monetization Slot ({slot.name})</span>
            <span className="hidden sm:inline text-gray-400">• Non-intrusive placement</span>
          </div>
        )}
      </div>
    </div>
  );
};
