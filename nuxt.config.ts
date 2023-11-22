// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "nuxt-quasar-ui"],

  quasar: {
    plugins: ["Notify", "Loading", "Dialog"],
    extras: {
      animations: "all",
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
});
