'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageSquare, Headphones, Building2, Globe2 } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactDetails = [
  { icon: MapPin, label: 'Afri-Bridge House, West Street, Sandton, Johannesburg, 2196, South Africa' },
  { icon: Phone, label: '+27 11 568 6712', href: 'tel:+27115686712' },
  { icon: Phone, label: '+27 83 391 0863 (WhatsApp)', href: 'https://wa.me/27833910863' },
  { icon: Mail, label: 'info@afribridge.co.za', href: 'mailto:info@afribridge.co.za' },
];

const officeHours = [
  'Monday – Friday: 08:00 – 17:00',
  'Saturday: 09:00 – 13:00',
  'Sunday & Public Holidays: Closed',
];

const regionalOffices = [
  { city: 'Lagos', country: 'Nigeria', focus: 'West Africa Hub' },
  { city: 'Nairobi', country: 'Kenya', focus: 'East Africa Hub' },
  { city: 'Accra', country: 'Ghana', focus: 'West Africa Operations' },
  { city: 'Lubumbashi', country: 'DRC', focus: 'Mining Logistics' },
  { city: 'Maputo', country: 'Mozambique', focus: 'Port & Corridor Ops' },
  { city: 'Windhoek', country: 'Namibia', focus: 'Southern Corridor' },
];

export default function ContactPage() {
  return (
    <SiteLayout>
      {/* ============================================================ */}
      {/* Hero — Corporate Office Background                            */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden">
        <Image
          src="/images/photography/v2/10-contact-hero.png"
          alt=""
          width={1672}
          height={941}
          priority
          className="w-full h-auto brightness-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#0B1F3A]/55" />
        <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Contact</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Contact Afri-Bridge
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Have a question, need a quote, or want to explore how Afri-Bridge can streamline your supply chain?
              Our team is ready to help you move goods across Africa with confidence.
            </p>
          </div>
          {/* Quick contact pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="tel:+27115686712" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2.5 rounded-full hover:bg-white/20 transition-colors">
              <Phone className="h-4 w-4" />
              Call Us
            </a>
            <a href="https://wa.me/27833910863" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2.5 rounded-full hover:bg-white/20 transition-colors">
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
            <a href="mailto:info@afribridge.co.za" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2.5 rounded-full hover:bg-white/20 transition-colors">
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Main Content — Contact Details + Form                         */}
      {/* ============================================================ */}
      <div className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Column — Contact Details */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#0B1F3A] mb-2">Get in Touch</h2>
                <p className="text-sm text-gray-500 mb-6">Reach our Sandton headquarters or connect with a regional office near you.</p>

                <div className="space-y-4 mb-8">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-emerald-600" />
                        </div>
                        <span className="text-sm text-gray-600 leading-relaxed">{item.label}</span>
                      </div>
                    );

                    if ('href' in item && item.href) {
                      return (
                        <a key={item.label} href={item.href} className="block hover:opacity-80 transition-opacity">
                          {content}
                        </a>
                      );
                    }
                    return <div key={item.label}>{content}</div>;
                  })}
                </div>

                {/* Office Hours */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-sm font-bold text-[#0B1F3A]">Office Hours</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {officeHours.map((hours) => (
                      <li key={hours} className="text-sm text-gray-500">{hours}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Team Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[3/4] max-h-[420px]">
                  <Image
                    src="/images/photography/contact-operations-portrait.png"
                    alt="Afri-Bridge logistics operations specialist at the Sandton headquarters command center"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/50 via-[#0B1F3A]/5 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Operations</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white text-lg font-semibold mb-1">Your Logistics Team</p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Dedicated specialists ready to assist with customs clearance,
                      freight booking, shipment tracking, and trade advisory across 15+ African markets.
                    </p>
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/15">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-xs text-gray-300">Mon–Fri 08:00–17:00</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-xs text-gray-300">Sandton HQ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Offices */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Globe2 className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-[#0B1F3A]">Regional Offices</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {regionalOffices.map(({ city, country, focus }) => (
                    <div key={city} className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-semibold text-[#0B1F3A]">{city}</p>
                      <p className="text-xs text-gray-500">{country}</p>
                      <p className="text-xs text-emerald-600 mt-1">{focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Contact Form */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm h-fit">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                  <Headphones className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#0B1F3A]">Send us a Message</h2>
                  <p className="text-sm text-gray-500">We typically respond within 2 business hours.</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-sm font-medium text-gray-700 mb-2 block">
                      Full Name <span className="text-red-400">*</span>
                    </Label>
                    <Input id="contact-name" type="text" placeholder="John Doe" className="h-11" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="text-sm font-medium text-gray-700 mb-2 block">
                      Email <span className="text-red-400">*</span>
                    </Label>
                    <Input id="contact-email" type="email" placeholder="john@example.com" className="h-11" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-phone" className="text-sm font-medium text-gray-700 mb-2 block">
                      Phone
                    </Label>
                    <Input id="contact-phone" type="tel" placeholder="+27 12 345 6789" className="h-11" />
                  </div>
                  <div>
                    <Label htmlFor="contact-company" className="text-sm font-medium text-gray-700 mb-2 block">
                      Company
                    </Label>
                    <Input id="contact-company" type="text" placeholder="Company Ltd" className="h-11" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-subject" className="text-sm font-medium text-gray-700 mb-2 block">
                    Subject <span className="text-red-400">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger id="contact-subject" className="h-11">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Enquiry</SelectItem>
                      <SelectItem value="quote">Quote Request</SelectItem>
                      <SelectItem value="tracking">Shipment Tracking</SelectItem>
                      <SelectItem value="customs">Customs Clearance</SelectItem>
                      <SelectItem value="freight">Freight Services</SelectItem>
                      <SelectItem value="academy">Afri-Bridge Academy</SelectItem>
                      <SelectItem value="atlas">ATLAS Platform</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="contact-message" className="text-sm font-medium text-gray-700 mb-2 block">
                    Message <span className="text-red-400">*</span>
                  </Label>
                  <Textarea id="contact-message" placeholder="Tell us how we can help you — include your origin, destination, cargo type, and any specific requirements..." rows={5} />
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-12">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this form you agree to our privacy policy. Your data is handled securely and will never be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Why Contact Us                                                */}
      {/* ============================================================ */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mb-3 tracking-tight">
              How Can We Help?
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Whether you need a quick customs clearance quote or are planning a complex multi-country supply chain, our specialists are here to assist.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe2,
                title: 'Customs & Clearance',
                description: 'Fast, compliant customs brokerage across 15+ African markets. From tariff classification to duty optimisation.',
              },
              {
                icon: ArrowRight,
                title: 'Freight Solutions',
                description: 'Air, ocean, road, and rail freight across Africa and beyond. Single-source logistics for your entire supply chain.',
              },
              {
                icon: Building2,
                title: 'Corporate & Mining',
                description: 'Dedicated project cargo, mining logistics, and oil & gas supply chain solutions for Africa\'s industrial sector.',
              },
              {
                icon: Headphones,
                title: 'Training & Technology',
                description: 'Professional development through the Afri-Bridge Academy and real-time trade intelligence via ATLAS.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* CTA — Get Started                                             */}
      {/* ============================================================ */}
      <div className="bg-[#0B1F3A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Move Your Goods Across Africa?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Join over 2,000 businesses that trust Afri-Bridge for reliable, transparent, and cost-effective logistics solutions. Get a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/tracking">
              <Button
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12"
              >
                Track a Shipment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
