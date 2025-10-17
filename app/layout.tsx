import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading", weight: ["700"] })

export const metadata: Metadata = {
  title: "Polar - Fullstack Developer",
  description: "Portfolio of Polar (Josh Clark), a fullstack developer specializing in modern web technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-black text-white">{children}</body>
    </html>
  )
}
