import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
}

export function TopBar({ title, showBack = true, rightAction }: TopBarProps) {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-40 bg-brand-navy text-white px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {showBack && (
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <ChevronLeft size={24} />
          </button>
        )}
        {title && <h1 className="text-lg font-semibold">{title}</h1>}
      </div>
      <div>{rightAction}</div>
    </div>
  );
}
