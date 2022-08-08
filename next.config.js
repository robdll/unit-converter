/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: "anonymous",
  async headers() {
    return [
      {
        source: "/_api/get-tests",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
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
