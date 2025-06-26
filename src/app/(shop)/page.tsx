import { titleFont } from '@/config/fonts'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      hola mundo
      <h1 className={titleFont.className}>hello world</h1>
    </div>
  )
}
