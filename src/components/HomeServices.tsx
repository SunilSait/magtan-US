'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SpotlightCard from '@/components/animations/SpotlightCard';
import TiltCard from '@/components/animations/TiltCard';
import ParallaxFloat from '@/components/animations/ParallaxFloat';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

const services = [
  {
    id: 'it-consulting',
    number: '01',
    category: 'Strategy & Architecture',
    title: 'IT Consulting & Governance',
    desc: 'Strategic technology advisory, architecture planning, and disciplined project oversight for digital business transformation.',
    tags: ['IT Strategy & Planning', 'System Architecture', 'Systems Integration', 'Technical Advisory'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    id: 'software-development',
    number: '02',
    category: 'Engineering & Build',
    title: 'Software Development & Cloud',
    desc: 'Custom business software, high-performance web applications, and scalable cloud platforms built for reliability and security.',
    tags: ['Custom Web Applications', 'Web Portals', 'Cloud & API Integration', 'Lifecycle Engineering'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: 'digital-data',
    number: '03',
    category: 'Intelligence & Automation',
    title: 'Digital & Data Solutions',
    desc: 'Automated ETL data pipelines, digital content conversion, workflow automation, and organized document management systems.',
    tags: ['Data Conversion & ETL', 'Digital Content Processing', 'Document Workflow Automation', 'Data Management Systems'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    id: 'project-management',
    number: '04',
    category: 'Cross-Border Delivery',
    title: 'International Project Governance',
    desc: 'Disciplined project coordination bridging U.S. Delaware corporate contracting with experienced technical delivery teams.',
    tags: ['U.S. Corporate Contracting', 'Milestone Monitoring', 'Offshore Team Coordination', 'Quality Assurance'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function HomeServices() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const progressScale = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="section-padding bg-[#040D1A] relative overflow-hidden text-white"
    >
      {/* Ambient Cyber Particles & Lighting Blooms */}
      <InteractiveParticles theme="dark" density="low" showLines={false} mouseRadius={150} />

      {/* Modern High-Tech Grid Texture */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-50" />

      {/* Floating Parallax Atmospheric Lighting Blooms */}
      <ParallaxFloat className="top-12 -left-20 w-80 h-80 bg-cyan-500/[0.08] rounded-full blur-3xl" speed={0.15} />
      <ParallaxFloat className="-bottom-16 -right-20 w-96 h-96 bg-blue-600/[0.10] rounded-full blur-3xl" speed={0.2} direction="down" />
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] border border-cyan-500/[0.08] rounded-full pointer-events-none -translate-y-1/2"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Screenshot ("ALGUNAS DE / Nuestras soluciones") */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#00F0FF]" />
            SOLUTIONS & CAPABILITIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Enterprise Technology Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            We provide end-to-end technology services and project oversight, coordinating qualified
            engineering teams to meet international client requirements with precision and speed.
          </motion.p>

          {/* Dynamic Scroll Progress Cyan Accent Line */}
          <div className="mt-6 mx-auto w-24 h-1 bg-cyan-950/80 border border-cyan-500/20 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: progressScale, transformOrigin: 'left' }}
              className="w-full h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 shadow-[0_0_8px_#00F0FF]"
            />
          </div>
        </div>

        {/* ============ 4 FLOATING CYBER GLASS CARDS (MATCHING SCREENSHOT SECTION 2) ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  x: isLeft ? -40 : 40,
                  y: 30,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: (index % 2) * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <TiltCard tiltMaxAngle={5} className="h-full">
                  <SpotlightCard
                    spotlightColor="rgba(0, 240, 255, 0.15)"
                    borderColor="rgba(0, 240, 255, 0.45)"
                    className="group bg-[#071325]/85 rounded-2xl p-8 sm:p-9 border border-cyan-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] hover:-translate-y-1.5 transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] relative overflow-hidden flex flex-col justify-between h-full backdrop-blur-xl"
                  >
                    <div>
                      {/* Top Row: 3D Holographic Icon Container + Number Badge */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-purple-600/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:text-white group-hover:scale-105 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-md">
                          {service.icon}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-cyan-300 tracking-widest px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.15)]">
                            {service.number}
                          </span>
                        </div>
                      </div>

                      {/* Category Label */}
                      <p className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-1.5">
                        {service.category}
                      </p>

                      {/* Main Service Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 tracking-tight">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                        {service.desc}
                      </p>

                      {/* Capability Pills / Deliverables */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 mb-6">
                        {service.tags.map((tag) => (
                          <div
                            key={tag}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs text-slate-200 font-medium group-hover:border-cyan-400/40 group-hover:bg-cyan-900/30 transition-colors duration-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_4px_#00F0FF] shrink-0" />
                            <span className="truncate">{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Action Footer Matching "VER MÁS" */}
                    <div className="pt-5 border-t border-cyan-500/15 flex items-center justify-between mt-4">
                      <Link
                        href={`/services#${service.id}`}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/60 text-cyan-300 text-xs font-semibold tracking-wider uppercase hover:bg-cyan-500/20 hover:text-white hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 ease-out"
                      >
                        <span>Learn More</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                      <span className="w-8 h-0.5 bg-cyan-500/30 rounded-full group-hover:w-16 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#00F0FF] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Custom Agreement Banner Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 max-w-4xl mx-auto bg-[#071325]/90 rounded-2xl p-6 sm:p-8 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.12)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-white text-lg font-bold">Need a Custom Technology Solution?</h4>
            <p className="text-slate-300 text-sm mt-1">
              We establish tailored international delivery agreements governed by clear contractual terms.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-cyan-400/70 text-cyan-300 text-xs sm:text-sm font-semibold hover:bg-cyan-500/20 hover:text-white transition-all cursor-pointer whitespace-nowrap"
            >
              All Services
            </Link>
            <Link href="/contact" className="btn-primary text-xs sm:text-sm py-2.5! px-6! shadow-[0_0_20px_rgba(0,240,255,0.35)] whitespace-nowrap">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
