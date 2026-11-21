'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

export default function StaggerItem({
  children,
  className = '',
  direction = 'up',
}: StaggerItemProps) {
  const dirMap = {
    up: { y: 30 },
    left: { x: -30 },
    right: { x: 30 },
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...dirMap[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
