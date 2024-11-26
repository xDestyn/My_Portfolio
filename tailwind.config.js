/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#111827',
                'dark-lighter': '#1F2937',
            },
        },
    },
    plugins: [],
    darkMode: 'class', // Enable dark mode
}