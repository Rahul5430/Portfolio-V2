/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./data/**/*.{js,ts,jsx,tsx,mdx}',
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
				carousel: 'carousel 15s linear infinite',
			},
			keyframes: {
				'fade-animation': {
					'0%': { opacity: 0.001 },
					'100%': { opacity: 1 },
				},
				carousel: {
					from: {
						transform: 'translateX(0)',
					},
					to: {
						transform: 'translateX(calc(-100% - 48px))',
					},
				},
			},
		},
	},
	plugins: [],
};
