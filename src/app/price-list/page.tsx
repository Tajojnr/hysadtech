import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MessageCircle, Tag } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

export const metadata: Metadata = {
  title: 'Phone Price List | Hysad Tech',
  description:
    'Browse current listed smartphone and accessory prices from Hysad Tech. Confirm stock and final pricing with the team before ordering.',
};

export default function PriceListPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 md:py-16">
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow-400">
            <Tag className="h-3.5 w-3.5" />
            Product price list
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Phones and accessories
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Prices are shown in Nigerian naira. Stock and prices can change;
            please confirm details with our team before placing an order.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
          <div className="hidden grid-cols-[minmax(0,1fr)_8rem_9rem_8rem] gap-4 border-b border-slate-800 bg-slate-900/80 px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:grid">
            <span>Product</span>
            <span>Condition</span>
            <span>Availability</span>
            <span className="text-right">Price</span>
          </div>

          <ul className="divide-y divide-slate-800">
            {PRODUCTS.map((product) => (
              <li
                key={product.id}
                className="grid gap-3 px-4 py-4 sm:grid-cols-[minmax(0,1fr)_8rem_9rem_8rem] sm:items-center sm:gap-4 sm:px-5"
              >
                <Link
                  href={`/shop/${product.slug}`}
                  className="font-bold text-white transition hover:text-yellow-400"
                >
                  {product.name}
                  <span className="mt-1 block text-xs font-medium text-slate-400">
                    {product.brand} · {product.category}
                  </span>
                </Link>
                <span className="text-xs text-slate-300">{product.specs.Condition}</span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {product.stock > 0 ? `${product.stock} listed` : 'Check availability'}
                </span>
                <span className="font-extrabold text-yellow-400 sm:text-right">
                  ₦{product.price.toLocaleString()}
                  {product.originalPrice && (
                    <span className="mt-0.5 block text-xs font-medium text-slate-500 line-through">
                      ₦{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:flex-row">
          <p className="text-center text-sm text-slate-300 sm:text-left">
            Need help confirming a model, price, or stock?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
