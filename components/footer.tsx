"use client"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const TikTokIcon = () => (
  <svg className="h-5 w-5 text-background" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
  </svg>
)

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61589285276789", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/azhaarlight", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/azhaarlight", label: "Twitter/X" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCAPxLUnCa_eQYAusD8i49jw", label: "YouTube" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@azhaarlight", label: "TikTok" },
]

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { label: t.nav.home, href: "#accueil" },
    { label: t.nav.about, href: "#apropos" },
    { label: t.nav.mission, href: "#mission" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">

          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/azhaarlight-logo.jpg"
                alt="AzhaarLight Foundation Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-serif font-bold text-lg text-background">
                AzhaarLight Foundation
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed italic">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">{t.footer.followUs}</h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-background" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center">
          <p className="text-background/60 text-sm">
            {new Date().getFullYear()} AzhaarLight Foundation. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
