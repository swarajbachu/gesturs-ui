import { SiteHeader } from "@/components/site-specific/header";

export default async function LandingLayout({
  children,
}: {children: React.ReactNode}) {
  return (
    <div className="relative">
      <SiteHeader />
      <main className="flex-1 mt-7">{children}</main>
    </div>
  );
}
