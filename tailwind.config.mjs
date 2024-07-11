/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'kumb': ['"Kumbh Sans Variable"', 'sans-serif']
			}
		},
		colors: {
			'pdcyan': 'hsl(185, 75%, 39%)',
			'pvddblue': 'hsl(229, 23%, 23%)',
			'pdgblue': 'hsl(227, 10%, 46%)',
			'pdgray': 'hsl(0, 0%, 59%)'
		}
	},
	plugins: [],
}
