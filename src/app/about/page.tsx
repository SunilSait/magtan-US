import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about MAGTAN INTERNATIONAL HOLDINGS INC – a Delaware corporation with an international business vision, connecting global opportunities with skilled delivery teams.',
};

const values = [
  {
    title: 'Integrity',
    desc: 'We conduct all business relationships with transparency, honesty and ethical standards.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    desc: 'We encourage creative solutions and embrace modern technology to serve our clients effectively.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    desc: 'We build effective partnerships between international clients and delivery teams for optimal results.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Quality',
    desc: 'We are committed to delivering professional work that meets client expectations and industry standards.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Sustainable Growth',
    desc: 'We focus on building long-term business relationships that create lasting value for all stakeholders.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <SectionHeading
              label="Our Story"
              title="Building Bridges Between Global Markets"
            />
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
          </div>
        </div>
      </section>

      {/* ============ VISION ============ */}
      <section className="bg-bg-light section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="Our Vision"
                title="An Internationally Connected Business Group"
              />
              <p className="text-text-body leading-relaxed text-base">
                To build an internationally connected business group that creates sustainable
                business opportunities and long-term value. We envision a future where businesses
                across borders collaborate seamlessly, supported by reliable technology services
                and professional project management.
              </p>
            </div>
            <div className="bg-navy rounded-lg p-10 md:p-12 relative">
              <span className="accent-line mb-6" />
              <blockquote className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
                &ldquo;One Vision. A Global Future.&rdquo;
              </blockquote>
              <p className="text-gold text-sm font-medium mt-4 tracking-wider">
                MAGTAN INTERNATIONAL HOLDINGS INC
              </p>
              <div className="absolute -bottom-2 -right-2 w-full h-full border border-gold/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE VALUES ============ */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Core Values"
            title="The Principles That Guide Our Business"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={value.title} className={`${index === 4 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded bg-navy/5 flex items-center justify-center text-navy shrink-0 mt-0.5">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-dark mb-1">{value.title}</h3>
                    <p className="text-sm text-text-body leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY MAGTAN ============ */}
      <section className="bg-navy section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Magtan"
            title="What Sets Us Apart"
            align="center"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'U.S. Business Presence',
                desc: 'As a Delaware-registered corporation, we provide our clients with a reliable U.S. business entity for contracting and invoicing.',
              },
              {
                title: 'International Coordination',
                desc: 'We bridge the gap between international client needs and skilled delivery teams, ensuring clear communication and smooth project execution.',
              },
              {
                title: 'Professional Management',
                desc: 'Every engagement is managed with discipline — from requirements analysis through delivery monitoring and customer support.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 rounded-lg p-7">
                <span className="accent-line mb-5" />
                <h3 className="text-white text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
