// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/global.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/eslint-module"],
  devtools: {
    enabled: true,
  },
})
