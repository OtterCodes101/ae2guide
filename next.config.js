/** @type {import('next').NextConfig} */
const path = require("node:path");

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ae2guide",
  env: {
    GUIDE_DATA_ROOT: path.join(__dirname, "data"),
  },
};

module.exports = nextConfig;
