// app/layout.tsx
// Remplacez votre export metadata existant par celui-ci :

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://azhaarlight-foundation-one.vercel.app"),
  title: {
    default: "AzhaarLight Foundation — ONG humanitaire au Burundi",
    template: "%s | AzhaarLight Foundation",
  },
  description:
    "AzhaarLight Foundation soutient les personnes vulnérables au Burundi : orphelins, femmes, personnes âgées. Faites un don, devenez bénévole ou partenaire.",
  keywords: [
    "ONG Burundi",
    "humanitaire Afrique",
    "don orphelins",
    "AzhaarLight",
    "aide Burundi",
    "zakat sadaqah",
  ],
  openGraph: {
    title: "AzhaarLight Foundation — Rising Together, Changing Lives",
    description:
      "Soutenez les personnes vulnérables au Burundi. Chaque don transforme une vie.",
    url: "https://azhaarlight-foundation-one.vercel.app",
    siteName: "AzhaarLight Foundation",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/azhaarlight-logo.jpg",
        width: 800,
        height: 600,
        alt: "AzhaarLight Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@azhaarlight",
    title: "AzhaarLight Foundation",
    description:
      "ONG humanitaire au Burundi. Soutenez les personnes vulnérables.",
    images: ["/images/azhaarlight-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
