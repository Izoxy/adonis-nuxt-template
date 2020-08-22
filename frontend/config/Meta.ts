/*
 ** Headers module configuration
 ** See https://nuxtjs.org/api/configuration-head
 ** See https://vue-meta.nuxtjs.org/api/#metainfo-properties
 */
export default {
	htmlAttrs: {
		lang: 'fr-FR',
	},
	title: 'Welcome to adonis nuxt template',
	meta: [
		{ charset: 'utf-8' },
		{ lang: 'fr-FR' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: 'The description of the Adonis-Nuxt template to quickly start a project.' },

		{ hid: 'og:type', name: 'og:type', content: 'website' },
		{ hid: 'og:url', name: 'og:url', content: 'https://my-domain.com' },
		{ hid: 'og:title', name: 'og:title', content: 'Welcome to adonis nuxt template' },
		{ hid: 'og:site_name', name: 'og:site_name', content: 'Adonis-nuxt-template' },
		{ hid: 'og:locale', name: 'og:locale', content: 'fr' },
		{ hid: 'og:image', name: 'og:image', content: '/images/image.jpg' },

		{ name: 'msapplication-TileColor', content: '#0DA5FF' },
		{ name: 'theme-color', content: '#0DA5FF' },
	],
	link: [{ rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' }],
}
