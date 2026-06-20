import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'danger' | 'neutral' | 'purple' | 'blue';
  className?: string;
}

export function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  const variants = {
    success: 'bg-accent-green-bg text-brand-success',
    danger: 'bg-accent-red-bg text-brand-danger',
    neutral: 'bg-gray-100 text-brand-text-muted',
    purple: 'bg-accent-purple-bg text-icon-purple',
    blue: 'bg-accent-blue-bg text-icon-blue',
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
