import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}', 
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E02454',
        secondary: '#003865',
        dark: '#1A1C23',
        light: '#F5F5F5',
        deepBlue: '#003153',
        'gray-text': '#A9A9A9',
      },
    },
  },
  plugins: [],
}
export default config