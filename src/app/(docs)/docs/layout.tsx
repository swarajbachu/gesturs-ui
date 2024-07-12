import { docsConfig } from "@/lib/docs";
import { DocsSidebarNav } from "@/components/site-specific/layout/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container   flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r dark:border-zinc-800 border-zinc-200 py-7">
        <DocsSidebarNav items={docsConfig.sidebarNav} />
      </aside>
     {children}
    </div>
  );
}
