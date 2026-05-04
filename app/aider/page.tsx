import { Header } from "@/components/header"
import { HowToHelp } from "@/components/how-to-help"
import { VolunteerForm } from "@/components/volunteer-form"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Comment Aider",
  description: "Faites un don, devenez bénévole ou partenaire d'AzhaarLight Foundation au Burundi.",
}

export default function AiderPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HowToHelp />
      <div className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-emerald-600 font-semibold uppercase tracking-wide text-sm">Bénévolat</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Rejoignez notre équipe</h2>
            <p className="text-gray-500">Votre temps et vos compétences peuvent changer des vies.</p>
          </div>
          <VolunteerForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
