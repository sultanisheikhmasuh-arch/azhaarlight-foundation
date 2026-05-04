"use client"

import { Handshake, Mail } from "lucide-react"
import Link from "next/link"

export function Partenaires() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">

        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold uppercase tracking-wide text-sm">Partenariats</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Nos Partenaires</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Ensemble, nous pouvons avoir un impact plus grand. AzhaarLight Foundation est ouverte à toute collaboration sérieuse et engagée.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-10 text-center">
          <Handshake className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-gray-900 mb-2">Nous recherchons activement des partenaires</h2>
          <p className="text-gray-600 text-sm">
            Fondée en 2025, AzhaarLight Foundation est en pleine croissance. Nous accueillons avec enthousiasme les organisations qui partagent nos valeurs.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Types de partenariats recherchés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { emoji: "🏥", title: "Organisations de santé", desc: "Cliniques, hôpitaux, pharmacies et ONG médicales souhaitant soutenir nos bénéficiaires au Burundi." },
            { emoji: "🎓", title: "Institutions éducatives", desc: "Écoles, universités et organisations de formation pour l'éducation des enfants et jeunes vulnérables." },
            { emoji: "💼", title: "Entreprises & Fondations", desc: "Entreprises engagées dans la RSE et fondations philanthropiques cherchant à maximiser leur impact." },
            { emoji: "🌍", title: "ONG Internationales", desc: "Organisations humanitaires internationales souhaitant collaborer sur des projets communs au Burundi." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Devenez partenaire</h2>
          <p className="text-emerald-100 mb-6">Vous partagez notre vision ? Contactez-nous pour discuter.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors">
            <Mail className="w-5 h-5" /> Nous contacter
          </Link>
        </div>

      </div>
    </section>
  )
}
