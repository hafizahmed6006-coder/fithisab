import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-[#64787A]">
        <li className="flex items-center">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-[#087F82] transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#087F82]/30"
            title="Go to FitHisab Homepage"
          >
            <Home className="w-3.5 h-3.5 text-[#087F82]" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              {isLast || !item.url ? (
                <span className="font-semibold text-[#183438] truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.url && onNavigate(item.url)}
                  className="hover:text-[#087F82] transition-colors truncate max-w-[150px] p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#087F82]/30"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
