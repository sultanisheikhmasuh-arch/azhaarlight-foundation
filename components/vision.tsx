"use client"

import { useLanguage } from "@/lib/language-context"

export function Vision() {
  const { t } = useLanguage()

  const objectives = [
    {
      emoji: "📊",
      title: t.vision.obj1Title,
      items: [t.vision.obj1a, t.vision.obj1b, t.vision.obj1c, t.vision.obj1d],
    },
    {
      emoji: "🏗️",
      title: t.vision.obj2Title,
      items: [t.vision.obj2a, t.vision.obj2b, t.vision.obj2c, t.vision.obj2d],
    },
    {
      emoji: "💪",
      title: t.vision.obj3Title,
      items: [t.vision.obj3a, t.vision.obj3b, t.vision.obj3c, t.vision.obj3d],
    },
    {
      emoji: "🤝",
      title: t.vision.obj4Title,
      items: [t.vision.obj4a, t.vision.obj4b, t.vision.obj4c, t.vision.obj4d],
    },
  ]

  const dreams = [
    t.vision.dream1,
    t.vision.dream2,
    t.vision.dream3,
    t.vision.dream4,
    t.vision.dream5,
  ]

  return (
    <section id="vision" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-3 block">
            {t.vision.sectionLabel}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.vision.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.vision.subtitle}
          </p>
        </div>

        {/* Strategic Objectives */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            {t.vision.objTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((obj, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{obj.emoji}</span>
                  <h4 className="font-serif font-bold text-foreground">{obj.title}</h4>
                </div>
                <ul className="space-y-2">
                  {obj.items.filter(item => item !== "").map((item, i) => (
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

        {/* Long Term Vision Quote */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">
              {t.vision.longTermTitle}
            </h3>
            <p className="text-lg text-foreground font-serif italic leading-relaxed border-l-4 border-primary pl-6 text-left mb-8">
              "{t.vision.quote}"
            </p>
            <h4 className="font-serif font-bold text-foreground mb-4 text-left">
              {t.vision.dreamTitle}
            </h4>
            <ul className="space-y-3 text-left">
              {dreams.map((dream, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary text-lg mt-0.5">✦</span>
                  {dream}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
