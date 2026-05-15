import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AnimatedStats } from "@/components/animated-stats"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import DonWidget from "@/components/DonWidget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <DonWidget />
      </section>
      <AnimatedStats />
      <Testimonials />
      <Footer />
    </main>
  )
}
