import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/data/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			tablet: '809px',
			desktop: '1200px',
		},
		extend: {
			colors: {
				'bright-gray': '#ECEDEE',
			},
			width: {
				desktop: '1200px',
				708: '708px',
			},
			maxWidth: {
				desktop: '1200px',
			},
			animation: {
				fadeAnim: 'fade-animation 700ms ease-in',
				carousel: 'carousel 30s linear infinite',
				float: 'float 5s ease-in-out infinite',
				float2: 'float2 5s ease-in-out infinite',
			},
			keyframes: {
				'fade-animation': {
					'0%': { opacity: '0.001' },
					'100%': { opacity: '1' },
				},
				carousel: {
					from: {
						transform: 'translateX(0)',
					},
					to: {
						transform: 'translateX(calc(-100% - 48px))',
					},
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				float2: {
					'0%, 100%': {
						lineHeight: '30px',
						transform: 'translateY(0px)',
					},
					'55%': { transform: 'translateY(-20px)' },
					'60%': { lineHeight: '10px' },
				},
			},
		},
	},
	plugins: [],
};
export default config;
