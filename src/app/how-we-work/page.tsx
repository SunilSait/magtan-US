import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import ParallaxFloat from '@/components/animations/ParallaxFloat';
import GrowingLine from '@/components/animations/GrowingLine';
import SpotlightCard from '@/components/animations/SpotlightCard';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'Discover our six-step business process — from customer acquisition to post-delivery support. Learn how MAGTAN INTERNATIONAL HOLDINGS INC manages international projects.',
};

const steps = [
  {
    step: '01',
    title: 'Customer Acquisition',
    description: 'We connect with U.S. and international businesses through direct business development, referrals and strategic enterprise partnerships.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Requirement Analysis',
    description: 'We analyze customer business requirements, architecture objectives, technical deliverables, security parameters and delivery timelines.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Proposal & Agreement',
    description: 'We structure clear project agreements specifying technical scope, pricing milestones, deliverables and Delaware governance terms.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Project Execution',
    description: 'We orchestrate development through specialized technology teams and India-based engineering providers under strict U.S. contractual oversight.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.19a1.5 1.5 0 01-.58-2.04l3.47-6a1.5 1.5 0 012.04-.58l5.1 3.19m-5.93 8.62l5.1 3.19a1.5 1.5 0 002.04-.58l3.47-6a1.5 1.5 0 00-.58-2.04l-5.1-3.19m-5.93 8.62L5.21 7.62m12.58 7.55L19.79 7.62" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Quality & Delivery',
    description: 'We conduct multi-tier quality assurance, milestone verification, code review, and transparent delivery progress reporting.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    step: '06',
    title: 'Customer Support',
    description: 'We provide ongoing technical SLA support, system maintenance, and account management according to the governing contract.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        title="How We Work"
        subtitle="Our structured six-step process ensures clear communication, professional management and reliable delivery for every engagement."
        breadcrumb="Business Model"
      />

      {/* ============ INTRO ============ */}
      <section className="bg-[#020712] section-padding relative overflow-hidden text-white border-b border-cyan-500/10">
        <InteractiveParticles theme="dark" density="low" maxDistance={120} mouseRadius={150} />
        <ParallaxFloat className="-top-16 -right-16 w-72 h-72 bg-cyan-500/[0.06] rounded-full blur-3xl" speed={0.2} />
        <ParallaxFloat className="bottom-10 -left-10 w-56 h-56 border border-cyan-500/[0.1] rounded-full" speed={0.15} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Our Process"
              title="From Engagement to Delivery"
              description="Our business model connects international enterprise clients with scalable technology delivery capabilities. Each step is engineered for transparency, security, and exceptional performance."
              align="center"
              light
            />
          </div>
        </div>
      </section>

      {/* ============ PROCESS STEPS (DARK CYBER GLASS CARDS) ============ */}
      <section className="bg-[#040D1A] section-padding relative overflow-hidden text-white border-b border-cyan-500/15">
        <InteractiveParticles theme="dark" density="low" maxDistance={120} mouseRadius={150} />
        <ParallaxFloat className="top-20 -right-16 w-80 h-80 border border-cyan-500/[0.08] rounded-full" speed={0.1} />
        <ParallaxFloat className="bottom-20 -left-20 w-72 h-72 bg-blue-600/[0.08] rounded-full blur-3xl" speed={0.15} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Animated growing cyan timeline line */}
            <GrowingLine />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => (
                <FadeIn key={step.step} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.08}>
                  <div className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:py-10">
                    
                    {/* Center Step Badge */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#020712] border-2 border-cyan-400 items-center justify-center z-10 shadow-[0_0_15px_#00F0FF]">
                      <span className="text-cyan-300 font-mono font-bold text-sm">{step.step}</span>
                    </div>

                    <div className={`${index % 2 === 0 ? 'lg:col-start-1 lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                      <SpotlightCard
                        spotlightColor="rgba(0, 240, 255, 0.16)"
                        borderColor="rgba(0, 240, 255, 0.45)"
                        className="bg-[#071325]/85 border border-cyan-500/25 rounded-2xl p-7 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all duration-300 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                      >
                        <div className="lg:hidden flex items-center gap-3 mb-4">
                          <span className="w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                            <span className="text-cyan-300 font-mono font-bold text-sm">{step.step}</span>
                          </span>
                          <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">Step {step.step}</span>
                        </div>

                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed font-normal">{step.description}</p>
                      </SpotlightCard>
                    </div>

                    {index % 2 === 0 && <div className="hidden lg:block" />}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SUMMARY (DARK CYBER PILLARS) ============ */}
      <section className="bg-[#020712] section-padding relative overflow-hidden text-white border-b border-cyan-500/15">
        <InteractiveParticles theme="dark" density="low" maxDistance={120} mouseRadius={150} />
        <ParallaxFloat className="top-10 -left-10 w-60 h-60 bg-cyan-500/[0.06] rounded-full blur-3xl" speed={0.2} />
        <ParallaxFloat className="-bottom-10 right-20 w-48 h-48 border border-cyan-500/[0.1] rounded-full" speed={0.15} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Transparent Process', desc: 'Every phase is governed with milestone visibility so you always know where deliverables stand.' },
              { title: 'Professional Standards', desc: 'We follow disciplined methodologies for architecture, engineering, and multi-tier quality assurance.' },
              { title: 'Reliable Delivery', desc: 'Our coordination between international clients and delivery teams ensures projects succeed on schedule.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-7 rounded-2xl bg-[#071325]/85 border border-cyan-500/20 backdrop-blur-xl text-center">
                  <span className="accent-line mx-auto mb-5" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-[#040D1A] section-padding relative overflow-hidden text-white">
        <InteractiveParticles density="low" maxDistance={120} mouseRadius={150} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Start Your Project With Us</h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Ready to discuss your enterprise requirements? Connect with our team to structure a custom
              technology delivery engagement.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-sm sm:text-base px-8 py-3.5 shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer">
                Contact Us
              </Link>
              <Link href="/services" className="btn-secondary text-sm sm:text-base px-8 py-3.5 border border-cyan-400/80 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-full cursor-pointer">
                View Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
