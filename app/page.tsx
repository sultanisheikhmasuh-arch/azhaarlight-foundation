import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AnimatedStats } from "@/components/animated-stats"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AnimatedStats />
      <Testimonials />
      <Footer />
    </main>
  )
}
