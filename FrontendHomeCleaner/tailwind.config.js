/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				scroll: "scrollText 10s linear infinite",
			},
			keyframes: {
				scrollText: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},
		},
	},
	plugins: [],
};
