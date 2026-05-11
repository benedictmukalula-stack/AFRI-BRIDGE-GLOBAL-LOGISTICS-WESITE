'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Shield,
  Award,
  Lightbulb,
  Handshake,
  Clock,
  Globe,
  CheckCircle2,
  TrendingUp,
  Users,
  MapPin,
  Building2,
  Rocket,
  Target,
  Truck,
  BarChart3,
  GraduationCap,
  Globe2,
  Anchor,
} from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

/* ------------------------------------------------------------------ */
/*  Milestones data                                                    */
/* ------------------------------------------------------------------ */
const milestones = [
  {
    year: '2015',
    title: 'Founded in Johannesburg',
    description:
      'Afri-Bridge Global Logistics was established in Sandton, Johannesburg, with a team of five customs professionals. From day one, the focus was on simplifying cross-border trade for South African importers and exporters, offering personalised customs brokerage and freight forwarding services.',
    icon: Rocket,
  },
  {
    year: '2016',
    title: 'Southern Africa Expansion',
    description:
      'Expanded operations into three SADC markets — Mozambique, Zimbabwe, and Namibia — establishing cross-border road freight corridors and building relationships with border agencies and local customs authorities to ensure smooth clearance processes.',
    icon: MapPin,
  },
  {
    year: '2017',
    title: 'Road Freight Network Launched',
    description:
      'Launched a dedicated road freight division connecting South Africa to neighbouring states. Introduced scheduled weekly departures on key corridors including the N1 North to Zimbabwe, the N4 to Mozambique, and the Trans-Kalahari route to Namibia and Botswana.',
    icon: Truck,
  },
  {
    year: '2018',
    title: 'East Africa Entry & 500 Clients',
    description:
      'Crossed the 500-client milestone and expanded into East Africa with operations in Kenya and Tanzania. This marked the first step in building a truly pan-African network, and we opened a regional coordination office in Nairobi to manage corridor traffic through Mombasa and Dar es Salaam.',
    icon: Users,
  },
  {
    year: '2019',
    title: 'Multi-Modal Operations Licence',
    description:
      'Secured a multi-modal customs brokerage and freight forwarding licence, enabling us to handle air, ocean, road, and rail cargo under a single regulatory framework. Invested in warehouse infrastructure in Johannesburg and Durban to offer integrated storage and distribution services.',
    icon: Award,
  },
  {
    year: '2020',
    title: 'Resilience Through COVID-19',
    description:
      'Navigated the global pandemic with zero service disruption to critical supply chains. Deployed digital shipment tracking and remote customs processing capabilities to keep goods moving when borders tightened. Supported essential goods logistics including pharmaceuticals, food supplies, and PPE across multiple African corridors.',
    icon: Shield,
  },
  {
    year: '2021',
    title: 'West Africa & 1,000 Clients',
    description:
      'Entered West Africa with operations in Nigeria (Lagos) and Ghana (Tema). Reached 1,000 active clients and expanded our team to over 120 professionals. Strengthened partnerships with major shipping lines and airlines serving African routes, securing competitive rates and priority space allocation.',
    icon: TrendingUp,
  },
  {
    year: '2022',
    title: 'Project Cargo & Mining Divisions',
    description:
      'Launched dedicated project cargo and mining logistics divisions to serve the extractive industries across Southern and Central Africa. Handled oversized shipments for mining equipment in the DRC, Zambia, and Ghana. Opened offices in Lubumbashi and Accra to be closer to key mining hubs.',
    icon: Building2,
  },
  {
    year: '2023',
    title: 'ATLAS Trade Intelligence Platform',
    description:
      'Launched ATLAS, our proprietary trade intelligence platform — a game-changer for African shippers and freight forwarders. ATLAS provides real-time corridor intelligence, port congestion data, duty calculators, trade compliance checklists, and market analytics. Expanded our footprint to 15+ African markets.',
    icon: BarChart3,
  },
  {
    year: '2024',
    title: 'Afri-Bridge Academy Launched',
    description:
      'Addressing the critical skills gap in African trade and logistics, we launched the Afri-Bridge Academy with 50 professional courses spanning customs compliance, freight forwarding, dangerous goods handling, trade finance, and supply chain management. Served our 2,000th client and grew the team to over 200 professionals.',
    icon: GraduationCap,
  },
  {
    year: '2025',
    title: 'Oil & Gas Logistics & Regional Hubs',
    description:
      'Expanded into oil and gas logistics, providing end-to-end supply chain solutions for energy sector clients operating in Nigeria, Angola, and Mozambique. Established formal regional hub offices in Lagos, Nairobi, and Accra with full-service capabilities including bonded warehousing and customs clearance.',
    icon: Anchor,
  },
  {
    year: '2026',
    title: 'Strategic Growth & Continental Reach',
    description:
      'Continued growth with strategic partnerships and corridor expansions across North and Central Africa. Strengthened the ATLAS platform with AI-powered route optimisation and predictive analytics. The Afri-Bridge Academy introduced executive education programmes and corporate training partnerships, reinforcing our position as Africa\'s integrated logistics and trade enablement partner.',
    icon: Globe2,
  },
];

