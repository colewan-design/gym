// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Furukawa Fitness Gym | La Trinidad, Benguet',
      meta: [
        {
          name: 'description',
          content:
            'Furukawa Fitness Gym in La Trinidad, Benguet. You have to be odd to be number 1. Strength training, transformation programs, and the Fat Belly Project.'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo.png'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  }
})
