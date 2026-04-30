"use client"

import { Target, Lightbulb, HandHeart, GraduationCap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Mission() {
  const { t } = useLanguage()

  const missions = [
    {
      icon: HandHeart,
      title: t.mission.card1Title,
      description: t.mission.card1Desc,
    },
    {
      icon: GraduationCap,
      title: t.mission.card2Title,
      description: t.mission.card2Desc,
    },
    {
      icon: Target,
      title: t.mission.card3Title,
      description: t.mission.card3Desc,
    },
    {
      icon: Lightbulb,
      title: t.mission.card4Title,
      description: t.mission.card4Desc,
    },
  ]

  return (
    <section id="mission" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.mission.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.mission.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <mission.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
