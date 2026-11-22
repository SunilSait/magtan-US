'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import StageGlobeCanvas from '@/components/animations/StageGlobeCanvas';

export default function HomeHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center bg-navy text-white overflow-hidden py-16 lg:py-20">
      {/* Atmospheric Background Lighting Blooms */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-[36rem] h-[36rem] bg-gold/[0.08] rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 left-1/4 w-[32rem] h-[32rem] bg-[#132D52]/70 rounded-full blur-[120px]" />
        <div className="absolute inset-0 pattern-dots-light opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Executive 2-Column Split: Clean High-Contrast Typography (Left) + 3D Interactive Globe Stage (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-4 lg:pt-8">
          {/* Left Column: 100% Clear, Legible Typography (Col 7) */}
          <div className="lg:col-span-7 text-left flex flex-col items-start pr-0 lg:pr-6">
            {/* Institutional Delaware Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-gold/35 backdrop-blur-md shadow-sm mb-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-semibold tracking-[0.18em] uppercase">
                Delaware Corporation • U.S. Reg #10631049
              </span>
            </motion.div>

            {/* Legal Company Name */}
            <motion.p
              className="text-white/75 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              MAGTAN INTERNATIONAL HOLDINGS INC
            </motion.p>

            {/* Primary Headline */}
            <motion.h1
              className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight max-w-2xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              One Vision.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-[#F3E5AB] to-gold drop-shadow-sm">
                A Global Future.
              </span>
            </motion.h1>

            {/* Core Description - 100% Sharp & Legible with No Overlap */}
            <motion.p
              className="mt-6 text-white/80 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              A Delaware-registered U.S. corporation connecting international enterprise clients with
              high-performance technology delivery, IT consulting, and digital solutions.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/services"
                className="btn-primary group text-sm sm:text-base py-3 px-8 flex items-center gap-2 shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all cursor-pointer"
              >
                <span>Our Services</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-sm sm:text-base py-3 px-8 flex items-center gap-2 bg-white/5 border border-white/25 hover:border-gold hover:bg-gold/10 hover:text-white transition-all backdrop-blur-sm cursor-pointer"
              >
                <span>Get in Touch</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Unconstrained 3D Interactive Stage Globe (Col 5) */}
          <motion.div
            className="lg:col-span-5 relative w-full h-[460px] sm:h-[540px] lg:h-[620px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Luminous Atmospheric Radial Backlight */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[320px] sm:w-[420px] lg:w-[480px] h-[320px] sm:h-[420px] lg:h-[480px] rounded-full bg-radial from-gold/[0.18] via-gold/[0.04] to-transparent blur-3xl animate-pulse"
                style={{ animationDuration: '6s' }}
              />
              <div className="absolute w-[240px] sm:w-[320px] lg:w-[380px] h-[240px] sm:h-[320px] lg:h-[380px] rounded-full bg-radial from-[#1A3A68]/70 via-[#132D52]/30 to-transparent blur-2xl" />
            </div>

            {/* 3D Interactive Stage Globe Canvas */}
            <StageGlobeCanvas />
          </motion.div>
        </div>

        {/* Corporate Credentials Strip — Equal 2 Lines across all 4 cards */}
        <motion.div
          className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center gap-2.5 sm:gap-3 bg-white/[0.04] p-3 rounded-lg border border-white/10 backdrop-blur-md">
            <div className="w-9 h-9 rounded-md bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 text-gold">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs sm:text-[13px] font-semibold tracking-wide whitespace-nowrap">Delaware Registered</p>
              <p className="text-white/60 text-[11px] whitespace-nowrap">File No. 10631049</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 bg-white/[0.04] p-3 rounded-lg border border-white/10 backdrop-blur-md">
            <div className="w-9 h-9 rounded-md bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 text-gold">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs sm:text-[13px] font-semibold tracking-wide whitespace-nowrap">International Reach</p>
              <p className="text-white/60 text-[11px] whitespace-nowrap">U.S. & Global Markets</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 bg-white/[0.04] p-3 rounded-lg border border-white/10 backdrop-blur-md">
            <div className="w-9 h-9 rounded-md bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 text-gold">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs sm:text-[13px] font-semibold tracking-wide whitespace-nowrap">Enterprise Tech</p>
              <p className="text-white/60 text-[11px] whitespace-nowrap">IT, Software & Data</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 bg-white/[0.04] p-3 rounded-lg border border-white/10 backdrop-blur-md">
            <div className="w-9 h-9 rounded-md bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 text-gold">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs sm:text-[13px] font-semibold tracking-wide whitespace-nowrap">Verified Corporate</p>
              <p className="text-white/60 text-[11px] whitespace-nowrap">U.S. Contracts & Delivery</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sweeping Gold Gradient Border */}
      <motion.div
        className="relative z-10 h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent mt-12"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ transformOrigin: 'left' }}
      />
    </section>
  );
}
