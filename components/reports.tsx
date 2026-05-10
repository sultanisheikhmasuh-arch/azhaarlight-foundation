"use client"
import { useLanguage } from "@/lib/language-context"
import { FileText, BarChart3, Camera, TrendingUp, Shield, Heart, BookOpen, Stethoscope, Home, CheckCircle } from "lucide-react"
import Image from "next/image"

export function Reports() {
  const { t, locale } = useLanguage()
  const r = t.reports
  const isFr = locale === "fr"

  const budgetData = [
    { category: isFr ? "Aide alimentaire & nutrition" : "Food aid & nutrition", percentage: 35, color: "bg-emerald-500", icon: <Heart className="w-4 h-4" /> },
    { category: isFr ? "Éducation & bourses" : "Education & scholarships", percentage: 25, color: "bg-blue-500", icon: <BookOpen className="w-4 h-4" /> },
    { category: isFr ? "Santé & soins médicaux" : "Health & medical care", percentage: 20, color: "bg-purple-500", icon: <Stethoscope className="w-4 h-4" /> },
    { category: isFr ? "Logement & urgences" : "Housing & emergencies", percentage: 15, color: "bg-orange-500", icon: <Home className="w-4 h-4" /> },
    { category: isFr ? "Frais opérationnels" : "Operational costs", percentage: 5, color: "bg-gray-400", icon: <Shield className="w-4 h-4" /> },
  ]

  const commitments = [
    isFr ? "100% des dons Zakat et Sadaqah redistribués aux bénéficiaires" : "100% of Zakat and Sadaqah donations redistributed to beneficiaries",
    isFr ? "Rapport annuel publié chaque année" : "Annual report published every year",
    isFr ? "Aucun salaire prélevé sur les dons en 2025" : "No salary deducted from donations in 2025",
    isFr ? "Traçabilité complète de chaque don reçu" : "Complete traceability of every donation received",
    isFr ? "Audit interne semestriel de l'utilisation des fonds" : "Semi-annual internal audit of fund utilization",
  ]

  const photos = [
    { src: "/action-2025-1.jpg", caption: isFr ? "Travaux communautaires sur le terrain" : "Community work in the field" },
    { src: "/action-2025-2.jpg", caption: isFr ? "Notre équipe de bénévoles" : "Our volunteer team" },
    { src: "/action-2025-3.jpg", caption: isFr ? "Rassemblement communautaire" : "Community gathering" },
    { src: "/action-2025-4.jpg", caption: isFr ? "Session de formation" : "Training session" },
    { src: "/action-2025-5.jpg", caption: isFr ? "Réunion officielle avec partenaires" : "Official meeting with partners" },
    { src: "/action-2025-6.jpg", caption: isFr ? "Remise d'accréditations" : "Credential distribution" },
    { src: "/action-2025-7.jpg", caption: isFr ? "Réunion de coordination" : "Coordination meeting" },
  ]

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold uppercase tracking-wide text-sm">{r.sectionLabel}</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{r.title}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">{r.subtitle}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600">50+</div>
            <div className="text-gray-600 text-sm mt-1">{r.stat1}</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600">6</div>
            <div className="text-gray-600 text-sm mt-1">{r.stat2}</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600">2025</div>
            <div className="text-gray-600 text-sm mt-1">{r.stat3}</div>
          </div>
        </div>

        {/* Transparency Commitment Banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 p-3 rounded-full shrink-0">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-emerald-800 mb-3">
                {isFr ? "Nos engagements de transparence" : "Our transparency commitments"}
              </h2>
              <ul className="space-y-2">
                {commitments.map((c, i) => (
                  <li key={i} className="flex items-center gap-2 text-emerald-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Budget Allocation */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isFr ? "Répartition des fonds — 2025" : "Fund allocation — 2025"}
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            {isFr ? "Comment vos dons sont utilisés sur le terrain :" : "How your donations are used in the field:"}
          </p>
          <div className="space-y-4">
            {budgetData.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span className={`p-1 rounded ${item.color} text-white`}>{item.icon}</span>
                    {item.category}
                  </div>
                  <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className={`${item.color} h-3 rounded-full transition-all duration-700`} style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 italic">
            {isFr ? "* Données estimées pour 2025." : "* Estimated data for 2025."}
          </p>
        </div>

        {/* Annual Reports */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{r.annualTitle}</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <FileText className="text-emerald-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{r.report2025Title}</h3>
                <p className="text-gray-500 text-sm">{r.report2025Desc}</p>
              </div>
              <span className="ml-auto bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-2 rounded-full">
                {isFr ? "Disponible" : "Available"}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                  <span>🇫🇷</span>
                  <span className="text-sm font-medium text-gray-700">{isFr ? "Version Française" : "French Version"}</span>
                </div>
                <iframe src="/rapport-2025-fr.pdf#toolbar=0&navpanes=0" className="w-full h-64" title="Rapport annuel 2025 FR" />
              </div>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                  <span>🇬🇧</span>
                  <span className="text-sm font-medium text-gray-700">{isFr ? "Version Anglaise" : "English Version"}</span>
                </div>
                <iframe src="/rapport-2025-en.pdf#toolbar=0&navpanes=0" className="w-full h-64" title="Annual Report 2025 EN" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/rapport-2025-fr.pdf" download className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                {isFr ? "Télécharger (FR)" : "Download (FR)"}
              </a>
              <a href="/rapport-2025-en.pdf" download className="flex-1 flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                {isFr ? "Télécharger (EN)" : "Download (EN)"}
              </a>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isFr ? "Photos de terrain — 2025" : "Field photos — 2025"}
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            {isFr ? "Nos actions en images." : "Our actions in pictures."}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="relative h-48 w-full">
                  <Image src={photo.src} alt={photo.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="bg-white px-3 py-2">
                  <p className="text-xs text-gray-600">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Reports */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{r.typesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <TrendingUp className="w-5 h-5" />, title: r.type1Title, desc: r.type1Desc },
              { icon: <BarChart3 className="w-5 h-5" />, title: r.type2Title, desc: r.type2Desc },
              { icon: <Shield className="w-5 h-5" />, title: r.type3Title, desc: r.type3Desc },
              { icon: <Camera className="w-5 h-5" />, title: r.type4Title, desc: r.type4Desc },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-emerald-700 rounded-xl p-8 text-white text-center">
          <Shield className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-3">{r.transparencyTitle}</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-6">{r.transparencyDesc}</p>
          <a href="/contact" className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors">
            {isFr ? "Contactez-nous" : "Contact us"}
          </a>
        </div>

      </div>
    </section>
  )
}
