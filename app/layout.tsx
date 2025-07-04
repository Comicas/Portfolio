import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'renato@localhost:~$',
  description: 'Computer Engineering Graduate & Full Stack Developer - Portfolio showcasing projects and skills',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
