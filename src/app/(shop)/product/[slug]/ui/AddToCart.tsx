'use client'

import { QuantitySelector, SizeSelector } from '@/components'
import { Product, Size } from '@/interfaces'
import { useState } from 'react'

interface Props {
  product: Product
}

export const AddToCart = ({ product }: Props) => {
  const [size, setSize] = useState<Size | undefined>()
  const [quantity, setQuantity] = useState<number>(1)
  const [posted, setPosted] = useState(false)

  const addToCart = () => {
    setPosted(true)

    if (!size) return
  }

  return (
    <>
      {posted && !size && (
        <span className="mt-2 text-red-500 text-sm fade-in">*Must select a size</span>
      )}

      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={(size) => setSize(size)}
      />

      <QuantitySelector
        quantity={quantity}
        onQuantityChange={(quantity) => setQuantity(quantity)}
      />

      <button className="btn-primary my-5" onClick={addToCart}>
        Add to Cart
      </button>
    </>
  )
}
