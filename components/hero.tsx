"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="accueil" className="relative py-16 lg:py-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 lg:mb-10">
            <Image
              src="/images/azhaarlight-logo.jpg"
              alt="AzhaarLight Foundation Logo"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
              priority
            />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            AzhaarLight Foundation
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-primary font-serif italic mb-6">
            {`"${t.hero.tagline}"`}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl text-pretty">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
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
            >
              <BookOpen className="mr-2 h-5 w-5" />
              {t.hero.learnMore}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
