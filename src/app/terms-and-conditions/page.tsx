import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FadeIn from '@/components/animations/FadeIn';
import ParallaxFloat from '@/components/animations/ParallaxFloat';
import InteractiveParticles from '@/components/animations/InteractiveParticles';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions governing the use of the MAGTAN INTERNATIONAL HOLDINGS INC website and services.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Terms governing the use of our website and services."
        breadcrumb="Legal"
      />

      <section className="section-padding relative overflow-hidden">
        <InteractiveParticles theme="light" density="low" maxDistance={120} mouseRadius={150} />
        <ParallaxFloat className="-top-16 -left-16 w-72 h-72 bg-navy/[0.02] rounded-full blur-3xl" speed={0.15} />
        <ParallaxFloat className="bottom-20 -right-20 w-80 h-80 bg-gold/[0.02] rounded-full blur-3xl" speed={0.2} direction="down" />
        <ParallaxFloat className="top-1/2 left-10 w-36 h-36 border border-navy/[0.03] rounded-full" speed={0.1} />
        <div className="absolute inset-0 pointer-events-none pattern-grid" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn duration={0.7}>
            <div className="legal-content">
              <p className="text-sm text-text-body mb-6">
                <strong>Last Updated:</strong> [Date to be inserted upon publication]
              </p>

              <p>
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the website operated by
                MAGTAN INTERNATIONAL HOLDINGS INC (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) at{' '}
                <a href="https://www.magtanholdings.com" className="text-navy underline">
                  www.magtanholdings.com
                </a>{' '}
                (&ldquo;Website&rdquo;) and your engagement with our services. By accessing or using our
                Website, you agree to be bound by these Terms.
              </p>

              <h2>1. Company Information</h2>
              <ul>
                <li><strong>Legal Name:</strong> MAGTAN INTERNATIONAL HOLDINGS INC</li>
                <li><strong>State of Incorporation:</strong> Delaware, United States</li>
                <li><strong>Delaware File Number:</strong> 10631049</li>
                <li><strong>Email:</strong> <a href="mailto:business@magtanholdings.com" className="text-navy underline">business@magtanholdings.com</a></li>
                <li><strong>Telephone:</strong> +91-8098566616 | +91-9025796305</li>
              </ul>
              <div className="legal-notice">
                ⚠ <strong>Company to confirm:</strong> Registered business address to be inserted.
              </div>

              <h2>2. Website Usage</h2>
              <p>
                This Website is provided for informational purposes and to facilitate business
                enquiries. You agree to use the Website only for lawful purposes and in a manner that
                does not infringe the rights of, or restrict or inhibit the use of the Website by,
                any third party.
              </p>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Website for any unlawful, fraudulent or harmful purpose.</li>
                <li>Attempt to gain unauthorised access to our systems or networks.</li>
                <li>Transmit harmful code, viruses or other disruptive technologies.</li>
                <li>Collect or harvest personal information from the Website without consent.</li>
              </ul>

              <h2>3. Services</h2>
              <p>
                MAGTAN INTERNATIONAL HOLDINGS INC offers the following services:
              </p>
              <ul>
                <li>IT Consulting</li>
                <li>Software Development</li>
                <li>Digital & Data Solutions</li>
                <li>Project Management & Coordination</li>
              </ul>
              <p>
                Detailed service descriptions are available on our{' '}
                <a href="/services" className="text-navy underline">Products & Services</a> page.
                The specific services provided to any customer will be as set out in the applicable
                service agreement or proposal.
              </p>

              <h2>4. Customer Orders and Agreements</h2>
              <p>
                All service engagements are subject to a written agreement, proposal or contract
                between the Company and the customer. These Terms apply in addition to any such
                agreement.
              </p>
              <div className="legal-notice">
                ⚠ <strong>Legal review required:</strong> Specific terms regarding order
                acceptance, binding agreements and variation of terms should be confirmed by legal
                counsel.
              </div>

              <h2>5. Payment Terms</h2>
              <p>
                Payment terms for services are as specified in the applicable customer agreement or
                proposal. Payments may be processed through third-party payment providers.
              </p>
              <div className="legal-notice">
                ⚠ <strong>Company to confirm:</strong> Specific payment terms (e.g., payment
                methods accepted, currencies, late payment charges) should be detailed here or
                referenced from customer agreements.
              </div>

              <h2>6. Intellectual Property</h2>
              <p>
                All content on this Website, including text, graphics, logos, design elements and
                software, is the property of MAGTAN INTERNATIONAL HOLDINGS INC or its licensors and
                is protected by applicable intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify or create derivative works from any
                content on this Website without prior written permission from the Company.
              </p>
              <div className="legal-notice">
                ⚠ <strong>Legal review required:</strong> Intellectual property ownership terms for
                work delivered to customers should be addressed in individual customer agreements.
              </div>

              <h2>7. Third-Party Services</h2>
              <p>
                Our services may involve the use of third-party service providers, including but not
                limited to payment processors, hosting providers and delivery partners. We are not
                responsible for the terms, policies or practices of third-party services.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, MAGTAN INTERNATIONAL HOLDINGS INC
                shall not be liable for any indirect, incidental, special, consequential or punitive
                damages arising out of or relating to your use of this Website or our services.
              </p>
              <div className="legal-notice">
                ⚠ <strong>Legal review required:</strong> Liability limitations should be reviewed
                by legal counsel to ensure compliance with applicable laws and appropriate coverage
                for the company&apos;s business activities.
              </div>

              <h2>9. Website Availability</h2>
              <p>
                We aim to keep the Website available at all times. However, we do not guarantee
                uninterrupted access and may suspend or restrict access for maintenance, updates or
                other operational reasons without prior notice.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                State of Delaware, United States, without regard to its conflict of law principles.
              </p>
              <div className="legal-notice">
                ⚠ <strong>Legal review required:</strong> Jurisdiction, dispute resolution
                mechanisms and governing law provisions should be confirmed by legal counsel.
              </div>

              <h2>11. Changes to These Terms</h2>
              <p>
                We reserve the right to update or modify these Terms at any time. Any changes will be
                posted on this page with an updated &ldquo;Last Updated&rdquo; date. Continued use of the
                Website after changes constitutes acceptance of the revised Terms.
              </p>

              <h2>12. Contact Information</h2>
              <p>
                If you have questions about these Terms and Conditions, please contact us:
              </p>
              <ul>
                <li><strong>Company:</strong> MAGTAN INTERNATIONAL HOLDINGS INC</li>
                <li><strong>Email:</strong> <a href="mailto:business@magtanholdings.com" className="text-navy underline">business@magtanholdings.com</a></li>
                <li><strong>Telephone:</strong> +91-8098566616 | +91-9025796305</li>
                <li><strong>Location:</strong> Delaware, United States</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
