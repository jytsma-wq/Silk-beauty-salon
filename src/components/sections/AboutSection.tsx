import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 
              className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Putting patients first and delivering exceptional service
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Harley Street Injectables provides a range of minimally invasive, pioneering cosmetic and healthcare treatments using the latest technology to achieve the best results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our clinic brings together world-class practitioners in a luxurious, discreet setting on the prestigious Harley Street. We believe in enhancing natural beauty with subtle, refined results that boost confidence without changing who you are.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'Award-winning clinic',
                'World-class practitioners',
                'Premium products only',
                'Luxury patient experience',
                'Latest technologies',
                'Natural-looking results',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
            >
              Learn More About Us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Harley Street Injectables Clinic"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
