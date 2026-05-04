"use client"

import { useLanguage } from "@/lib/language-context"
import { Calendar, Tag } from "lucide-react"

const news = [
  {
    date: "Janvier 2025",
    dateEn: "January 2025",
    tag: "Fondation",
    tagEn: "Foundation",
    titleFr: "Création officielle d'AzhaarLight Foundation",
    titleEn: "Official launch of AzhaarLight Foundation",
    descFr: "AzhaarLight Foundation est officiellement fondée à Bujumbura, en République du Burundi, avec pour mission de soutenir les personnes vulnérables en leur apportant espoir, dignité et opportunités.",
    descEn: "AzhaarLight Foundation is officially founded in Bujumbura, Republic of Burundi, with the mission of supporting vulnerable people by bringing them hope, dignity and opportunities.",
  },
  {
    date: "Mars 2025",
    dateEn: "March 2025",
    tag: "Impact",
    tagEn: "Impact",
    titleFr: "50+ personnes aidées depuis notre création",
    titleEn: "50+ people helped since our founding",
    descFr: "En seulement quelques mois d'existence, AzhaarLight Foundation a déjà touché la vie de plus de 50 personnes au Burundi, en leur apportant soutien alimentaire, médical et éducatif.",
    descEn: "In just a few months of existence, AzhaarLight Foundation has already touched the lives of over 50 people in Burundi, providing food, medical and educational support.",
  },
  {
    date: "2025",
    dateEn: "2025",
    tag: "Transparence",
    tagEn: "Transparency",
    titleFr: "Rapport annuel 2025 — Bientôt disponible",
    titleEn: "2025 Annual Report — Coming Soon",
    descFr: "Notre premier rapport annuel d'activités et financier sera publié prochainement. Retrouvez-le dans la section Rapports dès sa publication.",
    descEn: "Our first annual activity and financial report will be published soon. Find it in the Reports section upon publication.",
  },
  {
    date: "Vision 2050",
    dateEn: "Vision 2050",
    tag: "Vision",
    tagEn: "Vision",
    titleFr: "Notre ambition : devenir une référence en Afrique de l'Est",
    titleEn: "Our ambition: become a reference in East Africa",
    descFr: "D'ici 2050, nous visons à aider 10 000+ bénéficiaires par an, opérer dans 7 pays d'Afrique de l'Est et créer une université de référence au Burundi.",
    descEn: "By 2050, we aim to help 10,000+ beneficiaries per year, operate in 7 East African countries and create a reference university in Burundi.",
  },
]

export function Actualites() {
  const { t, language } = useLanguage()
  const a = t.actualites

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold uppercase tracking-wide text-sm">{a.sectionLabel}</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{a.title}</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">{a.subtitle}</p>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {news.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar className="w-3 h-3" />
                  {language === "fr" ? item.date : item.dateEn}
                </span>
                <span className="flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                  <Tag className="w-3 h-3" />
                  {language === "fr" ? item.tag : item.tagEn}
                </span>
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {language === "fr" ? item.titleFr : item.titleEn}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === "fr" ? item.descFr : item.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
