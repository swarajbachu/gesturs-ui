import { MainNavItem, SidebarNavItem } from "@/types";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Link Image",
          href: "/docs/components/link-image",
        },
        {
          title: "Sticky Mouse",
          href: "/docs/components/sticky-mouse",
        },
        {
          title: "Compare Images",
          href: "/docs/components/compare-image",
        },
        {
          title: "Swipe Cards",
          href: "/docs/components/swipe-cards",
        },
        {
          title: "Gooey Menu",
          href: "/docs/components/gooey-menu",
        },
        {
          title: "Gooey Button",
          href: "/docs/components/gooey-buttons",
        },
      ],
      label: "Cool Stuff",
      href: "/docs/components/",
    },
    {
      title: "Sections",
      items: [
        {
          title: "Hero Section",
          href: "/docs/sections/hero",
        },
      ],
    },
  ],
};
