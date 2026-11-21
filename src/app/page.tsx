import type { Metadata } from 'next';
import Link from 'next/link';
import HomeHero from '@/components/HomeHero';
import HomeServices from '@/components/HomeServices';
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
    'MAGTAN INTERNATIONAL HOLDINGS INC is a Delaware-registered U.S. corporation focused on international business development, IT consulting, software development and digital solutions.',
};

const missionItems = [
  'Build strong international customer relationships.',
  'Deliver reliable technology services.',
  'Encourage innovation and continuous improvement.',
  'Develop strategic business partnerships.',
  'Create sustainable long-term growth.',
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <HomeHero />

      {/* ============ INTRODUCTION ============ */}
      <section className="section-padding relative overflow-hidden">
        <InteractiveParticles theme="light" density="low" showLines={false} mouseRadius={150} />
        <ParallaxFloat className="-top-20 -right-20 w-80 h-80 bg-gold/[0.03] rounded-full blur-3xl" speed={0.25} />
        <ParallaxFloat className="bottom-10 -left-20 w-96 h-96 bg-navy/[0.02] rounded-full blur-3xl" speed={0.15} direction="down" />
        <ParallaxFloat className="top-1/2 right-1/4 w-40 h-40 border border-gold/[0.04] rounded-full" speed={0.1} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <FadeIn direction="left" className="lg:col-span-3">
              <SectionHeading
                label="Who We Are"
                title="International Business Development & Technology Services"
              />
              <div className="space-y-5 text-text-body leading-relaxed">
                <p>
                  MAGTAN INTERNATIONAL HOLDINGS INC is a Delaware-registered U.S. corporation
                  focused on international business development and technology services.
                </p>
                <p>
                  We work with business clients, understand their requirements and coordinate the
                  delivery of technology solutions through our business network and India-based
                  service providers.
                </p>
                <p>
                  Our approach combines international client relationships, professional project
                  management and skilled technology delivery teams.
                </p>
              </div>
              <Link href="/about" className="btn-outline-navy mt-8 inline-flex cursor-pointer">
                Learn More About Us
              </Link>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="lg:col-span-2">
              <SpotlightCard className="bg-bg-light rounded-lg p-8 border border-border card-interactive hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-text-dark mb-2">Delaware Corporation</h3>
                <p className="text-sm text-text-body mb-4">
                  Established with an international business vision to connect global opportunities
                  with capable delivery resources.
                </p>
                <div className="space-y-3 text-sm">
                  {[
                    'U.S.-registered corporation',
                    'International client relationships',
                    'India-based delivery teams',
                    'Professional project management',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 group/item transition-transform duration-200 hover:translate-x-1">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center shrink-0 group-hover/item:bg-gold/20 transition-colors duration-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy group-hover/item:bg-gold transition-colors duration-200" />
                      </span>
                      <span className="text-text-body group-hover/item:text-text-dark transition-colors duration-200">{item}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ SERVICES OVERVIEW (REDESIGNED) ============ */}
      <HomeServices />

      {/* ============ MISSION ============ */}
      <section className="section-padding relative overflow-hidden">
        <InteractiveParticles theme="light" density="low" showLines={false} mouseRadius={150} />
        <div className="absolute inset-0 pointer-events-none pattern-diagonal" />
        <ParallaxFloat className="top-20 -right-16 w-72 h-72 bg-navy/[0.02] rounded-full blur-3xl" speed={0.2} />
        <ParallaxFloat className="-bottom-10 left-10 w-48 h-48 border border-gold/[0.05] rounded-full" speed={0.15} direction="down" />
        <div className="absolute bottom-0 left-1/4 w-px h-24 bg-gradient-to-t from-gold/10 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="Our Mission"
                title="Building a Sustainable Global Business"
              />
              <StaggerContainer className="space-y-4">
                {missionItems.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-4">
                      <span className="mt-1 shrink-0 w-6 h-6 rounded-full border-2 border-gold flex items-center justify-center">
                        <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-text-body">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <FadeIn direction="right" delay={0.3}>
              <div className="relative">
                <SpotlightCard
                  spotlightColor="rgba(201, 164, 76, 0.18)"
                  className="bg-navy rounded-lg p-10 md:p-14"
                >
                  <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">Our Approach</p>
                  <h3 className="text-white text-2xl font-semibold mb-4">Client-Centric Delivery</h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    We combine international client relationships with professional project management
                    and skilled technology delivery teams to create measurable business value.
                  </p>
                  <Link href="/how-we-work" className="btn-secondary text-sm">
                    How We Work
                  </Link>
                </SpotlightCard>
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold/20 rounded-lg -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-navy relative overflow-hidden">
        <InteractiveParticles density="low" maxDistance={120} mouseRadius={150} />
        <div className="absolute inset-0 pointer-events-none pattern-dots-light" />
        <ParallaxFloat className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" speed={0.1} />
        <ParallaxFloat className="-bottom-20 -right-20 w-80 h-80 border border-white/[0.03] rounded-full" speed={0.15} direction="down" />
        <ParallaxFloat className="top-10 left-10 w-32 h-32 bg-gold/[0.03] rounded-full blur-2xl" speed={0.2} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <FadeIn>
            <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Get in touch with us to explore how our technology services and project management
              capabilities can support your business objectives.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Contact Us Today
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
