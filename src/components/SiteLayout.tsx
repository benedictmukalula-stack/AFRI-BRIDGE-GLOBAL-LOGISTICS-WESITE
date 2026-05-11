'use client';

import { TopBar } from '@/components/TopBar';
import { NavBar } from '@/components/NavBar';
import { GlobalFooterVisual } from '@/components/layout/GlobalFooterVisual';
import { Footer } from '@/components/Footer';
import { FloatingWhatsAppAssistant } from '@/components/FloatingWhatsAppAssistant';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />

      <main className="flex-1">
        {children}
      </main>

      <GlobalFooterVisual />
      <Footer />
      <FloatingWhatsAppAssistant />
    </div>
  );
}
