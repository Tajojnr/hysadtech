'use client';

import { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 1000);
  };

  if (sent) {
    return (
      <div className="max-w-2xl mx-auto text-center p-8 md:p-12 bg-slate-900 border border-emerald-500/40 rounded-3xl shadow-2xl space-y-4">
        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-extrabold text-white">Message Sent Successfully!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to Hysad Tech. Our support team will respond via phone/WhatsApp or email within 24 hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="bg-slate-800 hover:bg-slate-700 text-yellow-400 border border-yellow-500/30 font-bold px-6 py-2.5 rounded-xl text-xs transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 p-6 md:p-10 rounded-3xl space-y-5 shadow-2xl"
    >
      <div className="text-center md:text-left border-b border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[10px] font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-cyan-400" /> DIRECT INQUIRY
        </div>
        <h2 className="font-extrabold text-xl md:text-2xl text-white">Send Us A Message</h2>
        <p className="text-slate-400 text-xs mt-1">
          Have questions regarding iPhone pre-orders, Skycargo flight schedules, or our China Importation Masterclass?
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
            Your Full Name *
          </label>
          <input
            placeholder="e.g. Ibrahim Abubakar"
            required
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
            Phone Number (+234) *
          </label>
          <input
            placeholder="080 1234 5678"
            required
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
            Email Address *
          </label>
          <input
            placeholder="name@example.com"
            type="email"
            required
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
            Topic *
          </label>
          <select
            required
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-100 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
          >
            <option value="iPhone Pre-Order">iPhone / Phone Pre-Order</option>
            <option value="Skycargo Tracking">Skycargo Flight Shipping</option>
            <option value="Import Academy">Online Importation Masterclass</option>
            <option value="Wholesale Inquiry">Wholesale Bulk Deal</option>
            <option value="Other">General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
          Your Message *
        </label>
        <textarea
          placeholder="State your question or desired smartphone model..."
          rows={4}
          required
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 transition-all active:scale-[0.99] disabled:opacity-50"
      >
        {submitting ? (
          <span>Sending Message...</span>
        ) : (
          <>
            <Send className="w-4 h-4 text-slate-950" /> Send Message To Hysad Tech
          </>
        )}
      </button>
    </form>
  );
}