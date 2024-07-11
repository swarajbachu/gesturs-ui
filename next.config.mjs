import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeShiki from "rehype-shiki";
import { build } from "velite";


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
    ],
  },
  webpack: config => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  }
  // Optionally, add any other Next.js config below
};

class VeliteWebpackPlugin {
  static started = false
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      const { build } = await import('velite')
      await build({ watch: dev, clean: !dev })
    })
  }
}


const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeShiki],
  },
});

export default withMDX(nextConfig);
