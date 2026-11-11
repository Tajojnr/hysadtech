'use client';

import { useState, useEffect } from 'react';
import { 
  Package, 
  CheckCircle2, 
  Plane, 
  Truck, 
  Home, 
  Search, 
  Warehouse, 
  ShieldCheck, 
  Sparkles,
  PackageCheck
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const STAGES = [
  { 
    icon: CheckCircle2, 
    label: 'Order Verified & Invoice Confirmed', 
    date: 'Stage 1 • Processing', 
    done: true 
  },
  { 
    icon: Warehouse, 
    label: 'Guangzhou Warehouse Inspection & Packing', 
    date: 'Stage 2 • Guangzhou Hub', 
    done: true 
  },
  { 
    icon: Plane, 
    label: 'Skycargo Express Air Freight (China to Nigeria)', 
    date: 'Stage 3 • Flight In-Transit', 
    done: true 
  },
  { 
    icon: PackageCheck, 
    label: 'Customs Clearance & Nigeria Hub Sorting', 
    date: 'Stage 4 • Active Status', 
    done: false, 
    current: true 
  },
  { 
    icon: Truck, 
    label: 'Dispatched for Final Doorstep Delivery', 
    date: 'Stage 5 • Final Logistics', 
    done: false 
  },
  { 
    icon: Home, 
    label: 'Package Delivered & Customer Verification', 
    date: 'Stage 6 • Complete', 
    done: false 
  }
];

export function TrackOrderDemo() {
  const [id, setId] = useState('HYD-2025-84920');
  const [tracked, setTracked] = useState(true);

  // Auto-detect URL query parameter ?id=...
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const queryId = params.get('id');
      if (queryId) {
        setId(queryId);
        setTracked(true);
      }
    }
  }, []);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (id.trim()) {
      setTracked(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      
      {/* Search Bar Input */}
      <form
        onSubmit={handleTrack}
        className="bg-slate-900 border border-slate-800 p-2.5 rounded-2xl flex flex-col sm:flex-row gap-2 shadow-2xl"
      >
        <div className="relative flex-1">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter Tracking ID (e.g. HYD-2025-84920)"
            required
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 transition-all active:scale-[0.98]"
        >
          <Search className="w-4 h-4 text-slate-950" /> Track Parcel
        </button>
      </form>

      {/* Tracking Details Display */}
      {tracked && (
        <div className="bg-slate-900 border border-yellow-500/20 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
          
          {/* Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                Active Tracking Number
              </p>
              <p className="text-2xl font-black text-yellow-400 font-mono tracking-tight">
                {id.toUpperCase()}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5" /> Skycargo Air Cargo
              </span>
            </div>
          </div>

          {/* Logistics Route Overview */}
          <div className="grid grid-cols-2 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs">
            <div>
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Origin Hub</span>
              <span className="text-white font-bold">Guangzhou Baiyun, China</span>
            </div>
            <div>
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Destination Hub</span>
              <span className="text-white font-bold">Nigeria (Nationwide Delivery)</span>
            </div>
          </div>

          {/* Timeline Stages */}
          <div className="relative space-y-6 pt-2">
            {STAGES.map((s, i) => (
              <div key={s.label} className="flex gap-4 items-start relative">
                
                {/* Stage Icon Node */}
                <div 
                  className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                    s.done 
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' 
                      : s.current 
                      ? 'bg-yellow-500 text-slate-950 border-yellow-400 animate-pulse shadow-lg shadow-yellow-500/30 font-bold' 
                      : 'bg-slate-950 border-slate-800 text-slate-600'
                  }`}
                >
                  <s.icon className="w-5 h-5" />
                </div>

                {/* Stage Text */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className={`font-bold text-xs sm:text-sm ${
                    s.done || s.current ? 'text-white' : 'text-slate-500'
                  }`}>
                    {s.label}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">
                    {s.date}
                  </p>
                </div>

                {/* Connecting Line */}
                {i < STAGES.length - 1 && (
                  <div 
                    className={`absolute left-5 top-10 w-0.5 h-8 -ml-px ${
                      s.done ? 'bg-emerald-500/40' : 'bg-slate-800'
                    }`} 
                  />
                )}
              </div>
            ))}
          </div>

          {/* Live Support Note */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Direct Skycargo flight tracking
            </span>
            <a
              href={`https://wa.me/${siteConfig.contacts.primaryPhone.replace('+', '')}?text=${encodeURIComponent(`Hello Hysad Tech! I want to check my order status for Tracking ID ${id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline font-bold"
            >
              Contact Support Desk &rarr;
            </a>
          </div>

        </div>
      )}

    </div>
  );
}