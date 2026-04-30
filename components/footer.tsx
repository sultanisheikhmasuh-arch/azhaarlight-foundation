"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61589101919095", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/azhaarlight_foundation", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/azhaarlight", label: "Twitter/X" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/azhaarlight-foundation", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@azhaarlight", label: "YouTube" },
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
          {/* Logo and Description */}
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

          {/* Quick Links */}
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

          {/* Social Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">{t.footer.followUs}</h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
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
            © {new Date().getFullYear()} AzhaarLight Foundation. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
