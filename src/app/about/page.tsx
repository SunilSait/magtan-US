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
      <section className="bg-[#020712] section-padding relative overflow-hidden text-white border-b border-cyan-500/10">
        <InteractiveParticles theme="dark" density="low" showLines={false} mouseRadius={140} />
        <ParallaxFloat className="-top-16 -right-16 w-80 h-80 bg-cyan-500/[0.06] rounded-full blur-3xl" speed={0.2} />
        <ParallaxFloat className="bottom-10 left-10 w-48 h-48 border border-cyan-500/[0.1] rounded-full" speed={0.15} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl">
            <SectionHeading label="Our Story" title="Building Bridges Between Global Markets" light />
            <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
              <p>
                <strong className="text-white">MAGTAN INTERNATIONAL HOLDINGS INC</strong> is a Delaware corporation
                established with an international business vision. Our focus is to develop business relationships in the
                United States and other international markets while coordinating professional service delivery through
                India-based operating teams and specialized technology partners.
              </p>
              <p>
                We aim to connect global business opportunities with capable delivery resources, creating a robust bridge
                between international enterprise clients who need mission-critical technology services and skilled teams who
                can deliver them professionally, securely, and efficiently.
              </p>
              <p>
                Our business model is built on understanding client requirements deeply, managing projects with institutional
                discipline, and ensuring quality delivery governed under U.S. Delaware corporate standards.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ VISION ============ */}
      <section className="bg-[#040D1A] section-padding relative overflow-hidden text-white border-b border-cyan-500/15">
        <InteractiveParticles theme="dark" density="low" showLines={false} mouseRadius={140} />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.06)_0,transparent_65%)]" />
        <ParallaxFloat className="top-10 -left-10 w-64 h-64 border border-cyan-500/[0.15] rounded-full" speed={0.15} />
        <ParallaxFloat className="-bottom-10 right-20 w-72 h-72 bg-blue-600/[0.1] rounded-full blur-3xl" speed={0.2} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <SectionHeading label="Our Vision" title="An Internationally Connected Business Group" light />
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                To build an internationally connected enterprise group that creates sustainable business opportunities
                and long-term value. We envision a future where businesses across borders collaborate seamlessly, supported
                by reliable technology services, scalable cloud architectures, and professional project governance.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                <SpotlightCard
                  spotlightColor="rgba(0, 240, 255, 0.2)"
                  borderColor="rgba(0, 240, 255, 0.45)"
                  className="bg-[#071325]/90 rounded-2xl p-10 md:p-12 relative border border-cyan-500/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                >
                  <span className="accent-line mb-6" />
                  <blockquote className="text-white text-xl md:text-2xl font-bold leading-relaxed tracking-tight">
                    &ldquo;One Vision. A Global Future.&rdquo;
                  </blockquote>
                  <p className="text-cyan-400 text-sm font-semibold mt-4 tracking-wider uppercase">
                    MAGTAN INTERNATIONAL HOLDINGS INC
                  </p>
                </SpotlightCard>
                <div className="absolute -bottom-2 -right-2 w-full h-full border border-cyan-500/20 rounded-2xl -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ CORE VALUES (DARK CYBER GLASS CARDS) ============ */}
      <section className="bg-[#020712] section-padding relative overflow-hidden text-white border-b border-cyan-500/15">
        {/* Ambient cyber background effects */}
        <InteractiveParticles theme="dark" density="low" showLines={false} mouseRadius={150} />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(56,189,248,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-60" />
        <ParallaxFloat className="-top-20 -right-16 w-96 h-96 bg-cyan-500/[0.08] rounded-full blur-3xl" speed={0.2} />
        <ParallaxFloat className="-bottom-20 -left-16 w-96 h-96 bg-blue-600/[0.1] rounded-full blur-3xl" speed={0.15} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Core Values"
            title="The Principles That Guide Our Business"
            description="Our values define how we operate, govern client engagements, and deliver enduring value across international enterprise markets."
            align="center"
            light
          />

          {/* Balanced 6-Column Layout: Row 1 has 3 equal cards (2 cols each), Row 2 has 2 equal cards (3 cols each) */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 mt-14 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const spanClass =
                index < 3
                  ? 'lg:col-span-2'
                  : index === 3
                  ? 'lg:col-span-3'
                  : 'md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-3';

              return (
                <StaggerItem key={value.title} className={spanClass}>
                  <SpotlightCard
                    spotlightColor="rgba(0, 240, 255, 0.16)"
                    borderColor="rgba(0, 240, 255, 0.45)"
                    className="group bg-[#071325]/85 rounded-2xl p-8 border border-cyan-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full backdrop-blur-xl"
                  >
                    <div>
                      {/* Card Top: 3D Holographic Icon & Number Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-purple-600/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center group-hover:scale-105 group-hover:text-white group-hover:border-cyan-300 group-hover:shadow-[0_0_18px_rgba(0,240,255,0.4)] transition-all duration-300 shadow-md">
                          {value.icon}
                        </div>
                        <span className="font-mono text-xs font-bold text-cyan-300 tracking-widest px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 shadow-[0_0_8px_rgba(0,240,255,0.15)]">
                          {value.number}
                        </span>
                      </div>

                      {/* Tagline & Title */}
                      <p className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-1">
                        {value.tagline}
                      </p>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors tracking-tight">
                        {value.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {value.desc}
                      </p>
                    </div>

                    {/* Card Bottom Accent */}
                    <div className="mt-8 pt-4 border-t border-cyan-500/15 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                        Core Value
                      </span>
                      <span className="w-8 h-0.5 bg-cyan-500/30 rounded-full group-hover:w-16 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#00F0FF] transition-all duration-300" />
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Corporate Commitment Callout Banner */}
          <FadeIn delay={0.3} className="mt-14 max-w-5xl mx-auto">
            <div className="bg-[#071325]/90 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl border border-cyan-500/30 backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#00F0FF]" />
                    Institutional Governance
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Delaware Governance & Global Delivery Standards
                  </h3>
                  <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                    Every client engagement conducted by MAGTAN INTERNATIONAL HOLDINGS INC is governed
                    by our Delaware corporate structure, structured service agreements, and multi-tier
                    quality control.
                  </p>
                </div>
                <Link
                  href="/how-we-work"
                  className="btn-primary text-sm py-3 px-7 shrink-0 shadow-[0_0_20px_rgba(0,240,255,0.35)] group inline-flex items-center gap-2 cursor-pointer"
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

      {/* ============ WHY MAGTAN (DARK CYBER GLASS CARDS) ============ */}
      <section className="bg-[#040D1A] section-padding relative overflow-hidden text-white">
        {/* Deep ambient atmospheric effects */}
        <InteractiveParticles density="low" maxDistance={120} mouseRadius={150} />
        <ParallaxFloat className="top-10 -right-20 w-80 h-80 border border-cyan-500/[0.08] rounded-full" speed={0.15} />
        <ParallaxFloat className="-bottom-20 -left-20 w-96 h-96 border border-cyan-500/[0.06] rounded-full" speed={0.1} direction="down" />
        <ParallaxFloat className="top-1/2 left-1/3 w-28 h-28 bg-cyan-500/[0.06] rounded-full blur-2xl" speed={0.25} />

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
                  'Institutional Verification Standards',
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
                    spotlightColor="rgba(0, 240, 255, 0.18)"
                    borderColor="rgba(0, 240, 255, 0.45)"
                    className="group bg-[#071325]/85 border border-cyan-500/25 backdrop-blur-xl rounded-2xl p-8 sm:p-9 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,240,255,0.2)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Top Bar: Icon Badge & Number */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-purple-600/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-105 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 shadow-md">
                          {item.icon}
                        </div>
                        <span className="font-mono text-xs font-bold text-cyan-300 tracking-widest px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 shadow-xs">
                          {item.number}
                        </span>
                      </div>

                      {/* Category Sub-badge */}
                      <p className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-1.5">
                        {item.category}
                      </p>

                      {/* Card Title */}
                      <h3 className="text-white text-2xl font-bold mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                        {item.desc}
                      </p>

                      {/* Highlights / Institutional Checklist */}
                      <div className="space-y-2.5 pt-4 border-t border-cyan-500/15 mb-6">
                        {item.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2.5 text-xs text-slate-200">
                            <span className="w-4 h-4 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0 text-cyan-300">
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
                    <div className="pt-5 border-t border-cyan-500/15 flex items-center justify-between mt-auto">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                        Strategic Advantage
                      </span>
                      <span className="w-8 h-0.5 bg-cyan-500/40 rounded-full group-hover:w-16 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#00F0FF] transition-all duration-300" />
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
