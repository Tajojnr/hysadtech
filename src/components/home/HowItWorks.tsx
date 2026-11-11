import { ShoppingBag, CreditCard, Warehouse, Plane, Truck, Sparkles } from 'lucide-react';

const STEPS = [
  { 
    icon: ShoppingBag, 
    title: '1. Select Device', 
    desc: 'Browse our catalog or request custom phone pre-orders from Guangzhou.' 
  },
  { 
    icon: CreditCard, 
    title: '2. Confirm Order', 
    desc: 'Pay securely via Card, Bank Transfer, RMB, or Crypto.' 
  },
  { 
    icon: Warehouse, 
    title: '3. Guangzhou Inspection', 
    desc: 'Our China hub inspects and tests device IMEI before flight packing.' 
  },
  { 
    icon: Plane, 
    title: '4. Skycargo Express', 
    desc: '3–7 days air freight transit from China to Nigeria with live tracking.' 
  },
  { 
    icon: Truck, 
    title: '5. Doorstep Delivery', 
    desc: 'Customs cleared and delivered to your address in all 36 states.' 
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            TRANSPARENT IMPORT PROCESS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            How Pre-Ordering Works
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            From direct factory sourcing in China to your doorstep in Nigeria in simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((s, i) => (
            <div 
              key={s.title} 
              className="bg-slate-950 border border-slate-800 hover:border-yellow-500/50 p-6 rounded-2xl text-center transition-all duration-300 group shadow-xl flex flex-col items-center justify-between"
            >
              <div className="w-full flex flex-col items-center">
                {/* Icon Circle */}
                <div className="relative w-16 h-16 mb-5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <s.icon className="w-8 h-8 text-yellow-400" />
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-slate-950 text-[11px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-extrabold text-white text-base mb-2">{s.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900 w-full text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                Skycargo Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}