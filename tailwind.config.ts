import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: "#F9F9F7",
                ink: "#2D2D2D",
                accent: {
                    nature: "#4A5D4E",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                serif: ["var(--font-newsreader)"],
            },
        },
    },
    plugins: [],
};
export default config;
