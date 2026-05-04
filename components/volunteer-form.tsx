"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Heart, CheckCircle } from "lucide-react"

export function VolunteerForm() {
  const { locale } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", skills: "", message: "" })

  const isFr = locale === "fr"

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
        <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {isFr ? "Merci pour votre engagement !" : "Thank you for your commitment!"}
        </h3>
        <p className="text-gray-500">
          {isFr
            ? "Nous avons bien reçu votre candidature. Notre équipe vous contactera très prochainement."
            : "We have received your application. Our team will contact you very soon."}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-emerald-100 p-3 rounded-xl">
          <Heart className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {isFr ? "Devenir Bénévole" : "Become a Volunteer"}
          </h3>
          <p className="text-gray-400 text-sm">
            {isFr ? "Rejoignez notre équipe de bénévoles" : "Join our volunteer team"}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isFr ? "Nom complet *" : "Full name *"}
            </label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder={isFr ? "Votre nom" : "Your name"}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isFr ? "Adresse email *" : "Email address *"}
            </label>
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder={isFr ? "votre@email.com" : "your@email.com"}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {isFr ? "WhatsApp / Téléphone" : "WhatsApp / Phone"}
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="+32 470 00 00 00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {isFr ? "Vos compétences / domaines d'expertise" : "Your skills / areas of expertise"}
          </label>
          <input
            type="text"
            value={form.skills}
            onChange={e => setForm({ ...form, skills: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder={isFr ? "Médecine, éducation, communication..." : "Medicine, education, communication..."}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {isFr ? "Pourquoi souhaitez-vous rejoindre AzhaarLight ?" : "Why do you want to join AzhaarLight?"}
          </label>
          <textarea
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            rows={4}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            placeholder={isFr ? "Partagez votre motivation..." : "Share your motivation..."}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
        >
          <Heart className="w-5 h-5" />
          {isFr ? "Envoyer ma candidature" : "Submit my application"}
        </button>
        <p className="text-gray-400 text-xs text-center">
          {isFr ? "* Champs obligatoires" : "* Required fields"}
        </p>
      </div>
    </div>
  )
}
