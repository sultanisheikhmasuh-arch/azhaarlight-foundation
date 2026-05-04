"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Users, Calendar, MapPin } from "lucide-react"

function useCountUp(target: number, duration: number = 2000, started: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return count
}

export function AnimatedStats() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const people = useCountUp(50, 2000, started)
  const year = useCountUp(2025, 1500, started)

  return (
    <div ref={ref} className="bg-primary py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="text-center">
            <Users className="h-6 w-6 text-primary-foreground/70 mx-auto mb-1" />
            <p className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">
              {started ? `${people}+` : "0+"}
            </p>
            <p className="text-primary-foreground/80 text-sm">{t.hero.stat1}</p>
          </div>
          <div className="text-center">
            <Calendar className="h-6 w-6 text-primary-foreground/70 mx-auto mb-1" />
            <p className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">
              {started ? year : "0"}
            </p>
            <p className="text-primary-foreground/80 text-sm">{t.hero.stat2}</p>
          </div>
          <div className="text-center">
            <MapPin className="h-6 w-6 text-primary-foreground/70 mx-auto mb-1" />
            <p className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">
              Burundi
            </p>
            <p className="text-primary-foreground/80 text-sm">{t.hero.stat3}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
