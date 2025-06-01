/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: false, // Disable Next.js CSS optimization
  },
};

export default nextConfig;
