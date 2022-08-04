const { getImageSize } = require('next/dist/server/image-optimizer')
const { imageConfigDefault } = require('next/dist/shared/lib/image-config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
