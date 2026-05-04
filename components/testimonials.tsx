"use client"
import { useLanguage } from "@/lib/language-context"
import { Quote } from "lucide-react"

const testimonials = [
  {
    nameFr: "Amina K.",
    nameEn: "Amina K.",
    roleFr: "Mère de famille, Bujumbura",
    roleEn: "Mother, Bujumbura",
    textFr: "Grâce à AzhaarLight Foundation, mes enfants ont pu recevoir des fournitures scolaires et des soins médicaux. Cette fondation est une vraie lumière dans notre vie.",
    textEn: "Thanks to AzhaarLight Foundation, my children were able to receive school supplies and medical care. This foundation is a true light in our lives.",
  },
  {
    nameFr: "Omar B.",
    nameEn: "Omar B.",
    roleFr: "Donateur, Belgique",
    roleEn: "Donor, Belgium",
    textFr: "J'ai choisi de soutenir AzhaarLight car leur transparence et leur engagement sur le terrain sont exemplaires. Je sais que mon don arrive directement aux personnes qui en ont besoin.",
    textEn: "I chose to support AzhaarLight because their transparency and field commitment are exemplary. I know my donation goes directly to people who need it.",
  },
  {
    nameFr: "Fatuma N.",
    nameEn: "Fatuma N.",
    roleFr: "Bénéficiaire, Burundi",
    roleEn: "Beneficiary, Burundi",
    textFr: "Ils m'ont aidée à un moment où je n'avais plus rien. Avec leur soutien, j'ai pu recommencer à travailler et subvenir aux besoins de ma famille.",
    textEn: "They helped me at a time when I had nothing left. With their support, I was able to start working again and provide for my family.",
  },
]

export function Testimonials() {
  const { language } = useLanguage()

  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold uppercase tracking-wide text-sm">
            {language === "fr" ? "Témoignages" : "Testimonials"}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
            {language === "fr" ? "Ce qu'ils disent de nous" : "What they say about us"}
          </h2>
          <p className="text-gray-500">
            {language === "fr"
              ? "Les témoignages de nos bénéficiaires et donateurs sont notre plus grande fierté."
              : "The testimonials from our beneficiaries and donors are our greatest pride."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 relative">
              <Quote className="w-8 h-8 text-emerald-200 absolute top-4 right-4" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{language === "fr" ? t.textFr : t.textEn}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                  {(language === "fr" ? t.nameFr : t.nameEn)[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{language === "fr" ? t.nameFr : t.nameEn}</p>
                  <p className="text-gray-400 text-xs">{language === "fr" ? t.roleFr : t.roleEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
