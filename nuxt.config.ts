// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-quasar-ui',
    '@nuxtjs/eslint-module',
    '@nuxtjs/supabase',
    ['@nuxtjs/google-fonts', {
      families: {
        'DM Sans': {
          wght: '200..900',
          ital: '200..700',
        },
      },
    }],
  ],

  quasar: {
    plugins: ['Notify', 'Loading', 'Dialog'],
    extras: {
      animations: 'all',
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,

    redirect: false,
  },
});
