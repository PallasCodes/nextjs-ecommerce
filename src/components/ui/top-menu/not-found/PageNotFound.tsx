import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import Image from 'next/image'

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p>Whoops! We're sorry.</p>
        <p className="font-light">
          <span>You can go back to the&nbsp;</span>
          <Link className="font-normal transition-all hover:underline" href="/">
            home
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={550}
          height={550}
        />
      </div>
    </div>
  )
}
