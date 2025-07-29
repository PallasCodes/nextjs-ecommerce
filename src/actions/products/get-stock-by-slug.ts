'use server'

import prisma from '@/lib/prisma'

export const getStockBySlug = async (slug: string): Promise<number> => {
  try {
    const product = await prisma.product.findFirst({
      select: { inStock: true },
      where: { slug }
    })

    if (!product) {
      throw new Error()
    }

    return product.inStock
  } catch (error) {
    console.error(error)
    throw new Error('Error while fetching product stock by slug')
  }
}
