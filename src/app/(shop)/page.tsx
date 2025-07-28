import { getPaginatedProductsWithImages } from '@/actions/products/product-pagination'
import { ProductGrid, Title } from '@/components'
import { Product } from '@/interfaces/product.interface'

export default async function Home() {
  const { products } = await getPaginatedProductsWithImages()
  return (
    <>
      <Title title="Shop" subtitle="All products" className="mb-2" />

      <ProductGrid products={products} />
    </>
  )
}
