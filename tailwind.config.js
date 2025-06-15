/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
    extend: {
        colors: {
        blue: {
            50: '#f0f6ff',
            100: '#e0eaff',
            200: '#c7d9ff',
            300: '#a3bdff',
            400: '#7894ff',
            500: '#5b6aff',
            600: '#3f3ff7',
            700: '#372ad9',
            800: '#2f25ad',
            900: '#2b2587',
        },
        },
        fontFamily: {
        // Define font families to use with Tailwind
        sans: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-dm-serif-display)', 'ui-serif', 'Georgia', 'serif'],
        outland: ['var(--font-dreaming-outland)', 'sans-serif'],
        },
    },
    },
    plugins: [],
};