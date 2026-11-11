import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Importation Academy | Hysad Tech',
  description:
    'Learn to order from Pinduoduo, set up WeChat, pay in RMB, verify suppliers and arrange shipping from China to Nigeria. Taught in English or Hausa.',
};

const days = [
  {
    day: 'Day 1',
    title: 'Ordering from Pinduoduo and setting up WeChat',
    points: [
      'Installing the Pinduoduo app and creating your account',
      'Searching for products and reading listings, prices and sales numbers',
      'Using translation to understand product details and reviews',
      'Setting up your WeChat account so you can message sellers and pay',
    ],
  },
  {
    day: 'Day 2',
    title: 'Paying in RMB and verifying suppliers',
    points: [
      'Setting up WeChat Pay and funding it',
      'Understanding exchange rates and converting naira to RMB',
      'Working out the full cost of an order before you pay',
      'Checking that a supplier is real: ratings, order history, photos and questions to ask',
      'Spotting fake listings and common scams',
    ],
  },
  {
    day: 'Day 3',
    title: 'Shipping from China to Nigeria',
    points: [
      'Choosing and setting up a shipping provider in China',
      'Air freight compared with sea freight, and what each costs',
      'Sending your goods to the provider and tracking them',
      'Customs, clearing and final delivery in Nigeria',
    ],
  },
];

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-yellow-400">
            Importation Academy · English and Hausa
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Learn to import from China
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
            A three-day class that takes you from opening a Pinduoduo account to
            receiving your goods in Nigeria. You learn how to order, how to pay
            in RMB, how to check a supplier and how to set up your shipping.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-400"
          >
            Ask about the next class <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <h2 className="text-2xl font-extrabold text-white">What the class covers</h2>

        <div className="mt-8 divide-y divide-slate-800 border-y border-slate-800">
          {days.map((d) => (
            <div key={d.day} className="grid gap-4 py-8 md:grid-cols-[140px_1fr]">
              <p className="text-sm font-bold uppercase tracking-wide text-yellow-400">
                {d.day}
              </p>
              <div>
                <h3 className="text-lg font-bold text-white">{d.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                  {d.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-white">
            Want to join the next class?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Contact us for the next start date, the fee and how to enroll.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:border-yellow-500/50 hover:text-yellow-400"
          >
            Contact Hysad Tech <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}