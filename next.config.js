/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["www.woodenearth.com"], // Add your hostname here
  },
  rules: {
    "@next/next/no-img-element": "off", // Disable the rule that requires width and height for <Image>
  },
};
