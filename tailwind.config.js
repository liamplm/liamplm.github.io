/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        // extend: {
        //     transitionTimingFunction: {
        //         "only": "ease",
        //         "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        //     },
        // },
        // iconText: {
        //     24: "24px",
        //     36: "36px",
        // },
    },
    plugins: [
        require("@tailwindcss/typography"),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "icon-text": (value) => ({
                        ["--fontSize"]: value,
                        lineHeight: `calc(var(--fontSize) / 2)`,
                        height: `calc(var(--fontSize) / 2)`,
                        fontSize: `var(--fontSize)`,
                    }),
                    "icon-size": (value) => ({
                        ["--fontSize"]: value,
                        lineHeight: `var(--fontSize)`,
                        height: `var(--fontSize) !important`,
                        width: `var(--fontSize) !important`,
                        fontSize: `var(--fontSize)`,
                    }),
                },
                { values: theme("iconText") },
            );
        }),
    ],
};
