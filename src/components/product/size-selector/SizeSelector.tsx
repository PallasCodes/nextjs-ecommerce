import type { Size } from '@/sinterfaces'
import clsx from 'clsx'

interface Props {
  selectedSize: Size
  availableSizes: Size[]
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Available Sizes</h3>

      <div className="flex">
        {availableSizes.map((size) => (
          <button
            key={size}
            className={clsx('mx-2 hover:underline text-lg', {
              underline: size === selectedSize
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
