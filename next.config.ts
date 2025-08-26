import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file.notion.so',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
        ignoreDuringBuilds: true,
    },
}

export default nextConfig
