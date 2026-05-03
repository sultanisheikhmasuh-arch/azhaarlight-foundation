"use client"

import { useLanguage } from "@/lib/language-context"

export function Values() {
  const { t } = useLanguage()

  const values = [
    {
      emoji: "☪️",
      title: t.values.val1Title,
      desc: t.values.val1Desc,
      items: [],
    },
    {
      emoji: "⚖️",
      title: t.values.val2Title,
      desc: "",
      items: [t.values.val2a, t.values.val2b, t.values.val2c, t.values.val2d],
    },
    {
      emoji: "🔍",
      title: t.values.val3Title,
      desc: "",
      items: [t.values.val3a, t.values.val3b, t.values.val3c, t.values.val3d, t.values.val3e],
    },
    {
      emoji: "👤",
      title: t.values.val4Title,
      desc: "",
      items: [t.values.val4a, t.values.val4b, t.values.val4c, t.values.val4d, t.values.val4e],
    },
    {
      emoji: "🌱",
      title: t.values.val5Title,
      desc: "",
      items: [t.values.val5a, t.values.val5b, t.values.val5c, t.values.val5d, t.values.val5e],
    },
    {
      emoji: "💪",
      title: t.values.val6Title,
      desc: "",
      items: [t.values.val6a, t.values.val6b, t.values.val6c, t.values.val6d, t.values.val6e],
    },
    {
      emoji: "🤝",
      title: t.values.val7Title,
      desc: "",
      items: [t.values.val7a, t.values.val7b, t.values.val7c, t.values.val7d, t.values.val7e],
    },
  ]

  return (
    <section id="valeurs" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-3 block">
            {t.values.sectionLabel}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.values.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.values.subtitle}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-background rounded-2xl p-6 border border-border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{value.emoji}</span>
                <h3 className="font-serif font-bold text-foreground">{value.title}</h3>
              </div>
              {value.desc && (
                <p className="text-muted-foreground leading-relaxed mb-3">{value.desc}</p>
              )}
              {value.items.length > 0 && (
                <ul className="space-y-1">
                  {value.items.filter(item => item !== "").map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
