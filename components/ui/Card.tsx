import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = 'bg-white rounded-xl border border-stone/10 overflow-hidden';
  const hoverStyles = hover
    ? 'transition-all hover:shadow-xl hover:shadow-stone/10 hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
