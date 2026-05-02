import { Header } from "@/components/header"
import { Mission } from "@/components/mission"
import { Vision } from "@/components/vision"
import { Values } from "@/components/values"
import { Footer } from "@/components/footer"

export default function MissionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Mission />
      <Vision />
      <Values />
      <Footer />
    </main>
  )
}
