import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-surface-raised rounded-card shadow-card ${
        onClick ? "cursor-pointer hover:shadow-md transition-shadow" : ""
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export default Card;
