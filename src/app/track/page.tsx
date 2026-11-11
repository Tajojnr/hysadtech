import type { Metadata } from 'next';
import { TrackOrderDemo } from '@/components/shared/TrackOrderDemo';

export const metadata: Metadata = {
  title: 'Track Your Shipment | Hysad Tech',
  description:
    'Track your Hysad Tech phone pre-order or cargo from the Guangzhou warehouse to Nigeria using your tracking ID.',
};

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-12 text-slate-100 md:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-10 max-w-2xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Track your shipment
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
            Enter the tracking ID we sent you, for example{' '}
            <span className="font-mono font-bold text-yellow-400">HYD-2025-84920</span>
            , to see where your order is, from the Guangzhou warehouse through
            flight dispatch and customs to delivery in Nigeria.
          </p>
        </div>

        <TrackOrderDemo />
      </div>
    </div>
  );
}