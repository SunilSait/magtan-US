'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
  once?: boolean;
  amount?: number;
}

export default function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.12,
  delayStart = 0,
  once = true,
  amount = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayStart,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
