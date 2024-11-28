/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // no cache for all routes
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
