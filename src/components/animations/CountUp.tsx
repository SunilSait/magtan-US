'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, target, {
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      });
    }
  }, [isInView, target, duration, count]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}
