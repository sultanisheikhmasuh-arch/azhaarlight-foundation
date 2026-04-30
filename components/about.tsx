"use client"

import { Heart, Users, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  const pillars = [
    {
      icon: Heart,
      title: t.about.pillar1Title,
      description: t.about.pillar1Desc,
      color: "primary",
    },
    {
      icon: Users,
      title: t.about.pillar2Title,
      description: t.about.pillar2Desc,
      color: "secondary",
    },
    {
      icon: Globe,
      title: t.about.pillar3Title,
      description: t.about.pillar3Desc,
      color: "primary",
    },
  ]

  return (
    <section id="apropos" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center p-6">
              <div className={`w-16 h-16 ${pillar.color === "primary" ? "bg-primary/10" : "bg-secondary/10"} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <pillar.icon className={`h-8 w-8 ${pillar.color === "primary" ? "text-primary" : "text-secondary"}`} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
