"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Users, MapPin, Calendar, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: "50+", label: t.hero.stat1, icon: Users },
    { value: "2025", label: t.hero.stat2, icon: Calendar },
    { value: "Burundi", label: t.hero.stat3, icon: MapPin },
  ]

  return (
    <section id="accueil" className="relative">
      {/* Hero Banner */}
      <div className="relative py-20 lg:py-32 bg-gradient-to-b from-card to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/azhaarlight-logo.jpg"
                alt="AzhaarLight Foundation Logo"
                width={180}
                height={180}
                className="rounded-full shadow-lg"
                priority
              />
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              AzhaarLight Foundation
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-primary font-serif italic mb-6">
              {`"${t.hero.tagline}"`}
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                {t.hero.donate}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-6 text-lg"
                onClick={() => document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-6 w-6 text-primary-foreground/70 mx-auto mb-1" />
                <p className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-3 block">
                {t.hero.welcomeLabel}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.hero.welcomeTitle}
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {t.hero.welcomeDesc}
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{t.hero.card1Title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t.hero.card1Desc}</p>
                <Button size="sm" className="bg-primary text-primary-foreground w-full">
                  {t.hero.card1Button} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{t.hero.card2Title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t.hero.card2Desc}</p>
                <Button size="sm" variant="outline" className="border-secondary text-secondary w-full">
                  {t.hero.card2Button} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{t.hero.card3Title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t.hero.card3Desc}</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary w-full"
                  onClick={() => document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t.hero.card3Button} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
