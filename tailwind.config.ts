import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        poppins:"var(--font-poppins)"
        // inter: ['Inter', 'sans-serif'],
        // openSans: ['Open Sans', 'sans-serif'],
        // playfair: ['Playfair Display'],
        // roboto:['Roboto', 'serif']
      },
      colors:{
        softBlue: "#5879C4",
        jungleGreen: "#22A585",
        mintGreen: "#37C287",
        cherryRed:  "#D92632",
        deepBlue: "#004EB2",
        skyBlue: "#2F96F4",
        lightBlue: "#BCE3F9",
        gold: "#F7C257",
        primerText: "#404040",
        secondaryText: "#404856",
        border: "#E2E1DE",
        lightGray: "#F7F5F2",
        subtleGray: "#F8F9FC",
      },
    },
  },
  plugins: [],
}
export default config
