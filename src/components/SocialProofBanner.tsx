export default function SocialProofBanner() {
  return (
    <section className="border-y border-slate-800 bg-slate-950/90 py-5">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-yellow-400">Trusted by buyers</p>
            <h2 className="mt-1 text-lg font-extrabold text-white md:text-xl">52.6K followers and growing</h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 md:justify-end">
            <div className="rounded-full border border-slate-800 bg-slate-900 px-3 py-2 font-bold text-yellow-400">
              219K likes
            </div>
            <div className="rounded-full border border-slate-800 bg-slate-900 px-3 py-2 font-bold text-cyan-400">
              4.9/5 rating
            </div>
            <div className="rounded-full border border-slate-800 bg-slate-900 px-3 py-2 font-bold text-emerald-400">
              Verified pre-orders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
