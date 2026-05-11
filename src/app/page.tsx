'use client';

import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { PlatformPillarsSection } from '@/components/PlatformPillarsSection';
import { TradeCorridorsSection } from '@/components/TradeCorridorsSection';
import { AtlasSection } from '@/components/AtlasSection';
import { AtlasMediaSection } from '@/components/AtlasMediaSection';
import { AcademySection } from '@/components/AcademySection';
import { ResourcesSection } from '@/components/ResourcesSection';
import { StatsSection } from '@/components/StatsSection';
import { CTASection } from '@/components/CTASection';
import { SiteLayout } from '@/components/SiteLayout';

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <PlatformPillarsSection />
      <TradeCorridorsSection />
      <AtlasSection />
      <AtlasMediaSection />
      <AcademySection />
      <ResourcesSection />
      <StatsSection />
      <CTASection />
    </SiteLayout>
  );
}
