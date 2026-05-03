"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.mission, href: "/mission" },
    { label: t.nav.vision, href: "/vision" },
    { label: t.nav.values, href: "/valeurs" },
    { label: t.nav.help, href: "/aider" },
    { label: t.nav.contact, href: "/contact" },
  ]

  const toggleLanguage = () => {
    setLocale(locale === "fr" ? "en" : "fr")
  }

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/azhaarlight-logo.jpg"
              alt="AzhaarLight Foundation Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="font-serif font-bold text-lg lg:text-xl text-foreground">
              AzhaarLight Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="ml-2 border-foreground/20 text-foreground/80"
              onClick={toggleLanguage}
            >
              {locale === "fr" ? "FR" : "EN"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="w-fit border-foreground/20 text-foreground/80 mt-2"
                onClick={toggleLanguage}
              >
                {locale === "fr" ? "FR" : "EN"}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
