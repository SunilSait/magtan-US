import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import ParallaxFloat from '@/components/animations/ParallaxFloat';
import SpotlightCard from '@/components/animations/SpotlightCard';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

export const metadata: Metadata = {
  title: 'Products & Services',
  description:
    'Explore our IT consulting, software development, digital & data solutions, and project management services at MAGTAN INTERNATIONAL HOLDINGS INC.',
};

const services = [
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description:
      'We provide strategic technology consulting to help businesses make informed technology decisions, plan IT projects and implement business technology solutions.',
    items: ['Technology consulting', 'IT project planning', 'Business technology solutions', 'Technical coordination'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description:
      'Our software development services cover the full lifecycle — from custom application development to website creation, web applications and ongoing maintenance support.',
    items: ['Custom software development', 'Website development', 'Web application development', 'Application maintenance and support'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: 'digital-data',
    title: 'Digital & Data Solutions',
    description:
      'We help businesses manage and transform their data assets through conversion, digital content processing, document management and digital transformation support.',
    items: ['Data conversion', 'Digital content processing', 'Document and data management solutions', 'Digital transformation support'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    id: 'project-management',
    title: 'Project Management & Coordination',
    description:
      'Our project management services ensure clear communication, structured planning and reliable delivery across all engagements.',
    items: ['Requirements analysis', 'Project planning', 'Resource coordination', 'Delivery monitoring', 'Customer communication'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Products & Services"
        subtitle="Comprehensive technology consulting, development and project management services for international businesses."
        breadcrumb="What We Offer"
      />

      {/* ============ SERVICE SECTIONS ============ */}
      <section className="section-padding relative overflow-hidden">
        <InteractiveParticles theme="light" density="low" maxDistance={120} mouseRadius={150} />
        <ParallaxFloat className="-top-20 -right-20 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl" speed={0.15} />
        <ParallaxFloat className="top-1/3 -left-16 w-64 h-64 border border-navy/[0.04] rounded-full" speed={0.2} direction="down" />
        <ParallaxFloat className="bottom-1/4 right-10 w-40 h-40 border border-gold/[0.05] rounded-full" speed={0.1} />
        <div className="absolute top-0 left-1/2 w-px h-16 bg-gradient-to-b from-gold/10 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <FadeIn key={service.id} direction={index % 2 === 0 ? 'left' : 'right'} delay={0.1}>
                <div
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start ${
                    index % 2 === 1 ? 'lg:direction-rtl' : ''
                  }`}
                >
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
                        {service.icon}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gold tracking-wider uppercase">
                          Service {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-2xl font-semibold text-text-dark">{service.title}</h2>
                      </div>
                    </div>
                    <p className="text-text-body leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                          </svg>
                          <span className="text-text-body text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-bg-light rounded-lg aspect-[4/3] flex items-center justify-center border border-border">
                      <div className="text-center px-6">
                        <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center text-navy mx-auto mb-4">
                          {service.icon}
                        </div>
                        <p className="text-sm font-medium text-text-dark">{service.title}</p>
                        <p className="text-xs text-text-body mt-1">Professional Service Delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE DELIVERY ============ */}
      <section className="bg-bg-light section-padding relative overflow-hidden">
        <InteractiveParticles theme="light" density="low" maxDistance={120} mouseRadius={150} />
        <div className="absolute inset-0 pointer-events-none pattern-grid" />
        <ParallaxFloat className="top-10 -right-10 w-56 h-56 border border-gold/[0.05] rounded-full" speed={0.15} />
        <ParallaxFloat className="-bottom-16 left-20 w-72 h-72 bg-navy/[0.02] rounded-full blur-3xl" speed={0.2} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading label="Service Delivery" title="How We Deliver Our Services" align="center" />
            <FadeIn delay={0.2}>
              <SpotlightCard className="bg-white border border-border rounded-lg p-8 md:p-10 mt-8">
                <p className="text-text-body leading-relaxed text-base">
                  MAGTAN INTERNATIONAL HOLDINGS INC contracts with its customers and manages the
                  agreed customer engagement. Project execution may be carried out directly by
                  MAGTAN INTERNATIONAL HOLDINGS INC or through appropriately contracted service
                  providers and delivery partners in India and other locations, depending on the
                  project scope and contractual arrangements.
                </p>
                <StaggerContainer className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6" delayStart={0.3}>
                  {[
                    { label: 'Direct Delivery', desc: 'In-house project execution' },
                    { label: 'Partner Delivery', desc: 'Contracted service providers' },
                    { label: 'Hybrid Model', desc: 'Combined delivery approach' },
                  ].map((item) => (
                    <StaggerItem key={item.label}>
                      <div className="text-center p-4 border border-border rounded-lg bg-bg-light/50">
                        <span className="accent-line mx-auto mb-3" />
                        <p className="text-sm font-semibold text-text-dark">{item.label}</p>
                        <p className="text-xs text-text-body mt-1">{item.desc}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </SpotlightCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-navy section-padding relative overflow-hidden">
        <InteractiveParticles density="low" maxDistance={120} mouseRadius={150} />
        <div className="absolute inset-0 pointer-events-none pattern-dots-light" />
        <ParallaxFloat className="-top-10 left-1/4 w-72 h-72 border border-white/[0.04] rounded-full" speed={0.1} />
        <ParallaxFloat className="-bottom-20 -right-20 w-80 h-80 border border-white/[0.03] rounded-full" speed={0.15} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-white text-3xl font-semibold mb-4">Looking for Technology Services?</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Contact us to discuss your requirements. We will provide a detailed proposal tailored
              to your project needs.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">Get in Touch</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
