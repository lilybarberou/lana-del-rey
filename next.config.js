/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: 'lastfm.freetls.fastly.net',
            },
        ],
    },
};

module.exports = nextConfig;
