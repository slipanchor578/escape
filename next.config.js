/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  allowedDevOrigins: process.env.NEXTALLOWEDDEV_ORIGINS?.split(',') || [],
}

export default nextConfig;
