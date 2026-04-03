import React from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-dark text-white px-4 py-2 rounded-btn hover:bg-gray-700 transition-colors font-semibold",
  ghost:
    "text-gray-600 hover:text-gray-900 transition-colors bg-transparent",
};

function Button({
  children,
  className,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={className ?? variantStyles[variant]}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
