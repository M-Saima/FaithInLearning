import defaultTheme from 'tailwindcss/defaultTheme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Font: system-like but fall back gracefully
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', ...defaultTheme.fontFamily.sans],
      },
      // Colors: mix fixed and CSS variable-backed for runtime control
      colors: {
        accent: '#6366f1',
        contrast: '#0f172a',
        // these use the CSS variables defined in your index.css;
        // usage: bg-[color:var(--bg)] or text-[color:var(--fg)]
        // You can also define helpers for convenience via arbitrary values.
      },
      boxShadow: {
        neon: '0 0 25px rgba(99,102,241,0.6)',
      },
      animation: {
        fade: 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
