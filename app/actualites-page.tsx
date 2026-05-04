import { Header } from "@/components/header"
import { Actualites } from "@/components/actualites"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Actualités",
  description: "Suivez les dernières nouvelles et actions d'AzhaarLight Foundation au Burundi.",
}

export default function ActualitesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Actualites />
      <Footer />
    </main>
  )
}
