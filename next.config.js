/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pbs.twimg.com", "media.twitter.com", "twimg.com"],
  },
};

module.exports = nextConfig;
