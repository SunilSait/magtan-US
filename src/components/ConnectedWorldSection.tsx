'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const connectedWorldMetrics = [
  { value: '15+', line1: 'Years of', line2: 'Experience' },
  { value: '100%', line1: 'U.S. SLA', line2: 'Compliance' },
  { value: '500+', line1: 'Engagements', line2: 'Delivered' },
];

export default function ConnectedWorldSection() {
  return (
    <section className="section-padding bg-[#020712] relative overflow-hidden text-white border-t border-cyan-500/15">
      {/* Spatial background flares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[36rem] h-[36rem] bg-cyan-500/[0.08] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-blue-600/[0.12] rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Metrics Bar */}
          <div className="lg:col-span-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(0,240,255,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#00F0FF]" />
              GLOBAL CONNECTIVITY & INFRASTRUCTURE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Technology Innovation for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                Connected World
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal"
            >
              <p>
                In a rapidly evolving digital ecosystem, enterprises need technology delivery partners that combine
                rock-solid legal accountability with agile, world-class execution capabilities.
              </p>
              <p>
                MAGTAN INTERNATIONAL HOLDINGS INC acts as your strategic gateway: governing engagements under Delaware
                corporate standards, managing milestones with seasoned project directors, and deploying skilled
                engineering resources to build secure, scalable, and intelligent cloud systems.
              </p>
            </motion.div>

            {/* Connected World Metrics Strip (Matching Section 3 Bottom Strip from Screenshot) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#071325]/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] grid grid-cols-3 gap-3 sm:gap-6 divide-x divide-cyan-500/20"
            >
              {connectedWorldMetrics.map((metric, i) => (
                <div key={metric.value} className={`${i > 0 ? 'pl-3 sm:pl-6' : ''} text-center flex flex-col justify-between`}>
                  <div className="text-xs text-slate-400 font-medium tracking-wide mb-2 leading-snug">
                    <p>{metric.line1}</p>
                    <p>{metric.line2}</p>
                  </div>
                  <p className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Real Connected World Technology Image */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[560px]"
            >
              {/* Radial ambient cyber backlight */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-radial from-cyan-500/[0.22] via-blue-600/[0.12] to-transparent blur-3xl animate-pulse" />
              </div>

              {/* Real Connected World Image Card */}
              <div className="relative group w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden border border-cyan-500/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-cyan-400/70 hover:shadow-[0_0_35px_rgba(0,240,255,0.3)] transition-all duration-500">
                <Image
                  src="/images/connected-world-nasa.jpg"
                  alt="Technology Innovation for a Connected World - MAGTAN"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Subtle Ambient Cyber Lighting Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020712]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-cyan-500/20 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
