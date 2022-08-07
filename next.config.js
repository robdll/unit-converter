/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/_api/get-tests",
        destination: "/api/fake-tests",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
