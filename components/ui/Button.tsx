import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all transform hover:-translate-y-0.5';

  const variants = {
    primary:
      'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/20',
    secondary:
      'bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/20',
    outline:
      'border-2 border-teal-600 text-teal-600 hover:bg-teal-50',
    ghost:
      'text-teal-600 hover:bg-teal-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
