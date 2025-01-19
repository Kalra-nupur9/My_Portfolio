/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-red': '#e42c5c',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
  		letterSpacing: {
  			tightest_2: '-.3em',
  			tightest: '-.2em',
  			tighter: '-.05em',
  			tight: '-.025em',
  			normal: '0',
  			wide: '.025em',
  			wider: '.05em',
  			widest: '.25em'
  		},
      
    },
  },
  plugins: [],
};
