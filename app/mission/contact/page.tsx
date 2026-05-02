import { Header } from "@/components/header"
import { HowToHelp } from "@/components/how-to-help"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HowToHelp />
      <Contact />
      <Footer />
    </main>
  )
}
