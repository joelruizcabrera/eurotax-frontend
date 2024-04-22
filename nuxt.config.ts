// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: "de",
        name: "Deutsch"
      },
      {
        code: "en",
        name: "English"
      },
      {
        code: "lt",
        name: "Lietuvių"
      }
    ]
  }
})