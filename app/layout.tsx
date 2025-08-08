import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Malayalam Cursor Chaos - Everything Avoids You!',
  description: 'A hilarious desktop web app where UI elements avoid your cursor with Malayalam meme reactions',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


import './globals.css'