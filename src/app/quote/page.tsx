'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function QuotePage() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden">
        <Image
          src="/images/photography/v2/13-quote-hero.png"
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
            <span className="text-white font-medium">Get a Quote</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Request a Freight Quote</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Fill in your shipment details and our team will respond within 30 minutes with a competitive quote.</p>
        </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">

            {/* Quote Form */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
              <div className="space-y-6">
                {/* Shipment Type */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Shipment Type
                  </Label>
                  <RadioGroup defaultValue="import" className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="import" id="import" />
                      <Label htmlFor="import" className="text-sm font-normal text-gray-600 cursor-pointer">Import</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="export" id="export" />
                      <Label htmlFor="export" className="text-sm font-normal text-gray-600 cursor-pointer">Export</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Origin & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="origin" className="text-sm font-medium text-gray-700 mb-2 block">
                      Origin
                    </Label>
                    <Input id="origin" type="text" placeholder="City, Country" className="h-11" />
                  </div>
                  <div>
                    <Label htmlFor="destination" className="text-sm font-medium text-gray-700 mb-2 block">
                      Destination
                    </Label>
                    <Input id="destination" type="text" placeholder="City, Country" className="h-11" />
                  </div>
                </div>

                {/* Cargo Type */}
                <div>
                  <Label htmlFor="cargo-type" className="text-sm font-medium text-gray-700 mb-2 block">
                    Cargo Type
                  </Label>
                  <Select>
                    <SelectTrigger id="cargo-type" className="h-11">
                      <SelectValue placeholder="Select cargo type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="hazardous">Hazardous</SelectItem>
                      <SelectItem value="perishable">Perishable</SelectItem>
                      <SelectItem value="oversized">Oversized</SelectItem>
                      <SelectItem value="vehicle">Vehicle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Weight */}
                <div>
                  <Label htmlFor="weight" className="text-sm font-medium text-gray-700 mb-2 block">
                    Estimated Weight
                  </Label>
                  <div className="relative">
                    <Input id="weight" type="text" placeholder="e.g., 500" className="h-11 pr-12" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">kg</span>
                  </div>
                </div>

                {/* Dimensions */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Dimensions (L × W × H)
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="relative">
                      <Input type="text" placeholder="Length" className="h-11 pr-12" />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">cm</span>
                    </div>
                    <div className="relative">
                      <Input type="text" placeholder="Width" className="h-11 pr-12" />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">cm</span>
                    </div>
                    <div className="relative">
                      <Input type="text" placeholder="Height" className="h-11 pr-12" />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">cm</span>
                    </div>
                  </div>
                </div>

                {/* Transport Mode */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Transport Mode
                  </Label>
                  <RadioGroup defaultValue="sea" className="flex flex-wrap gap-4">
                    {['Air', 'Sea', 'Road', 'Rail', 'Multi-modal'].map((mode) => (
                      <div key={mode} className="flex items-center gap-2">
                        <RadioGroupItem value={mode.toLowerCase()} id={mode.toLowerCase()} />
                        <Label htmlFor={mode.toLowerCase()} className="text-sm font-normal text-gray-600 cursor-pointer">{mode}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullname" className="text-sm font-medium text-gray-700 mb-2 block">
                      Full Name
                    </Label>
                    <Input id="fullname" type="text" placeholder="John Doe" className="h-11" />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                      Company Name
                    </Label>
                    <Input id="company" type="text" placeholder="Company Ltd" className="h-11" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-11" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                      Phone
                    </Label>
                    <Input id="phone" type="tel" placeholder="+27 12 345 6789" className="h-11" />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <Label htmlFor="notes" className="text-sm font-medium text-gray-700 mb-2 block">
                    Additional Notes
                  </Label>
                  <Textarea id="notes" placeholder="Any special requirements or additional information..." rows={4} />
                </div>

                {/* Submit */}
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-12">
                  Submit Quote Request
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our{' '}
                  <Link href="#" className="text-emerald-600 hover:underline">Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="#" className="text-emerald-600 hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
