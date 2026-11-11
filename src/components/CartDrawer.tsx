'use client';

import { useCartStore } from '@/lib/cart-store';
import Link from 'next/link';
import Image from 'next/image';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function CartDrawer() {
  const { isOpen, toggleCart, items, removeItem, updateQuantity, totalPrice, totalItems } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
        onClick={toggleCart} 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-950 border-l border-yellow-500/30 text-slate-100 shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-900 via-yellow-950/40 to-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-extrabold text-white text-base">Your Pre-Order Cart</h2>
                <p className="text-[11px] text-slate-400">{totalItems()} Item(s) Selected</p>
              </div>
            </div>

            <button 
              onClick={toggleCart} 
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-600 mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-white text-lg">Your Cart is Empty</h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                  Browse our direct China iPhone, Samsung, and Pixel pre-order catalog to add devices.
                </p>
                <button
                  onClick={toggleCart}
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-extrabold px-6 py-2.5 rounded-xl text-xs shadow-lg shadow-yellow-500/20"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl flex gap-3 items-center shadow-lg"
                >
                  {/* Image */}
                  <div className="w-16 h-16 bg-slate-950 rounded-xl border border-slate-800 relative shrink-0 p-1">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-white truncate">{item.name}</h4>
                    <p className="text-xs font-black text-yellow-400 mt-0.5">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-slate-800 bg-slate-950 rounded-lg text-xs font-bold">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-slate-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 text-white text-[11px]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-slate-400 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 bg-slate-900/90 border-t border-slate-800 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span className="font-bold text-white">₦{totalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Skycargo Flight Freight:</span>
                  <span className="text-emerald-400 font-bold">INCLUDED</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-slate-800">
                  <span>Total Payable:</span>
                  <span className="text-yellow-400 text-lg">₦{totalPrice().toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href="/checkout"
                  onClick={toggleCart}
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 transition-all"
                >
                  <Lock className="w-4 h-4 text-slate-950" /> Proceed To Checkout <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Guangzhou Air Cargo Inspection &amp; IMEI Guarantee</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}