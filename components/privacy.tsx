"use client"

import { useLanguage } from "@/lib/language-context"

export function Privacy() {
  const { t } = useLanguage()
  const p = t.privacy

  const sections = [
    { title: p.s1Title, content: p.s1Content },
    { title: p.s2Title, content: p.s2Content },
    { title: p.s3Title, content: p.s3Content },
    { title: p.s4Title, content: p.s4Content },
    { title: p.s5Title, content: p.s5Content },
  ]

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{p.title}</h1>
          <p className="text-gray-400 text-sm">{p.lastUpdated}</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-gray-500 text-sm">{p.contact} <a href="mailto:azhaarlight@outlook.com" className="text-emerald-600 hover:underline">azhaarlight@outlook.com</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
