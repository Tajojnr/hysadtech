import type { Metadata } from 'next';
import { ShopCatalog } from '@/components/shop/ShopCatalog';
import { Sparkles, ShieldCheck, Plane } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Direct China Phone Catalog & Pre-Orders | Hysad Tech',
  description: 'Browse Hysad Tech (AG Import) complete inventory of iPhones, Samsung Ultras, Google Pixels, AirPods, and Apple Watches. Direct China pre-orders with express Skycargo flight shipping.'
};

export default function ShopPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        
        {/* Header Section */}
        <div className="mb-8 md:mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            AG IMPORT CHINA PRE-ORDERS &amp; INSTANT STOCK
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quality Phones &amp; Direct Sourcing
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2 leading-relaxed flex items-center justify-center gap-1.5 flex-wrap">
            <span>100% Tested &amp; Unlocked</span>
            <span>•</span>
            <span className="text-cyan-400">IMEI Verified</span>
            <span>•</span>
            <span>Shipped Direct via Skycargo Air Freight</span>
          </p>
        </div>

        {/* Catalog Grid Component */}
        <ShopCatalog />

      </div>
    </div>
  );
}