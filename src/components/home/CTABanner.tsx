import Link from 'next/link';
import { MessageSquare, ShoppingBag, Sparkles, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-yellow-500/20">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        
        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          DIRECT CHINA PRE-ORDERS &amp; SKYCARGO
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
          Ready To Order Your Phone Direct From China?
        </h2>

        <p className="text-slate-300 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          Join over 52,000+ followers on TikTok who rely on Hysad Tech for quality smartphones, fast Skycargo air freight, and transparent pre-orders.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/shop"
            className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-yellow-500/20 flex items-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" /> Shop Pre-Orders Now
          </Link>

          <a
            href={`https://wa.me/${siteConfig.contacts.primaryPhone.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" /> WhatsApp Desk ({siteConfig.contacts.formattedPrimary})
          </a>
        </div>

      </div>
    </section>
  );
}