import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
    title: 'IT Consulting & Governance',
    description:
      'We provide strategic technology consulting to help leadership teams make informed architectural decisions, plan critical IT initiatives, and implement secure business solutions.',
    items: ['Strategic technology advisory & roadmapping', 'IT project & architecture planning', 'Business systems & legacy integration', 'Technical oversight & risk coordination'],
    image: '/images/service-it-consulting.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    id: 'software-development',
    title: 'Software Development & Cloud Engineering',
    description:
      'Our software engineering capabilities span the full project lifecycle — from custom application development and scalable cloud architectures to responsive web portals and ongoing maintenance.',
    items: ['Custom application & software engineering', 'High-performance web applications & portal development', 'Cloud infrastructure & API integrations', 'Full-lifecycle maintenance & security patching'],
    image: '/images/service-cloud-software.jpg',
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
      'We help organizations optimize and make better use of their data assets through automated ETL pipelines, digital content processing, and business document workflow automation.',
    items: ['Data conversion & ETL pipelines', 'Digital content & media processing workflows', 'Document & knowledge base management', 'Digital transformation advisory & enablement'],
    image: '/images/service-data-solutions.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    id: 'project-management',
    title: 'International Project Governance',
    description:
      'Our cross-border project management approach ensures clear communication channels, consistent milestone oversight, and reliable delivery across international technical engagements.',
    items: ['Requirements analysis & technical scoping', 'Sprint planning & milestone tracking', 'Offshore team coordination', 'Quality assurance & continuous client updates'],
    image: '/images/service-project-governance.jpg',
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
        subtitle="Comprehensive technology consulting, software development, and project management services for international businesses."
        breadcrumb="What We Offer"
      />

      {/* ============ SERVICE SECTIONS (DARK CYBER GLASS) ============ */}
      <section className="bg-[#020712] section-padding relative overflow-hidden text-white border-b border-cyan-500/10">
        <InteractiveParticles theme="dark" density="low" maxDistance={120} mouseRadius={150} />
        <ParallaxFloat className="-top-20 -right-20 w-96 h-96 bg-cyan-500/[0.06] rounded-full blur-3xl" speed={0.15} />
        <ParallaxFloat className="top-1/3 -left-16 w-64 h-64 border border-cyan-500/[0.1] rounded-full" speed={0.2} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <FadeIn key={service.id} direction={index % 2 === 0 ? 'left' : 'right'} delay={0.1}>
                <div
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:direction-rtl' : ''
                  }`}
                >
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-purple-600/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                        {service.icon}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono">
                          Service {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{service.title}</h2>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-base mb-6 font-normal">{service.description}</p>
                    <ul className="space-y-3.5">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center shrink-0 text-cyan-300 shadow-[0_0_6px_rgba(0,240,255,0.2)]">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                          <span className="text-slate-200 text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative group w-full h-[260px] sm:h-[340px] lg:h-[390px] xl:h-[410px] rounded-2xl overflow-hidden border border-cyan-500/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-cyan-400/70 hover:shadow-[0_0_35px_rgba(0,240,255,0.3)] transition-all duration-500">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Subtle Ambient Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020712]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-cyan-500/20 rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE DELIVERY (DARK CYBER GLASS) ============ */}
      <section className="bg-[#040D1A] section-padding relative overflow-hidden text-white border-b border-cyan-500/15">
        <InteractiveParticles theme="dark" density="low" maxDistance={120} mouseRadius={150} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading label="Service Delivery" title="How We Deliver Our Services" align="center" light />
            <FadeIn delay={0.2}>
              <SpotlightCard
                spotlightColor="rgba(0, 240, 255, 0.18)"
                borderColor="rgba(0, 240, 255, 0.45)"
                className="bg-[#071325]/90 border border-cyan-500/30 rounded-2xl p-8 md:p-12 mt-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              >
                <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
                  MAGTAN INTERNATIONAL HOLDINGS INC contracts directly with international clients and oversees the agreed
                  engagement roadmaps. Project execution is coordinated through experienced technical directors and
                  qualified offshore delivery partners in India to meet agreed service-level requirements.
                </p>
                <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6" delayStart={0.3}>
                  {[
                    { label: 'Direct Governance', desc: 'U.S. Delaware corporate contracting and client account management' },
                    { label: 'Offshore Scale', desc: 'Specialized India-based engineering and technical teams' },
                    { label: 'Hybrid Agility', desc: 'Combined onshore strategic advisory with rapid agile execution' },
                  ].map((item) => (
                    <StaggerItem key={item.label} className="h-full">
                      <div className="text-center p-5 border border-cyan-500/20 rounded-xl bg-[#020712]/60 hover:border-cyan-400/50 transition-colors h-full flex flex-col justify-between">
                        <div>
                          <span className="accent-line mx-auto mb-3" />
                          <p className="text-sm font-bold text-white">{item.label}</p>
                        </div>
                        <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{item.desc}</p>
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
      <section className="bg-[#020712] section-padding relative overflow-hidden text-white">
        <InteractiveParticles density="low" maxDistance={120} mouseRadius={150} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Looking for Technology Services?</h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Contact us to discuss your requirements. We will provide a detailed scope proposal tailored
              to your business objectives.
            </p>
            <Link href="/contact" className="btn-primary text-sm sm:text-base px-8 py-3.5 shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
