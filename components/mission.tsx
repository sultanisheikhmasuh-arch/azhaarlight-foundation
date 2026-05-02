"use client"

import { Heart, BookOpen, Home, Briefcase, Users, Mic, GraduationCap, Stethoscope } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Mission() {
  const { t } = useLanguage()

  const beneficiaries = [
    { emoji: "👶", title: t.mission.ben1Title, items: [t.mission.ben1a, t.mission.ben1b, t.mission.ben1c] },
    { emoji: "👩", title: t.mission.ben2Title, items: [t.mission.ben2a, t.mission.ben2b, t.mission.ben2c, t.mission.ben2d] },
    { emoji: "👴", title: t.mission.ben3Title, items: [t.mission.ben3a, t.mission.ben3b, t.mission.ben3c, t.mission.ben3d] },
    { emoji: "🎓", title: t.mission.ben4Title, items: [t.mission.ben4a, t.mission.ben4b, t.mission.ben4c, t.mission.ben4d] },
    { emoji: "🏥", title: t.mission.ben5Title, items: [t.mission.ben5a, t.mission.ben5b, t.mission.ben5c, t.mission.ben5d] },
    { emoji: "🤝", title: t.mission.ben6Title, items: [t.mission.ben6a, t.mission.ben6b, t.mission.ben6c] },
  ]

  const domains = [
    { emoji: "🏥", title: t.mission.dom1Title, items: [t.mission.dom1a, t.mission.dom1b, t.mission.dom1c, t.mission.dom1d] },
    { emoji: "📚", title: t.mission.dom2Title, items: [t.mission.dom2a, t.mission.dom2b, t.mission.dom2c, t.mission.dom2d] },
    { emoji: "🍲", title: t.mission.dom3Title, items: [t.mission.dom3a, t.mission.dom3b, t.mission.dom3c, t.mission.dom3d] },
    { emoji: "💼", title: t.mission.dom4Title, items: [t.mission.dom4a, t.mission.dom4b, t.mission.dom4c, t.mission.dom4d] },
    { emoji: "💝", title: t.mission.dom5Title, items: [t.mission.dom5a, t.mission.dom5b, t.mission.dom5c, t.mission.dom5d] },
    { emoji: "🎤", title: t.mission.dom6Title, items: [t.mission.dom6a, t.mission.dom6b, t.mission.dom6c, t.mission.dom6d] },
    { emoji: "🎓", title: t.mission.dom7Title, items: [t.mission.dom7a, t.mission.dom7b, t.mission.dom7c, t.mission.dom7d] },
  ]

  return (
    <section id="mission" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-3 block">
            {t.mission.sectionLabel}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.mission.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Mission Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t.mission.desc1}
            </p>
            <p className="text-foreground font-medium leading-relaxed italic border-l-4 border-primary pl-4">
              {t.mission.desc2}
            </p>
          </div>
        </div>

        {/* Beneficiaries */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            {t.mission.benTitle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficiaries.map((ben, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{ben.emoji}</div>
                <h4 className="font-serif font-bold text-foreground mb-3">{ben.title}</h4>
                <ul className="space-y-1">
                  {ben.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Domains */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            {t.mission.domTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {domains.map((dom, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{dom.emoji}</span>
                  <h4 className="font-serif font-bold text-foreground">{dom.title}</h4>
                </div>
                <ul className="space-y-1">
                  {dom.items.filter(item => item !== "").map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
