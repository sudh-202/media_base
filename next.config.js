// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media-base.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
  };
  