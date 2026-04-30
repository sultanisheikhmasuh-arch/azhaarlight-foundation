"use client"

import { Button } from "@/components/ui/button"
import { Heart, Users, Megaphone, Gift } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HowToHelp() {
  const { t } = useLanguage()

  const ways = [
    {
      icon: Heart,
      title: t.help.card1Title,
      description: t.help.card1Desc,
      cta: t.help.card1Button,
      primary: true,
    },
    {
      icon: Users,
      title: t.help.card2Title,
      description: t.help.card2Desc,
      cta: t.help.card2Button,
      primary: false,
    },
    {
      icon: Megaphone,
      title: t.help.card3Title,
      description: t.help.card3Desc,
      cta: t.help.card3Button,
      primary: false,
    },
    {
      icon: Gift,
      title: t.help.card4Title,
      description: t.help.card4Desc,
      cta: t.help.card4Button,
      primary: false,
    },
  ]

  return (
    <section id="aider" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.help.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.help.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ways.map((way, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center border border-border flex flex-col"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <way.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {way.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {way.description}
              </p>
              <Button
                variant={way.primary ? "default" : "outline"}
                className={way.primary ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
                size="sm"
              >
                {way.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
