/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				fadeAnim: 'fade-animation 700ms ease-in',
			},
			keyframes: {
				'fade-animation': {
					'0%': { opacity: 0.001 },
					'100%': { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
};
