import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Enables styled-components SWC transform
  },
};

export default nextConfig;
