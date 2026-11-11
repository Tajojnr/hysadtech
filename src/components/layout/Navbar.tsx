'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Phone, 
  Sparkles, 
  GraduationCap, 
  FileText, 
  PackageSearch 
} from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import Logo from '@/components/Logo';
import { siteConfig } from '@/config/site';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Price List', href: '/price-list', badge: 'Daily' },
  { name: 'Academy', href: '/academy', badge: 'Class' },
  { name: 'Track Order', href: '/track' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { toggleCart, totalItems } = useCartStore();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Handle scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ─── Slim Top Announcement Bar (Desktop) ─── */}
      <div className="hidden md:block bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-200 border-b border-yellow-500/20 text-[11px] py-1.5 px-4">
        <div className="container mx-auto flex justify-between items-center max-w-6xl">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${siteConfig.contacts.primaryPhone}`} 
              className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-yellow-400" /> 
              <span>Line 1: {siteConfig.contacts.formattedPrimary}</span>
            </a>
            <a 
              href={`tel:${siteConfig.contacts.secondaryPhone}`} 
              className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-yellow-400" /> 
              <span>Line 2: {siteConfig.contacts.formattedSecondary}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 font-semibold tracking-wide text-slate-300">
            <span className="flex items-center gap-1 text-cyan-400">
              <Sparkles className="w-3 h-3 text-yellow-400" />
              AG IMPORT &#127464;&#127475;&#10145;&#127475;&#127470;
            </span>
            <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-2 py-0.5 rounded-full text-[10px] font-bold">
              VERIFIED BUSINESS
            </span>
          </div>
        </div>
      </div>

      {/* ─── Main Header Navigation ─── */}
      <header
        className={`sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md transition-all duration-300 border-b ${
          scrolled ? 'border-yellow-500/30 shadow-2xl shadow-black' : 'border-slate-800'
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl h-16 md:h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <Logo className="h-12 w-12 md:h-14 md:w-14" />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all relative flex items-center gap-1.5 ${
                    active
                      ? 'text-slate-950 bg-yellow-500 shadow-md shadow-yellow-500/20'
                      : 'text-slate-300 hover:text-yellow-400 hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && !active && (
                    <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[9px] font-extrabold px-1.5 py-0.2 rounded-md">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* Quick Track Icon */}
            <Link
              href="/track"
              className="hidden sm:flex p-2.5 text-slate-300 hover:text-yellow-400 hover:bg-slate-900 rounded-xl transition-all border border-transparent hover:border-slate-800"
              title="Track Cargo"
            >
              <PackageSearch className="w-5 h-5" />
            </Link>

            {/* Shopping Cart Trigger */}
            <button
              onClick={toggleCart}
              className="relative p-2.5 bg-slate-900 border border-slate-800 hover:border-yellow-500/50 text-slate-200 hover:text-yellow-400 rounded-xl transition-all shadow-md"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems() > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 text-[10px] font-black min-w-[18px] h-4 px-1 rounded-full flex items-center justify-center leading-none shadow-lg">
                  {totalItems() > 9 ? '9+' : totalItems()}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Drawer Trigger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2.5 bg-slate-900 border border-slate-800 text-slate-200 hover:text-yellow-400 rounded-xl transition-all"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* ─── Mobile Full-Screen Full-Featured Navigation Drawer ─── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setMobileOpen(false)}
          />

          {/* Sliding Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-[min(100%,320px)] bg-slate-950 border-l border-yellow-500/30 shadow-2xl flex flex-col animate-in slide-in-from-right duration-200 text-slate-100">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-slate-800">
              <Logo className="h-11 w-11" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links List */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
                      active
                        ? 'bg-yellow-500 text-slate-950 font-black shadow-lg shadow-yellow-500/20'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-yellow-400'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.href === '/academy' && <GraduationCap className="w-4 h-4 text-cyan-400" />}
                      {link.href === '/price-list' && <FileText className="w-4 h-4 text-amber-400" />}
                      {link.name}
                    </span>
                    {link.badge && !active && (
                      <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] px-2 py-0.5 rounded-md font-bold">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Footer Actions */}
            <div className="border-t border-slate-800 p-5 space-y-3 bg-slate-900/60">
              <a
                href={`https://wa.me/${siteConfig.contacts.primaryPhone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 rounded-xl text-xs transition-all shadow-lg shadow-emerald-600/20"
              >
                <Phone className="w-4 h-4" /> WhatsApp Desk ({siteConfig.contacts.formattedPrimary})
              </a>

              <div className="text-center text-[11px] text-slate-400 space-y-1">
                <p>Guangzhou Skycargo &amp; Nigeria Distribution</p>
                <p className="text-yellow-400 font-bold">@hysadtech (52.6K Followers)</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}