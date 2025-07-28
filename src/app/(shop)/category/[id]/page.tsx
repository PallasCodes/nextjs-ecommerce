import { Title, ProductGrid } from '@/components'
import { initialData } from '@/seed/seed'
import { Category } from '@/interfaces'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: Category
  }
}

export default function ({ params }: Props) {
  const { id } = params

  // if (id === 'kids') {
  //   notFound()
  // }

  const products = initialData.products.filter((product) => product.gender === id)

  const category = products.find((product) => (product.slug = id))?.gender ?? ''

  return (
    <>
      <Title title={category} subtitle="All products" className="mb-2 capitalize" />

      <ProductGrid products={products} />
    </>
  )
}
