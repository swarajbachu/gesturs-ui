
// This file is autogenerated by scripts/build-preview-imports.ts
// Do not edit this file directly.
import React from "react";

export const previews = {
  "/ui/badge-demos/badge": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/badge-demos/badge")),
      code : [{"title":"badge.tsx","code":"import { Badge } from \"@/components/ui/badge\";\nimport React from \"react\";\n\nexport default function BadgeDemo() {\n  return (\n    <div>\n      <Badge>\n        documentation\n      </Badge>\n    </div>\n  );\n}\n"}]
    },
    "/ui/badge-demos/badge-variants": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/badge-demos/badge-variants")),
      code : [{"title":"badge-variants.tsx","code":"import { Badge } from \"@/components/ui/badge\";\nimport React from \"react\";\n\nexport default function BadgeDemo() {\n  return (\n    <div className=\"grid grid-cols-2 gap-2\">\n      <Badge>documentation</Badge>\n      <Badge variant=\"filled\">documentation</Badge>\n    </div>\n  );\n}\n"}]
    },
    "/ui/badge-demos/badge-colors": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/badge-demos/badge-colors")),
      code : [{"title":"badge-colors.tsx","code":"import { Badge } from \"@/components/ui/badge\";\nimport { BanIcon, DollarSign } from \"lucide-react\";\nimport React from \"react\";\n\nexport default function BadgeDemo() {\n  return (\n    <div className=\"grid grid-cols-4 gap-2\">\n      <Badge color=\"primary\">Primary</Badge>\n      <Badge color=\"amber\">Amber</Badge>\n      <Badge color=\"emerald\">Emerald</Badge>\n      <Badge color=\"red\">Red</Badge>\n      <Badge color=\"blue\">Blue</Badge>\n      <Badge color=\"green\">Green</Badge>\n      <Badge color=\"yellow\">Yellow</Badge>\n      <Badge color=\"gray\">Gray</Badge>\n      <Badge color=\"indigo\">Indigo</Badge>\n      <Badge color=\"pink\">Pink</Badge>\n      <Badge color=\"purple\">Purple</Badge>\n      <Badge color=\"teal\">Teal</Badge>\n      <Badge color=\"orange\">Orange</Badge>\n      <Badge color=\"cyan\">Cyan</Badge>\n      <Badge color=\"sky\">Light Blue</Badge>\n      <Badge color=\"lime\">Lime</Badge>\n      <Badge color=\"rose\">Rose</Badge>\n    </div>\n  );\n}\n"}]
    },
    "/ui/badge-demos/badge-sizes": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/badge-demos/badge-sizes")),
      code : [{"title":"badge-sizes.tsx","code":"import { Badge } from \"@/components/ui/badge\";\nimport React from \"react\";\n\nexport default function BadgeDemo() {\n  return (\n    <div className=\"grid grid-cols-3 gap-2\">\n      <Badge size=\"sm\">size sm</Badge>\n      <Badge>sime md(default)</Badge>\n      <Badge size=\"lg\">sime md(default)</Badge>\n    </div>\n  );\n}\n"}]
    },
    "/ui/badge-demos/badge-sections": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/badge-demos/badge-sections")),
      code : [{"title":"badge-sections.tsx","code":"import { Badge } from \"@/components/ui/badge\";\nimport { BanIcon, DollarSign } from \"lucide-react\";\nimport React from \"react\";\n\nexport default function BadgeDemo() {\n  return (\n    <div className=\"grid grid-cols-2 gap-2\">\n      <Badge leftSection={<DollarSign />}>$15</Badge>\n      <Badge rightSection={<BanIcon />}>Ban</Badge>\n    </div>\n  );\n}\n"}]
    },
    "ui/breadcrumbs-demos/breadcrumbs": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/breadcrumbs-demos/breadcrumbs")),
      code : [{"title":"breadcrumbs.tsx","code":"import React from \"react\";\nimport { Breadcrumbs, Breadcrumb } from \"@/components/ui/breadcrumbs\";\n\nexport default function BreadCrumbsDemo() {\n  return (\n    <Breadcrumbs>\n      <Breadcrumb href=\"#\">Home</Breadcrumb>\n      <Breadcrumb href=\"#\">Components</Breadcrumb>\n      <Breadcrumb href=\"#\">Breadcrumbs</Breadcrumb>\n    </Breadcrumbs>\n  );\n}\n"}]
    },
    "ui/breadcrumbs-demos/breadcrumbs-disabled": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/breadcrumbs-demos/breadcrumbs-disabled")),
      code : [{"title":"breadcrumbs-disabled.tsx","code":"import React from \"react\";\nimport { Breadcrumbs, Breadcrumb } from \"@/components/ui/breadcrumbs\";\n\nexport default function BreadCrumbsDemo() {\n  return (\n    <Breadcrumbs isDisabled>\n      <Breadcrumb href=\"#\">Home</Breadcrumb>\n      <Breadcrumb href=\"#\">Components</Breadcrumb>\n      <Breadcrumb href=\"#\">Breadcrumbs</Breadcrumb>\n    </Breadcrumbs>\n  );\n}\n"}]
    },
    "ui/breadcrumbs-demos/breadcrumbs-seperator": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/breadcrumbs-demos/breadcrumbs-seperator")),
      code : [{"title":"breadcrumbs-seperator.tsx","code":"import React from \"react\";\nimport { Breadcrumbs, Breadcrumb } from \"@/components/ui/breadcrumbs\";\nimport { ArrowRight, ComponentIcon, HomeIcon } from \"lucide-react\";\n\nexport default function BreadCrumbsDemo() {\n  return (\n    <Breadcrumbs>\n      <Breadcrumb href=\"#\" separator={<ArrowRight />}>\n        Home\n      </Breadcrumb>\n      <Breadcrumb href=\"#\" separator={<ArrowRight />}>\n        Components\n      </Breadcrumb>\n      <Breadcrumb href=\"#\">Breadcrumbs</Breadcrumb>\n    </Breadcrumbs>\n  );\n}\n"}]
    },
    "ui/breadcrumbs-demos/breadcrumbs-sections": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/breadcrumbs-demos/breadcrumbs-sections")),
      code : [{"title":"breadcrumbs-sections.tsx","code":"import React from \"react\";\nimport { Breadcrumbs, Breadcrumb } from \"@/components/ui/breadcrumbs\";\nimport { ComponentIcon, HomeIcon } from \"lucide-react\";\n\nexport default function BreadCrumbsDemo() {\n  return (\n    <Breadcrumbs>\n      <Breadcrumb href=\"#\" leftSection={<HomeIcon />}>\n        Home\n      </Breadcrumb>\n      <Breadcrumb href=\"#\" leftSection={<ComponentIcon />}>\n        Components\n      </Breadcrumb>\n      <Breadcrumb href=\"#\">Breadcrumbs</Breadcrumb>\n    </Breadcrumbs>\n  );\n}\n"}]
    },
    "ui/breadcrumbs-demos/breadcrumbs-example": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/breadcrumbs-demos/breadcrumbs-example")),
      code : [{"title":"breadcrumbs-example.tsx","code":"'use client';\n\nimport React from \"react\";\nimport { Breadcrumbs, Breadcrumb } from \"@/components/ui/breadcrumbs\";\nimport { usePathname } from \"next/navigation\";\n\nexport default function BreadCrumbsDemo() {\n  const pathname = usePathname();\n\n  const items = pathname.split(\"/\").filter(Boolean);\n\n  return (\n    <Breadcrumbs>\n      {items.map((item, i) => (\n        <Breadcrumb key={item} href={`/${items.slice(0, i + 1).join(\"/\")}`}>\n          {item}\n        </Breadcrumb>\n      ))}\n    </Breadcrumbs>\n  );\n}\n"}]
    },
    "ui/button-demos/button": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/button-demos/button")),
      code : [{"title":"button.tsx","code":"import { Button } from \"@/components/ui/button\";\nimport React from \"react\";\n\nexport default function Demo() {\n  return <Button>Click me</Button>;\n}\n"}]
    },
    "ui/button-demos/button-variants": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/button-demos/button-variants")),
      code : [{"title":"button-variants.tsx","code":"\"use client\";\n\nimport { Button } from \"@/components/ui/button\";\nimport React from \"react\";\n\nexport default function ButtonVariants() {\n  return (\n    <div className=\"flex gap-2 items-center flex-wrap\">\n      <Button>Primary</Button>\n      <Button variant=\"secondary\" border={false}>\n        Secondary\n      </Button>\n      <Button variant=\"destructive\">Destructive</Button>\n      <Button variant=\"outline\">Outline</Button>\n      <Button variant=\"ghost\">Ghost</Button>\n    </div>\n  );\n}\n"}]
    },
    "ui/button-demos/button-sizes": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/button-demos/button-sizes")),
      code : [{"title":"button-sizes.tsx","code":"\"use client\";\n\nimport { Button } from \"@/components/ui/button\";\nimport { KeyIcon } from \"lucide-react\";\nimport React from \"react\";\n\nexport default function ButtonVariants() {\n  return (\n    <div className=\"flex gap-2 items-center flex-wrap\">\n      <Button size=\"icon\">\n        <KeyIcon />\n      </Button>\n      <Button size=\"sm\">Click Me</Button>\n      <Button>Click Me</Button>\n      <Button size=\"lg\">Click Me</Button>\n    </div>\n  );\n}\n"}]
    },
    "ui/button-demos/button-link": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/button-demos/button-link")),
      code : [{"title":"button-link.tsx","code":"\"use client\";\n\nimport { Button } from \"@/components/ui/button\";\nimport { KeyIcon, PhoneIcon } from \"lucide-react\";\nimport React from \"react\";\n\nexport default function ButtonVariants() {\n  return (\n    <div className=\"flex gap-2 items-center flex-wrap\">\n      <Button href=\"/contact-us\" leftSection={<PhoneIcon />}>\n        Contact Us\n      </Button>\n    </div>\n  );\n}\n"}]
    },
    "ui/button-demos/button-disabled": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/button-demos/button-disabled")),
      code : [{"title":"button-disabled.tsx","code":"\"use client\";\n\nimport { Button } from \"@/components/ui/button\";\nimport { KeyIcon } from \"lucide-react\";\nimport React from \"react\";\n\nexport default function ButtonVariants() {\n  return (\n    <div className=\"flex gap-2 items-center flex-wrap\">\n      <Button isDisabled>Disabled</Button>\n    </div>\n  );\n}\n"}]
    },
    "ui/button-demos/button-loading": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/button-demos/button-loading")),
      code : [{"title":"button-loading.tsx","code":"\"use client\";\n\nimport { Button } from \"@/components/ui/button\";\nimport { KeyIcon } from \"lucide-react\";\nimport React from \"react\";\n\nexport default function ButtonVariants() {\n  return (\n    <div className=\"flex gap-2 items-center flex-wrap\">\n      <Button isLoading>loading</Button>\n    </div>\n  );\n}\n"}]
    },
    "ui/button-demos/button-sections": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/button-demos/button-sections")),
      code : [{"title":"button-sections.tsx","code":"\"use client\";\n\nimport { Button } from \"@/components/ui/button\";\nimport { KeyIcon } from \"lucide-react\";\nimport React from \"react\";\n\nexport default function ButtonVariants() {\n  return (\n    <div className=\"flex gap-2 items-center flex-wrap\">\n      <Button rightSection={<KeyIcon />}>Open Lock</Button>\n      <Button leftSection={<KeyIcon />}>Open Lock</Button>\n    </div>\n  );\n}\n"}]
    },
    "/ui/card-demos/card": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/card-demos/card")),
      code : [{"title":"card.tsx","code":"import { Button } from \"@/components/ui/button\";\nimport {\n  Card,\n  CardContent,\n  CardFooter,\n  CardHeader,\n  CardSection,\n} from \"@/components/ui/card\";\nimport Image from \"next/image\";\nimport React from \"react\";\n\nexport default function CardDemo() {\n  return (\n    <Card>\n      <CardHeader>\n        <Image\n          src=\"https://images.unsplash.com/photo-1548501495-34f5ec33c530\"\n          height={160}\n          width={300}\n          alt=\"Norway\"\n        />\n      </CardHeader>\n      <CardContent className=\"w-full\">\n        <h1 className=\"text-lg font-semibold\">Ladakh Bike ride India</h1>\n        <p className=\"text-sm\">\n          The Ladakh Bike Ride is one of the most exciting and adventurous bike\n          rides in India. The bike ride takes you through the beautiful\n          landscapes of Ladakh.\n        </p>\n      </CardContent>\n\n      <CardFooter>\n        <Button fullWidth>Book Now</Button>\n      </CardFooter>\n    </Card>\n  );\n}\n"}]
    },
    "/ui/card-demos/card-section": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/card-demos/card-section")),
      code : [{"title":"card-section.tsx","code":"import { Button } from \"@/components/ui/button\";\nimport {\n  Card,\n  CardContent,\n  CardFooter,\n  CardSection,\n} from \"@/components/ui/card\";\nimport Image from \"next/image\";\nimport React from \"react\";\n\nexport default function CardDemo() {\n  return (\n    <Card>\n      <CardSection>\n        <Image\n          src=\"https://images.unsplash.com/photo-1548501495-34f5ec33c530\"\n          height={160}\n          width={300}\n          alt=\"Norway\"\n        />\n      </CardSection>\n      <CardContent className=\"w-full\">\n        <h1 className=\"text-lg font-semibold\">Ladakh Bike ride India</h1>\n        <p className=\"text-sm\">\n          The Ladakh Bike Ride is one of the most exciting and adventurous bike\n          rides in India. The bike ride takes you through the beautiful\n          landscapes of Ladakh.\n        </p>\n      </CardContent>\n      <CardFooter>\n        <Button fullWidth>Book Now</Button>\n      </CardFooter>\n    </Card>\n  );\n}\n"}]
    },
    "/ui/card-demos/card-header": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/card-demos/card-header")),
      code : [{"title":"card-header.tsx","code":"import { Button } from \"@/components/ui/button\";\nimport {\n  Card,\n  CardContent,\n  CardHeader,\n  CardFooter\n} from \"@/components/ui/card\";\nimport Image from \"next/image\";\nimport React from \"react\";\n\nexport default function CardDemo() {\n  return (\n    <Card>\n      <CardHeader className=\"py-4\">\n        <h2 className=\"text-lg font-semibold\">Ladakh Trip Sale</h2>\n      </CardHeader>\n      <CardContent className=\"w-full space-y-3\">\n        <h1 className=\"text-lg font-semibold\">Ladakh Bike ride India</h1>\n        <p className=\"text-sm\">\n          The Ladakh Bike Ride is one of the most exciting and adventurous bike\n          rides in India. The bike ride takes you through the beautiful\n          landscapes of Ladakh.\n        </p>\n      </CardContent>\n      <CardFooter>\n        <Button fullWidth>Book Now</Button>\n      </CardFooter>\n    </Card>\n  );\n}\n"}]
    },
    "/ui/card-demos/card-content": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/card-demos/card-content")),
      code : [{"title":"card-content.tsx","code":"import { Button } from \"@/components/ui/button\";\nimport {\n  Card,\n  CardContent,\n  CardHeader,\n  CardFooter,\n} from \"@/components/ui/card\";\nimport Image from \"next/image\";\nimport React from \"react\";\n\nexport default function CardDemo() {\n  return (\n    <Card>\n      <CardContent className=\"w-full space-y-3\">\n        <h1 className=\"text-lg font-semibold\">Ladakh Bike ride India</h1>\n        <p className=\"text-sm\">\n          The Ladakh Bike Ride is one of the most exciting and adventurous bike\n          rides in India. The bike ride takes you through the beautiful\n          landscapes of Ladakh.\n        </p>\n        <Button>Book Now</Button>\n      </CardContent>\n    </Card>\n  );\n}\n"}]
    },
    "/ui/card-demos/card-horizontal": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/card-demos/card-horizontal")),
      code : [{"title":"card-horizontal.tsx","code":"import { Button } from \"@/components/ui/button\";\nimport {\n  Card,\n  CardContent,\n  CardFooter,\n  CardSection,\n} from \"@/components/ui/card\";\nimport Image from \"next/image\";\nimport React from \"react\";\n\nexport default function CardDemo() {\n  return (\n    <Card horizontal className=\"w-fit max-w-[500px]\">\n      <CardSection>\n        <Image\n          src=\"https://images.unsplash.com/photo-1548501495-34f5ec33c530\"\n          height={160}\n          width={300}\n          alt=\"Norway\"\n        />\n      </CardSection>\n      <CardContent className=\"w-full\">\n        <h1 className=\"text-lg font-semibold\">Ladakh Bike ride India</h1>\n        <p className=\"text-sm\">\n          The Ladakh Bike Ride is one of the most exciting and adventurous bike\n          rides in India. The bike ride takes you through the beautiful\n          landscapes of Ladakh.\n        </p>\n        <Button>Book Now</Button>\n      </CardContent>\n    </Card>\n  );\n}\n"}]
    },
    "/ui/card-demos/card-examples/profile-card": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/card-demos/card-examples/profile-card")),
      code : [{"title":"profile-card.tsx","code":"import { Icons } from \"@/components/site-specific/icons\";\nimport { Button } from \"@/components/ui/button\";\nimport {\n  Card,\n  CardContent,\n  CardFooter,\n  CardSection,\n} from \"@/components/ui/card\";\nimport { ArrowRight } from \"lucide-react\";\nimport { FaTwitter, FaInstagram, FaLinkedin } from \"react-icons/fa\";\nimport Image from \"next/image\";\nimport React from \"react\";\nimport Link from \"next/link\";\n\nexport default function CardDemo() {\n  return (\n    <Card>\n      <CardContent>\n        <Image\n          src=\"https://images.unsplash.com/photo-1564463836146-4e30522c2984\"\n          height={160}\n          width={300}\n          alt=\"Norway\"\n          className=\"w-full rounded-md shadow-md\"\n        />\n      </CardContent>\n      <CardContent className=\"w-full pt-0\">\n        <h1 className=\"text-lg font-semibold\">Alexa Banter</h1>\n        <p className=\"text-sm\">\n          CEO of Flex Entertainment, a record label that has signed artists like\n        </p>\n      </CardContent>\n      <CardFooter className=\"flex justify-between items-center\">\n        <Button\n          variant=\"primary\"\n          href=\"#\"\n          rightSection={<ArrowRight size={16} />}\n        >\n          Details\n        </Button>\n        <div className=\"flex items-center space-x-2 text-2xl mt-4\">\n          <Link href=\"#\">\n            <FaLinkedin />\n          </Link>\n          <Link href=\"#\">\n            <FaTwitter />\n          </Link>\n          <Link href=\"#\">\n            <FaInstagram />\n          </Link>\n        </div>\n      </CardFooter>\n    </Card>\n  );\n}\n"}]
    },
    "/ui/card-demos/card-examples/pricing-card": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/card-demos/card-examples/pricing-card")),
      code : [{"title":"pricing-card.tsx","code":"import { Button } from \"@/components/ui/button\";\nimport { Card, CardContent, CardFooter } from \"@/components/ui/card\";\nimport { ArrowRight } from \"lucide-react\";\nimport React from \"react\";\nimport { FaCircleCheck } from \"react-icons/fa6\";\n\nconst features = [\n  \"Get 5 GB of storage\",\n  \"300 uploads per month\",\n  \"500 downloads per month\",\n  \"Feedback from users\",\n  \"30 days of free support\",\n  \"Unlimited Access\",\n];\n\nexport default function CardDemo() {\n  return (\n    <Card className=\"w-fit\">\n      <CardContent className=\"space-y-5 text-center\">\n        <h4 className=\"font-bold\">Starter Plan</h4>\n        <h1 className=\"flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-6xl\">\n          <span className=\"mt-2 text-3xl\">$</span>29\n          <span className=\"self-end text-4xl\">/mo</span>\n        </h1>\n        <hr className=\"border border-zinc-600\" />\n      </CardContent>\n      <CardContent className=\"w-full pt-0 space-y-4\">\n        {features.map((feature) => (\n          <div key={feature} className=\"flex items-center space-x-2\">\n            <FaCircleCheck className=\"text-2xl\" />\n            <p>{feature}</p>\n          </div>\n        ))}\n      </CardContent>\n      <CardFooter className=\"flex justify-between items-center\">\n        <Button\n          variant=\"primary\"\n          href=\"#\"\n          fullWidth\n          rightSection={<ArrowRight size={16} />}\n        >\n          Buy Now\n        </Button>\n      </CardFooter>\n    </Card>\n  );\n}\n"}]
    },
    "/ui/card-demos/card-examples/blog-card": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/card-demos/card-examples/blog-card")),
      code : [{"title":"blog-card.tsx","code":"import { Button } from \"@/components/ui/button\";\nimport {\n  Card,\n  CardContent,\n  CardFooter,\n  CardSection,\n} from \"@/components/ui/card\";\nimport { ArrowRight } from \"lucide-react\";\nimport Image from \"next/image\";\nimport React from \"react\";\n\nexport default function CardDemo() {\n  return (\n    <Card>\n      <CardSection>\n        <Image\n          src=\"https://images.unsplash.com/photo-1548501495-34f5ec33c530\"\n          height={160}\n          width={300}\n          alt=\"Norway\"\n        />\n      </CardSection>\n      <CardContent className=\"w-full\">\n        <h1 className=\"text-lg font-semibold\">Ladakh Bike ride India</h1>\n        <p className=\"text-sm\">\n          The Ladakh Bike Ride is one of the most exciting and adventurous bike\n          rides in India. The bike ride takes you through the beautiful\n          landscapes of Ladakh.\n        </p>\n      </CardContent>\n      <CardFooter className=\"flex justify-between\">\n        <Button rightSection={<ArrowRight size={16} />} href=\"#\">\n          Details\n        </Button>\n        <h4 className=\"text-lg font-semibold\">14 July 2024</h4>\n      </CardFooter>\n    </Card>\n  );\n}\n"}]
    },
    "/ui/input-demos/input": {
      component: React.lazy<React.FC>(() => import("@/registry/components//ui/input-demos/input")),
      code : [{"title":"input.tsx","code":"\"use client\";\n\nimport { TextField } from \"@/components/ui/text-field\";\nimport React from \"react\";\n\nexport default function InputDemo() {\n  return (\n    <div>\n      <TextField label=\"Name\" placeholder=\"Enter your name\" />\n    </div>\n  );\n}\n"}]
    },
    "ui/input-demos/input-label": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/input-demos/input-label")),
      code : [{"title":"input-label.tsx","code":"\"use client\";\n\nimport { TextField } from \"@/components/ui/text-field\";\nimport React from \"react\";\n\nexport default function InputDemo() {\n  return (\n    <div className=\"grid grid-cols-2 gap-4\">\n      <TextField\n        label=\"Enter website url\"\n        placeholder=\"website url\"\n        leftSection={<span>https://</span>}\n      />\n      <TextField\n        aria-label=\"Enter website url\"\n        placeholder=\"Enter website url\"\n        leftSection={<span>https://</span>}\n      />\n    </div>\n  );\n}\n"}]
    },
    "ui/input-demos/input-description": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/input-demos/input-description")),
      code : [{"title":"input-description.tsx","code":"\"use client\";\n\nimport { TextField } from \"@/components/ui/text-field\";\nimport React from \"react\";\n\nexport default function InputDemo() {\n  return (\n    <div className=\"grid grid-cols-2 gap-4\">\n      <TextField\n        label=\"Website Url\"\n        placeholder=\"website url\"\n        type=\"url\"\n        description=\"Enter the website url of your portfolio\"\n        leftSection={<span>https://</span>}\n      />\n      <TextField\n        label=\"Password\"\n        description=\"your password must be 8 characters long\"\n        descriptionPosition=\"bottom\"\n        type=\"password\"\n      />\n    </div>\n  );\n}\n"}]
    },
    "ui/input-demos/input-required": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/input-demos/input-required")),
      code : [{"title":"input-required.tsx","code":"\"use client\";\n\nimport { TextField } from \"@/components/ui/text-field\";\nimport React from \"react\";\n\nexport default function InputDemo() {\n  return (\n    <div className=\"grid grid-cols-2 gap-4\">\n      <TextField\n        label=\"Website Url (required)\"\n        placeholder=\"website url\"\n        type=\"url\"\n        isRequired\n      />\n      <TextField\n        label=\"Website Url\"\n        placeholder=\"website url\"\n        type=\"url\"\n        isRequired\n        withAsterisk\n      />\n    </div>\n  );\n}\n"}]
    },
    "ui/input-demos/input-error": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/input-demos/input-error")),
      code : [{"title":"input-error.tsx","code":"\"use client\";\n\nimport { TextField } from \"@/components/ui/text-field\";\nimport React from \"react\";\n\nexport default function InputDemo() {\n  return (\n    <div >\n      <TextField\n        label=\"Password\"\n        isInvalid\n        errorMessage=\"your password must be 8 characters long\"\n        type=\"password\"\n      />\n    </div>\n  );\n}\n"}]
    },
    "ui/input-demos/input-loading": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/input-demos/input-loading")),
      code : [{"title":"input-loading.tsx","code":"\"use client\";\n\nimport { TextField } from \"@/components/ui/text-field\";\nimport React from \"react\";\n\nexport default function InputDemo() {\n  return (\n    <div className=\"grid grid-cols-2 gap-4\">\n      <TextField\n        placeholder=\"loaderPosition 'right'(default)\"\n        type=\"url\"\n        isLoading\n      />\n      <TextField\n        placeholder=\"loader position 'left'\"\n        type=\"url\"\n        isLoading\n        loaderPosition=\"left\"\n      />\n    </div>\n  );\n}\n"}]
    },
    "ui/input-demos/input-disabled": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/input-demos/input-disabled")),
      code : [{"title":"input-disabled.tsx","code":"\"use client\";\n\nimport { TextField } from \"@/components/ui/text-field\";\nimport React from \"react\";\n\nexport default function InputDemo() {\n  return (\n    <div className=\"grid\">\n      <TextField\n        placeholder=\"website url\"\n        type=\"url\"\n        isDisabled\n      />\n    </div>\n  );\n}\n"}]
    },
    "ui/input-demos/input-read": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/input-demos/input-read")),
      code : [{"title":"input-read.tsx","code":"\"use client\";\n\nimport { TextField } from \"@/components/ui/text-field\";\nimport React from \"react\";\n\nexport default function InputDemo() {\n  return (\n    <div>\n      <TextField\n        label=\"Website Url\"\n        placeholder=\"website url\"\n        type=\"url\"\n        value=\"https://example.com\"\n        isReadOnly\n      />\n    </div>\n  );\n}\n"}]
    },
    "ui/input-demos/input-sections": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/input-demos/input-sections")),
      code : [{"title":"input-sections.tsx","code":"\"use client\";\n\nimport { Button } from \"@/components/ui/button\";\nimport { TextField } from \"@/components/ui/text-field\";\nimport { CrossIcon, SearchIcon, XIcon } from \"lucide-react\";\nimport React from \"react\";\n\nexport default function InputDemo() {\n  const [value, setValue] = React.useState(\"\");\n  return (\n    <div className=\"grid grid-cols-2 gap-4\">\n      <TextField\n        placeholder=\"website url\"\n        leftSection={<span>https://</span>}\n      />\n      <TextField\n        placeholder=\"email\"\n        rightSection={<span>@gesturs.com</span>}\n      />\n      <TextField\n        label=\"Search\"\n        placeholder=\"Search in the App\"\n        leftSection={<SearchIcon />}\n      />\n      <TextField\n        label=\"Search\"\n        placeholder=\"Search in the App\"\n        value={value}\n        rightSection={\n          <Button variant=\"ghost\" size=\"icon\" onPress={() => setValue(\"\")}>\n            <XIcon />\n          </Button>\n        }\n      />\n    </div>\n  );\n}\n"}]
    },
    "ui/input-demos/input-size": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/input-demos/input-size")),
      code : [{"title":"input-size.tsx","code":"\"use client\";\n\nimport { TextField } from \"@/components/ui/text-field\";\nimport React from \"react\";\n\nexport default function InputDemo() {\n  return (\n    <div className=\"grid grid-cols-2 gap-4\">\n      <TextField placeholder=\"sm\" size=\"sm\" />\n      <TextField placeholder=\"md ( default )\" />\n      <TextField placeholder=\"lg\" size=\"lg\" />\n      <TextField placeholder=\"xl\" size=\"xl\" />\n    </div>\n  );\n}\n"}]
    },
    "ui/input-demos/input-composition": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/input-demos/input-composition")),
      code : [{"title":"input-composition.tsx","code":"import { Description, Label } from \"@/components/ui/field\";\nimport { Input } from \"@/components/ui/input\";\nimport { TextFieldRoot } from \"@/components/ui/text-field\";\nimport React from \"react\";\n\nexport default function InputComposition() {\n  return (\n    <div>\n      <TextFieldRoot>\n        <Label>Website Url</Label>\n        <Description>Enter the website url</Description>\n        <Input placeholder=\"website url\" type=\"url\" />\n      </TextFieldRoot>\n    </div>\n  );\n}\n"}]
    },
  }