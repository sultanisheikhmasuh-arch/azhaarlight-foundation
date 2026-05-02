import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Mission } from "@/components/mission"
import { Vision } from "@/components/vision"
import { Values } from "@/components/values"
import { HowToHelp } from "@/components/how-to-help"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Vision />
      <Values />
      <HowToHelp />
      <Contact />
      <Footer />
    </main>
  )
}
