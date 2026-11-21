'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GrowingLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      ref={ref}
      className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
    >
      {/* Background track */}
      <div className="w-px h-full bg-border" />
      {/* Animated gold progress */}
      <motion.div
        className="absolute top-0 left-0 w-px bg-gold"
        style={{
          scaleY: scrollYProgress,
          opacity,
          height: '100%',
          transformOrigin: 'top',
        }}
      />
    </div>
  );
}
