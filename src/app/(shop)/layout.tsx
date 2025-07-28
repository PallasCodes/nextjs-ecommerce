import { Sidebar, TopMenu } from '@/components'
import { Footer } from '@/components/ui/footer/Footer'
import { PropsWithChildren } from 'react'

export default function layout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="px-0 sm:px-10">{children}</div>

      <Footer />
    </main>
  )
}
