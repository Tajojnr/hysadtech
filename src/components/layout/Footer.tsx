'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Sparkles, ExternalLink, ShieldCheck, Plane } from 'lucide-react';
import Logo from '@/components/Logo';
import { siteConfig } from '@/config/site';

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.121 6.341 6.341 0 0 0 1.482 9.07 6.33 6.33 0 0 0 7.822-.65 6.34 6.34 0 0 0 1.583-4.258V9.12a8.217 8.217 0 0 0 4.74 1.493V7.168a4.813 4.813 0 0 1-1.002-.482z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-yellow-500/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo className="h-16 w-16" />
            <p className="text-xs text-slate-400 leading-relaxed">
              Nigeria's premier hub for direct China factory smartphone pre-orders, Skycargo flight dispatch, and hands-on importation masterclasses.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> AG IMPORT &#127464;&#127475;&#10145;&#127475;&#127470;
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/shop" className="hover:text-yellow-400 transition-colors">Shop Pre-Orders</Link></li>
              <li><Link href="/price-list" className="hover:text-yellow-400 transition-colors">Daily Price List</Link></li>
              <li><Link href="/academy" className="hover:text-yellow-400 transition-colors">Importation Academy</Link></li>
              <li><Link href="/track" className="hover:text-yellow-400 transition-colors">Track Skycargo</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Hysad Tech</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Direct Support & Contacts */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-xs uppercase tracking-wider">Reach Us</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Kano / Abuja / Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-2">
                <Plane className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Guangzhou Skycargo Hub, China</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <a href={`tel:${siteConfig.contacts.primaryPhone}`} className="hover:text-white transition-colors">
                  {siteConfig.contacts.formattedPrimary}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <a href={`tel:${siteConfig.contacts.secondaryPhone}`} className="hover:text-white transition-colors">
                  {siteConfig.contacts.formattedSecondary}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <a href={`mailto:${siteConfig.contacts.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contacts.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Payment & Logistics Badges */}
          <div>
            <h4 className="font-extrabold text-white mb-4 text-xs uppercase tracking-wider">Accepted Gateways</h4>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
              <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center text-slate-300">Paystack</div>
              <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center text-slate-300">Flutterwave</div>
              <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center text-slate-300">Bank Transfer</div>
              <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center text-slate-300">USDT Crypto</div>
            </div>

            <div className="mt-4 p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-2 text-[11px] text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Skycargo Flight Dispatch Included</span>
            </div>
          </div>

        </div>

        {/* Bottom Social Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} {siteConfig.legalName}. All Rights Reserved.</p>
          
          <div className="flex items-center gap-5">
            <a
              href="https://www.tiktok.com/@hysadtech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <TikTokIcon /> @hysadtech (52.6K Followers)
            </a>
            <a
              href={`https://wa.me/${siteConfig.contacts.primaryPhone.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}