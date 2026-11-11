'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Phone, 
  Minus, 
  Plus, 
  Sparkles, 
  Plane, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { Product } from '@/data/products';
import confetti from 'canvas-confetti';
import { siteConfig } from '@/config/site';

export function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    }
    try {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    } catch (err) {
      // Mobile fallback
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Hysad Tech! I am interested in pre-ordering the ${product.name} (₦${product.price.toLocaleString()}). Please confirm stock and delivery timeline.`
  );

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-slate-400 mb-6 flex items-center gap-2 font-medium">
          <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-yellow-400 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-yellow-400 font-bold truncate">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Column: Product Image Container */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 flex items-center justify-center aspect-square relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {product.badge && (
              <span className="absolute top-6 left-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 text-xs font-black px-3.5 py-1.5 rounded-full z-10 shadow-lg">
                {product.badge}
              </span>
            )}

            <div className="relative w-full h-full max-w-[360px] max-h-[360px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Right Column: Info & Actions */}
          <div className="space-y-6">
            
            {/* Header Title & Brand */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                <span>{product.brand}</span>
                <span>•</span>
                <span className="text-slate-400">{product.category}</span>
                <span>•</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Direct Guangzhou Sourced
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Price Tag & Savings Badge */}
            <div className="flex flex-wrap items-baseline gap-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <span className="text-3xl md:text-4xl font-black text-yellow-400 tracking-tight">
                ₦{product.price.toLocaleString()}
              </span>
              
              {product.originalPrice && (
                <>
                  <span className="text-base text-slate-500 line-through">
                    ₦{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2.5 py-1 rounded-full font-extrabold">
                    SAVE ₦{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Key Features List */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="font-extrabold text-xs uppercase text-slate-400 tracking-wider mb-2.5">
                  Key Highlights
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800/80">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0" />
                      <span className="truncate">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications Grid */}
            {product.specs && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-5">
                <h3 className="font-extrabold text-xs uppercase text-slate-400 tracking-wider mb-3">
                  Technical Specifications
                </h3>
                <dl className="grid grid-cols-2 gap-3 text-xs">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <dt className="text-[10px] text-slate-500 uppercase font-bold">{k}</dt>
                      <dd className="font-extrabold text-white mt-0.5">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Quantity Selector & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="flex items-center justify-between border border-slate-800 bg-slate-900 rounded-xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-black text-yellow-400 text-sm w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 transition-all text-sm active:scale-[0.99]"
              >
                <ShoppingBag className="w-5 h-5 text-slate-950" /> Add To Pre-Order Cart
              </button>
            </div>

            {/* Direct WhatsApp Ordering */}
            <a
              href={`https://wa.me/${siteConfig.contacts.primaryPhone.replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all text-xs shadow-lg shadow-emerald-600/20"
            >
              <Phone className="w-4 h-4" /> Order Directly on WhatsApp
            </a>

            {/* Shipping & Guarantee Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Unlocked &amp; Tested</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Plane className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Skycargo Flight Shipping</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}