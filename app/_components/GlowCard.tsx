'use client';

import { useRef, MouseEvent, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  style?: React.CSSProperties;
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(255, 215, 0, 0.15)',
  style,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    glow.style.opacity = '1';

    // subtle 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    glow.style.opacity = '0';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-300 ease-out ${className}`}
      style={{ willChange: 'transform', ...style }}
    >
      {/* Mouse-tracking radial glow */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none opacity-0 transition-opacity duration-300"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />
      {/* Content */}
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}
