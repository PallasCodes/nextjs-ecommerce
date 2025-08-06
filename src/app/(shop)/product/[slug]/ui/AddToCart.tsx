'use client'

import { QuantitySelector, SizeSelector } from '@/components'
import { CartProduct, Product, Size } from '@/interfaces'
import { useCartStore } from '@/store/cart/cart-store'
import { useState } from 'react'

interface Props {
  product: Product
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductTocart)

  const [size, setSize] = useState<Size | undefined>()
  const [quantity, setQuantity] = useState<number>(1)
  const [posted, setPosted] = useState(false)

  const addToCart = () => {
    setPosted(true)

    if (!size) return

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity,
      size,
      image: product.images[0]
    }

    addProductToCart(cartProduct)
    setPosted(false)
    setQuantity(1)
    setSize(undefined)
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
