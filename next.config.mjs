/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Workaround for Node 22 + webpack hashing crash (WasmHash._updateWithBuffer)
  webpack: (config) => {
    config.output = config.output || {}
    config.output.hashFunction = 'xxhash64'
    if (config.optimization) {
      config.optimization.realContentHash = false
    }
    return config
  },
}

export default nextConfig
