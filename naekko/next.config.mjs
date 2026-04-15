/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.123.123'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
