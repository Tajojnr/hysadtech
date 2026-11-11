'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Sparkles, Plane, Users, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-[720px] bg-slate-950 text-slate-100 flex items-end md:items-center overflow-hidden border-b border-yellow-500/20">
      
      {/* Background Video Media / Fallback Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-bg-poster.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Ambient Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />

      {/* Radial Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10 pb-10 pt-28 md:py-0 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {/* Business Chip */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[11px] font-bold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            AG IMPORT &#127464;&#127475;&#10145;&#127475;&#127470; • VERIFIED BUSINESS
          </div>

          {/* Headline */}
          <h1 className="text-[2.35rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4">
            Quality Phones,
            <br />
            <span className="text-yellow-400">Direct From China</span>
            <br />
            To Nigeria
          </h1>

          {/* Subtext */}
          <p className="text-slate-300 text-[15px] sm:text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Nigeria's trusted destination for direct iPhone pre-orders, Skycargo air freight dispatch, and practical China importation training.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:brightness-110 text-slate-950 font-extrabold text-[15px] px-7 py-4 rounded-2xl shadow-lg shadow-yellow-500/20 transition-all active:scale-[0.98]"
            >
              Shop Pre-Orders Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-slate-950" />
            </Link>

            <Link
              href="/academy"
              className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-[15px] px-7 py-4 rounded-2xl border border-slate-700/80 transition-all active:scale-[0.98]"
            >
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              Importation Academy
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 border-t border-slate-800/80 pt-6">
            <div>
              <p className="text-xl sm:text-2xl font-black text-yellow-400 tracking-tight flex items-center gap-1">
                <Users className="w-4 h-4 text-cyan-400 hidden sm:inline" /> 52.6K+
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5 font-medium uppercase">TikTok Followers</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-yellow-400 tracking-tight flex items-center gap-1">
                <Heart className="w-4 h-4 text-rose-500 hidden sm:inline" /> 219K+
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5 font-medium uppercase">TikTok Likes</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-yellow-400 tracking-tight flex items-center gap-1">
                <Plane className="w-4 h-4 text-amber-400 hidden sm:inline" /> 3–7 Days
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5 font-medium uppercase">Skycargo Express</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}