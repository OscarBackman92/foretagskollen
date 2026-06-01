/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "textverket.se" }],
        destination: "https://www.textverket.se/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
