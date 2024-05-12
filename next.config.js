/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: ".next",
};

module.exports = {
  ...nextConfig, // Merge the nextConfig object with the module.exports object
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
};
