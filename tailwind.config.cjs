const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#050505'
		}),
		fontFamily: {
			sans: ['Inter', 'system-ui']
		}
	},
	plugins: []
};

module.exports = config;
