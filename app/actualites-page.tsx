import { Header } from "@/components/header"
import { Actualites } from "@/components/actualites"
import { Footer } from "@/components/footer"

export default function ActualitesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Actualites />
      <Footer />
    </main>
  )
}
