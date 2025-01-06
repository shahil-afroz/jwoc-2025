/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      fontFamily: {
        rubik: ['Rubik','Jersey', 'sans-serif'],
      },
  		colors: {},
		  transformStyle: {
			'3d': 'preserve-3d',
		  },
		  perspective: {
			'500': '500px',
		  }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
