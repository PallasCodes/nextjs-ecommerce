'use client'

import Image from 'next/image'

import { Product } from '@/interfaces'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  product: Product
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0])

  const swapProductImage = (image: number) => {
    setDisplayImage(product.images[image])
  }

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          onMouseOver={() => swapProductImage(1)}
          onMouseLeave={() => swapProductImage(0)}
          src={`/products/${displayImage}`}
          alt={product.title}
          className="w-full oject-cover rounded"
          width={500}
          height={500}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.slug}`} className="hover:text-blue-600">
          {product.title}
        </Link>
        <span className="font-bold">{product.price}</span>
      </div>
    </div>
  )
}
