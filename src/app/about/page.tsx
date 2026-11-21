import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import ParallaxFloat from '@/components/animations/ParallaxFloat';
import SpotlightCard from '@/components/animations/SpotlightCard';
import TiltCard from '@/components/animations/TiltCard';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about MAGTAN INTERNATIONAL HOLDINGS INC – a Delaware corporation with an international business vision, connecting global opportunities with skilled delivery teams.',
};

const values = [
  {
    number: '01',
    title: 'Integrity',
    tagline: 'Ethics & Transparency',
    desc: 'We conduct all business relationships with transparency, honesty, and uncompromising ethical standards.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Innovation',
    tagline: 'Modern Technology',
    desc: 'We encourage creative solutions and embrace modern technology to serve our clients effectively and dynamically.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Collaboration',
    tagline: 'Global Partnerships',
    desc: 'We build effective partnerships between international clients and delivery teams for optimal project outcomes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Quality',
    tagline: 'Execution Excellence',
    desc: 'We are committed to delivering professional work that meets client expectations and rigorous industry benchmarks.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Sustainable Growth',
    tagline: 'Long-Term Value',
    desc: 'We focus on building durable business relationships that create lasting value for clients, delivery teams, and stakeholders.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A Delaware corporation established with an international business vision."
        breadcrumb="Company"
      />

      {/* ============ COMPANY BACKGROUND ============ */}
      <section className="section-padding relative overflow-hidden">
        <InteractiveParticles theme="light" density="low" showLines={false} mouseRadius={140} />
        <ParallaxFloat className="-top-16 -right-16 w-80 h-80 bg-gold/[0.03] rounded-full blur-3xl" speed={0.2} />
        <ParallaxFloat className="bottom-10 left-10 w-48 h-48 border border-navy/[0.04] rounded-full" speed={0.15} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl">
            <SectionHeading label="Our Story" title="Building Bridges Between Global Markets" />
            <div className="space-y-5 text-text-body leading-relaxed text-base">
              <p>
                MAGTAN INTERNATIONAL HOLDINGS INC is a Delaware corporation established with an
                international business vision. Our focus is to develop business relationships in the
                United States and other international markets while coordinating professional service
                delivery through India-based operating teams and service partners.
              </p>
              <p>
                We aim to connect global business opportunities with capable delivery resources,
                creating a bridge between international clients who need technology services and
                skilled teams who can deliver them professionally and efficiently.
              </p>
              <p>
                Our business model is built on understanding client requirements deeply, managing
                projects with discipline, and ensuring quality delivery through qualified technology
                professionals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ VISION ============ */}
      <section className="bg-bg-light section-padding relative overflow-hidden">
        <InteractiveParticles theme="light" density="low" showLines={false} mouseRadius={140} />
        <div className="absolute inset-0 pointer-events-none pattern-dots" />
        <ParallaxFloat className="top-10 -left-10 w-64 h-64 border border-gold/[0.05] rounded-full" speed={0.15} />
        <ParallaxFloat className="-bottom-10 right-20 w-72 h-72 bg-navy/[0.02] rounded-full blur-3xl" speed={0.2} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <SectionHeading label="Our Vision" title="An Internationally Connected Business Group" />
              <p className="text-text-body leading-relaxed text-base">
                To build an internationally connected business group that creates sustainable
                business opportunities and long-term value. We envision a future where businesses
                across borders collaborate seamlessly, supported by reliable technology services
                and professional project management.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                <SpotlightCard
                  spotlightColor="rgba(201, 164, 76, 0.16)"
                  className="bg-navy rounded-lg p-10 md:p-12 relative"
                >
                  <span className="accent-line mb-6" />
                  <blockquote className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
                    &ldquo;One Vision. A Global Future.&rdquo;
                  </blockquote>
                  <p className="text-gold text-sm font-medium mt-4 tracking-wider">
                    MAGTAN INTERNATIONAL HOLDINGS INC
                  </p>
                </SpotlightCard>
                <div className="absolute -bottom-2 -right-2 w-full h-full border border-gold/20 rounded-lg -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ CORE VALUES (REDESIGNED) ============ */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-bg-light/40 to-white">
        {/* Ambient background effects */}
        <InteractiveParticles theme="light" density="low" showLines={false} mouseRadius={150} />
        <div className="absolute inset-0 pointer-events-none pattern-grid opacity-30" />
        <ParallaxFloat className="-top-20 -right-16 w-96 h-96 bg-gold/[0.04] rounded-full blur-3xl" speed={0.2} />
        <ParallaxFloat className="-bottom-20 -left-16 w-96 h-96 bg-navy/[0.03] rounded-full blur-3xl" speed={0.15} direction="down" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] border border-gold/[0.05] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Core Values"
            title="The Principles That Guide Our Business"
            description="Our values define how we operate, govern client engagements, and deliver enduring value across international markets."
            align="center"
          />

          {/* Balanced 6-Column Layout: Row 1 has 3 equal cards (2 cols each), Row 2 has 2 equal cards (3 cols each) */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 mt-14 max-w-6xl mx-auto">
            {values.map((value, index) => {
              // 3 cards on top (lg:col-span-2 each), 2 cards on bottom (lg:col-span-3 each)
              const spanClass =
                index < 3
                  ? 'lg:col-span-2'
                  : index === 3
                  ? 'lg:col-span-3'
                  : 'md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-3';

              return (
                <StaggerItem key={value.title} className={spanClass}>
                  <SpotlightCard
                    spotlightColor="rgba(201, 164, 76, 0.16)"
                    borderColor="rgba(201, 164, 76, 0.5)"
                    className="group bg-white rounded-xl p-8 border border-border shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full card-interactive"
                  >
                    <div>
                      {/* Card Top: Icon & Number Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-navy/[0.05] via-gold/[0.08] to-gold/[0.18] border border-gold/30 text-navy flex items-center justify-center group-hover:scale-105 group-hover:text-gold group-hover:border-gold/60 transition-all duration-300 shadow-xs">
                          {value.icon}
                        </div>
                        <span className="font-mono text-xs font-bold text-gold tracking-widest px-3 py-1 rounded-full bg-gold/10 border border-gold/25">
                          {value.number}
                        </span>
                      </div>

                      {/* Tagline & Title */}
                      <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-1">
                        {value.tagline}
                      </p>
                      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold-dark transition-colors tracking-tight">
                        {value.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-text-body leading-relaxed">
                        {value.desc}
                      </p>
                    </div>

                    {/* Card Bottom Accent */}
                    <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-text-body/60 uppercase tracking-wider group-hover:text-navy transition-colors">
                        Core Value
                      </span>
                      <span className="w-8 h-0.5 bg-gold/30 rounded-full group-hover:w-16 group-hover:bg-gold transition-all duration-300" />
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Corporate Commitment Callout */}
          <FadeIn delay={0.3} className="mt-14 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-navy via-navy-light to-navy rounded-xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl border border-white/10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    Institutional Governance
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Delaware Governance & Global Delivery Standards
                  </h3>
                  <p className="text-white/70 text-sm max-w-2xl leading-relaxed">
                    Every client engagement conducted by MAGTAN INTERNATIONAL HOLDINGS INC is governed
                    by our Delaware corporate structure, structured service agreements, and multi-tier
                    quality control.
                  </p>
                </div>
                <Link
                  href="/how-we-work"
                  className="btn-primary text-sm py-3 px-6 shrink-0 shadow-md group inline-flex items-center gap-2"
                >
                  <span>How We Work</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ WHY MAGTAN (REDESIGNED) ============ */}
      <section className="bg-navy section-padding relative overflow-hidden">
        {/* Deep ambient atmospheric effects */}
        <InteractiveParticles density="low" maxDistance={120} mouseRadius={150} />
        <div className="absolute inset-0 pointer-events-none pattern-dots-light" />
        <ParallaxFloat className="top-10 -right-20 w-80 h-80 border border-white/[0.04] rounded-full" speed={0.15} />
        <ParallaxFloat className="-bottom-20 -left-20 w-96 h-96 border border-white/[0.03] rounded-full" speed={0.1} direction="down" />
        <ParallaxFloat className="top-1/2 left-1/3 w-28 h-28 bg-gold/[0.04] rounded-full blur-2xl" speed={0.25} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Magtan"
            title="What Sets Us Apart"
            description="Our competitive advantage lies in combining U.S. institutional governance with high-caliber global delivery teams."
            align="center"
            light
          />

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
            {[
              {
                number: '01',
                category: 'Corporate Governance',
                title: 'U.S. Business Presence',
                desc: 'As a Delaware-registered corporation, we provide our clients with a recognized, compliant U.S. corporate entity for contracting, invoicing, and institutional security.',
                highlights: [
                  'Delaware Registered (File #10631049)',
                  'Direct U.S. Client Contracting & Invoicing',
                  'Institutional Stripe Verification Standards',
                ],
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5M4.5 21V10.5m15 0H4.5M21 21H3" />
                  </svg>
                ),
              },
              {
                number: '02',
                category: 'Global Reach',
                title: 'International Coordination',
                desc: 'We bridge the gap between international client objectives and vetted offshore delivery teams, ensuring clear communication, aligned workflows, and smooth execution.',
                highlights: [
                  'U.S. & International Enterprise Clients',
                  'Experienced India-Based Delivery Teams',
                  'Seamless Cross-Border Communication',
                ],
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
              },
              {
                number: '03',
                category: 'Delivery Discipline',
                title: 'Professional Management',
                desc: 'Every engagement is governed with rigorous discipline — from technical scope definition and milestone governance through delivery verification and ongoing support.',
                highlights: [
                  'Comprehensive Requirements Analysis',
                  'Structured Milestone & SLA Monitoring',
                  'End-to-End Post-Delivery Support',
                ],
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard tiltMaxAngle={5} className="h-full">
                  <SpotlightCard
                    spotlightColor="rgba(201, 164, 76, 0.2)"
                    borderColor="rgba(201, 164, 76, 0.55)"
                    className="group bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 backdrop-blur-xl rounded-2xl p-8 sm:p-9 hover:border-gold/60 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(201,164,76,0.12)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Top Bar: Icon Badge & Number */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 via-gold/10 to-white/5 border border-gold/40 flex items-center justify-center text-gold group-hover:scale-105 group-hover:bg-gold/25 group-hover:border-gold transition-all duration-300 shadow-md">
                          {item.icon}
                        </div>
                        <span className="font-mono text-xs font-bold text-gold tracking-widest px-3 py-1 rounded-full bg-gold/15 border border-gold/30 shadow-xs">
                          {item.number}
                        </span>
                      </div>

                      {/* Category Sub-badge */}
                      <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-1.5">
                        {item.category}
                      </p>

                      {/* Card Title */}
                      <h3 className="text-white text-2xl font-bold mb-3 tracking-tight group-hover:text-gold-light transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/75 text-sm leading-relaxed mb-6 font-normal">
                        {item.desc}
                      </p>

                      {/* Highlights / Institutional Checklist */}
                      <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                        {item.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2.5 text-xs text-white/85">
                            <span className="w-4 h-4 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0 text-gold">
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </span>
                            <span className="font-medium">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Footer */}
                    <div className="pt-5 border-t border-white/10 flex items-center justify-between mt-auto">
                      <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider group-hover:text-gold transition-colors">
                        Strategic Advantage
                      </span>
                      <span className="w-8 h-0.5 bg-gold/40 rounded-full group-hover:w-16 group-hover:bg-gold transition-all duration-300" />
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
