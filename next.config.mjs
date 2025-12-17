/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set basePath for GitHub Pages (subdirectory hosting)
  basePath: process.env.NODE_ENV === 'production' ? '/typervex-site' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
