import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { TopBanner } from "../app/components/top-banner"
import { Header } from "../app/components//header"
import { Footer } from "../app/components//footer"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Exclusive - Ecommerce Store",
  description: "Your one-stop shop for all your needs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter">
        <TopBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

