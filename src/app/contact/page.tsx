import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with MAGTAN INTERNATIONAL HOLDINGS INC. Send a business enquiry or reach us via email and telephone.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We welcome your business enquiries. Reach out to us and our team will respond promptly."
        breadcrumb="Get in Touch"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <SectionHeading
                label="Contact Information"
                title="Reach Out to Us"
              />

              <div className="space-y-8">
                {/* Company */}
                <div>
                  <h4 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-2">
                    Company
                  </h4>
                  <p className="text-text-body text-sm leading-relaxed">
                    MAGTAN INTERNATIONAL HOLDINGS INC
                  </p>
                  <p className="text-text-body text-sm">Delaware, United States</p>
                  <p className="text-text-body text-sm">Delaware File Number: 10631049</p>
                </div>

                {/* Address */}
                <div>
                  <h4 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-2">
                    Business Address
                  </h4>
                  <p className="text-gold text-sm font-medium bg-gold/5 border border-gold/20 rounded px-3 py-2">
                    ⚠ Address to be confirmed — pending Stripe application details.
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h4 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:business@magtanholdings.com"
                    className="text-navy text-sm font-medium hover:text-gold transition-colors"
                  >
                    business@magtanholdings.com
                  </a>
                </div>

                {/* Telephone */}
                <div>
                  <h4 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-2">
                    Telephone
                  </h4>
                  <div className="space-y-1">
                    <a href="tel:+918098566616" className="block text-text-body text-sm hover:text-navy transition-colors">
                      +91-8098566616
                    </a>
                    <a href="tel:+919025796305" className="block text-text-body text-sm hover:text-navy transition-colors">
                      +91-9025796305
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h4 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-2">
                    Business Hours
                  </h4>
                  <p className="text-gold text-sm font-medium bg-gold/5 border border-gold/20 rounded px-3 py-2">
                    ⚠ Business hours and time zone to be confirmed.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionHeading
                label="Business Enquiry"
                title="Send Us a Message"
                description="Complete the form below with your project details and our team will review your enquiry."
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============ ADDITIONAL INFO ============ */}
      <section className="bg-bg-light section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-text-dark mb-1">Email Us</h3>
              <p className="text-sm text-text-body">business@magtanholdings.com</p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-text-dark mb-1">Call Us</h3>
              <p className="text-sm text-text-body">+91-8098566616</p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-text-dark mb-1">Location</h3>
              <p className="text-sm text-text-body">Delaware, United States</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
