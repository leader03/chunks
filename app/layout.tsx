import './globals.css'
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Store',
  description: 'Fascinate by best Cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
