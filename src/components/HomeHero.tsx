'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import StageGlobeCanvas from '@/components/animations/StageGlobeCanvas';

export default function HomeHero() {
  return (
    <section className="relative bg-[#020712] text-white overflow-hidden pt-2 sm:pt-3 lg:pt-4 pb-14 lg:pb-16">
      {/* High-Tech Cyber Lighting Blooms & Spatial Grid */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right electric cyan bloom */}
        <div className="absolute top-1/4 right-1/6 w-[38rem] h-[38rem] bg-cyan-500/[0.12] rounded-full blur-[140px]" />
        {/* Bottom-left royal blue bloom */}
        <div className="absolute -bottom-20 left-1/4 w-[34rem] h-[34rem] bg-blue-600/[0.15] rounded-full blur-[130px]" />
        {/* Center purple/magenta subtle accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-purple-600/[0.06] rounded-full blur-[110px]" />
        {/* High-tech perspective grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* 2-Column Split: Crisp High-Tech Typography (Left) + 3D Holographic AI / Globe Stage (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start lg:items-center">
          
          {/* Left Column: Bold IT Typography & Clean CTAs */}
          <div className="lg:col-span-7 text-left flex flex-col items-start pr-0 lg:pr-6">
            
            {/* Delaware Status Badge — Electric Cyan Pill */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.2)] mb-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
              <span className="text-cyan-300 text-xs font-semibold tracking-[0.18em] uppercase">
                Delaware Corporation • U.S. Reg #10631049
              </span>
            </motion.div>

            {/* Official Legal Entity Name */}
            <motion.p
              className="text-cyan-200/80 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-3.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              MAGTAN INTERNATIONAL HOLDINGS INC
            </motion.p>

            {/* Primary Headline — High-Contrast Clean IT Typography */}
            <motion.h1
              className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.12] tracking-tight max-w-2xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              One Vision.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                A Global Future.
              </span>
            </motion.h1>

            {/* Core Description — Clean Slate Body */}
            <motion.p
              className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              A Delaware-registered U.S. corporation connecting international enterprise clients with
              high-performance technology delivery, IT consulting, and digital solutions.
            </motion.p>

            {/* Action CTAs — Matching "VER SERVICIOS ->" Tech Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/services"
                className="btn-secondary group text-sm sm:text-base py-3 px-8 flex items-center gap-2 border border-cyan-400/80 text-cyan-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all cursor-pointer backdrop-blur-sm"
              >
                <span>Our Services</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-cyan-400 group-hover:text-white"
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
                className="btn-primary text-sm sm:text-base py-3 px-8 flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(0,240,255,0.35)]"
              >
                <span>Get in Touch</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Cyber Globe Stage */}
          <motion.div
            className="lg:col-span-5 relative w-full h-[420px] sm:h-[460px] lg:h-[500px] flex flex-col items-center justify-center select-none"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Radial Backlight Glow Behind Globe */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[320px] sm:w-[400px] lg:w-[460px] h-[320px] sm:h-[400px] lg:h-[460px] rounded-full bg-radial from-cyan-500/[0.22] via-blue-600/[0.10] to-transparent blur-3xl animate-pulse"
                style={{ animationDuration: '6s' }}
              />
              <div className="absolute w-[240px] sm:w-[300px] lg:w-[360px] h-[240px] sm:h-[300px] lg:h-[360px] rounded-full bg-radial from-cyan-400/[0.15] via-purple-600/[0.12] to-transparent blur-2xl" />
            </div>

            {/* 3D Interactive Globe Canvas */}
            <div className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing">
              <StageGlobeCanvas />
            </div>
          </motion.div>
        </div>

        {/* Corporate Credentials Strip — Frosted Cyber Glass Cards */}
        <motion.div
          className="mt-10 pt-6 border-t border-cyan-500/15 w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center gap-2.5 sm:gap-3 bg-[#071325]/80 p-3.5 rounded-xl border border-cyan-500/20 backdrop-blur-md hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs sm:text-[13px] font-semibold tracking-wide whitespace-nowrap">Delaware Registered</p>
              <p className="text-slate-400 text-[11px] whitespace-nowrap">File No. 10631049</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 bg-[#071325]/80 p-3.5 rounded-xl border border-cyan-500/20 backdrop-blur-md hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs sm:text-[13px] font-semibold tracking-wide whitespace-nowrap">International Reach</p>
              <p className="text-slate-400 text-[11px] whitespace-nowrap">U.S. & Global Markets</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 bg-[#071325]/80 p-3.5 rounded-xl border border-cyan-500/20 backdrop-blur-md hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs sm:text-[13px] font-semibold tracking-wide whitespace-nowrap">Enterprise Tech</p>
              <p className="text-slate-400 text-[11px] whitespace-nowrap">IT, Software & Cloud</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 bg-[#071325]/80 p-3.5 rounded-xl border border-cyan-500/20 backdrop-blur-md hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs sm:text-[13px] font-semibold tracking-wide whitespace-nowrap">Verified Corporate</p>
              <p className="text-slate-400 text-[11px] whitespace-nowrap">U.S. Contracts & Delivery</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sweeping Electric Cyan / Blue Gradient Border */}
      <motion.div
        className="relative z-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00F0FF] mt-12"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ transformOrigin: 'center' }}
      />
    </section>
  );
}
