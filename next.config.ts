import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Adopt Partial Pre-Rendering experimental feature
  // https://nextjs.org/learn/dashboard-app/partial-prerendering#implementing-partial-prerendering
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
