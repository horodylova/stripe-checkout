
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stripe Checkout Integration - Payment Processing Demo',
  description: 'A Next.js application demonstrating Stripe payment processing with checkout sessions and refund functionality',
  keywords: 'stripe, payment, checkout, nextjs, refund, integration',
  authors: [{ name: 'Svetlana Horodylova' }],
  openGraph: {
    title: 'Stripe Checkout Integration',
    description: 'Secure payment processing with Stripe and Next.js',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stripe Checkout Integration',
    description: 'Secure payment processing with Stripe and Next.js',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
