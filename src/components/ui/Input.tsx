import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
}

function Input({ label, error, leftIcon, className, id, ...rest }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3 text-gray-400 flex items-center pointer-events-none">
            {leftIcon}
          </span>
        )}
        <input
          id={inputId}
          className={
            className ??
            `w-full rounded-btn border px-4 py-2.5 text-sm text-gray-900 outline-none transition-all
            placeholder:text-gray-400
            ${leftIcon ? "pl-10" : ""}
            ${
              error
                ? "border-danger focus:ring-2 focus:ring-danger/20"
                : "border-gray-200 focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/10"
            }
            bg-surface-raised`
          }
          {...rest}
        />
      </div>

      {error && (
        <p className="text-xs text-danger mt-0.5">{error}</p>
      )}
    </div>
  );
}

export default Input;
