/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dctahvizk",
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: "pk.eyJ1IjoiZGFuaWVsMGFyIiwiYSI6ImNsbm45YWludTAzb20yanAxOGR5cTI0cHgifQ.Hy-QHRKzOmENeuTDnCb3yQ",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
