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
import TiltCard from '@/components/animations/TiltCard';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'Discover our six-step business process — from client engagement to post-delivery support. Learn how MAGTAN INTERNATIONAL HOLDINGS INC manages international projects.',
};

const steps = [
  {
    step: '01',
    title: 'Client Engagement',
    description: 'We connect with U.S. and international businesses through direct business development, referrals, and strategic partnerships.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Requirement Analysis',
    description: 'We analyze client business requirements, architecture objectives, technical deliverables, security parameters, and delivery timelines.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Proposal & Agreement',
    description: 'We prepare clear project agreements specifying technical scope, payment milestones, deliverables, and applicable contractual terms.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Project Execution',
    description: 'We coordinate development through specialized technology teams and India-based engineering providers under clear contractual and project oversight.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
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
        subtitle="Our six-step process ensures clear communication, professional management, and reliable delivery for every engagement."
        breadcrumb="Business Model"
      />

      {/* ============ OUR PROCESS & STEPS (DARK CYBER GLASS CARDS) ============ */}
      <section className="bg-[#040D1A] section-padding relative overflow-hidden text-white border-b border-cyan-500/15">
        <InteractiveParticles theme="dark" density="low" maxDistance={120} mouseRadius={150} />
        <ParallaxFloat className="top-20 -right-16 w-80 h-80 border border-cyan-500/[0.08] rounded-full" speed={0.1} />
        <ParallaxFloat className="bottom-20 -left-20 w-72 h-72 bg-blue-600/[0.08] rounded-full blur-3xl" speed={0.15} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-4">
            <SectionHeading
              label="Our Process"
              title="From Engagement to Delivery"
              description="Our business model connects international clients with scalable technology delivery capabilities. Each step is designed for transparency, security, and dependable execution."
              align="center"
              light
            />
          </div>

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
                        className="bg-[#071325]/85 border border-cyan-500/25 rounded-2xl p-7 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
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
              {
                number: '01',
                title: 'Transparent Process',
                desc: 'Every phase is carefully managed through clearly defined milestones, providing complete visibility into project timelines.',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                number: '02',
                title: 'Professional Standards',
                desc: 'We follow disciplined methodologies for architecture, engineering, and multi-tier quality assurance.',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                number: '03',
                title: 'Reliable Delivery',
                desc: 'Our coordination between international clients and delivery teams ensures projects are delivered according to agreed timelines.',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <TiltCard tiltMaxAngle={6} className="h-full">
                  <SpotlightCard
                    spotlightColor="rgba(0, 240, 255, 0.2)"
                    className="group relative h-full bg-[#071325]/85 border border-cyan-500/25 rounded-2xl backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.28)] hover:-translate-y-2 transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
                  >
                    <div className="relative p-8 flex flex-col items-center text-center h-full">
                      {/* Ambient subtle glow overlay on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/[0.08] via-transparent to-blue-600/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Clean Unboxed Icon */}
                      <div className="flex justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:text-cyan-200 transition-all duration-300">
                        {item.icon}
                      </div>

                      {/* Number Tag (unboxed clean text) */}
                      <div className="flex justify-center mb-2">
                        <span className="font-mono text-xs font-semibold text-cyan-400/80 tracking-widest uppercase">
                          {item.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300 tracking-tight">
                        {item.title}
                      </h3>

                      {/* Glowing Interactive Accent Line */}
                      <span className="w-10 h-0.5 mx-auto block bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 group-hover:w-20 group-hover:shadow-[0_0_10px_#00F0FF] transition-all duration-300" />

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </SpotlightCard>
                </TiltCard>
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
              Ready to discuss your business requirements? Connect with our team to plan a tailored
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
