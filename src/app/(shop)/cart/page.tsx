import { Title } from '@/components'
import { initialData } from '@/seed/seed'

import Link from 'next/link'
import { ProductsInCart } from './ui/ProductsInCart'
import { OrderSummary } from './ui/OrderSummary'

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

export default function () {
  // redirect('/empty')

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:p-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Cart" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Add more items</span>
            <Link href="/" className="underline mb-5">
              Keep buying
            </Link>

            <ProductsInCart />
          </div>

          <div className=" bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Order summary</h2>

            <OrderSummary />
            <div>
              <Link
                href="/checkout/address"
                className="flex btn-primary justify-center mt-5 mb-2 w-full"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
