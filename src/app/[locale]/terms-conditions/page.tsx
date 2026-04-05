import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Silk Beauty Salon',
  description: 'Read our terms and conditions for using our website and services.',
};

export default function TermsConditionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container-custom text-center">
          <h1 
            className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Terms & Conditions
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Terms governing your use of our website and services
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-gold">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-primary font-medium">Terms & Conditions</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-slate max-w-none">
              <p className="text-sm text-muted-foreground mb-8">
                Last updated: April 2026
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground mb-6">
                By accessing and using the Silk Beauty Salon website and services, you agree to be bound by these 
                Terms and Conditions. If you do not agree with any part of these terms, please do not use our website 
                or services.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                2. Services
              </h2>
              <p className="text-muted-foreground mb-6">
                Silk Beauty Salon provides aesthetic and beauty treatments. All treatments are performed by qualified 
                professionals in accordance with industry standards and local regulations. Results may vary between 
                individuals.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                3. Booking and Appointments
              </h2>
              <p className="text-muted-foreground mb-4">
                When booking appointments:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Appointments must be booked through our official booking system or by phone</li>
                <li>A consultation may be required before certain treatments</li>
                <li>We reserve the right to refuse service if contraindications are identified</li>
                <li>Clients must arrive 15 minutes before their scheduled appointment</li>
              </ul>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                4. Cancellation Policy
              </h2>
              <p className="text-muted-foreground mb-6">
                We understand that circumstances may change. Please provide at least 24 hours&apos; notice for 
                cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                5. Payment Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                Payment terms:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Payment is due at the time of service unless otherwise agreed</li>
                <li>We accept cash and major credit cards</li>
                <li>Gift vouchers must be presented at the time of booking</li>
                <li>All prices are in Georgian Lari (GEL) and include applicable taxes</li>
              </ul>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                6. Refund Policy
              </h2>
              <p className="text-muted-foreground mb-6">
                Treatment packages are non-refundable. In case of dissatisfaction with a treatment, 
                please contact us within 7 days so we can address your concerns appropriately.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                7. Medical Disclaimer
              </h2>
              <p className="text-muted-foreground mb-6">
                Our treatments are not a substitute for medical advice, diagnosis, or treatment. 
                Always seek the advice of your physician or other qualified health provider with any 
                questions you may have regarding a medical condition.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-muted-foreground mb-6">
                All content on this website, including text, images, logos, and design, is the property 
                of Silk Beauty Salon and is protected by copyright and other intellectual property laws. 
                Unauthorized use is prohibited.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-muted-foreground mb-6">
                To the fullest extent permitted by law, Silk Beauty Salon shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages arising from your use 
                of our services.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                10. Governing Law
              </h2>
              <p className="text-muted-foreground mb-6">
                These Terms and Conditions are governed by the laws of Georgia. Any disputes arising 
                from these terms shall be subject to the exclusive jurisdiction of the courts of Batumi, Georgia.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be 
                effective immediately upon posting to the website. Your continued use of our services 
                constitutes acceptance of the revised terms.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                12. Contact Information
              </h2>
              <p className="text-muted-foreground">
                For questions about these Terms and Conditions, please contact us at info@silkbeautysalon.ge
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
