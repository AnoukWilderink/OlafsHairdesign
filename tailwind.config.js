const FormKitVariants = require('@formkit/themes/tailwindcss')
export default {
    content: [
        "./components/*/.{js,vue,ts}",
        "./layouts/*/.vue",
        "./pages/*/.vue",
        "./plugins/*/.{js,ts}",
        "./nuxt.config.{js,ts}",
        './tailwind-theme.js',
    ],
    plugins: [
        FormKitVariants
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    light: '#788082',
                    DEFAULT: '#19292d',
                    soft:'#273B4A',
                },
                "light-grey": "#B4C4D0", 
                red: "#990000",
                yellow: "#FECA00",
            },
            screens: {
                mobile: { max: "768px" },
                // => @media (max-width: 639px) { ... }

                tablet: "768px",
                // => @media (min-width: 640px) { ... }

                laptop: "1024px",
                // => @media (min-width: 1024px) { ... }

                desktop: "2536px",
                // => @media (min-width: 1280px) { ... }
            },
         
        },
    },
};
