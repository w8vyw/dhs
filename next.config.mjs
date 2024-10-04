/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	images: {
		formats: ['image/avif', 'image/webp']
	},
	experimental: {
		optimizePackageImports: ['']
	}
}

export default nextConfig
