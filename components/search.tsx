"use client"

import { useState } from "react"
import { Search, FileText, Newspaper, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

const searchableContent = [
  { type: "page", titleFr: "Accueil", titleEn: "Home", href: "/", keywordsFr: "accueil fondation azhaarlight burundi humanitaire", keywordsEn: "home foundation azhaarlight burundi humanitarian" },
  { type: "page", titleFr: "À Propos", titleEn: "About", href: "/about", keywordsFr: "à propos identité fondateur mission histoire parcours", keywordsEn: "about identity founder mission history journey" },
  { type: "page", titleFr: "Mission", titleEn: "Mission", href: "/mission", keywordsFr: "mission santé éducation alimentation logement autonomie bénéficiaires", keywordsEn: "mission health education food housing autonomy beneficiaries" },
  { type: "page", titleFr: "Vision 2050", titleEn: "Vision 2050", href: "/vision", keywordsFr: "vision 2050 objectifs stratégiques impact afrique de l'est", keywordsEn: "vision 2050 strategic objectives impact east africa" },
  { type: "page", titleFr: "Valeurs", titleEn: "Values", href: "/valeurs", keywordsFr: "valeurs solidarité compassion transparence dignité humaine", keywordsEn: "values solidarity compassion transparency human dignity" },
  { type: "page", titleFr: "Comment Aider", titleEn: "How to Help", href: "/aider", keywordsFr: "aider don bénévole partenariat zakat sadaqah", keywordsEn: "help donate volunteer partnership zakat sadaqah" },
  { type: "page", titleFr: "Rapports", titleEn: "Reports", href: "/rapports", keywordsFr: "rapports transparence financier activités impact", keywordsEn: "reports transparency financial activities impact" },
  { type: "page", titleFr: "Contact", titleEn: "Contact", href: "/contact", keywordsFr: "contact message email téléphone adresse bujumbura", keywordsEn: "contact message email phone address bujumbura" },
  { type: "news", titleFr: "Création de la Fondation — Janvier 2025", titleEn: "Foundation Launch — January 2025", href: "/about", keywordsFr: "création lancement janvier 2025 bujumbura burundi", keywordsEn: "creation launch january 2025 bujumbura burundi", descFr: "AzhaarLight Foundation est officiellement fondée à Bujumbura, en République du Burundi.", descEn: "AzhaarLight Foundation is officially founded in Bujumbura, Republic of Burundi." },
  { type: "news", titleFr: "50+ personnes aidées depuis notre création", titleEn: "50+ people helped since our founding", href: "/mission", keywordsFr: "impact bénéficiaires aidés résultats", keywordsEn: "impact beneficiaries helped results", descFr: "Depuis janvier 2025, nous avons déjà touché la vie de plus de 50 personnes au Burundi.", descEn: "Since January 2025, we have already touched the lives of over 50 people in Burundi." },
  { type: "news", titleFr: "Rapport annuel 2025 — Bientôt disponible", titleEn: "2025 Annual Report — Coming Soon", href: "/rapports", keywordsFr: "rapport annuel 2025 activités transparence", keywordsEn: "annual report 2025 activities transparency", descFr: "Notre premier rapport annuel d'activités sera publié prochainement.", descEn: "Our first annual activity report will be published soon." },
]

export function SearchPage() {
  const { t, language } = useLanguage()
  const s = t.search
  const [query, setQuery] = useState("")

  const results = query.trim().length < 2 ? [] : searchableContent.filter((item) => {
    const q = query.toLowerCase()
    const keywords = language === "fr" ? item.keywordsFr : item.keywordsEn
    const title = language === "fr" ? item.titleFr : item.titleEn
    return title.toLowerCase().includes(q) || keywords.includes(q)
  })

  const pages = results.filter((r) => r.type === "page")
  const news = results.filter((r) => r.type === "news")

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-emerald-600 font-semibold uppercase tracking-wide text-sm">{s.sectionLabel}</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{s.title}</h1>
          <p className="text-gray-500">{s.subtitle}</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={s.placeholder}
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
            autoFocus
          />
        </div>

        {/* Results */}
        {query.trim().length >= 2 && (
          <div>
            {results.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg">{s.noResults}</p>
              </div>
            ) : (
              <p className="text-gray-500 text-sm mb-6">{results.length} {s.resultsFound}</p>
            )}

            {/* Pages */}
            {pages.length > 0 && (
              <div className="mb-8">
                <h2 className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                  <FileText className="w-4 h-4" /> {s.pages}
                </h2>
                <div className="space-y-3">
                  {pages.map((item, i) => (
                    <Link key={i} href={item.href} className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all group">
                      <span className="font-medium text-gray-900">{language === "fr" ? item.titleFr : item.titleEn}</span>
                      <ArrowRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* News */}
            {news.length > 0 && (
              <div>
                <h2 className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                  <Newspaper className="w-4 h-4" /> {s.news}
                </h2>
                <div className="space-y-3">
                  {news.map((item, i) => (
                    <Link key={i} href={item.href} className="block bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all">
                      <p className="font-medium text-gray-900 mb-1">{language === "fr" ? item.titleFr : item.titleEn}</p>
                      <p className="text-sm text-gray-500">{language === "fr" ? item.descFr : item.descEn}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Default state */}
        {query.trim().length < 2 && (
          <div className="text-center py-12 text-gray-300">
            <Search className="w-16 h-16 mx-auto mb-4" />
            <p>{s.hint}</p>
          </div>
        )}
      </div>
    </section>
  )
}
