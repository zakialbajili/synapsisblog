/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
        {
            source: '/',
            destination: '/register',
            permanent: true,
        }
      ]
  }
}
module.exports = nextConfig
