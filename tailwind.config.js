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
                "PIC-Blue": "#203A73",
                "PIC-heading": "#212660",
                "PIC-light_gray": "#F4F5F8",
                "importent": "#2A8ACB",
                "PIC-Light-grey-Text": "#999999",
                "Department-card-bg": "#FFEEE5"

            },
            height: {
                "180px": "180px",
                "56vw": "56vw"
            },
            width: {
                "downloadBtn": "740px",
                "90%": "90%",
                "200px": "200px"
            },
            maxWidth: {
                "200px": "200px",
                "300px": "300px",
                "80px": "80px",
                "500px": "500px",
                "600px": "600px"
            },
            maxHeight: {
                "40px": "40px",
                "0.56vw": "0.56vw"

            },
            minWidth: {
                '300px': "300px",
                '500px': "500px"
            },
            padding: {
                "10%": "10%",
                "5%": "5%"
            },
            inset: {
                "10%": "10%",
                "1px": "1px"
            }

        },
    },
    plugins: [],
}