import { QuantitySelector, Title } from '@/components'
import { initialData } from '@/seed/seed'
import Image from 'next/image'
import Link from 'next/link'

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:p-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verify Order" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Change elements</span>
            <Link href="/cart" className="underline mb-5">
              Update cart
            </Link>

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5 rounded"
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                />

                <div className="">
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Shipment Adress</h2>
            <div className="mb-10">
              <p className="text-xl">John Doe</p>
              <p>Av. Siempre viva</p>
              <p>Col. Centro</p>
              <p>Ciudad de México</p>
              <p>CP 1234567</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Order summary</h2>

            <div className="grid grid-cols-2">
              <span>Number of products</span>
              <span className="text-right">3 items</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Taxes (15%)</span>
              <span className="text-right">$100</span>

              <span className="text-2xl mt-5">Total:</span>
              <span className="text-right mt-5 text-2xl">$100</span>
            </div>

            <div>
              <Link
                href="/orders/123"
                className="flex btn-primary justify-center mt-5 mb-2 w-full"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
