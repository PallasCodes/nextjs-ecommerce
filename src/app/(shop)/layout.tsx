import { TopMenu } from '@/components'
import { PropsWithChildren } from 'react'

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <TopMenu />
      {children}
    </div>
  )
}
