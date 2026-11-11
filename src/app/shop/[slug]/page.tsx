import { notFound } from 'next/navigation'
import { PRODUCTS, getProductBySlug } from '@/data/products'
import { ProductDetail } from '@/components/shop/ProductDetail'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Product Not Found | Hysad Tech'
    }
  }

  return {
    title: `${product.name} — ₦${product.price.toLocaleString()} | ${siteConfig.name}`,
    description: `${product.description} Direct China pre-orders with express Skycargo flight dispatch & IMEI verification guarantee.`,
    openGraph: {
      title: `${product.name} | ${siteConfig.name} (AG Import)`,
      description: product.description,
      images: [{ url: product.image, alt: product.name }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | ${siteConfig.name}`,
      description: product.description,
      images: [product.image]
    }
  }
}

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}