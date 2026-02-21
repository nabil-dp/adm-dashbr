import type { NextConfig } from "next";
/** @type {import('next').Config} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
 
  basePath: '/adm-dashbr', 
};

export default nextConfig;