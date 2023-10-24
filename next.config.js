/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["zenklub.com.br"],
    remotePatterns: [
      {
        hostname: "zenklub.com.br",
        protocol: "https",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
