import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://lztpagzpiczmuetpfnho.supabase.co/storage/v1/object/public/venues//*"
      ),
      new URL(
        "https://lztpagzpiczmuetpfnho.supabase.co/storage/v1/object/public/suites//*"
      ),
    ],
  },
};

export default nextConfig;
