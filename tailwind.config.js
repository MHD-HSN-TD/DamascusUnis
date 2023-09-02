/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    daisyui: {
        themes: [{
            myLightTheme: {
                "primary": "#641ae6",
                "default": "#0000",
                "secondary": "#d926a9",
                "accent": "#1fb2a6",
                "neutral": "#2a323c",
                "base-100": "#111827",
                "info": "#3abff8",
                "success": "#36d399",
                "warning": "#fbbd23",
                "error": "#f87272",
            },
        }, 'retro'],
        rtl: true,
    },
    plugins: [
        require('daisyui'),
        require("tailwindcss-flip")
    ],
    //...

}