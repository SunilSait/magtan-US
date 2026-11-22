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
      className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0"
    >
      {/* Background track */}
      <div className="w-[2px] h-full bg-cyan-950/80 border-l border-cyan-500/20" />
      {/* Animated cyan progress line */}
      <motion.div
        className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-cyan-400 via-sky-300 to-blue-500 shadow-[0_0_10px_#00F0FF]"
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
