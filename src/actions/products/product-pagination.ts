'use server'

import { Product } from '@/generated/prisma'
import prisma from '@/lib/prisma'

export const getPaginatedProductsWithImages = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: {
          take: 2,
          select: { url: true }
        }
      }
    })

    return {
      currentPage: 1,
      totalPages: 10,
      products: products.map((product) => ({
        ...product,
        images: product.images.map((image) => image.url)
      }))
    }
  } catch (err) {
    throw new Error('Error while fetching products from the database')
  }
}
