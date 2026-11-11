import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Truck, 
  GraduationCap, 
  Globe2, 
  CheckCircle2, 
  Users, 
  Heart, 
  ArrowRight, 
  Sparkles,
  PhoneCall,
  PackageCheck
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Hysad Tech | Direct China Importation & Quality Phones',
  description: 'Learn how Hysad Tech (AG Import) connects Nigerian buyers directly to China factories via Skycargo logistics, pre-orders, and hands-on importation training.'
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-yellow-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            AG IMPORT &#127464;&#127475;&#10145;&#127475;&#127470;
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Connecting Nigeria Directly To <span className="text-yellow-400">China Supply Chains</span>
          </h1>
          
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Hysad Tech (AG Import) is Nigeria's premier hub for direct factory smartphone pre-orders, express Skycargo air/sea freight, and practical importation masterclasses taught in Hausa and English.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/shop" 
              className="bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-yellow-500/20 inline-flex items-center gap-2 text-sm"
            >
              Browse Phone Catalog <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/academy" 
              className="bg-slate-900 border border-slate-700 text-slate-100 font-bold px-6 py-3.5 rounded-xl hover:bg-slate-800 transition-all inline-flex items-center gap-2 text-sm"
            >
              <GraduationCap className="w-4 h-4 text-cyan-400" /> Join Import Academy
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS & SOCIAL PROOF */}
      <section className="py-12 bg-slate-900/60 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-3xl font-extrabold text-yellow-400 mb-1 flex items-center justify-center gap-2">
                <Users className="w-6 h-6 text-cyan-400" /> 52.6K+
              </div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">TikTok Followers</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-3xl font-extrabold text-yellow-400 mb-1 flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-rose-500" /> 219K+
              </div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">TikTok Likes</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-3xl font-extrabold text-yellow-400 mb-1 flex items-center justify-center gap-2">
                <PackageCheck className="w-6 h-6 text-emerald-400" /> 100%
              </div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Tested & Verified</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="text-3xl font-extrabold text-yellow-400 mb-1 flex items-center justify-center gap-2">
                <Globe2 className="w-6 h-6 text-amber-400" /> 3 - 7 Days
              </div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Express Air Freight</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE BUSINESS PILLARS */}
      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 font-semibold text-xs uppercase tracking-wider">What Sets Us Apart</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Built On Transparency & Direct Sourcing</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-slate-900/90 border border-slate-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center justify-center text-yellow-400 mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct China Freight & Skycargo</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                We bridge the gap between Guangzhou manufacturing hubs and Nigerian consumers with direct express air and sea cargo handling.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400" /> Skycargo Warehouse Inspection
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400" /> Real-Time Tracking Updates
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-slate-900/90 border border-slate-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Original Gadgets & Pre-Orders</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Every iPhone, Samsung, and Google Pixel device is thoroughly tested, IMEI-checked, and backed by our direct replacement promise.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Factory Fresh Unlocked Stock
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Pre-order Discount Advantage
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-slate-900/90 border border-slate-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Online Importation Academy</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                We empower entrepreneurs across Nigeria by teaching step-by-step China importation (Pinduoduo, 1688, supplier verification) in Hausa & English.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Pinduoduo & 1688 Masterclass
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Direct Supplier Contacts List
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. CONTACT & DIRECT SUPPORT */}
      <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have Questions or Want to Pre-Order?</h2>
          <p className="text-slate-300 text-sm mb-8">
            Connect directly with the official Hysad Tech team on WhatsApp or phone for immediate pricing and cargo inquiries.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`https://wa.me/${siteConfig.contacts.primaryPhone.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 text-sm shadow-lg shadow-emerald-600/20"
            >
              <PhoneCall className="w-4 h-4" /> WhatsApp Line 1 ({siteConfig.contacts.formattedPrimary})
            </a>
            <a 
              href={`https://wa.me/${siteConfig.contacts.secondaryPhone.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-yellow-400 border border-yellow-500/30 font-bold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 text-sm"
            >
              <PhoneCall className="w-4 h-4" /> WhatsApp Line 2 ({siteConfig.contacts.formattedSecondary})
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}