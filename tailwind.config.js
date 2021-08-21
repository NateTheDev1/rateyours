module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#10B981',
				darkgray: '#141419'
			}
		},
		borderColor: theme => ({
			...theme('colors'),
			DEFAULT: theme('colors.gray.300', 'currentColor'),
			dndRed: '#E6010A'
		}),
		backgroundColor: theme => ({
			...theme('colors'),
			bgmain: '#101519'
		})
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
		extend: {}
	},
	plugins: []
};
