import { SiteHeader } from "@/components/site-specific/layout/header";

export default async function LandingLayout({
  children,
}: {children: React.ReactNode}) {
  return (
    <div className="relative">
      <SiteHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
