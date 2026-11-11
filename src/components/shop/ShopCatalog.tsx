'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Filter, CheckCircle2, Search, Sparkles } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCartStore } from '@/lib/cart-store';
import confetti from 'canvas-confetti';

const BRANDS = ['All', 'Apple', 'Samsung', 'Google', 'Oppo', 'Accessory'];

export function ShopCatalog() {
  const [filterBrand, setFilterBrand] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const { addItem } = useCartStore();

  const filtered = useMemo(() => {
    let list = PRODUCTS;

    if (filterBrand !== 'All') {
      list = list.filter((p) => p.brand === filterBrand);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }

    if (sortBy === 'low-high') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'high-low') list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [filterBrand, sortBy, searchQuery]);

  const handleAdd = (p: typeof PRODUCTS[0]) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.image });
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    } catch (err) {
      // Fallback for mobile
    }
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden text-slate-100">
      
      {/* Header Search & Control Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 md:p-4 mb-6 space-y-3 shadow-xl">
        <div className="flex flex-col sm:flex-row gap-2.5 sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search iPhones, Samsung, Pixel..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
            />
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2">
            <span className="text-[11px] text-slate-400 font-semibold sm:hidden">
              {filtered.length} items
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
            >
              <option value="featured">Sort: Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Scrollable Brand Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-1 -mx-1 px-1">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1 hidden sm:block" />
          {BRANDS.map((b) => (
            <button
              key={b}
              onClick={() => setFilterBrand(b)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all shrink-0 ${
                filterBrand === b
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 shadow-md shadow-yellow-500/20'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {b} {b === 'All' ? `(${PRODUCTS.length})` : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-yellow-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              <Link href={`/shop/${p.slug}`} className="block relative aspect-square bg-slate-950/80 p-2 sm:p-4 border-b border-slate-800/80">
                {p.badge && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-md z-10 shadow-md">
                    {p.badge}
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

              <div className="p-3 sm:p-4">
                <div className="flex justify-between items-center text-[9px] text-slate-400 font-extrabold uppercase mb-1">
                  <span className="text-yellow-400">{p.brand}</span>
                  <span className="text-emerald-400 flex items-center gap-0.5 font-bold">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Unlocked
                  </span>
                </div>

                <Link href={`/shop/${p.slug}`}>
                  <h3 className="font-extrabold text-xs sm:text-sm text-white line-clamp-2 min-h-[32px] sm:min-h-[40px] hover:text-yellow-400 transition leading-snug">
                    {p.name}
                  </h3>
                </Link>
              </div>
            </div>

            <div className="p-3 sm:p-4 pt-0 border-t border-slate-800/80 mt-1">
              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-xs sm:text-base font-black text-yellow-400 tracking-tight">
                    ₦{p.price.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => handleAdd(p)}
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-[11px] sm:text-xs flex items-center gap-1 active:scale-95 transition-all shadow-md shadow-yellow-500/20"
                >
                  <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-950" />
                  <span className="hidden sm:inline">Add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}