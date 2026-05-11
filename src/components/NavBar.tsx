'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Package, Map, GraduationCap, ArrowRight, Building2, Phone, FileText, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LiveUpdatePopup } from '@/components/LiveUpdatePopup';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

const servicesItems = [
  { label: 'All Services', href: '/services' },
  { label: 'Customs Clearing & Brokerage', href: '/services/customs-clearing' },
  { label: 'Air Freight Solutions', href: '/services/air-freight' },
  { label: 'Ocean Freight (FCL/LCL)', href: '/services/ocean-freight' },
  { label: 'Road & Cross-Border Transport', href: '/services/road-transport' },
  { label: 'Warehousing & Distribution', href: '/services/warehousing' },
  { label: 'Project Cargo Logistics', href: '/services/project-cargo' },
  { label: 'Vehicle Sourcing & Delivery', href: '/services/vehicle-sourcing' },
  { label: 'Registration & Compliance', href: '/services/registration' },
  { label: 'Mining & Industrial Logistics', href: '/services/mining-industrial' },
  { label: 'Oil & Gas Logistics', href: '/services/oil-gas' },
  { label: 'Maritime & Port Logistics', href: '/services/maritime-port' },
  { label: 'Trade Documentation', href: '/services/trade-documentation' },
];

const atlasItems = [
  { label: 'All Atlas', href: '/atlas' },
  { label: 'Corridor Intelligence', href: '/atlas/intelligence' },
  { label: 'Publications', href: '/atlas/publications' },
  { label: 'Marketplace', href: '/atlas/marketplace' },
  { label: 'Media & Advertising', href: '/atlas/media' },
  { label: 'Pricing', href: '/atlas/pricing' },
  { label: 'Dashboard', href: '/portal' },
];

type NavItem = { label: string; href: string; icon?: React.ElementType; highlight?: boolean } | { type: 'divider' };

const companyItems: NavItem[] = [
  { label: 'About Us', href: '/company/about' },
  { label: 'Our Team', href: '/company/team' },
  { label: 'Careers', href: '/company/careers' },
  { label: 'News & Insights', href: '/company/news' },
  { label: 'FAQ', href: '/company/faq' },
  { type: 'divider' },
  { label: 'Contact Us', href: '/contact', icon: Phone, highlight: true },
  { label: 'Get a Quote', href: '/quote', icon: FileText, highlight: true },
  { label: 'Client Portal', href: '/portal', icon: LayoutDashboard, highlight: true },
];

const academyItems = [
  { label: 'Academy Overview', href: '/academy' },
  { label: 'Course Catalogue', href: '/academy/courses' },
  { label: 'Certifications', href: '/academy/certifications' },
  { label: 'Corporate Training', href: '/academy/corporate-training' },
  { label: 'Executive Programmes', href: '/academy/executive-programmes' },
  { label: 'Training Calendar', href: '/academy/training-calendar' },
  { label: 'Resources', href: '/academy/resources' },
];

function NavDropdown({
  label,
  items,
  icon: Icon,
}: {
  label: string;
  items: NavItem[];
  icon: React.ElementType;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
          <div className="px-3 py-2 border-b border-gray-100 flex items-center gap-2">
            <Icon className="h-4 w-4 text-emerald-600" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</span>
          </div>
          <div className="max-h-[28rem] overflow-y-auto">
            {items.map((item, idx) => {
              if ('type' in item && item.type === 'divider') {
                return <div key={idx} className="my-2 border-t border-gray-100" />;
              }
              const navItem = item as { label: string; href: string; icon?: React.ElementType; highlight?: boolean };
              const ItemIcon = navItem.icon;
              return (
                <Link
                  key={navItem.label}
                  href={navItem.href}
                  className={`flex items-center gap-2.5 px-3 py-2 text-sm transition-colors ${
                    navItem.highlight
                      ? 'text-emerald-700 bg-emerald-50/60 hover:bg-emerald-50 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {ItemIcon && <ItemIcon className="h-4 w-4 shrink-0" />}
                  {navItem.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/images/logo.png" alt="Afri-Bridge Logo" width={64} height={64} className="object-contain rounded-md" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Home
            </Link>
            <NavDropdown label="Services" items={servicesItems} icon={Package} />
            <Link
              href="/trade-corridors"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Trade Corridors
            </Link>
            <Link
              href="/resources"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Tools &amp; Resources
            </Link>
            <Link
              href="/tracking"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <ArrowRight className="h-3.5 w-3.5" />
              Track Shipment
            </Link>
            <NavDropdown label="Company" items={companyItems} icon={Building2} />
            <NavDropdown label="Academy" items={academyItems} icon={GraduationCap} />
            <NavDropdown label="ATLAS" items={atlasItems} icon={Map} />
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <LiveUpdatePopup />
            <Link
              href="/quote"
              className="btn-glow inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <ScrollArea className="h-full">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Image src="/images/logo.png" alt="Afri-Bridge" width={56} height={56} className="object-contain rounded-md" />
                  </div>

                  <div className="space-y-1">
                    <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>

                    <MobileDropdown label="Services" items={servicesItems} onClose={() => setMobileOpen(false)} />
                    <MobileNavLink href="/trade-corridors" onClick={() => setMobileOpen(false)}>Trade Corridors</MobileNavLink>
                    <MobileNavLink href="/resources" onClick={() => setMobileOpen(false)}>Tools &amp; Resources</MobileNavLink>
                    <MobileNavLink href="/tracking" onClick={() => setMobileOpen(false)}>Track Shipment</MobileNavLink>
                    <MobileDropdown label="Company" items={companyItems} onClose={() => setMobileOpen(false)} />
                    <MobileDropdown label="Academy" items={academyItems} onClose={() => setMobileOpen(false)} />
                    <MobileDropdown label="ATLAS" items={atlasItems} onClose={() => setMobileOpen(false)} />
                  </div>

                  <div className="mt-6 pt-6 border-t space-y-3">
                    <Link
                      href="/quote"
                      onClick={() => setMobileOpen(false)}
                      className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-md transition-colors"
                    >
                      Get a Free Quote
                    </Link>
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function MobileDropdown({
  label,
  items,
  onClose,
}: {
  label: string;
  items: NavItem[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="ml-3 pl-3 border-l-2 border-emerald-200">
          {items.map((item, idx) => {
            if ('type' in item && item.type === 'divider') {
              return <div key={idx} className="my-2 border-t border-gray-100" />;
            }
            const navItem = item as { label: string; href: string; icon?: React.ElementType; highlight?: boolean };
            const ItemIcon = navItem.icon;
            return (
              <Link
                key={navItem.label}
                href={navItem.href}
                className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                  navItem.highlight
                    ? 'text-emerald-700 font-medium'
                    : 'text-gray-500 hover:text-emerald-600'
                }`}
                onClick={onClose}
              >
                {ItemIcon && <ItemIcon className="h-4 w-4 shrink-0" />}
                {navItem.label}
                {navItem.highlight && <ArrowRight className="h-3.5 w-3.5 ml-auto" />}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
