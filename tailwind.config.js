/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "bg-gray": "#F4F8F6",
                "orange": "#FF5300",
                "PIC-Blue": "#203A73"

            },
            height: {
                "180px": "180px"
            },
            width: {
                "downloadBtn": "740px"
            }
        },
    },
    plugins: [],
}