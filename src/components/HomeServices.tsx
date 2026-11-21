'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';
import SpotlightCard from '@/components/animations/SpotlightCard';
import TiltCard from '@/components/animations/TiltCard';
import ParallaxFloat from '@/components/animations/ParallaxFloat';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

const services = [
  {
    id: 'it-consulting',
    number: '01',
    category: 'Strategy & Architecture',
    title: 'IT Consulting',
    desc: 'Strategic technology consulting, architecture planning, and project governance for business transformation.',
    tags: ['IT Strategy & Planning', 'Enterprise Architecture', 'Systems Integration', 'Technical Advisory'],
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
    title: 'Software Development',
    desc: 'Custom software applications, responsive web portals, and scalable cloud solutions engineered for enterprise performance.',
    tags: ['Custom Web Applications', 'Enterprise Portals', 'Cloud & API Integration', 'Lifecycle Support'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: 'digital-data',
    number: '03',
    category: 'Content & Intelligence',
    title: 'Digital & Data Solutions',
    desc: 'End-to-end data conversion, digital content processing, document workflow automation, and structured data management.',
    tags: ['Data Conversion & ETL', 'Digital Content Processing', 'Document Management', 'Workflow Transformation'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    id: 'project-management',
    number: '04',
    category: 'Cross-Border Governance',
    title: 'International Project Management',
    desc: 'Disciplined project coordination bridging U.S. client governance with high-performing offshore delivery teams.',
    tags: ['Cross-Border Governance', 'Milestone Monitoring', 'Resource Orchestration', 'Quality Assurance'],
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
      className="section-padding bg-gradient-to-b from-bg-light via-white to-bg-light relative overflow-hidden"
    >
      {/* Clean ambient particle atmosphere — no dirty lines */}
      <InteractiveParticles theme="light" density="low" showLines={false} mouseRadius={150} />

      {/* Modern architectural grid texture */}
      <div className="absolute inset-0 pointer-events-none pattern-grid opacity-35" />

      {/* Floating parallax atmospheric lighting */}
      <ParallaxFloat className="top-12 -left-20 w-80 h-80 bg-gold/[0.04] rounded-full blur-3xl" speed={0.15} />
      <ParallaxFloat className="-bottom-16 -right-20 w-96 h-96 bg-navy/[0.03] rounded-full blur-3xl" speed={0.2} direction="down" />
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] border border-gold/[0.04] rounded-full pointer-events-none -translate-y-1/2"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with animated badge */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-semibold tracking-widest uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-gold" />
            Capabilities & Solutions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Comprehensive Technology & Business Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-text-body text-base sm:text-lg leading-relaxed"
          >
            We deliver end-to-end technology and management solutions, coordinating qualified delivery
            teams to execute international enterprise requirements with precision.
          </motion.p>

          {/* Dynamic Scroll Progress Accent Line */}
          <div className="mt-6 mx-auto w-24 h-1 bg-border rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: progressScale, transformOrigin: 'left' }}
              className="w-full h-full bg-gold"
            />
          </div>
        </div>

        {/* ============ REDESIGNED SERVICES GRID WITH DYNAMIC SCROLL CONVERGENCE ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  x: isLeft ? -50 : 50,
                  y: 35,
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
                    spotlightColor="rgba(201, 164, 76, 0.16)"
                    borderColor="rgba(201, 164, 76, 0.45)"
                    className="group bg-white rounded-2xl p-8 sm:p-9 border border-border/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Top Row: Icon Container, Number Badge, and Category Pill */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy/[0.04] via-gold/[0.08] to-gold/[0.18] border border-gold/30 flex items-center justify-center text-navy group-hover:text-gold group-hover:scale-105 group-hover:border-gold/60 transition-all duration-300 shadow-xs">
                          {service.icon}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-gold tracking-widest px-3 py-1 rounded-full bg-gold/10 border border-gold/25 shadow-2xs">
                            {service.number}
                          </span>
                        </div>
                      </div>

                      {/* Category Label */}
                      <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-1.5">
                        {service.category}
                      </p>

                      {/* Main Service Title */}
                      <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-gold-dark transition-colors tracking-tight">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-body text-sm leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      {/* Capability Pills / Deliverables */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 mb-6">
                        {service.tags.map((tag) => (
                          <div
                            key={tag}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-light border border-border/60 text-xs text-text-dark font-medium group-hover:border-gold/30 group-hover:bg-gold/[0.03] transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                            <span className="truncate">{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Action Footer */}
                    <div className="pt-5 border-t border-border/60 flex items-center justify-between mt-4">
                      <Link
                        href={`/services#${service.id}`}
                        className="text-xs font-semibold text-navy group-hover:text-gold transition-colors inline-flex items-center gap-2"
                      >
                        <span>Explore Capabilities</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                      <span className="w-8 h-0.5 bg-gold/30 rounded-full group-hover:w-16 group-hover:bg-gold transition-all duration-300" />
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 max-w-4xl mx-auto bg-white rounded-xl p-6 sm:p-8 border border-border shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-navy text-lg font-bold">Need a Custom Technology Solution?</h4>
            <p className="text-text-body text-sm mt-1">
              We structure custom international delivery agreements tailored to your business objectives.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/services" className="btn-outline-navy text-xs sm:text-sm py-2.5 px-5">
              All Services
            </Link>
            <Link href="/contact" className="btn-primary text-xs sm:text-sm py-2.5 px-5 shadow-sm">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
