import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { treatmentCategories } from '@/data/treatments';

export function TreatmentsSection() {
  return (
    <section className="section-spacing bg-white" id="treatments">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary mb-4 heading-underline"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Treatments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-8">
            Explore our comprehensive range of premium aesthetic treatments designed to enhance your natural beauty
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatmentCategories.slice(0, 6).map((category, index) => (
            <div
              key={category.slug}
              className="group relative overflow-hidden rounded-lg bg-white border border-border card-hover"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 
                    className="text-xl font-serif font-semibold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-200 mt-1">
                    {category.treatments.length} treatments
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {category.treatments.slice(0, 3).map((treatment) => (
                    <li key={treatment.slug} className="text-sm">
                      <Link
                        href={`/treatments/${treatment.slug}`}
                        className="text-primary hover:text-gold transition-colors flex items-center gap-1"
                      >
                        <ChevronRight className="w-3 h-3 text-gold" />
                        {treatment.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/treatments#${category.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
                >
                  View all {category.name}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-gold transition-colors"
          >
            View All Treatments
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
