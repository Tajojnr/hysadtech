import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Globe, 
  Users, 
  CheckCircle2, 
  Sparkles,
  GraduationCap,
  Truck,
  PhoneCall
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Hysad Tech | WhatsApp, Pre-Orders & Skycargo Logistics',
  description: 'Reach Hysad Tech (AG Import) via WhatsApp, phone, or direct message for iPhone pre-orders, Skycargo tracking, and Importation Masterclasses.'
};

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 border-b border-yellow-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            24/7 SUPPORT &amp; PRE-ORDERS
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get In Touch With <span className="text-yellow-400">Hysad Tech</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto">
            We reply within minutes on WhatsApp for phone pre-orders, Skycargo flight updates, and Importation Class registrations.
          </p>
        </div>
      </section>

      {/* 2. DIRECT CONTACT CARDS */}
      <section className="py-12 container mx-auto px-4 max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* WhatsApp Line 1 */}
          <a 
            href={`https://wa.me/${siteConfig.contacts.primaryPhone.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-emerald-500/30 hover:border-emerald-500 p-6 rounded-2xl transition-all group shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">WhatsApp Line 1</h3>
              <p className="text-xs text-slate-400 mb-2">Direct Phone &amp; Pre-Orders</p>
              <p className="text-sm font-extrabold text-emerald-400">{siteConfig.contacts.formattedPrimary}</p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-400 mt-4 flex items-center gap-1">
              Tap to chat on WhatsApp &rarr;
            </span>
          </a>

          {/* WhatsApp Line 2 */}
          <a 
            href={`https://wa.me/${siteConfig.contacts.secondaryPhone.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-yellow-500/30 hover:border-yellow-500 p-6 rounded-2xl transition-all group shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">WhatsApp Line 2</h3>
              <p className="text-xs text-slate-400 mb-2">Skycargo &amp; Class Enrollment</p>
              <p className="text-sm font-extrabold text-yellow-400">{siteConfig.contacts.formattedSecondary}</p>
            </div>
            <span className="text-[11px] font-semibold text-yellow-400 mt-4 flex items-center gap-1">
              Tap to chat on WhatsApp &rarr;
            </span>
          </a>

          {/* TikTok Account */}
          <a 
            href="https://www.tiktok.com/@hysadtech"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-cyan-500/30 hover:border-cyan-500 p-6 rounded-2xl transition-all group shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">Official TikTok</h3>
              <p className="text-xs text-slate-400 mb-2">@hysadtech (52.6K Followers)</p>
              <p className="text-sm font-extrabold text-cyan-400">219K+ Likes &amp; Proof</p>
            </div>
            <span className="text-[11px] font-semibold text-cyan-400 mt-4 flex items-center gap-1">
              Visit TikTok Channel &rarr;
            </span>
          </a>

          {/* Global Sourcing Hubs */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center text-amber-400 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">Global Hubs</h3>
              <p className="text-xs text-slate-300 mt-2 font-medium">
                🇳🇬 Kano / Abuja / Lagos, Nigeria
              </p>
              <p className="text-xs text-slate-400 mt-1">
                🇨🇳 Guangzhou Skycargo Logistics, China
              </p>
            </div>
            <span className="text-[11px] text-slate-500 mt-4 font-semibold">Verified Import Network</span>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE CONTACT & INQUIRY FORM */}
      <section className="py-12 container mx-auto px-4 max-w-3xl">
        <div className="bg-slate-900 border border-slate-800 p-6 md:p-10 rounded-3xl shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Send Us A Message</h2>
            <p className="text-slate-400 text-xs md:text-sm">
              Fill out the form below and our customer support team will get back to you immediately.
            </p>
          </div>

          <form 
            action="https://formspree.io/f/placeholder" 
            method="POST"
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Aminu Bello"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Phone Number (+234) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="080 1234 5678"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Inquiry Topic *
                </label>
                <select
                  name="topic"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-100 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                >
                  <option value="iPhone Pre-Order">iPhone / Phone Pre-Order</option>
                  <option value="Skycargo Shipping">Skycargo Flight &amp; Cargo Tracking</option>
                  <option value="Import Academy Class">Online Importation Masterclass</option>
                  <option value="Wholesale Inquiry">Wholesale Bulk Deal</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                Your Message / Device Model *
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Specify the phone model, storage size, or importation query..."
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 transition-all active:scale-[0.99]"
            >
              <Send className="w-4 h-4 text-slate-950" /> Submit Message To Hysad Tech
            </button>
          </form>

        </div>
      </section>

    </div>
  );
}