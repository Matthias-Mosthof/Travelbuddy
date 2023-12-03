// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@pinia/nuxt', 'nuxt-quasar-ui', '@nuxtjs/eslint-module'],

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
});
