'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/lib/cart-store';
import { Lock, ShieldCheck, Truck, ArrowRight, PackageCheck, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '@/config/site';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCartStore();
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Paystack');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Generate unique Hysad Tech order tracking number (HYD-2025-XXXXX)
    const generatedOrderNo = `HYD-2025-${Math.floor(10000 + Math.random() * 90000)}`;

    setTimeout(() => {
      try {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      } catch (err) {
        // Fallback if confetti fails on low memory mobile devices
      }
      clearCart();
      router.push(`/order-success?orderNo=${generatedOrderNo}`);
    }, 1200);
  };

  if (items.length === 0 && !processing) {
    return (
      <div className="bg-slate-950 text-slate-100 min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-md w-full text-center shadow-2xl">
          <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center justify-center text-yellow-400 mx-auto mb-4">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Your Pre-Order Cart is Empty</h1>
          <p className="text-slate-400 text-xs mb-6">
            Browse our latest direct China iPhone, Samsung, and gadget arrivals to place an order.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-xl hover:brightness-110 transition-all text-sm shadow-lg shadow-yellow-500/20"
          >
            Browse Phone Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-3 sm:px-4 max-w-5xl">
        
        {/* Breadcrumb Header */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link href="/shop" className="hover:text-yellow-400 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-yellow-400 font-bold">Checkout &amp; Shipping</span>
          <span>/</span>
          <span className="text-slate-600">Confirmation</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Checkout Form */}
          <form 
            onSubmit={handleSubmit} 
            className="md:col-span-2 bg-slate-900 border border-slate-800 p-4 sm:p-6 rounded-2xl space-y-6 shadow-xl"
          >
            
            {/* Step 1: Delivery Information */}
            <section>
              <h2 className="font-bold text-base md:text-lg mb-4 text-white flex items-center gap-2.5">
                <span className="w-7 h-7 bg-yellow-500 text-slate-950 font-black rounded-full flex items-center justify-center text-xs shadow-md">
                  1
                </span>
                Shipping &amp; Receiver Details
              </h2>

              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">Full Name *</label>
                  <input
                    placeholder="e.g. Ibrahim Abubakar"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">Phone Number (+234) *</label>
                  <input
                    placeholder="080 1234 5678"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">Email Address *</label>
                  <input
                    placeholder="customer@example.com"
                    type="email"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">Delivery Address *</label>
                  <input
                    placeholder="Street, House/Office Number, Landmark"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">City / Town *</label>
                  <input
                    placeholder="e.g. Kano Metropolis"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">State *</label>
                  <select
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                  >
                    <option value="">Select Delivery State *</option>
                    <option>Kano (Hysad Hub)</option>
                    <option>Lagos</option>
                    <option>FCT Abuja</option>
                    <option>Kaduna</option>
                    <option>Sokoto</option>
                    <option>Borno</option>
                    <option>Rivers</option>
                    <option>Oyo</option>
                    <option>Enugu</option>
                    <option>Delta</option>
                    <option>Katsina</option>
                    <option>Jigawa</option>
                    <option>Bauchi</option>
                    <option>Other State (All 36 Covered)</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Step 2: Payment Gateways */}
            <section className="pt-4 border-t border-slate-800">
              <h2 className="font-bold text-base md:text-lg mb-4 text-white flex items-center gap-2.5">
                <span className="w-7 h-7 bg-yellow-500 text-slate-950 font-black rounded-full flex items-center justify-center text-xs shadow-md">
                  2
                </span>
                Payment Options
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Paystack', label: 'ATM Card / Bank Transfer' },
                  { name: 'Flutterwave', label: 'Cards & Mobile Money' },
                  { name: 'Direct Transfer', label: 'Hysad Tech Bank Acct' },
                  { name: 'USDT Crypto', label: 'TRC20 / BEP20 Payment' }
                ].map((method) => (
                  <label
                    key={method.name}
                    onClick={() => setPaymentMethod(method.name)}
                    className={`border rounded-xl p-3.5 cursor-pointer transition-all flex flex-col justify-between ${
                      paymentMethod === method.name
                        ? 'border-yellow-500 bg-yellow-500/10 ring-1 ring-yellow-500'
                        : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-white">{method.name}</span>
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === method.name} 
                        readOnly 
                        className="accent-yellow-500"
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 mt-2">{method.label}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={processing}
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 disabled:opacity-50 active:scale-[0.99] transition-all"
            >
              {processing ? (
                <span className="animate-pulse flex items-center gap-2">
                  <PackageCheck className="w-4 h-4 text-slate-950" /> Generating Hysad Tracking ID...
                </span>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-slate-950" /> Complete Order (₦{totalPrice().toLocaleString()})
                </>
              )}
            </button>

          </form>

          {/* Order Summary Aside */}
          <aside className="bg-slate-900 border border-slate-800 p-4 sm:p-6 rounded-2xl h-fit space-y-4 shadow-xl">
            <h3 className="font-bold text-sm md:text-base text-white border-b border-slate-800 pb-3 flex items-center justify-between">
              <span>Order Summary</span>
              <span className="text-xs font-semibold text-yellow-400">{items.length} Item(s)</span>
            </h3>

            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 text-xs bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg p-1 border border-slate-800 relative shrink-0">
                    <Image
                      src={i.image}
                      alt={i.name}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white truncate">{i.name}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Qty: {i.quantity}</p>
                  </div>
                  <span className="font-bold text-yellow-400">₦{(i.price * i.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-800 pt-3 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-white">₦{totalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Skycargo Flight Inspection:</span>
                <span className="text-emerald-400 font-bold">INCLUDED</span>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-3 flex justify-between font-extrabold text-base text-white">
              <span>Total Payable:</span>
              <span className="text-yellow-400 text-lg">₦{totalPrice().toLocaleString()}</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-300 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Direct China Air Cargo with full IMEI Verification Guarantee.</span>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}