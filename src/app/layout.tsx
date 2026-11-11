import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import HysadBot from '@/components/HysadBot';
import { CartDrawer } from '@/components/CartDrawer';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Direct China Importation & Quality Phones`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'hysad tech',
    'ag import',
    'buy iphone nigeria',
    'china importation class hausa',
    'pinduoduo import nigeria',
    'skycargo nigeria',
    'iphone pre-order kano',
    'iphone wholesale nigeria'
  ],
  authors: [{ name: siteConfig.legalName }],
  openGraph: {
    title: `${siteConfig.name} (AG Import)`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: siteConfig.name }],
    locale: 'en_NG',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/icon-512.png']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-yellow-500 selection:text-slate-950 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <HysadBot />
        <CartDrawer />
      </body>
    </html>
  );
}