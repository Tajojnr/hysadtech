'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCartStore } from '@/lib/cart-store';
import confetti from 'canvas-confetti';
import { siteConfig } from '@/config/site';

const BRANDS = ['All Devices', 'Apple', 'Samsung', 'Google', 'Accessory'];

export function FeaturedProducts() {
  const [activeBrand, setActiveBrand] = useState('All Devices');
  const { addItem } = useCartStore();

  const displayedProducts = activeBrand === 'All Devices' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.brand === activeBrand);

  const handleAdd = (p: typeof PRODUCTS[0]) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.image });
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    } catch (err) {
      // Fallback for low-spec mobile environments
    }
  };

  return (
    <section id="inventory" className="py-12 md:py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="container mx-auto px-3 sm:px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 md:mb-3">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            AG IMPORT CHINA PRE-ORDERS &amp; INSTANT STOCK
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Flagship Phone Catalog
          </h2>
          <p className="text-slate-300 mt-1 md:mt-2 text-xs sm:text-sm md:text-base px-2 leading-relaxed">
            All devices are 100% factory unlocked, IMEI verified, and backed by Skycargo air freight dispatch.
          </p>
        </div>

        {/* Brand Filter Tabs */}
        <div className="flex overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-1.5 md:gap-2 mb-6 md:mb-10 pb-2 sm:pb-0 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-3.5 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                activeBrand === brand
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 shadow-lg shadow-yellow-500/20 scale-105'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {brand} {brand === 'All Devices' ? `(${PRODUCTS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
          {displayedProducts.map((p) => (
            <div
              key={p.id}
              className="bg-slate-900 rounded-xl md:rounded-2xl border border-slate-800 overflow-hidden hover:border-yellow-500/50 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Container */}
                <Link href={`/shop/${p.slug}`} className="block relative aspect-square bg-slate-950/80 p-3 sm:p-4 md:p-6 border-b border-slate-800/80">
                  {p.badge && (
                    <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-yellow-500 text-slate-950 text-[9px] md:text-[10px] font-extrabold px-2 py-0.5 md:px-2.5 md:py-1 rounded-full z-10 shadow-md">
                      {p.badge}
                    </span>
                  )}
                  {p.stock <= 10 && (
                    <span className="absolute top-2 right-2 md:top-3 md:right-3 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 rounded-full z-10 hidden sm:inline-block">
                      {p.stock} units left
                    </span>
                  )}
                  <div className="relative w-full h-full">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="p-2.5 sm:p-4 md:p-5">
                  <div className="flex justify-between items-center text-[9px] md:text-[10px] text-slate-400 font-bold uppercase mb-1">
                    <span className="text-yellow-400">{p.brand}</span>
                    <span className="text-emerald-400 flex items-center gap-0.5 md:gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3" /> Unlocked
                    </span>
                  </div>

                  <Link href={`/shop/${p.slug}`}>
                    <h3 className="font-extrabold text-xs sm:text-sm md:text-base mt-0.5 mb-1 md:mb-2 line-clamp-2 min-h-[32px] sm:min-h-[40px] md:min-h-[44px] text-white hover:text-yellow-400 transition leading-snug">
                      {p.name}
                    </h3>
                  </Link>

                  <p className="text-[11px] md:text-xs text-slate-400 line-clamp-2 mb-2 md:mb-4 leading-relaxed hidden sm:block">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="p-2.5 sm:p-4 md:p-5 pt-0 border-t border-slate-800/80 mt-1 md:mt-2">
                <div className="flex items-center justify-between pt-2 md:pt-3">
                  <div>
                    <p className="text-xs sm:text-base md:text-lg font-black text-yellow-400 tracking-tight">
                      ₦{p.price.toLocaleString()}
                    </p>
                    {p.originalPrice && (
                      <p className="text-[9px] md:text-xs text-slate-500 line-through">
                        ₦{p.originalPrice.toLocaleString()}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => handleAdd(p)}
                    className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold px-2.5 sm:px-3 md:px-4 py-1.5 md:py-2.5 rounded-lg md:rounded-xl flex items-center gap-1 md:gap-2 text-[11px] md:text-xs transition-all active:scale-95 shadow-md shadow-yellow-500/20"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-950" />
                    <span className="hidden sm:inline">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale Bulk Order CTA */}
        <div className="mt-8 md:mt-12 bg-gradient-to-r from-slate-900 via-yellow-950/30 to-slate-900 text-white rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border border-yellow-500/30 text-center md:text-left shadow-2xl">
          <div>
            <span className="text-yellow-400 font-bold text-[10px] md:text-xs uppercase tracking-wider">Bulk Buyers &amp; Store Resellers</span>
            <h3 className="text-lg md:text-2xl font-extrabold mt-1">Need 5+ Units For Wholesale Discount?</h3>
            <p className="text-slate-300 text-xs md:text-sm mt-1">Get factory wholesale price lists and fast Skycargo flight clearance directly to your location.</p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contacts.primaryPhone.replace('+', '')}?text=${encodeURIComponent("Hello Hysad Tech! I am interested in wholesale bulk phone pricing.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-5 md:px-6 py-3 md:py-3.5 rounded-xl whitespace-nowrap text-xs md:text-sm flex items-center justify-center gap-2 w-full md:w-auto shadow-lg shadow-emerald-600/20 transition-all"
          >
            <PhoneCall className="w-4 h-4" /> Request Bulk Wholesale Quote
          </a>
        </div>

      </div>
    </section>
  );
}