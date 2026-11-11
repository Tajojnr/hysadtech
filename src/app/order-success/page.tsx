'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  CheckCircle2, 
  Copy, 
  Plane, 
  Truck, 
  ArrowRight, 
  ShieldCheck, 
  PackageCheck, 
  Warehouse,
  MessageSquare,
  PartyPopper
} from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const [orderNo, setOrderNo] = useState('HYD-2025-84920');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const paramOrder = searchParams.get('orderNo');
    if (paramOrder) {
      setOrderNo(paramOrder);
    } else {
      setOrderNo(`HYD-2025-${Math.floor(10000 + Math.random() * 90000)}`);
    }
  }, [searchParams]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(orderNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Hysad Tech! I just placed a pre-order on your website. My Tracking ID is ${orderNo}. Please confirm my order status. Thank you!`
  );

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex items-center justify-center px-3 sm:px-4 py-10 md:py-16">
      <div className="max-w-xl w-full text-center">

        {/* Success Icon */}
        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" /> Order Confirmed
        </span>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 flex items-center justify-center gap-2">
          Pre-Order Placed Successfully!
          <PartyPopper className="w-7 h-7 text-yellow-400 hidden sm:inline" />
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
          Your device order has been received and dispatch is being initiated at our Guangzhou Skycargo sourcing hub in China.
        </p>

        {/* Tracking Card */}
        <div className="bg-slate-900 border border-yellow-500/20 shadow-2xl rounded-2xl p-5 mb-6 text-left space-y-5">

          {/* Tracking ID Row */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 gap-3">
            <div className="min-w-0">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                Your Official Order &amp; Tracking ID
              </p>
              <p className="text-xl sm:text-2xl font-black text-yellow-400 tracking-tight truncate">
                {orderNo}
              </p>
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs px-3 py-2 rounded-lg font-semibold transition shrink-0"
            >
              <Copy className="w-3.5 h-3.5" /> {copied ? 'Copied!' : 'Copy ID'}
            </button>
          </div>

          {/* Cargo Timeline */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-xs">
              <div className="w-8 h-8 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full flex items-center justify-center shrink-0 font-bold">
                <Warehouse className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-white">Stage 1: Guangzhou Warehouse Dispatch</p>
                <p className="text-[10px] text-slate-400 mt-0.5">IMEI verification &amp; quality inspection in progress</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs">
              <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full flex items-center justify-center shrink-0 font-bold">
                <Plane className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-white">Stage 2: Skycargo Air Freight (China to Nigeria)</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Express transit: 3-7 days | Standard: 7-14 days</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs">
              <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full flex items-center justify-center shrink-0 font-bold">
                <PackageCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-white">Stage 3: Nigeria Hub Clearance (Kano / Lagos)</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Customs clearance &amp; final device testing</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs">
              <div className="w-8 h-8 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center shrink-0 font-bold">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-white">Stage 4: Doorstep Delivery Nationwide</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Delivered directly to your address, all 36 states covered</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Confirm CTA */}
          <a
            href={`https://wa.me/${siteConfig.contacts.primaryPhone.replace('+', '')}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-lg shadow-emerald-600/20"
          >
            <MessageSquare className="w-4 h-4" />
            Send Tracking ID to WhatsApp To Confirm Faster
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={`/track?id=${orderNo}`}
            className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 transition-all"
          >
            Track Shipment Live <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/shop"
            className="border border-slate-700 text-slate-200 font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-slate-900 transition-all"
          >
            Shop More Devices
          </Link>
        </div>

        <p className="text-[10px] text-slate-500 mt-8">
          Save your Tracking ID safely. You will need it to monitor your cargo on the Track page and on WhatsApp.
        </p>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <div className="bg-slate-950 text-slate-400 min-h-screen flex items-center justify-center text-sm">
        Loading your order summary...
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}