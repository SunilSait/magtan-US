'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxFloatProps {
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export default function ParallaxFloat({
  className = '',
  speed = 0.3,
  direction = 'up',
}: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const range = 60 * speed;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [range, -range] : [-range, range],
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, willChange: 'transform' }}
      className={`pointer-events-none absolute ${className}`}
    />
  );
}
