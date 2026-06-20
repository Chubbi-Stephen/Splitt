import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div 
      className={cn("bg-brand-surface rounded-2xl shadow-sm border border-gray-100 p-5", className)} 
      {...props}
    >
      {children}
    </div>
  );
}
