import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'システム開発ノウハウ教材 | 最短で実務の型を身につける',
  description: '現場で磨いた知見を凝縮。3ヶ月で設計→実装→公開まで自走できる力を。実案件の型、AI・クラウド活用、失敗回避のチェックリスト付き。',
  keywords: 'システム開発,ノウハウ,教材,プログラミング,Web開発,エンジニア,DX,AI活用',
  openGraph: {
    title: 'システム開発ノウハウ教材 | 最短で実務の型を身につける',
    description: '現場で磨いた知見を凝縮。3ヶ月で設計→実装→公開まで自走できる力を。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://example.com',
    siteName: 'システム開発ノウハウ教材',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'システム開発ノウハウ教材',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'システム開発ノウハウ教材 | 最短で実務の型を身につける',
    description: '現場で磨いた知見を凝縮。3ヶ月で設計→実装→公開まで自走できる力を。',
    images: ['/images/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'システム開発ノウハウ教材',
              description: '3ヶ月で自走できる実務の型を凝縮',
              image: ['/images/og.jpg'],
              brand: {
                '@type': 'Brand',
                name: 'LAND BRIDGE',
              },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'JPY',
                price: '19800',
                availability: 'https://schema.org/InStock',
                priceValidUntil: '2024-12-31',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '137',
                bestRating: '5',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}