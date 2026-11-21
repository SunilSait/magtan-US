'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  amount = 0.15,
}: FadeInProps) {
  const offset = 40;
  const dirMap: Record<string, object> = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: -offset },
    right: { x: offset },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...dirMap[direction] }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration, delay, ease: [0.25, 0.4, 0.25, 1] },
      }}
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
