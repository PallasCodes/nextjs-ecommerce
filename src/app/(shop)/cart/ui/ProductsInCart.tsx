'use client'

import { QuantitySelector } from '@/components'
import { useCartStore } from '@/store/cart/cart-store'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const ProductsInCart = () => {
  const productsInCart = useCartStore((state) => state.cart)
  const updateProductQuantity = useCartStore((state) => state.updateProductQuantity)
  const removeProductInCart = useCartStore((state) => state.removeProductInCart)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  })

  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <Image
            src={`/products/${product.image}`}
            width={100}
            height={100}
            alt={product.title}
            className="mr-5 rounded"
            style={{
              width: '100px',
              height: '100px'
            }}
          />

          <div>
            <Link
              className="hover:underline cursor-pointer"
              href={`/product/${product.slug}`}
            >
              {product.size} - {product.title}
            </Link>
            <p>${product.price}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChange={(value) => updateProductQuantity(product, value)}
            />

            <button
              className="underline mt-3 text-sm"
              onClick={() => removeProductInCart(product)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
