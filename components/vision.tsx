"use client"

import { TrendingUp, Users, School, Home } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Vision() {
  const { t } = useLanguage()

  const goals = [
    {
      icon: Users,
      stat: t.vision.stat1Value,
      label: t.vision.stat1Label,
    },
    {
      icon: School,
      stat: t.vision.stat2Value,
      label: t.vision.stat2Label,
    },
    {
      icon: Home,
      stat: t.vision.stat3Value,
      label: t.vision.stat3Label,
    },
    {
      icon: TrendingUp,
      stat: t.vision.stat4Value,
      label: t.vision.stat4Label,
    },
  ]

  return (
    <section id="vision" className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            {t.vision.title}
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            {t.vision.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {goals.map((goal, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <goal.icon className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{goal.stat}</div>
              <div className="text-sm opacity-80">{goal.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
