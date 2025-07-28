export const revalidate = 60

import { getPaginatedProductsWithImages } from '@/actions/products/product-pagination'
import { ProductGrid, Title } from '@/components'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Gender } from '@/generated/prisma'
import { redirect } from 'next/navigation'

interface Props {
  params: {
    gender: string
  }
  searchParams: {
    page?: string
  }
}

export default async function ({ params, searchParams }: Props) {
  const { gender } = params

  const page = searchParams.page ? parseInt(searchParams.page) : 1

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender: gender as Gender
  })

  if (products.length === 0) {
    redirect('/gender/' + gender)
  }

  const category = gender

  return (
    <>
      <Title title={category} subtitle="All products" className="mb-2 capitalize" />

      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  )
}
