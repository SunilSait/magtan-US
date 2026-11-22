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
    <section className="bg-[#020712] relative overflow-hidden text-white border-b border-cyan-500/15">
      {/* Interactive Particle Network */}
      <InteractiveParticles theme="dark" density="low" maxDistance={110} mouseRadius={140} />

      {/* Cyber ambient lighting blooms */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/[0.08] rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/[0.1] rounded-full blur-3xl translate-y-1/2" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 text-center flex flex-col items-center">
        {breadcrumb && (
          <motion.p
            className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,240,255,0.2)]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {breadcrumb}
          </motion.p>
        )}
        <motion.h1
          className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto"
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
