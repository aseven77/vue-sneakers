/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		spacing: {
			0: '0',
			0.5: '5px',
			1: '10px',
			1.5: '15px',
			2: '20px',
			2.5: '25px',
			3: '30px',
			3.5: '35px',
			4: '40px',
			4.5: '45px',
			5: '50px'
		},
		borderRadius: {
			'none': '0',
			'sm': '10px',
			'md': '20px',
			'lg': '30px',
			'xl': '40px',
			'2xl': '50px'
		},
		fontSize: {
			sm: ['14px'],
			base: ['16px'],
			lg: ['20px'],
			xl: ['24px'],
			'2xl': ['28px'],
			'3xl': ['32px']
		}
	},
	plugins: [],
}

