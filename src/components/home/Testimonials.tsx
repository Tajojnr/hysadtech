import { Star, Quote, BadgeCheck, Sparkles } from 'lucide-react';

// SAMPLE CONTENT - replace with real customer feedback (WhatsApp screenshots,
// TikTok comments) with the customer's permission, then set this to false.
const IS_SAMPLE_CONTENT = true;

const REVIEWS = [
  {
    name: 'Abubakar S.',
    location: 'Kano',
    item: 'iPhone Pre-Order',
    review:
      'I placed my pre-order and followed the shipment with my tracking ID until it arrived. The phone was exactly as described.'
  },
  {
    name: 'Zainab M.',
    location: 'Abuja FCT',
    item: 'Importation Class',
    review:
      'The class was explained in Hausa and English, step by step. I made my first order from China by myself after the training.'
  },
  {
    name: 'Emeka O.',
    location: 'Lagos',
    item: 'Wholesale Order',
    review:
      'I ordered several phones for my shop. Communication on WhatsApp was fast and the price list was clear from the start.'
  }
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .replace('.', '')
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-slate-950 border-t border-slate-800 text-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Customer Feedback
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            What Our Customers Say
          </h2>
          {IS_SAMPLE_CONTENT && (
            <p className="text-[11px] text-amber-400 mt-3 font-semibold">
              Sample reviews shown for preview. Real customer feedback will be added before launch.
            </p>
          )}
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-slate-900 border border-slate-800 hover:border-yellow-500/50 rounded-2xl p-6 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-slate-200 text-sm leading-relaxed mb-5">
                  &ldquo;{r.review}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-yellow-500/60 flex items-center justify-center text-yellow-400 font-extrabold text-xs shrink-0">
                  {getInitials(r.name)}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm text-white flex items-center gap-1.5">
                    {r.name}
                    {!IS_SAMPLE_CONTENT && <BadgeCheck className="w-3.5 h-3.5 text-cyan-400" />}
                  </p>
                  <p className="text-[11px] text-slate-400 truncate">
                    {r.location} &bull; {r.item}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}