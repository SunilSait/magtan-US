import type { Metadata } from 'next';
import Link from 'next/link';
import HomeHero from '@/components/HomeHero';
import HomeServices from '@/components/HomeServices';
import ConnectedWorldSection from '@/components/ConnectedWorldSection';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import ParallaxFloat from '@/components/animations/ParallaxFloat';
import SpotlightCard from '@/components/animations/SpotlightCard';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

export const metadata: Metadata = {
  title: 'MAGTAN INTERNATIONAL HOLDINGS INC | One Vision. A Global Future.',
  description:
    'MAGTAN INTERNATIONAL HOLDINGS INC is a Delaware-registered U.S. corporation delivering IT consulting, software engineering, digital data solutions, and global technology delivery.',
};

const missionItems = [
  'Build lasting international client relationships.',
  'Deliver reliable, scalable, and effective technology services.',
  'Drive digital innovation and agile engineering practices.',
  'Facilitate strategic global IT delivery partnerships.',
  'Maintain transparent U.S. corporate compliance and contractual accountability.',
];

export default function HomePage() {
  return (
    <>
      {/* ============ 1. HERO SECTION (HOLOGRAPHIC TECH AI & GLOBE) ============ */}
      <HomeHero />

      {/* ============ 2. WHO WE ARE ============ */}
      <section className="section-padding bg-[#020712] relative overflow-hidden text-white border-t border-cyan-500/10">
        <InteractiveParticles theme="dark" density="low" showLines={false} mouseRadius={150} />
        <ParallaxFloat className="-top-20 -right-20 w-80 h-80 bg-cyan-500/[0.06] rounded-full blur-3xl" speed={0.25} />
        <ParallaxFloat className="bottom-10 -left-20 w-96 h-96 bg-blue-600/[0.08] rounded-full blur-3xl" speed={0.15} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            
            <FadeIn direction="left" className="lg:col-span-3">
              <SectionHeading
                label="Who We Are"
                title="International Business Development & Technology Services"
                light
              />
              <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
                <p>
                  <strong className="text-white">MAGTAN INTERNATIONAL HOLDINGS INC</strong> is a Delaware-registered
                  corporation (File No. 10631049) established to connect global enterprise clients with
                  reliable technology delivery, IT consulting, and digital solutions.
                </p>
                <p>
                  We translate complex business roadmaps into practical digital deliverables, coordinating
                  specialized engineering teams and India-based technical resources under clear U.S. contractual
                  frameworks.
                </p>
                <p>
                  Our cross-border delivery model combines transparent U.S. corporate oversight with
                  skilled software engineering and continuous technical management.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="btn-secondary text-xs sm:text-sm py-2.5 px-6 border border-cyan-400/70 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-full"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/services"
                  className="btn-primary text-xs sm:text-sm py-2.5 px-6 rounded-full inline-flex items-center gap-2 group shadow-[0_0_20px_rgba(0,240,255,0.35)] cursor-pointer"
                >
                  <span>Explore Capabilities</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="lg:col-span-2">
              <SpotlightCard
                spotlightColor="rgba(0, 240, 255, 0.16)"
                borderColor="rgba(0, 240, 255, 0.4)"
                className="bg-[#071325]/85 rounded-2xl p-8 border border-cyan-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.2)]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                    STATUS: ACTIVE
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Delaware Corporation</h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Established with an international business mandate to connect global opportunities
                  with scalable technology engineering capabilities.
                </p>

                <div className="space-y-3.5 text-sm">
                  {[
                    'U.S.-registered corporation (File No. 10631049)',
                    'International client relationships & contracting',
                    'Experienced technical delivery teams',
                    'Defined SLA and milestone-based project management',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 group/item transition-transform duration-200 hover:translate-x-1">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0 group-hover/item:bg-cyan-500/20 transition-colors duration-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_4px_#00F0FF]" />
                      </span>
                      <span className="text-slate-300 group-hover/item:text-white transition-colors duration-200">{item}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ============ 3. SOLUTIONS & SERVICES (CYBER CARDS) ============ */}
      <HomeServices />

      {/* ============ 4. CONNECTED WORLD SECTION (MATCHING SCREENSHOT SECTION 3) ============ */}
      <ConnectedWorldSection />

      {/* ============ 5. MISSION & CLIENT-CENTRIC GOVERNANCE ============ */}
      <section className="section-padding bg-[#040D1A] relative overflow-hidden text-white border-t border-cyan-500/15">
        <InteractiveParticles theme="dark" density="low" showLines={false} mouseRadius={150} />
        <ParallaxFloat className="top-20 -right-16 w-72 h-72 bg-cyan-500/[0.06] rounded-full blur-3xl" speed={0.2} />
        <ParallaxFloat className="-bottom-10 left-10 w-48 h-48 border border-cyan-500/[0.1] rounded-full" speed={0.15} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="Our Mission"
                title="Building a Sustainable Global Business"
                light
              />
              <StaggerContainer className="space-y-4">
                {missionItems.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <span className="shrink-0 w-6 h-6 rounded-full border border-cyan-400/80 bg-cyan-500/15 flex items-center justify-center shadow-[0_0_8px_rgba(0,240,255,0.25)]">
                        <svg className="w-3.5 h-3.5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-slate-300 text-base leading-normal">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <FadeIn direction="right" delay={0.3}>
              <div className="relative">
                <SpotlightCard
                  spotlightColor="rgba(0, 240, 255, 0.18)"
                  borderColor="rgba(0, 240, 255, 0.45)"
                  className="bg-[#071325]/90 rounded-2xl p-10 md:p-14 border border-cyan-500/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                >
                  <p className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">Our Approach</p>
                  <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4">Client-Centric Delivery</h3>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    We combine international client relationships with disciplined project oversight
                    and experienced technology delivery teams to create measurable business value and operational resilience.
                  </p>
                  <Link
                    href="/how-we-work"
                    className="btn-secondary text-xs sm:text-sm py-2.5 px-6 border border-cyan-400/80 text-cyan-300 hover:text-white hover:bg-cyan-500/20 rounded-full"
                  >
                    How We Work
                  </Link>
                </SpotlightCard>
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-cyan-500/20 rounded-2xl -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ 6. HIGH-TECH CALL TO ACTION ============ */}
      <section className="bg-[#020712] relative overflow-hidden text-white border-t border-cyan-500/20 py-20">
        <InteractiveParticles density="low" maxDistance={120} mouseRadius={150} />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.08)_0,transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-5 tracking-tight">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed">
              Connect with our executive team to explore how our technology consulting,
              software engineering, and global delivery capabilities can accelerate your roadmap.
            </p>
            <Link
              href="/contact"
              className="btn-primary text-sm sm:text-base px-8 py-3.5 shadow-[0_0_30px_rgba(0,240,255,0.4)] cursor-pointer"
            >
              Contact Us Today
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
