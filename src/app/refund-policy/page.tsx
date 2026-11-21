import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description:
    'Refund and Cancellation Policy for services provided by MAGTAN INTERNATIONAL HOLDINGS INC.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        title="Refund & Cancellation Policy"
        subtitle="Our policy regarding service cancellations, refund eligibility and related processes."
        breadcrumb="Legal"
      />

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="legal-content">
            <p className="text-sm text-text-body mb-6">
              <strong>Last Updated:</strong> [Date to be inserted upon publication]
            </p>

            <p>
              This Refund and Cancellation Policy (&ldquo;Policy&rdquo;) applies to services provided by
              MAGTAN INTERNATIONAL HOLDINGS INC (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), a
              Delaware corporation. This Policy should be read together with the applicable
              customer agreement or service contract.
            </p>

            <h2>1. Service Order Cancellation</h2>
            <p>
              Customers may request cancellation of a service order subject to the terms of their
              applicable service agreement. Cancellation eligibility and conditions may vary based
              on the type of service, project stage and contractual terms.
            </p>
            <div className="legal-notice">
              ⚠ <strong>Company to confirm:</strong> Specific cancellation windows and conditions
              (e.g., cancellation before project commencement, during execution) should be defined
              based on the company&apos;s standard service agreements.
            </div>

            <h2>2. Cancellation Requests</h2>
            <p>
              To request a cancellation, customers should contact us through the following
              channels:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:business@magtanholdings.com" className="text-navy underline">business@magtanholdings.com</a></li>
              <li><strong>Telephone:</strong> +91-8098566616 | +91-9025796305</li>
            </ul>
            <p>
              Cancellation requests should include the customer name, project reference or service
              order number, and reason for cancellation. We will acknowledge receipt of the
              cancellation request and respond with the applicable terms.
            </p>

            <h2>3. Refund Eligibility</h2>
            <p>
              Refund eligibility depends on the following factors:
            </p>
            <ul>
              <li>The terms of the applicable customer agreement or service contract.</li>
              <li>The stage of project execution at the time of cancellation.</li>
              <li>Work already completed or resources already committed.</li>
              <li>Third-party costs incurred on behalf of the customer.</li>
            </ul>
            <div className="legal-notice">
              ⚠ <strong>Company to confirm:</strong> Specific refund conditions and percentages
              should be detailed here based on the company&apos;s commercial policies and legal advice.
              This policy does not impose blanket no-refund conditions and is subject to
              applicable consumer protection laws.
            </div>

            <h2>4. Charges for Completed Work</h2>
            <p>
              If a customer cancels a service order after work has commenced, the Company may
              charge for:
            </p>
            <ul>
              <li>Work already completed up to the date of cancellation.</li>
              <li>Resources committed or third-party costs incurred.</li>
              <li>Any applicable administrative or processing charges as specified in the customer agreement.</li>
            </ul>

            <h2>5. Duplicate or Incorrect Payments</h2>
            <p>
              If a customer has made a duplicate or incorrect payment, the Company will process a
              refund for the excess amount upon verification. Customers should contact us promptly
              with payment details to facilitate resolution.
            </p>

            <h2>6. Refund Processing</h2>
            <p>
              Approved refunds will be processed using the original payment method where possible.
              Refund processing times may vary depending on the payment method and financial
              institution.
            </p>
            <div className="legal-notice">
              ⚠ <strong>Company to confirm:</strong> Specific refund processing timeframes (e.g.,
              within 10–15 business days) and any applicable processing fees should be specified.
            </div>

            <h2>7. Cancellation by the Company</h2>
            <p>
              The Company reserves the right to cancel or suspend a service engagement in the
              following circumstances:
            </p>
            <ul>
              <li>Non-payment or breach of payment terms by the customer.</li>
              <li>Breach of the applicable service agreement by the customer.</li>
              <li>Circumstances beyond the Company&apos;s reasonable control (force majeure).</li>
            </ul>
            <p>
              In such cases, the Company will communicate the cancellation to the customer and
              address any refund entitlements in accordance with the applicable agreement.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              For any questions regarding cancellations or refunds, please contact us:
            </p>
            <ul>
              <li><strong>Company:</strong> MAGTAN INTERNATIONAL HOLDINGS INC</li>
              <li><strong>Email:</strong> <a href="mailto:business@magtanholdings.com" className="text-navy underline">business@magtanholdings.com</a></li>
              <li><strong>Telephone:</strong> +91-8098566616 | +91-9025796305</li>
              <li><strong>Location:</strong> Delaware, United States</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
