/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                cake: "#fafff2",
                'cake-200': '#f2d5c3',
                brown: "#6b342f",
                'brown-200': "#883d38",
                body: "#fcfcfc",
            },
        },
    },
    plugins: [],
};
