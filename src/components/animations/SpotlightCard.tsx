'use client';

import React, { useRef } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(201, 164, 76, 0.12)',
  borderColor = '',
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !spotlightRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(380px circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`;
  };

  const handleMouseEnter = () => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = '1';
    if (borderRef.current) borderRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = '0';
    if (borderRef.current) borderRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 ease-out z-10"
        style={{
          opacity: 0,
          background: `radial-gradient(380px circle at 50% 50%, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Dynamic Border Glow Layer (only if borderColor is explicitly provided) */}
      {borderColor && (
        <div
          ref={borderRef}
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500 ease-out z-20"
          style={{
            opacity: 0,
            boxShadow: `inset 0 0 0 1px ${borderColor}`,
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-0 h-full">{children}</div>
    </div>
  );
}
