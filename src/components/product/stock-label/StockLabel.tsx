'use client'

import { getStockBySlug } from '@/actions/products/get-stock-by-slug'
import { titleFont } from '@/config/fonts'
import { useEffect, useState } from 'react'

interface Props {
  slug: string
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState<number | string>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getStock()
  }, [])

  const getStock = async () => {
    try {
      setIsLoading(true)
      const inStock = await getStockBySlug(slug)
      setStock(inStock)
    } catch (error) {
      setStock('Error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading ? (
        <h2
          className={`${titleFont.className} antialiased font-bold text-lg animate-pulse bg-gray-200`}
        >
          &nbsp;
        </h2>
      ) : (
        <h2 className={`${titleFont.className} antialiased font-bold text-lg`}>
          Stock: {stock}
        </h2>
      )}
    </>
  )
}
