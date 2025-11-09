/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    // Required for GitHub Pages subdirectory deployment
    basePath: process.env.NODE_ENV === 'production' ? '/hackhcc-frontend' : '',

    // Disable image optimization for static export
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
