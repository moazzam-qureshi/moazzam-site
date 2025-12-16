import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export function Container({ children, className = '', size = 'lg' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    full: 'max-w-7xl',
  };

  return (
    <div className={`${sizes[size]} mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}
