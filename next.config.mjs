/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for a month on Vercel's edge.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  env: {
    // Placeholder media are hidden on the production deployment only
    // (see src/lib/placeholders.ts). An explicit env value wins.
    SHOW_PLACEHOLDERS:
      process.env.SHOW_PLACEHOLDERS ??
      (process.env.VERCEL_ENV === "production" ? "false" : "true"),
  },
};

export default nextConfig;
