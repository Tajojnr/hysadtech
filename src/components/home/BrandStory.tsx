import Link from 'next/link';
import { CheckCircle2, ShieldCheck, ArrowRight, ExternalLink, Users, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function BrandStory() {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800 text-slate-100">
      <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & Features */}
        <div>
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
            Direct China Importation &amp; Logistics
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 leading-tight">
            Connecting Nigeria To <span className="text-yellow-400">China Factory Prices</span>
          </h2>
          <p className="text-slate-300 mb-6 text-sm md:text-base leading-relaxed">
            Hysad Tech (AG Import) specializes in direct factory smartphone pre-orders, express Skycargo air freight from Guangzhou, and practical China importation training taught in Hausa &amp; English.
          </p>

          <div className="space-y-3 mb-8">
            {[
              'Direct Guangzhou Baiyun Sourcing & Warehouse Inspection',
              'Fast 3–7 Days Express Skycargo Flight Dispatch to Nigeria',
              '100% Tested & Unlocked Smartphones (IMEI Verified)',
              'Pinduoduo, 1688 & RMB Payment Masterclasses (Hausa & English)',
              'Doorstep Nationwide Delivery Across All 36 Nigerian States'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-yellow-500/20"
          >
            Learn More About Hysad Tech <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Column: Visual Card & TikTok Verified Widget */}
        <div className="relative">
          
          {/* Main Visual Box */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-yellow-500 flex items-center justify-center font-extrabold text-yellow-400 text-lg shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  HT
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg flex items-center gap-1.5">
                    Hysad Tech <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  </h3>
                  <p className="text-xs text-slate-400">AG Import 🇨🇳 ➡️ 🇳🇬</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                "Importing quality smartphones from China doesn't have to be complicated. We streamline sourcing, flight dispatch, and custom clearance so you get direct factory value."
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-center">
                  <div className="text-yellow-400 font-extrabold text-lg flex items-center justify-center gap-1">
                    <Users className="w-4 h-4 text-cyan-400" /> 52.6K
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">TikTok Followers</div>
                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-center">
                  <div className="text-yellow-400 font-extrabold text-lg flex items-center justify-center gap-1">
                    <Heart className="w-4 h-4 text-rose-500" /> 219K
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">TikTok Likes</div>
                </div>
              </div>

              <a
                href="https://www.tiktok.com/@hysadtech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-slate-950 hover:bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs py-3 rounded-xl transition-all"
              >
                Visit Verified TikTok Account <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}