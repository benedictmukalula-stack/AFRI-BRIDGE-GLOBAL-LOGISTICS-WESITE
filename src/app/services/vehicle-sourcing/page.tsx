'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Car, CheckCircle2, Shield, Globe, Clock, FileCheck, Search, Truck, Ship, Star, BadgeDollarSign, Factory, Users } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function VehicleSourcingPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/22-vehicle-sourcing-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
            <span className="text-white font-medium">Vehicle Sourcing &amp; Delivery</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <Car className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Vehicle Sourcing &amp; Delivery</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-6">
            End-to-end vehicle procurement and logistics from global sourcing markets to final delivery across Africa. We source vehicles from <strong className="text-white">South Africa</strong> &mdash; the continent&apos;s largest automotive hub &mdash; as well as Japan, UK, Australia, Germany, USA, and UAE. From brand new dealership purchases and certified pre-owned to auction, fleet, and commercial sourcing, we handle the entire supply chain including export and import documentation, customs clearance, and door-to-door delivery anywhere on the continent.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600/20 text-emerald-300 text-sm font-medium border border-emerald-600/30">
              <Star className="h-3.5 w-3.5" /> South Africa &mdash; Primary Sourcing Hub
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-gray-300 text-sm border border-white/20">
              <Globe className="h-3.5 w-3.5" /> 6 Additional Global Markets
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-gray-300 text-sm border border-white/20">
              <Truck className="h-3.5 w-3.5" /> 25+ African Destinations
            </span>
          </div>
        </div>
      </div>

      {/* South Africa Feature Banner */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">🇿🇦</span>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">South Africa &mdash; Africa&apos;s Premier Vehicle Market</h2>
              <p className="text-emerald-50 text-lg leading-relaxed max-w-3xl">
                South Africa is the automotive powerhouse of the continent, producing over 500,000 vehicles annually from world-class manufacturing plants in Gauteng, Eastern Cape, and KwaZulu-Natal. As Africa&apos;s most developed vehicle market, it offers unmatched access to <strong>brand new vehicles directly from OEM dealerships</strong>, an extensive <strong>certified pre-owned network</strong>, major <strong>auction houses</strong> running weekly sales, <strong>fleet disposal programmes</strong> from top corporates and government, and a wide range of <strong>commercial and industrial vehicles</strong>. With right-hand drive compatibility for over 15 African countries, South Africa is our flagship sourcing market and the most cost-effective origin for vehicle imports into the wider SADC and East African regions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sourcing Categories */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Sourcing Categories</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Every Category, Every Budget</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Whether you need a single brand-new sedan, a batch of ex-government fleet vehicles, or a fleet of heavy commercial trucks, we source from every category across all our markets. Each category has its own supply chain optimised for speed, cost, and compliance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Brand New */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:border-emerald-200 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Brand New</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Factory-new vehicles sourced directly from OEM dealerships and authorised distributors. Full manufacturer warranty, zero mileage, and latest model specifications. Available from South Africa (BMW, Toyota, Ford, Volkswagen, Isuzu, Mercedes-Benz plants), Japan, Germany, UAE, and USA.
              </p>
              <ul className="space-y-2">
                {['Full manufacturer warranty', 'Custom specification orders', 'Latest safety & tech features', 'Zero kilometre delivery'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['🇿🇦 SA', '🇯🇵 Japan', '🇩🇪 Germany', '🇦🇪 UAE', '🇺🇸 USA'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-500 font-medium">{tag}</span>
                ))}
              </div>
            </div>

            {/* Used / Pre-Owned */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:border-emerald-200 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Used / Pre-Owned</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Quality pre-owned vehicles from certified dealer networks and vetted private sellers. Multi-point inspection reports, verified mileage, and service history documentation. South Africa offers an exceptionally deep used vehicle market with over 40,000 listings at any given time, covering every make and model.
              </p>
              <ul className="space-y-2">
                {['Multi-point inspection reports', 'Verified mileage & service history', 'Certified dealer programmes', 'Roadworthy certificates included'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['🇿🇦 SA', '🇬🇧 UK', '🇦🇺 Australia', '🇯🇵 Japan', '🇺🇸 USA'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-500 font-medium">{tag}</span>
                ))}
              </div>
            </div>

            {/* Auction */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:border-emerald-200 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <BadgeDollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Auction</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Competitive auction sourcing from the world&apos;s largest auction houses. In South Africa, we access BSA Auctions, Aucor, and SMD weekly sales featuring bank repossessions, trade-ins, and ex-lease vehicles. Globally, we bid at USS Tokyo, TAA Yokohama, BCA UK, Manheim Australia, and Copart USA for unmatched variety and pricing.
              </p>
              <ul className="space-y-2">
                {['Real-time bidding by our agents', 'Auction grade & condition reports', 'Bank repossession deals', 'Below-market pricing opportunities'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['🇿🇦 SA', '🇯🇵 Japan', '🇬🇧 UK', '🇦🇺 Australia', '🇺🇸 USA', '🇦🇪 UAE'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-500 font-medium">{tag}</span>
                ))}
              </div>
            </div>

            {/* Fleet */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:border-emerald-200 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Fleet</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Corporate and government fleet disposal programmes offering well-maintained vehicles at attractive prices. South Africa&apos;s large mining houses, logistics companies, rental fleets, and government departments regularly refresh their fleets, creating a steady supply of late-model vehicles with full service histories.
              </p>
              <ul className="space-y-2">
                {['Corporate fleet disposal programmes', 'Government vehicle auctions', 'Rental fleet rotations', 'Full service history available'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-purple-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['🇿🇦 SA', '🇬🇧 UK', '🇦🇺 Australia'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-500 font-medium">{tag}</span>
                ))}
              </div>
            </div>

            {/* Commercial */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:border-emerald-200 transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <Factory className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Commercial &amp; Industrial</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Heavy trucks, prime movers, trailers, buses, construction machinery, and industrial equipment. South Africa is a major hub for commercial vehicle manufacturing (Isuzu, MAN, Scania, Volvo, DAF) with strong dealer networks and an active secondary market for pre-owned commercial vehicles and earthmoving equipment.
              </p>
              <ul className="space-y-2">
                {['Heavy trucks & prime movers', 'Construction & earthmoving equipment', 'Buses & minibuses', 'Specialised industrial machinery'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['🇿🇦 SA', '🇯🇵 Japan', '🇩🇪 Germany', '🇺🇸 USA'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-500 font-medium">{tag}</span>
                ))}
              </div>
            </div>

            {/* Special / Niche */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:border-emerald-200 transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Specialist &amp; Niche</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Luxury vehicles, 4x4s and SUVs for African terrain, right-hand drive conversions, armoured vehicles, electric vehicles (EVs), and custom-build projects. We also source spare parts, engines, gearboxes, and complete knock-down (CKD) kits for assembly operations across the continent.
              </p>
              <ul className="space-y-2">
                {['Luxury & premium vehicles', '4x4 off-road specialists', 'Electric vehicles (EVs)', 'Spare parts & CKD kits'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-rose-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['🇿🇦 SA', '🇯🇵 Japan', '🇩🇪 Germany', '🇬🇧 UK', '🇦🇪 UAE'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-500 font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Vehicle Import Specialists</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">From Sourcing to Your Door</h2>
            <p className="text-gray-500 text-lg leading-relaxed">We simplify the complex process of importing vehicles into Africa. Whether you are buying a single personal vehicle from a South African dealership, winning a bid at a Japanese auction, or sourcing a fleet of commercial trucks from a German manufacturer, our team manages the entire supply chain from purchase through to registration and delivery.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 mb-16 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8 text-center">How It Works &mdash; 6 Simple Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { step: '01', title: 'Specification', desc: 'Tell us the make, model, year, and category (new, used, auction, fleet, commercial). We search across all sourcing markets starting with South Africa.' },
                { step: '02', title: 'Sourcing', desc: 'Our agents at SA dealerships, BSA/Aucor auctions, and global networks find vehicles matching your requirements, budget, and category preference.' },
                { step: '03', title: 'Inspection', desc: 'Independent vehicle inspection reports with 150+ point checks, photos, and condition grading. South Africa: Dekra/AA reports. Japan: auction sheets.' },
                { step: '04', title: 'Purchase & Export', desc: 'We handle purchase, export documentation (e.g. SARS export from SA), and arrange road or ocean freight from the country of origin.' },
                { step: '05', title: 'Clearance', desc: 'Import customs clearance, duty payment, regulatory compliance, and all import requirements at the destination port or border post.' },
                { step: '06', title: 'Delivery', desc: 'Road transport to your location, compliance inspections, registration assistance, and final handover with all documentation.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">{step}</div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm mb-2">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sourcing Markets Detail */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Global Sourcing Network</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Our Sourcing Markets</h2>
            <p className="text-gray-500 text-lg leading-relaxed">We operate across seven major vehicle sourcing markets spanning four continents, with South Africa as our primary hub for intra-African vehicle trade.</p>
          </div>

          <div className="space-y-4">
            {/* South Africa - Featured */}
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇿🇦</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A]">South Africa <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded ml-2">PRIMARY MARKET</span></h3>
                    <p className="text-sm text-gray-500">Africa&apos;s largest automotive market &bull; Right-hand drive &bull; 500K+ annual production</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-sm text-[#0B1F3A] mb-1">Brand New Dealerships</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Direct OEM pricing from BMW, Toyota, Ford, VW, Isuzu, Nissan, Hyundai, Kia, Mazda, Mercedes-Benz dealerships nationwide. Factory orders with custom specs available.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-sm text-[#0B1F3A] mb-1">Auction Houses</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">BSA Auctions (weekly), Aucor, SMD Auctioneers, and MyCars.co.za. Bank repossessions, trade-ins, and ex-lease vehicles at competitive prices. Live and online bidding.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-sm text-[#0B1F3A] mb-1">Fleet Disposal</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Corporate fleet sales from Sasol, Anglo American, MTN, DHL, Budget Rent a Car, Avis, and government departments. Late-model vehicles with full service histories.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-sm text-[#0B1F3A] mb-1">Commercial &amp; Industrial</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Heavy trucks from MAN, Scania, Volvo, DAF, Isuzu. Construction equipment from Caterpillar, Bell, Liebherr. Mining-spec vehicles and purpose-built solutions.</p>
                </div>
              </div>
            </div>

            {/* Other Markets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { country: '🇯🇵 Japan', details: 'Largest source of quality used vehicles globally. Auction houses: USS Tokyo, TAA Yokohama, CAA Chubu,CAA Osaka. Detailed auction grade sheets. Ideal for passenger cars, 4x4s, and hybrids.', categories: ['Auction', 'Used', 'Specialist'] },
                { country: '🇬🇧 United Kingdom', details: 'BCA, Manheim, and Aston Barclay auctions. Right-hand drive vehicles ideal for South Africa, Kenya, Tanzania, Zambia, and Zimbabwe. Strong pre-owned market with MOT history.', categories: ['Auction', 'Used', 'Fleet'] },
                { country: '🇦🇺 Australia', details: 'Manheim and Pickles auctions. Well-maintained vehicles in excellent condition. Right-hand drive compatible with most African markets. Strong for SUVs and utes.', categories: ['Auction', 'Used', 'Commercial'] },
                { country: '🇩🇪 Germany', details: 'European sourcing for luxury vehicles (BMW, Mercedes, Audi, Porsche), commercial trucks (MAN, Mercedes-Benz), and specialised equipment. Both left and right-hand drive.', categories: ['Brand New', 'Commercial', 'Specialist'] },
                { country: '🇦🇪 United Arab Emirates', details: 'Dubai and Abu Dhabi dealer networks for luxury and premium vehicles. Access to GCC-spec vehicles ideal for African climates. Strong for brand new SUVs and commercial vehicles.', categories: ['Brand New', 'Specialist'] },
                { country: '🇺🇸 United States', details: 'Copart and IAAI insurance auctions. Left-hand drive vehicles. Massive inventory of late-model vehicles. Cost-effective for parts, engines, and specialised equipment.', categories: ['Auction', 'Commercial', 'Parts'] },
              ].map(({ country, details, categories }) => (
                <div key={country} className="p-5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all">
                  <h4 className="font-bold text-[#0B1F3A] mb-1">{country}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{details}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map(cat => (
                      <span key={cat} className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-medium">{cat}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '5,000+', label: 'Vehicles Delivered' },
              { value: '7', label: 'Sourcing Countries' },
              { value: '25+', label: 'African Destinations' },
              { value: '2–6 wks', label: 'Delivery from SA' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-4 rounded-lg bg-emerald-50">
                <p className="text-2xl font-bold text-emerald-700">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle Types We Handle */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Vehicle Types We Handle</h2>
            <p className="text-gray-500 text-lg leading-relaxed">From compact city cars to 50-ton mining trucks, we source and deliver every type of vehicle across the full spectrum of categories.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { type: 'Passenger Cars', desc: 'Sedans, hatchbacks, SUVs, coupes, and convertibles from all major brands. Toyota, Volkswagen, Hyundai, Kia, Ford, BMW, Mercedes, and more.', icon: '🚗' },
              { type: 'SUVs & 4x4s', desc: 'Off-road and on-road SUVs built for African terrain. Toyota Hilux, Land Cruiser, Fortuner, Ford Ranger, Nissan Patrol, and more.', icon: '🚙' },
              { type: 'Light Commercial', desc: 'Bakkies, panel vans, minibuses, and delivery vehicles for business operations. Toyota HiAce, VW Caddy, Ford Transit, Isuzu KB.', icon: '🚐' },
              { type: 'Heavy Trucks', desc: 'Prime movers, flatbeds, tankers, tippers, and cement mixers. MAN, Scania, Volvo, DAF, Isuzu, Fuso, and Hino.', icon: '🚛' },
              { type: 'Buses & Coaches', desc: 'Minibuses, midi-buses, luxury coaches, and commuter buses for public transport and tourism operations across Africa.', icon: '🚌' },
              { type: 'Plant & Equipment', desc: 'Construction machinery, excavators, TLBs, graders, rollers, generators, forklifts, and agricultural tractors.', icon: '🏗️' },
              { type: 'Trailers', desc: 'Flatbed, skeletal, tanker, side-tipper, and lowbed trailers for heavy haulage and logistics operations.', icon: '🔗' },
              { type: 'Specialist', desc: 'Armoured vehicles, ambulances, fire engines, refrigerated trucks, water tankers, and custom-built vehicles.', icon: '⚙️' },
            ].map(({ type, desc, icon }) => (
              <div key={type} className="p-4 rounded-xl bg-white border border-gray-100">
                <span className="text-2xl mb-2 block">{icon}</span>
                <h4 className="font-bold text-[#0B1F3A] text-sm mb-1">{type}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Ready to Source Your Next Vehicle?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Whether it is a brand-new bakkie from a South African dealership, a fleet deal from corporate disposal, or a single car from a Japanese auction &mdash; we source, ship, clear, and deliver. Simple, transparent pricing with no hidden costs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Source a Vehicle <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Talk to Our Team</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
