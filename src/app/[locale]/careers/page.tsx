import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Mail, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Careers | Silk Beauty Salon',
  description: 'Join our team of aesthetic professionals. View current job openings at Silk Beauty Salon.',
};

export default function CareersPage() {
  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'We offer industry-leading compensation packages with performance bonuses.',
    },
    {
      title: 'Professional Development',
      description: 'Continuous training and certification opportunities to advance your career.',
    },
    {
      title: 'Premium Environment',
      description: 'Work in a modern, luxurious clinic with state-of-the-art equipment.',
    },
    {
      title: 'Team Culture',
      description: 'Join a supportive team that values collaboration and excellence.',
    },
  ];

  const openings = [
    {
      title: 'Aesthetic Practitioner',
      type: 'Full-time',
      location: 'Batumi, Georgia',
      description: 'We are seeking experienced aesthetic practitioners to join our growing team.',
    },
    {
      title: 'Clinic Receptionist',
      type: 'Full-time',
      location: 'Batumi, Georgia',
      description: 'Friendly and professional receptionist to manage client bookings and inquiries.',
    },
    {
      title: 'Skincare Specialist',
      type: 'Part-time',
      location: 'Batumi, Georgia',
      description: 'Licensed skincare specialist with experience in facial treatments and consultations.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container-custom text-center">
          <h1 
            className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Careers
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join our team of passionate professionals dedicated to enhancing natural beauty
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
            <span className="text-primary font-medium">Careers</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-3xl font-serif font-semibold text-primary mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Work With Us?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Silk Beauty Salon, we believe that our team is our greatest asset. We are committed to creating 
              an environment where talented professionals can thrive, grow, and make a real difference in our 
              clients&apos; lives. Join us in delivering exceptional aesthetic treatments and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-spacing bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-serif font-semibold text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Benefits
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-lg p-6 text-center card-hover">
                <h3 className="font-serif font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-serif font-semibold text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Current Openings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are always looking for talented individuals to join our team
            </p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {openings.map((job) => (
              <div key={job.title} className="bg-white border border-border rounded-lg p-6 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="font-serif font-semibold text-primary text-lg">{job.title}</h3>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <span className="text-xs bg-secondary px-2 py-1 rounded">{job.type}</span>
                    <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <Button asChild variant="outline" size="sm">
                  <a href={`mailto:${siteConfig.contact.email}?subject=Application: ${job.title}`}>
                    Apply Now
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-spacing bg-primary">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-6 h-6 text-gold" />
            <h2 
              className="text-2xl md:text-3xl font-serif font-semibold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Don&apos;t See the Right Role?
            </h2>
          </div>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            We&apos;re always interested in meeting talented professionals. Send us your CV and we&apos;ll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-gold">
              <a href={`mailto:${siteConfig.contact.email}?subject=General Application`} className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Send Your CV
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/contact-us">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
