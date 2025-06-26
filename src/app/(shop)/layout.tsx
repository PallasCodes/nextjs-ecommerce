import { TopMenu } from '@/components'
import { PropsWithChildren } from 'react'

export default function layout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <div className="px-0 sm:px-10">{children}</div>
    </main>
  )
}
