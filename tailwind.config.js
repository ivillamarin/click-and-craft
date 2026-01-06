/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#050505',
                primary: '#7A5CFA',
                secondary: '#FF2E63',
                txtMain: '#F5F5F7',
                txtSec: '#888888',
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            },
            fontFamily: {
                sans: ['CreatoDisplay-MediumItalic', 'sans-serif'],
                display: ['CreatoDisplay-MediumItalic', 'sans-serif'],
                major: ['nexa-heavy', 'sans-serif'], // Replacing Major Mono with Nexa for titles as requested
                title: ['nexa-heavy', 'sans-serif'],
                text: ['CreatoDisplay-MediumItalic', 'sans-serif'],
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
                'fade-in': 'fadeIn 1.1s ease-out forwards',
                'shimmer': 'shimmer 2s infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '100%': { transform: 'translateX(100%)' },
                },
            },
        },
    },
    plugins: [],
}
