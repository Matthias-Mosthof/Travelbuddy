// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,

    redirect: false,
  },

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

  eslint: {
    lintOnStart: false,
  },

  quasar: {
    sassVariables: 'assets/scss/quasar.variables.scss',
    cssAddon: true,
    config: {
      dark: false,
    },
    plugins: ['Notify', 'Loading', 'Dialog', 'Dark'],
    extras: {
      animations: 'all',
    },
  },

  css: [
    '@/assets/scss/app.scss',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },

});
