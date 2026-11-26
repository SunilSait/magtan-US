import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FadeIn from '@/components/animations/FadeIn';
import ParallaxFloat from '@/components/animations/ParallaxFloat';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy of MAGTAN INTERNATIONAL HOLDINGS INC — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumb="Legal"
      />

      <section className="bg-[#020712] section-padding relative overflow-hidden text-white border-b border-cyan-500/10">
        <InteractiveParticles theme="dark" density="low" maxDistance={120} mouseRadius={150} />
        <ParallaxFloat className="-top-20 -right-16 w-80 h-80 bg-cyan-500/[0.06] rounded-full blur-3xl" speed={0.15} />
        <ParallaxFloat className="bottom-20 -left-16 w-72 h-72 bg-blue-600/[0.08] rounded-full blur-3xl" speed={0.1} direction="down" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn duration={0.7}>
            <div className="bg-[#071325]/85 border border-cyan-500/25 rounded-2xl p-8 sm:p-12 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] legal-content text-slate-300">
              <p>
                This Privacy Policy describes how MAGTAN INTERNATIONAL HOLDINGS INC (&ldquo;Company,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a Delaware corporation (File No. 10631049), collects, uses, and
                protects personal information when you visit our website at{' '}
                <a href="https://www.magtanholdings.com" className="text-navy underline">
                  www.magtanholdings.com
                </a>{' '}
                (&ldquo;Website&rdquo;) or engage with our services.
              </p>

              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <h3>Information You Provide</h3>
              <ul>
                <li>Name, email address, company name, and telephone number when you submit an inquiry form.</li>
                <li>Business contact details provided during customer onboarding.</li>
                <li>Information included in correspondence or communications with us.</li>
              </ul>
              <h3>Information Collected Automatically</h3>
              <ul>
                <li>IP address, browser type, device type, and operating system.</li>
                <li>Pages visited, time spent on pages, and referral source.</li>
                <li>Cookies and similar tracking technologies (see Section 5 below).</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li>To respond to your inquiries and business communications.</li>
                <li>To provide, manage, and improve our services.</li>
                <li>To process customer agreements and service orders.</li>
                <li>To send important updates related to our services or your account.</li>
                <li>To comply with legal obligations.</li>
                <li>To protect the rights, safety, and property of our company and users.</li>
              </ul>

              <h2>3. Payment Processing</h2>
              <p>
                When third-party payment processors are used to handle payments for our services,
                payment details (such as credit card or bank details) are collected and processed
                directly by the applicable payment processor. We do not store your complete payment
                card details on our website systems.
              </p>

              <h2>4. Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>
                  <strong>Service providers and delivery partners:</strong> Third-party contractors
                  and India-based service providers who assist in delivering our services, subject to
                  appropriate confidentiality and data protection arrangements.
                </li>
                <li>
                  <strong>Payment processors:</strong> To facilitate payment transactions.
                </li>
                <li>
                  <strong>Legal and regulatory authorities:</strong> When required by law, regulation,
                  or legal process.
                </li>
                <li>
                  <strong>Professional advisors:</strong> Legal, financial, or other professional
                  advisors engaged by the company.
                </li>
              </ul>
              <p>
                We do not sell your personal information to third parties for marketing purposes.
              </p>

              <h2>5. Cookies and Website Technologies</h2>
              <p>
                Our Website may use cookies and similar technologies to enhance your browsing
                experience, analyze website traffic, and understand how visitors interact with our
                site.
              </p>
              <p>
                You can manage your cookie preferences through your browser settings. Please note
                that disabling cookies may affect some website functionality.
              </p>

              <h2>6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the internet or electronic
                storage is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2>7. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes for
                which it was collected, to comply with legal obligations, resolve disputes, and
                enforce our agreements.
              </p>

              <h2>8. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal
                information, including:
              </p>
              <ul>
                <li>The right to access your personal information.</li>
                <li>The right to request correction of inaccurate information.</li>
                <li>The right to request deletion of your personal information.</li>
                <li>The right to object to or restrict certain processing activities.</li>
              </ul>

              <h2>9. Third-Party Websites</h2>
              <p>
                Our Website may contain links to third-party websites. We are not responsible for
                the privacy practices or content of those websites. We encourage you to review the
                privacy policies of any third-party sites you visit.
              </p>

              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page. We encourage you to review this policy periodically.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our data practices,
                please contact us:
              </p>
              <ul>
                <li><strong>Company:</strong> MAGTAN INTERNATIONAL HOLDINGS INC</li>
                <li><strong>File No.:</strong> 10631049</li>
                <li><strong>Email:</strong> <a href="mailto:business@magtanholdings.com" className="text-navy underline">business@magtanholdings.com</a></li>
                <li>
                  <strong>Telephone:</strong>
                  <br />
                  <a href="tel:+918098566616" className="text-navy underline">+91 80985 66616</a>
                  <br />
                  <a href="tel:+919025796305" className="text-navy underline">+91 90257 96305</a>
                </li>
                <li><strong>Location:</strong> Delaware, United States</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
