/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.prismic.io',
				port: '',
				pathname: '/**',
			},
		],
	},
	env: {
		NEXT_PUBLIC_SITE_URL:
			process.env.NEXT_PUBLIC_SITE_URL || 'https://timbuilding.dev',
	},

	// SVGR Configuration
	webpack(config) {
		// Configure SVGR
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgo: true,
						svgoConfig: {
							plugins: [
								{
									name: 'preset-default',
									params: {
										overrides: {
											removeViewBox: false,
										},
									},
								},
							],
						},
						jsx: {
							babelConfig: {
								plugins: [
									[
										'@svgr/babel-plugin-remove-jsx-attribute',
										{ elements: ['svg'], attributes: ['width', 'height'] },
									],
								],
							},
						},
						titleProp: true,
						ref: true,
					},
				},
			],
		});

		return config;
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
				],
			},
		];
	},
};

export default nextConfig;
