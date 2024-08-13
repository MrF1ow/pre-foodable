export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Foodable",
  description: "Making food more doable.",
  navItems: [
    {
      label: "Features",
      href: "/",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Features",
      href: "/",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/MrF1ow/foodable-app",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
