import { ShieldCheck, Plane, MessageSquare, Globe } from 'lucide-react';

const BADGES = [
  {
    icon: ShieldCheck,
    title: '100% Unlocked',
    desc: 'Tested & IMEI Verified',
    iconColor: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30'
  },
  {
    icon: Plane,
    title: 'Skycargo Express',
    desc: 'Guangzhou to Nigeria Air Cargo',
    iconColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Desk',
    desc: 'Direct line for pre-orders',
    iconColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30'
  },
  {
    icon: Globe,
    title: 'Nationwide Delivery',
    desc: 'All 36 states covered',
    iconColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30'
  }
];

export function TrustBadges() {
  return (
    <section className="py-8 md:py-10 bg-slate-950 border-b border-slate-800 text-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {BADGES.map((b) => (
            <div
              key={b.title}
              className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-slate-900/80 border border-slate-800 rounded-2xl transition-all hover:border-slate-700 shadow-md"
            >
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${b.bgColor} ${b.borderColor}`}
              >
                <b.icon className={`w-6 h-6 ${b.iconColor}`} />
              </div>
              <div className="min-w-0">
                <h4 className="font-extrabold text-xs sm:text-sm text-white tracking-tight truncate">
                  {b.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}