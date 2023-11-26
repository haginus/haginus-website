import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrei Hagi, Software Engineer',
  description: "Andrei Hagi is a Software Engineer based in Bucharest, Romania. Specialized in frontend development with TypeScript, React, React Native, Angular, and Vue, but with vast knowledge of backend technologies such as Node.js, NestJS, and Java Spring.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
