import type { Metadata } from "next"
import type { ReactNode } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://azhaarlight-foundation-one.vercel.app"),
  title: {
    default: "AzhaarLight Foundation — ONG humanitaire au Burundi",
    template: "%s | AzhaarLight Foundation",
  },
  description:
    "AzhaarLight Foundation soutient les personnes vulnérables au Burundi : orphelins, femmes, personnes âgées. Faites un don, devenez bénévole ou partenaire.",
  keywords: [
    "ONG Burundi",
    "humanitaire Afrique",
    "don orphelins",
    "AzhaarLight",
    "aide Burundi",
    "zakat sadaqah",
  ],
  icons: {
    icon: "/images/azhaarlight-logo.jpg",
    apple: "/images/azhaarlight-logo.jpg",
    shortcut: "/images/azhaarlight-logo.jpg",
  },
  openGraph: {
    title: "AzhaarLight Foundation — Rising Together, Changing Lives",
    description:
      "Soutenez les personnes vulnérables au Burundi. Chaque don transforme une vie.",
    url: "https://azhaarlight-foundation-one.vercel.app",
    siteName: "AzhaarLight Foundation",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/azhaarlight-logo.jpg",
        width: 800,
        height: 600,
        alt: "AzhaarLight Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@azhaarlight",
    title: "AzhaarLight Foundation",
    description:
      "ONG humanitaire au Burundi. Soutenez les personnes vulnérables.",
    images: ["/images/azhaarlight-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
