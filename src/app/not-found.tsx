import Link from 'next/link';
import { ArrowLeft, SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-slate-950 px-4 py-16 text-center text-slate-100">
      <div className="max-w-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
          <SearchX className="h-8 w-8" />
        </div>
        <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.2em] text-yellow-400">
          404 · Page not found
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-white">
          We couldn’t find that page
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          The link may be outdated, or the page may have moved. Browse the catalog
          or return to the homepage.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-slate-100 transition hover:border-slate-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:brightness-110"
          >
            Browse products
          </Link>
        </div>
      </div>
    </main>
  );
}
