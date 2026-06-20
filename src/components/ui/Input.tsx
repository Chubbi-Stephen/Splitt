import React, { type InputHTMLAttributes, useState } from 'react';
import { cn } from '../../utils/cn';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, type = 'text', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-brand-text-main">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text-muted">
              {icon}
            </div>
          )}
          <input
            type={isPassword ? (showPassword ? 'text' : 'password') : type}
            className={cn(
              "w-full rounded-xl border border-gray-200 bg-brand-surface px-4 py-3 text-brand-text-main placeholder:text-brand-text-muted focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy transition-colors",
              icon ? "pl-11" : "",
              isPassword ? "pr-11" : "",
              error ? "border-brand-danger focus:border-brand-danger focus:ring-brand-danger" : "",
              className
            )}
            ref={ref}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-text-muted hover:text-brand-text-main"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
        {error && <p className="text-sm text-brand-danger">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
