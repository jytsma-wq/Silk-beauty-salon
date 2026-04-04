import Link from 'next/link';
import { HelpCircle, MapPin, Users, Newspaper, ChevronRight } from 'lucide-react';

const quickLinks = [
  {
    title: 'FAQ',
    description: 'Read some of the most frequently asked questions about the clinic and our treatments.',
    icon: HelpCircle,
    href: '/faq',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Contact',
    description: 'Located on Harley Street at number 106, opening hours are 9am–6.30pm.',
    icon: MapPin,
    href: '/contact-us',
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Team',
    description: 'Find out more about our skilled members of staff and how they can best help you.',
    icon: Users,
    href: '/about#team',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Press',
    description: 'Why not take a look at our most recent Press features and see what they\'re saying about us.',
    icon: Newspaper,
    href: '/media-press',
    color: 'bg-amber-50 text-amber-600',
  },
];

export function QuickLinksSection() {
  return (
    <section className="section-spacing bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Quick Links
          </h2>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group bg-white p-6 rounded-lg border border-border card-hover"
            >
              <div className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center mb-4`}>
                <link.icon className="w-6 h-6" />
              </div>
              <h3 
                className="text-lg font-serif font-semibold text-primary mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {link.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {link.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all">
                Learn More
                <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