/* ------------------------------------------------------------------ */
/*  What Sets Us Apart data                                            */
/* ------------------------------------------------------------------ */
const differentiators = [
  {
    icon: Target,
    title: 'Deep Corridor Expertise',
    description:
      'Our teams live and work on the trade corridors they serve. From Beitbridge to Kazungula, from Walvis Bay to Mombasa, we understand the unique regulations, border procedures, infrastructure constraints, and practical realities of moving goods through each crossing point. This local knowledge translates into faster clearance times, fewer delays, and more predictable supply chains for our clients.',
  },
  {
    icon: BarChart3,
    title: 'Technology-Driven Operations',
    description:
      'ATLAS, our proprietary trade intelligence platform, gives clients real-time visibility into their shipments, corridor conditions, duty estimates, and compliance requirements. We combine this with digital documentation workflows, electronic customs filing, and automated alert systems to reduce manual processes and human error throughout the supply chain.',
  },
  {
    icon: Handshake,
    title: 'End-to-End Integration',
    description:
      'Unlike fragmented service providers, Afri-Bridge offers a fully integrated logistics solution — from initial trade advisory and customs classification through freight booking, border clearance, inland transport, warehousing, and final-mile delivery. Clients deal with a single partner, a single point of contact, and a unified system across the entire journey.',
  },
  {
    icon: Users,
    title: 'People Who Care',
    description:
      'Our 200+ logistics professionals are the backbone of our service. We invest heavily in training and development through the Afri-Bridge Academy, ensuring our teams stay current with changing regulations, industry best practices, and emerging technologies. Our people take personal ownership of every shipment and build lasting relationships with clients.',
  },
  {
    icon: Shield,
    title: 'Compliance & Risk Management',
    description:
      'We maintain rigorous compliance standards across all 15+ markets where we operate. Our in-house regulatory experts monitor changes to customs laws, trade agreements, sanctions lists, and import/export restrictions in real time. We conduct regular compliance audits and provide proactive guidance to clients to minimise risk and avoid costly penalties.',
  },
  {
    icon: Globe,
    title: 'Pan-African Network',
    description:
      'With owned offices, trusted agents, and strategic partnerships spanning Southern, East, West, Central, and North Africa, we offer genuine continental coverage. Our network is not just a list of affiliate addresses — each location is staffed by trained Afri-Bridge professionals who uphold the same quality standards and service commitments as our head office in Johannesburg.',
  },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* ============================================================ */}
      {/* Hero                                                         */}
      {/* ============================================================ */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/28-about-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Company</span>
            <span>/</span>
            <span className="text-white font-medium">About Us</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            About Afri-Bridge
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Africa&apos;s trusted partner for freight forwarding, customs clearing, and cross-border
            logistics — connecting businesses across the continent since 2015.
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Our Story — Expanded                                         */}
      {/* ============================================================ */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-6 tracking-tight">
                From Johannesburg to the Continent
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Afri-Bridge Global Logistics was founded in 2015 in Johannesburg with a clear
                  mission: to simplify and streamline cross-border trade across Africa. What began as a
                  boutique customs brokerage handling South African imports and exports has grown into a
                  pan-African logistics provider serving clients in over 15 African markets. The founding
                  team — experienced customs brokers and freight forwarders themselves — saw first-hand how
                  fragmented services, opaque pricing, and unreliable transit times were holding back
                  African businesses from reaching their full potential in global trade.
                </p>
                <p>
                  Over the past decade, we have built comprehensive capabilities spanning customs
                  clearance, air and ocean freight, road transport, warehousing, project cargo, mining
                  logistics, and oil &amp; gas logistics. Our team of over 200 logistics professionals
                  combines deep local expertise with modern technology to deliver reliable, transparent,
                  and cost-effective supply chain solutions. We have invested in people, infrastructure,
                  and systems at every step — building bonded warehouses in key ports, opening regional
                  offices close to major trade hubs, and developing proprietary technology that gives our
                  clients a competitive edge.
                </p>
                <p>
                  In 2023, we launched ATLAS — our proprietary trade intelligence platform — providing
                  real-time corridor intelligence, market data, and logistics insights to shippers and
                  freight forwarders across the continent. In 2024, we introduced the Afri-Bridge Academy
                  to address the critical skills gap in African trade and logistics through professional
                  training and certification programmes. These investments reflect our belief that
                  technology and talent are the twin pillars of Africa&apos;s logistics future.
                </p>
                <p>
                  Today, Afri-Bridge serves over 2,000 clients — from small and medium enterprises
                  importing their first container to multinational corporations managing complex,
                  multi-country supply chains. We are proud to be a truly African company, headquartered
                  on the continent, invested in its people, and committed to its growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/photography/hero-port-operations.png"
                  alt="Afri-Bridge port operations — containers and gantry cranes at a modern African port"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 via-transparent to-[#0B1F3A]/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <p className="text-6xl font-bold mb-2">2015</p>
                    <p className="text-lg text-emerald-200">Est. Johannesburg, South Africa</p>
                    <p className="text-sm text-gray-300 mt-2">10+ Years of Connecting African Trade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Team Leadership Showcase — NEW                                 */}
      {/* ============================================================ */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
                <Image
                  src="/images/photography/corporate-operations-portrait.png"
                  alt="Afri-Bridge logistics operations professional at the Sandton headquarters command center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/35 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-emerald-300">Live Operations</span>
                  </div>
                  <p className="text-white text-sm font-medium">Sandton Headquarters — Johannesburg</p>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                Our People
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-6 tracking-tight">
                The Team Behind Your Supply Chain
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  At the heart of every successful shipment, every cleared customs entry, and every
                  optimised trade corridor is a dedicated Afri-Bridge professional. Our team of over 200
                  logistics experts across eight African countries brings together deep local knowledge,
                  global best practices, and an unwavering commitment to client service.
                </p>
                <p>
                  From our 24/7 operations command centre in Sandton, our specialists monitor corridor
                  conditions, coordinate cross-border movements, and provide real-time intelligence to
                  clients. Every team member is trained through the Afri-Bridge Academy and equipped with
                  the ATLAS trade intelligence platform — ensuring they have the skills and data to
                  deliver excellence at every touchpoint.
                </p>
                <p>
                  We invest in our people because we know that Africa&apos;s logistics challenges are
                  solved not by technology alone, but by talented professionals who combine expertise with
                  passion and personal accountability.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '200+', label: 'Team Members' },
                  { value: '8', label: 'Country Offices' },
                  { value: '24/7', label: 'Operations Centre' },
                  { value: '90%+', label: 'Client Retention' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-600">{value}</p>
                    <p className="text-xs text-gray-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* What Sets Us Apart — NEW                                      */}
      {/* ============================================================ */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              Our Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              What Sets Us Apart
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              In a market crowded with logistics providers, Afri-Bridge stands out through deep expertise,
              integrated services, and an unwavering commitment to Africa&apos;s trade potential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Mission & Vision — Expanded                                   */}
      {/* ============================================================ */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0B1F3A] to-[#162d50] rounded-2xl p-8 lg:p-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-5">
                <Globe className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                To connect African businesses to global trade through reliable, efficient, and
                technology-driven logistics solutions. We are committed to breaking down barriers to
                cross-border commerce, reducing supply chain friction, and helping our clients move goods
                across Africa&apos;s trade corridors with confidence and transparency.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Every shipment we handle, every customs entry we process, and every route we optimise is
                guided by this purpose. We believe that efficient logistics is not just a service — it is
                an enabler of economic growth, job creation, and continental integration.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-8 lg:p-10">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-emerald-100 leading-relaxed mb-4">
                To be Africa&apos;s most trusted logistics partner, enabling seamless trade across the
                continent. We envision a future where African businesses can trade with each other and
                the world as efficiently as any other region — where border delays are minimised,
                compliance is simplified, supply chains are visible in real time, and logistics is a
                competitive advantage rather than a barrier to growth.
              </p>
              <p className="text-emerald-100 leading-relaxed">
                We aspire to set the standard for logistics excellence in Africa — a standard built on
                innovation, integrity, and an unshakeable belief in the promise of this continent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Milestones Timeline — NEW                                     */}
      {/* ============================================================ */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Key Milestones
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              From a small Johannesburg office to a pan-African logistics powerhouse — here are the
              moments that have shaped Afri-Bridge&apos;s story.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line — desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 -translate-x-1/2" />
            {/* Vertical line — mobile */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={milestone.year} className="relative">
                    {/* Desktop layout */}
                    <div className="hidden md:grid md:grid-cols-2 md:gap-12 items-start">
                      {/* Left side */}
                      <div className={`pr-12 text-right ${isEven ? '' : 'order-2 pl-12 text-left'}`}>
                        {isEven && (
                          <div className="inline-block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-3 justify-end">
                              <h3 className="text-lg font-bold text-[#0B1F3A]">
                                {milestone.title}
                              </h3>
                              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">
                                {milestone.year}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Right side */}
                      <div className={`${isEven ? 'pl-12' : 'order-1 pr-12 text-right'}`}>
                        {!isEven && (
                          <div className="inline-block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-3 justify-end">
                              <h3 className="text-lg font-bold text-[#0B1F3A]">
                                {milestone.title}
                              </h3>
                              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm shrink-0">
                                {milestone.year}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed text-right">
                              {milestone.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="md:hidden pl-14">
                      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs shrink-0">
                            {milestone.year}
                          </span>
                          <h3 className="text-base font-bold text-[#0B1F3A]">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot — desktop */}
                    <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-500 items-center justify-center ring-4 ring-emerald-100 z-10">
                      <Icon className="h-4 w-4 text-white" />
                    </div>

                    {/* Left dot — mobile */}
                    <div className="md:hidden absolute left-[14px] top-5 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center ring-4 ring-emerald-100 z-10">
                      <Icon className="h-3 w-3 text-white" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Our Values                                                    */}
      {/* ============================================================ */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              These principles guide every decision we make and every service we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Integrity',
                description:
                  'We operate with transparency and honesty in every transaction. Our clients trust us with their goods, their data, and their reputation — and we take that trust seriously. We never cut corners on compliance, and we always communicate openly about timelines, costs, and potential challenges.',
              },
              {
                icon: Award,
                title: 'Excellence',
                description:
                  'We hold ourselves to the highest standards of operational quality. Every shipment is handled with precision, every customs entry is accurate, and every client interaction is professional. We pursue continuous improvement through regular performance reviews, client feedback loops, and industry benchmarking.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description:
                  'We continuously invest in technology, processes, and talent to stay ahead. ATLAS, our trade intelligence platform, and the Afri-Bridge Academy reflect our commitment to innovation. We actively explore AI-driven route optimisation, predictive analytics, and digital trade documentation to shape the future of African logistics.',
              },
              {
                icon: Handshake,
                title: 'Partnership',
                description:
                  'We view every client relationship as a true partnership. We succeed when our clients succeed, and we go the extra mile to understand their unique logistics challenges and deliver tailored solutions. Our client retention rate of over 90% speaks to the strength and depth of these partnerships.',
              },
              {
                icon: Clock,
                title: 'Reliability',
                description:
                  'In logistics, reliability is everything. We deliver on our promises — on time, in full, and with the care and attention that our clients expect. Our track record speaks for itself: consistently high on-time delivery rates, minimal customs query rates, and responsive customer support across all time zones we serve.',
              },
              {
                icon: Globe,
                title: 'African First',
                description:
                  'We are proudly African. Our expertise, our network, and our passion are rooted in this continent. We believe in Africa\'s potential and are committed to unlocking it through better logistics. We hire locally, invest in African talent, and actively support initiatives that strengthen intra-African trade under the African Continental Free Trade Area.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Stats — Expanded                                              */}
      {/* ============================================================ */}
      <div className="bg-[#0B1F3A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
              By the Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Afri-Bridge at a Glance
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A decade of growth, investment, and impact across Africa&apos;s trade corridors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { value: '10+', label: 'Years in Business' },
              { value: '15+', label: 'African Markets' },
              { value: '2,000+', label: 'Clients Served' },
              { value: '500+', label: 'Corporate Clients' },
              { value: '200+', label: 'Team Members' },
              { value: '50', label: 'Academy Courses' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl sm:text-4xl font-bold text-emerald-400">{value}</p>
                <p className="text-sm text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Sub-stats */}
          <div className="mt-12 pt-10 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: CheckCircle2,
                  text: '90%+ client retention rate',
                },
                {
                  icon: Building2,
                  text: 'Offices in 8 African countries',
                },
                {
                  icon: Truck,
                  text: 'Weekly scheduled departures on 12+ corridors',
                },
                {
                  icon: Globe,
                  text: 'Licensed for air, ocean, road & rail freight',
                },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-gray-300">
                  <Icon className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* CTA                                                           */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Partner With Afri-Bridge
          </h2>
          <p className="text-emerald-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you are an importer, exporter, mining company, or manufacturer — we have the expertise
            and network to move your goods across Africa. Join over 2,000 businesses that trust Afri-Bridge
            with their supply chains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-8 h-12">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/quote">
              <Button
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12"
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
