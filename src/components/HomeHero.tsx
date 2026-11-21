'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

export default function HomeHero() {
  return (
    <section className="relative bg-navy overflow-hidden cursor-crosshair">
      {/* Interactive Particle Network */}
      <InteractiveParticles density="high" maxDistance={135} mouseRadius={180} />

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Geometric rings */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] border border-white/5 rounded-full -translate-y-1/3 translate-x-1/4"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-white/5 rounded-full translate-y-1/3 -translate-x-1/4"
          animate={{ scale: [1, 1.08, 1], rotate: [0, -4, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Gradient blobs */}
        <motion.div
          className="absolute -top-20 right-1/4 w-96 h-96 bg-gold/[0.04] rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 w-72 h-72 bg-white/[0.015] rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 pattern-dots-light opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 pointer-events-auto">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.p
            className="text-gold text-sm font-semibold tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MAGTAN INTERNATIONAL HOLDINGS INC
          </motion.p>

          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight max-w-3xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            One Vision.{' '}
            <span className="gold-shimmer">A Global Future.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A Delaware-registered U.S. corporation focused on international business development
            and technology services.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center items-center gap-4 cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/services" className="btn-primary">
              Our Services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gold line — sweeps left to right */}
      <motion.div
        className="relative z-10 h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ transformOrigin: 'left' }}
      />
    </section>
  );
}
