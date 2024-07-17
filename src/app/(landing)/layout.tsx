import { SiteHeader } from "@/components/site-specific/layout/header";
import MarketingHeader from "@/components/site-specific/layout/marketing-header";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <MarketingHeader />
      <div className="px-4 relative mx-auto lg:max-w-7xl">
        <main className="flex-1 pb-40 pt-2">{children}</main>
      </div>
    </div>
  );
}
