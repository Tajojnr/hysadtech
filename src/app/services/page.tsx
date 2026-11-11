import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Smartphone, 
  Plane, 
  ShoppingBag, 
  GraduationCap, 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  Sparkles,
  PhoneCall,
  CheckCircle2,
  PackageCheck
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Import Services & Skycargo Logistics | Hysad Tech',
  description: 'Explore Hysad Tech (AG Import) services: Direct China smartphone pre-orders, Skycargo air/sea freight, Pinduoduo sourcing, and Online Importation Masterclasses.'
};

const SERVICES = [
  {
    icon: Smartphone,
    color: 'yellow',
    title: 'Direct Smartphone Pre-Orders',
    desc: 'Pre-order original, factory-unlocked iPhones, Samsung Ultras, and Google Pixels directly from Guangzhou sourcing channels at wholesale factory rates.'
  },
  {
    icon: Plane,
    color: 'cyan',
    title: 'Skycargo Express Freight',
    desc: '3–7 days express air freight and 25–35 days sea freight cargo shipping from China to Nigeria with real-time online package tracking.'
  },
  {
    icon: ShoppingBag,
    color: 'amber',
    title: 'Pinduoduo & 1688 Sourcing',
    desc: 'We assist Nigerian buyers with Chinese supplier verification, Yuan/RMB currency exchange payment, and procurement on Pinduoduo, 1688, and Taobao.'
  },
  {
    icon: GraduationCap,
    color: 'emerald',
    title: 'Online Importation Academy',
    desc: 'Practical, step-by-step masterclass taught in Hausa and English showing you how to source, pay, and ship products from China profitably.'
  },
  {
    icon: ShieldCheck,
    color: 'rose',
    title: 'Customs Clearance & Inspection',
    desc: 'Hassle-free customs handling and thorough IMEI quality testing at our Guangzhou warehouse before departure to ensure zero defective devices.'
  },
  {
    icon: Truck,
    color: 'indigo',
    title: 'Nationwide Doorstep Delivery',
    desc: 'Safe, insured logistics distribution across all 36 states in Nigeria (Kano, Lagos, Abuja, Port Harcourt, Maiduguri, Sokoto, etc.).'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-yellow-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-center">
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            AG IMPORT SERVICES &#127464;&#127475;&#10145;&#127475;&#127470;
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            End-to-End <span className="text-yellow-400">China Importation</span> &amp; Logistics
          </h1>

          <p className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            From factory procurement in Guangzhou to express Skycargo air freight and doorstep delivery across Nigeria — we make importing effortless.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-yellow-500/20 inline-flex items-center gap-2 text-sm"
            >
              Order Phones Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/academy"
              className="bg-slate-900 border border-slate-800 text-slate-100 font-bold px-6 py-3.5 rounded-xl hover:bg-slate-800 transition-all inline-flex items-center gap-2 text-sm"
            >
              <GraduationCap className="w-4 h-4 text-cyan-400" /> Learn Importation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 p-7 rounded-2xl hover:border-yellow-500/50 transition-all group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="w-13 h-13 w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center justify-center text-yellow-400 mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2.5">{s.title}</h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-yellow-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Verified Service
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  Inquire &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE HYSAD TECH */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">The AG Import Advantage</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Why Thousands Trust Hysad Tech</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <p className="text-3xl font-black text-yellow-400 mb-2">52.6K+</p>
              <p className="text-xs text-slate-300 font-bold uppercase mb-1">TikTok Community</p>
              <p className="text-[11px] text-slate-500">219K+ likes &amp; customer proof clips</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <p className="text-3xl font-black text-cyan-400 mb-2">3–7 Days</p>
              <p className="text-xs text-slate-300 font-bold uppercase mb-1">Fast Air Cargo</p>
              <p className="text-[11px] text-slate-500">Direct flight dispatch from Guangzhou</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <p className="text-3xl font-black text-amber-400 mb-2">100%</p>
              <p className="text-xs text-slate-300 font-bold uppercase mb-1">IMEI Verified</p>
              <p className="text-[11px] text-slate-500">Strict quality testing before shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 container mx-auto px-4 max-w-4xl text-center">
        <div className="bg-gradient-to-r from-slate-900 via-yellow-950/40 to-slate-900 border border-yellow-500/30 p-8 md:p-12 rounded-3xl shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Ready to Start Importing or Pre-Ordering?</h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-lg mx-auto mb-8">
            Contact our Guangzhou &amp; Nigeria support desk on WhatsApp for instant pricing and shipping rates.
          </p>

          <a
            href={`https://wa.me/${siteConfig.contacts.primaryPhone.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-8 py-4 rounded-xl transition-all text-sm shadow-lg shadow-emerald-600/20"
          >
            <PhoneCall className="w-4 h-4" /> Chat With Hysad Tech on WhatsApp ({siteConfig.contacts.formattedPrimary})
          </a>
        </div>
      </section>

    </div>
  );
}