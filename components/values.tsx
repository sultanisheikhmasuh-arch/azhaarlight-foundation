"use client"

import { Shield, Handshake, Eye, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Values() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Shield,
      title: t.values.value1Title,
      description: t.values.value1Desc,
    },
    {
      icon: Handshake,
      title: t.values.value2Title,
      description: t.values.value2Desc,
    },
    {
      icon: Eye,
      title: t.values.value3Title,
      description: t.values.value3Desc,
    },
    {
      icon: Sparkles,
      title: t.values.value4Title,
      description: t.values.value4Desc,
    },
  ]

  return (
    <section id="valeurs" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.values.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.values.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 text-center border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
