// Liens réseaux sociaux — à mettre dans votre Footer.tsx
// Cherchez vos <a href="..."> autour des icônes Facebook, Instagram, etc.
// et remplacez les href par ces valeurs :

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589285276789",
    icon: <FacebookIcon />, // gardez votre icône existante
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/azhaarlight",
    icon: <InstagramIcon />,
  },
  {
    name: "Twitter / X",
    href: "https://x.com/azhaarlight",
    icon: <TwitterIcon />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCAPxLUnCa_eQYAusD8i49jw",
    icon: <YoutubeIcon />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@azhaarlight",
    icon: <TiktokIcon />,
  },
];

// Et dans le JSX :
{socialLinks.map((social) => (
  
    key={social.name}
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={social.name}
  >
    {social.icon}
  </a>
))}
