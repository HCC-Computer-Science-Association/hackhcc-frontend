/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    // basePath is removed so it defaults to '/'

    // Disable image optimization for static export
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig