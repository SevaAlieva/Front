export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;'
        }
      }
    }
  },

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Open Sans': [400, 700],
        Montserrat: true,
      }
    }],
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ]
})