'use client';

import { motion } from 'framer-motion';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-navy relative overflow-hidden">
      {/* Interactive Particle Network */}
      <InteractiveParticles density="low" maxDistance={110} mouseRadius={140} />

      {/* Subtle geometric pattern — floating */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 border border-white/20 rounded-full -translate-y-1/2 translate-x-1/3"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 border border-white/20 rounded-full translate-y-1/3 -translate-x-1/4"
          animate={{ scale: [1, 1.08, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center flex flex-col items-center">
        {breadcrumb && (
          <motion.p
            className="text-gold text-sm font-medium tracking-wider uppercase mb-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {breadcrumb}
          </motion.p>
        )}
        <motion.h1
          className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-4 text-white/70 text-lg max-w-2xl leading-relaxed mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.span
          className="accent-line mt-6 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{ transformOrigin: 'center' }}
        />
      </div>
    </section>
  );
}
