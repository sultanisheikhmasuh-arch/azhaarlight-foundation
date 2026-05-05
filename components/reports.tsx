"use client"
import { useLanguage } from "@/lib/language-context"
import { FileText, BarChart3, Camera, TrendingUp, Shield, Heart, BookOpen, Stethoscope, Home, CheckCircle } from "lucide-react"

export function Reports() {
  const { t, locale } = useLanguage()
  const r = t.reports
  const isFr = locale === "fr"

  const budgetData = [
    {
      category: isFr ? "Aide alimentaire & nutrition" : "Food aid & nutrition",
      percentage: 35,
      color: "bg-emerald-500",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      category: isFr ? "Éducation & bourses" : "Education & scholarships",
      percentage: 25,
      color: "bg-blue-500",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      category: isFr ? "Santé & soins médicaux" : "Health & medical care",
      percentage: 20,
      color: "bg-purple-500",
      icon: <Stethoscope className="w-4 h-4" />,
    },
    {
      category: isFr ? "Logement & urgences" : "Housing & emergencies",
      percentage: 15,
      color: "bg-orange-500",
      icon: <Home className="w-4 h-4" />,
    },
    {
      category: isFr ? "Frais opérationnels" : "Operational costs",
      percentage: 5,
      color: "bg-gray-400",
      icon: <Shield className="w-4 h-4" />,
    },
  ]

  const commitments = [
    isFr ? "100% des dons Zakat et Sadaqah redistribués aux bénéficiaires" : "100% of Zakat and Sadaqah donations redistributed to beneficiaries",
    isFr ? "Rapport annuel publié chaque année" : "Annual report published every year",
    isFr ? "Aucun salaire prélevé sur les dons en 2025" : "No salary deducted from donations in 2025",
    isFr ? "Traçabilité complète de chaque don reçu" : "Complete traceability of every donation received",
    isFr ? "Audit interne semestriel de l'utilisation des fonds" : "Semi-annual internal audit of fund utilization",
  ]

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold uppercase tracking-wide text-sm">
            {r.sectionLabel}
          </span>
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
            {isFr
              ? "Comment vos dons sont utilisés sur le terrain :"
              : "How your donations are used in the field:"}
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
                  <div
                    className={`${item.color} h-3 rounded-full transition-all duration-700`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 italic">
            {isFr
              ? "* Données estimées pour 2025. Rapport officiel disponible début 2026."
              : "* Estimated data for 2025. Official report available early 2026."}
          </p>
        </div>

        {/* Annual Reports */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{r.annualTitle}</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <FileText className="text-emerald-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{r.report2025Title}</h3>
                <p className="text-gray-500 text-sm">{r.report2025Desc}</p>
              </div>
            </div>
            <span className="bg-amber-100 text-amber-700 text-sm font-medium px-4 py-2 rounded-full">
              {r.statusComing}
            </span>
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
          <a
            href="/contact"
            className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
          >
            {isFr ? "Contactez-nous" : "Contact us"}
          </a>
        </div>

      </div>
    </section>
  )
}
