import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DA - 오토모빌리티 전문기업',
  description: '더 나은 미래, 최정상급 노하우. DA는 고객을 최우선으로 생각하는 고객 중심 기업입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <main className="w-full relative overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

