import type { Metadata } from "next"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Fondée en janvier 2025 par Masumbuko Nt. HAMIM, AzhaarLight Foundation œuvre pour la dignité des personnes vulnérables au Burundi, sans distinction de religion ou d'origine.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Footer />
    </main>
  )
}
