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
          title: "Why React Aria Components?",
          href: "/docs/why-react-aria-components",
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
          title: "Button",
          href: "/docs/components/button",
          items: [],
          label: "New",
        },
        {
          title: "Breadcrumb",
          href: "/docs/components/breadcrumbs",
          items: [],
        },
        {
          title: "Card",
          href: "/docs/components/card",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/components/input",
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
        },
        {
          title: "Kbd",
          href: "/docs/components/kbd",
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
        },
      ],
      href: "/docs/components",
    },
    {
      title: "Gesturs",
      items: [
        {
          title: "Link Image",
          href: "/docs/gesturs/link-image",
        },
        {
          title: "Sticky Mouse",
          href: "/docs/gesturs/sticky-mouse",
        },
        {
          title: "Compare Images",
          href: "/docs/gesturs/compare-image",
        },
        {
          title: "Swipe Cards",
          href: "/docs/gesturs/swipe-cards",
        },
        {
          title: "Gooey Effect",
          href: "/docs/gesturs/gooey-menu",
        },
        // {
        //   title: "Gooey Button",
        //   href: "/docs/gesturs/gooey-buttons",
        // },
      ],
      label: "Cool Stuff",
    },
  ],
};
