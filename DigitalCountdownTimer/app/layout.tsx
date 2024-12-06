import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-digital',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} font-sans bg-white`}>{children}</body>
    </html>
  )
}

