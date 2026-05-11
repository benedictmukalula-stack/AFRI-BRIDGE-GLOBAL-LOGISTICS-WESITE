'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  Truck,
  FileText,
  Receipt,
  Headphones,
  ArrowRight,
} from 'lucide-react';
import { useState } from 'react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const features = [
  {
    icon: Truck,
    title: 'Shipment Dashboard',
    description: 'Track and manage all your shipments in real-time',
  },
  {
    icon: FileText,
    title: 'Document Centre',
    description: 'Access customs documents, invoices and certificates',
  },
  {
    icon: Receipt,
    title: 'Invoices',
    description: 'View and download invoices, make payments',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Contact our operations team directly',
  },
];

export default function PortalPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SiteLayout>
      {/* Page Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/19-portal-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Client Portal</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Client Portal
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Access your shipments, documents, invoices, and support — all in one place.
          </p>
        </div>
      </div>

      {/* Login + Features */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Login Card */}
          <div className="max-w-md mx-auto mb-16">
            <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <Lock className="h-5 w-5 text-emerald-600" />
                </div>
                <h2 className="text-lg font-bold text-[#0B1F3A]">Sign In to Your Portal</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="portal-email" className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="portal-email"
                      type="email"
                      placeholder="you@company.com"
                      className="h-11 pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="portal-password" className="text-sm font-medium text-gray-700 mb-2 block">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="portal-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="h-11 pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-12">
                  Sign In
                </Button>

                <div className="text-center">
                  <Link href="#" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 text-center mt-6">
              Portal access is provided to registered clients. Contact us to get started.
            </p>
          </div>

          {/* Feature Preview Cards */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mb-8 text-center tracking-tight">
              Portal Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-gray-500 mb-4">
              Don&apos;t have an account?
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-semibold">
                Contact Us to Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
