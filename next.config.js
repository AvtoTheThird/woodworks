/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};
module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["www.woodenearth.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ], // Add your hostname here
  },
  rules: {
    "@next/next/no-img-element": "off", // Disable the rule that requires width and height for <Image>
    "react-hooks/rules-of-hooks": "off", // Disable the rule that enforces hook rules
    "react-hooks/exhaustive-deps": "off", // Disable the rule that enforces exhaustive dependencies
  },
};
