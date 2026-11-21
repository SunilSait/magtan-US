import type { Metadata } from 'next';
import Link from 'next/link';
import HomeHero from '@/components/HomeHero';
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

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'IT Consulting',
    desc: 'Strategic technology consulting and IT project planning for business transformation.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Software Development',
    desc: 'Custom software, web applications and enterprise solutions built for your business needs.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Digital & Data Solutions',
    desc: 'Data conversion, digital content processing and document management solutions.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'International Project Management',
    desc: 'End-to-end project coordination bridging international clients with delivery teams.',
  },
];

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
      <section className="section-padding relative overflow-hidden cursor-crosshair">
        <InteractiveParticles theme="light" density="medium" maxDistance={130} mouseRadius={160} />
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

      {/* ============ SERVICES OVERVIEW ============ */}
      <section className="section-padding bg-bg-light relative overflow-hidden">
        <InteractiveParticles theme="light" density="low" maxDistance={120} mouseRadius={150} />
        <div className="absolute inset-0 pointer-events-none pattern-dots" />
        <ParallaxFloat className="top-10 -left-16 w-72 h-72 border border-navy/[0.04] rounded-full" speed={0.15} />
        <ParallaxFloat className="-bottom-12 -right-12 w-56 h-56 border border-gold/[0.06] rounded-full" speed={0.2} direction="down" />
        <ParallaxFloat className="top-1/3 right-10 w-20 h-20 bg-gold/[0.04] rounded-full blur-2xl" speed={0.3} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Comprehensive Technology & Business Solutions"
            description="We deliver a range of technology and business services, coordinating skilled teams to meet international client requirements."
            align="center"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <SpotlightCard className="bg-white border border-border p-7 rounded-lg hover:border-gold/40 transition-all duration-300 group card-interactive h-full">
                  <div className="w-12 h-12 rounded bg-navy/5 flex items-center justify-center text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors duration-300 mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark mb-2">{service.title}</h3>
                  <p className="text-sm text-text-body leading-relaxed">{service.desc}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/services" className="btn-outline-navy">
                View All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="section-padding relative overflow-hidden">
        <InteractiveParticles theme="light" density="low" maxDistance={120} mouseRadius={150} />
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
