/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
  // Colocando diretamente na raiz da configuração
  allowedDevOrigins: ['192.168.100.18'],
};

module.exports = nextConfig;
