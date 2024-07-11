import { docs } from "#site/content";
import { MDXContent } from "@/components/mdx-comp";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Breadcrumb, Breadcrumbs } from "@/components/ui/breadcrumbs";
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
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container py-6  prose dark:prose-invert max-w-3xl mx-auto">
      <Breadcrumbs>
        {post.slug.split("/").map((slug, index, arr) => (
          <Breadcrumb
            key={slug}
            href={`/${arr.slice(0, index + 1).join("/")}`}
            className="capitalize"
          >
            {slug}
          </Breadcrumb>
        ))}
      </Breadcrumbs>
      <h1 className="capitalize my-2">{post.title}</h1>
      <h4 className="text-muted-foreground my-0">{post.description}</h4>
      <br />
      <MDXContent  code={post.body} />
    </article>
  );
}
