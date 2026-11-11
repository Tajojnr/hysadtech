import type { Metadata } from 'next';
import Link from 'next/link';
import { HomeHero } from '@/components/home/HomeHero';
import SocialProofBanner from '@/components/SocialProofBanner';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { HowItWorks } from '@/components/home/HowItWorks';
import { BrandStory } from '@/components/home/BrandStory';
import { CTABanner } from '@/components/home/CTABanner';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  PhoneCall, 
  Plane, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Hysad Tech | Quality Phones & Direct China Importation Hub',
  description: 'Nigeria\'s trusted hub for direct China iPhone pre-orders, Skycargo flight shipping, wholesale smartphones, and Online Importation Masterclasses.',
};

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* 1. HERO BANNER */}
      <HomeHero />

      {/* 2. VERIFIED TIKTOK SOCIAL PROOF (52.6K FOLLOWERS / 219K LIKES) */}
      <SocialProofBanner />

      {/* 3. FEATURED PHONES & PRE-ORDERS CATALOG */}
      <FeaturedProducts />

      {/* 4. ONLINE IMPORTATION CLASS PROMO (HAUSA & ENGLISH) */}
      <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-y border-yellow-500/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-slate-900/90 border border-yellow-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            
            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  AG IMPORT ACADEMY (ENGLISH &amp; HAUSA)
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Learn How To Import Direct From China Yourself!
                </h2>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  Want to start your own phone or merchandise importation business? Join our viral Online Importation Class where we teach you step-by-step Pinduoduo, 1688, supplier verification, and Skycargo shipping.
                </p>

                <ul className="space-y-2.5 text-xs md:text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>How to buy on Pinduoduo &amp; 1688 with low RMB rates</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Verified Chinese supplier contact list &amp; exchange agents</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Skycargo express air cargo setup (China to Nigeria)</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/academy"
                    className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-yellow-500/20 inline-flex items-center gap-2"
                  >
                    Enroll In Import Class <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/price-list"
                    className="bg-slate-950 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold px-6 py-3.5 rounded-xl text-sm transition-all inline-flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-cyan-400" /> View Daily Price List
                  </Link>
                </div>
              </div>

              {/* Promo Graphic Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 text-center shadow-xl">
                <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="font-extrabold text-white text-xl">Next Masterclass Session</h3>
                <p className="text-xs text-slate-400">
                  Interactive Telegram &amp; WhatsApp Video Class with Lifetime Support Group Access.
                </p>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-left space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Class Language:</span>
                    <span className="text-yellow-400 font-bold">English &amp; Hausa</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Duration:</span>
                    <span className="text-white font-bold">Practical 3-Day Intensive</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Target Audience:</span>
                    <span className="text-cyan-400 font-bold">Entrepreneurs &amp; Resellers</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. SKYCARGO & DIRECT IMPORTATION HOW IT WORKS */}
      <HowItWorks />

      {/* 6. BRAND STORY & GUANGZHOU HUB */}
      <BrandStory />

      {/* 7. CALL TO ACTION / WHATSAPP PRE-ORDER BANNER */}
      <CTABanner />

    </div>
  );
}