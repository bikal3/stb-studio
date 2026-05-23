import type { NextConfig } from "next";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath: BASE_PATH,
  images: {
    loader: 'custom',
    loaderFile: './lib/imageLoader.ts',
  },
};

export default nextConfig;
