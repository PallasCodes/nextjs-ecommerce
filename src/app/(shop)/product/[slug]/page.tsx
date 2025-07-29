export const revalidate = 604800

import { notFound } from 'next/navigation'

import { getProductBySlug } from '@/actions/products/get-product-by-slug'
import { ProductMobileSlideshow, ProductSlideshow } from '@/components'
import { StockLabel } from '@/components/product/stock-label/StockLabel'
import { titleFont } from '@/config/fonts'
import { AddToCart } from './ui/AddToCart'

export async function generateMetadata({ params }: Props) {
  const slug = params.slug

  const product = await getProductBySlug(slug)

  return {
    title: product?.title ?? 'Product',
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? 'Product',
      description: product?.description ?? '',
      images: [`/products/${product?.images[1]}`]
    }
  }
}

interface Props {
  params: {
    slug: string
  }
}

export default async function page({ params }: Props) {
  const { slug } = params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        {/* Mobile slideshow */}
        <ProductMobileSlideshow
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />

        {/* Desktop slideshow */}
        <ProductSlideshow
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />
      </div>

      <div className="col-span-1 px-5">
        <StockLabel slug={product.slug} />

        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{product.price}</p>

        <AddToCart product={product} />

        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-lig">{product.description}</p>
      </div>
    </div>
  )
}
