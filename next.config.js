/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/_api/get-tests",
        destination: "https://unit-converter-pi.vercel.app/api/fake-tests",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
