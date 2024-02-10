import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'Sans-Serif': ['Montserrat'],
      'Montserrat': ['Montserrat'],
      
    },
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'Sans-Serif']
      },
      colors: {
        'Emerald':'#244B5A',
        'Sage': '#85AF9A',
        'CoolGray': '#D0CFCD',
        'White': '#FFFFFF'
      },
    },
    screens: {

      'mobile': {'max': '767px'},
      // => @media (min-width: 350px and max-width: 767px) { ... }

      'tablet': {'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'desktop': {'min': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    }
  },
  
  plugins: [],
}

export default config
