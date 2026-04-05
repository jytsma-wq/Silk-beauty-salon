import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Silk Beauty Salon',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container-custom text-center">
          <h1 
            className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Privacy Policy
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information
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
            <span className="text-primary font-medium">Privacy Policy</span>
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
                1. Introduction
              </h2>
              <p className="text-muted-foreground mb-6">
                Silk Beauty Salon (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when booking appointments or contacting us.</li>
                <li><strong>Medical Information:</strong> Health and treatment history necessary for providing aesthetic services.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience.</li>
              </ul>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>To provide and manage our aesthetic services</li>
                <li>To process bookings and appointments</li>
                <li>To communicate with you about treatments and promotions</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                4. Information Sharing
              </h2>
              <p className="text-muted-foreground mb-6">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Healthcare professionals when necessary for treatment</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your data</li>
                <li>Right to object to processing</li>
                <li>Right to data portability</li>
              </ul>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <p className="text-muted-foreground mb-6">
                Silk Beauty Salon<br />
                27-29 Zurab Gorgiladze Street<br />
                Batumi, Georgia<br />
                Email: info@silkbeautysalon.ge
              </p>

              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of any changes by posting 
                the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
