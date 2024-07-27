import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeShiki from "rehype-shiki";
const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  const { build } = await import('velite')
  await build({ watch: isDev, clean: !isDev })
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async redirects() {
    return [
     
      {
        source: "/components",
        destination: "/docs/components/button",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/button",
        permanent: true,
      },
      {
        source: '/docs',
        destination: '/docs/introduction',
        permanent: true,
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "img.freepik.com",
        protocol: "https",
      }
    ],
  },

  // Optionally, add any other Next.js config below
};




const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeShiki],
  },
});

export default withMDX(nextConfig);
