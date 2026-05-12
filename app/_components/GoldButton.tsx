'use client';

import Link from 'next/link';
import { ReactNode, MouseEvent } from 'react';

interface GoldButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const sizeClasses = {
  sm:  'px-5 py-2.5 text-sm',
  md:  'px-7 py-3.5 text-base',
  lg:  'px-10 py-4 text-lg',
};

export default function GoldButton({
  children,
  href,
  onClick,
  variant = 'solid',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}: GoldButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 font-semibold
    rounded-full overflow-hidden transition-all duration-300
    cursor-pointer select-none tracking-wide
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  const solidClasses = `
    text-dark-950
    before:absolute before:inset-0 before:rounded-full
    before:bg-[length:200%_100%]
    before:bg-[linear-gradient(90deg,#b8860b_0%,#ffd700_25%,#fff8e1_50%,#ffd700_75%,#b8860b_100%)]
    before:animate-[shimmer_3s_linear_infinite]
    hover:shadow-[0_0_30px_rgba(255,215,0,0.5),0_0_60px_rgba(255,215,0,0.2)]
    hover:scale-105 active:scale-95
  `;

  const outlineClasses = `
    text-gold-500 border-2 border-gold-600
    bg-transparent
    hover:bg-gold-600/10
    hover:border-gold-400 hover:text-gold-300
    hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]
    hover:scale-105 active:scale-95
  `;

  const ghostClasses = `
    text-gold-400 bg-transparent
    hover:bg-gold-500/10 hover:text-gold-300
    hover:scale-105 active:scale-95
  `;

  const variantClass =
    variant === 'solid' ? solidClasses :
    variant === 'outline' ? outlineClasses :
    ghostClasses;

  const content = (
    <>
      {variant === 'solid' && (
        <span className="relative z-10 text-dark-950 mix-blend-multiply font-bold">
          {children}
        </span>
      )}
      {variant !== 'solid' && (
        <span className="relative z-10">{children}</span>
      )}
      {/* Shimmer sweep overlay */}
      {variant === 'solid' && (
        <span
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)',
            animation: 'shimmer 3s linear infinite',
            backgroundSize: '200% 100%',
          }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClass} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`${baseClasses} ${variantClass} ${className}`}
    >
      {content}
    </button>
  );
}
