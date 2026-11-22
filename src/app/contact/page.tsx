import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import StaggerItem from '@/components/animations/StaggerItem';
import ParallaxFloat from '@/components/animations/ParallaxFloat';
import SpotlightCard from '@/components/animations/SpotlightCard';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

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
        subtitle="We welcome your business enquiries. Connect directly with our Delaware corporate team."
        breadcrumb="Get in Touch"
      />

      <section className="bg-[#020712] section-padding relative overflow-hidden text-white border-b border-cyan-500/10">
        <InteractiveParticles theme="dark" density="low" maxDistance={120} mouseRadius={150} />
        <ParallaxFloat className="-top-20 -right-16 w-80 h-80 bg-cyan-500/[0.06] rounded-full blur-3xl" speed={0.2} />
        <ParallaxFloat className="bottom-20 -left-16 w-72 h-72 bg-blue-600/[0.08] rounded-full blur-3xl" speed={0.15} direction="down" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* Left Column: Corporate Contact Information */}
            <FadeIn direction="left" className="lg:col-span-5">
              <div className="bg-[#071325]/85 border border-cyan-500/25 rounded-2xl p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <SectionHeading label="Corporate Office" title="Reach Out to Us" light />
                
                <div className="space-y-7 text-sm">
                  <div>
                    <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 font-mono">Legal Entity</h4>
                    <p className="text-white font-bold text-base">MAGTAN INTERNATIONAL HOLDINGS INC</p>
                    <p className="text-slate-300">Delaware, United States</p>
                    <p className="text-slate-400 text-xs mt-1">Delaware File Number: <span className="font-mono text-cyan-300 font-semibold">10631049</span></p>
                  </div>

                  <div className="pt-4 border-t border-cyan-500/15">
                    <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 font-mono">Business Address</h4>
                    <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-300 leading-relaxed">
                      Registered in the State of Delaware, United States. Operating with global delivery coordination.
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cyan-500/15">
                    <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 font-mono">Email Enquiries</h4>
                    <a href="mailto:business@magtanholdings.com" className="text-cyan-300 font-medium hover:text-white transition-colors break-all">
                      business@magtanholdings.com
                    </a>
                  </div>

                  <div className="pt-4 border-t border-cyan-500/15">
                    <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 font-mono">Telephone</h4>
                    <div className="space-y-1 font-mono text-slate-200">
                      <a href="tel:+918098566616" className="block hover:text-cyan-300 transition-colors">+91-8098566616</a>
                      <a href="tel:+919025796305" className="block hover:text-cyan-300 transition-colors">+91-9025796305</a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cyan-500/15">
                    <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 font-mono">Jurisdiction & Contracts</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      All contracts, invoicing and engagements are executed under Delaware corporate governance.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Contact Form */}
            <FadeIn direction="right" delay={0.2} className="lg:col-span-7">
              <SectionHeading
                label="Business Enquiry"
                title="Send Us a Message"
                description="Complete the form below with your project requirements and our executive team will review your enquiry promptly."
                light
              />
              <ContactForm />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ============ QUICK CONTACT STAT CARDS (DARK CYBER GLASS) ============ */}
      <section className="bg-[#040D1A] section-padding relative overflow-hidden text-white">
        <InteractiveParticles theme="dark" density="low" maxDistance={120} mouseRadius={150} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <SpotlightCard
                spotlightColor="rgba(0, 240, 255, 0.16)"
                borderColor="rgba(0, 240, 255, 0.45)"
                className="bg-[#071325]/85 border border-cyan-500/25 rounded-2xl p-7 text-center backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center mx-auto mb-4 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 tracking-tight">Email Direct</h3>
                <p className="text-xs text-slate-400 mb-3">Guaranteed response within 24 hours</p>
                <a href="mailto:business@magtanholdings.com" className="text-cyan-300 text-sm font-semibold hover:text-white transition-colors">
                  business@magtanholdings.com
                </a>
              </SpotlightCard>
            </StaggerItem>

            <StaggerItem>
              <SpotlightCard
                spotlightColor="rgba(0, 240, 255, 0.16)"
                borderColor="rgba(0, 240, 255, 0.45)"
                className="bg-[#071325]/85 border border-cyan-500/25 rounded-2xl p-7 text-center backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center mx-auto mb-4 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 tracking-tight">Call Us</h3>
                <p className="text-xs text-slate-400 mb-3">Direct line for client coordination</p>
                <div className="space-y-1 font-mono text-cyan-300 text-sm font-semibold">
                  <p>+91-8098566616</p>
                  <p>+91-9025796305</p>
                </div>
              </SpotlightCard>
            </StaggerItem>

            <StaggerItem>
              <SpotlightCard
                spotlightColor="rgba(0, 240, 255, 0.16)"
                borderColor="rgba(0, 240, 255, 0.45)"
                className="bg-[#071325]/85 border border-cyan-500/25 rounded-2xl p-7 text-center backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center mx-auto mb-4 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 tracking-tight">Delaware Jurisdiction</h3>
                <p className="text-xs text-slate-400 mb-3">U.S. Corporate Registration</p>
                <p className="text-cyan-300 font-mono text-sm font-semibold">
                  File No. 10631049
                </p>
              </SpotlightCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
