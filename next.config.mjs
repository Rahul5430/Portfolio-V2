import withPWAInit from '@ducanh2912/next-pwa';
import withPlaiceholder from '@plaiceholder/next';

const withPWA = withPWAInit({
	dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
				],
			},
		];
	},
};

export default withPWA(withPlaiceholder(nextConfig));
