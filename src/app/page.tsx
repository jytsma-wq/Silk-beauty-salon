import { HeroSection } from '@/components/sections/HeroSection';
import { TreatmentsSection } from '@/components/sections/TreatmentsSection';
import { ConditionsSection } from '@/components/sections/ConditionsSection';
import { TechnologiesSection } from '@/components/sections/TechnologiesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { QuickLinksSection } from '@/components/sections/QuickLinksSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TreatmentsSection />
      <ConditionsSection />
      <AboutSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <QuickLinksSection />
      <NewsletterSection />
    </>
  );
}
