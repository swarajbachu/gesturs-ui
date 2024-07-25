import { docs } from "#site/content";
import { MDXContent } from "@/components/mdx-comp";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Breadcrumb, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { TableOfContents } from "@/components/site-specific/docs/toc";
import { ScrollArea } from "@/components/site-specific/ui/scroll-area";

interface PostPageProps {
  params: {
    slug: string[];
  };
}


async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const doc = docs.find((doc) => doc.slugAsParams === slug);
  return doc;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return docs.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const doc = await getPostFromParams(params);

  if (!doc || !doc.published) {
    notFound();
  }

  return (
    <article className="relative py-6 max-w-7xl lg:gap-10 lg:py-8 xl:grid text-foreground  xl:grid-cols-[1fr_300px]">
      <div className="w-full min-w-0 mx-auto">
        <Breadcrumbs>
          {doc.slug.split("/").map((slug, index, arr) => (
            <Breadcrumb
              key={slug}
              href={`/${arr.slice(0, index + 1).join("/")}`}
              className="capitalize"
            >
              {slug}
            </Breadcrumb>
          ))}
        </Breadcrumbs>
        <h1 className="capitalize my-2 text-3xl font-semibold mt-4 mb-0">{doc.title}</h1>
        <h4 className="text-muted-foreground my-0">{doc.description}</h4>
        <br />
        <MDXContent code={doc.body} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-4">
          <ScrollArea className="pb-10">
            <div className="space-y-4 sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
              <TableOfContents toc={doc.toc} />
            </div>
          </ScrollArea>
        </div>
      </div>
    </article>
  );
}
