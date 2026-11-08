import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// Static export so the site can be hosted on GitHub Pages.
// NEXT_PUBLIC_BASE_PATH is set to "/KnowMyself" for the Pages build.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
