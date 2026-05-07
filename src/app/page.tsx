import { HealthNav } from '@/components/health-nav';
import { HealthHero } from '@/components/health-hero';
import { StrokeSection } from '@/components/health-stroke';
import { HypertensionSection } from '@/components/health-hypertension';
import { LongevitySection } from '@/components/health-longevity';
import { CenturySection } from '@/components/health-century';
import { HealthFooter } from '@/components/health-footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HealthNav />
      <HealthHero />
      <StrokeSection />
      <HypertensionSection />
      <LongevitySection />
      <CenturySection />
      <HealthFooter />
    </div>
  );
}
