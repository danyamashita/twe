/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'twe-petrol':      '#255A75',
        'twe-petrol-dark': '#1A3D52',
        'twe-petrol-light':'#3279A3',
        'twe-amber':       '#C49A3C',
        'twe-amber-hover': '#B0861F',
        'surface':         '#131318',
        'surface-2':       '#1C1C22',
        'text-primary':    '#E8E8EC',
        'text-secondary':  '#8A8A96',
        'text-tertiary':   '#5A5A68',
        'off-white':       '#F0F0F2',
        'on-light':        '#1C1C22',
        'on-light-2':      '#4A4A58',
      },
      fontFamily: {
        display: ['"SF Pro Display"', '"Inter Tight"', '"Helvetica Neue"', 'sans-serif'],
        body:    ['"SF Pro Text"', '"Inter"', '"Helvetica Neue"', 'sans-serif'],
        mono:    ['"SF Mono"', '"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
