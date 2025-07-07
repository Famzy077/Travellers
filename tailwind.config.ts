// frontend/tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D90A7A',
        secondary: '#23262F',
        dark: '#1A1C23',
        light: '#F5F5F5',
        'gray-text': '#A9A9A9',
      },
    },
  },
  plugins: [],
}
export default config