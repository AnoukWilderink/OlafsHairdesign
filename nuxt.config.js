// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@vueuse/nuxt","@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-lodash", '@formkit/nuxt', '@vueuse/nuxt', '@nuxtjs/supabase'],
    buildModules: [
        "@nuxtjs/vuetify",
    ],
    formkit: {
        autoImport: true
    },
    supabase: {
        redirect: false,
    },
    css: ['~/assets/css/main.css'],
    // css: ["@/assets/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],

    //     // With options
    //     ['@nuxtjs/vuetify', { /* module options */ }]
    //   ]
});
