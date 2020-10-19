import { Auth, Axios, BootstrapVue, Meta, Robots, Sitemap, Toasts, Translations, GoogleAnalytics } from './config'

export default {
	/*
	 ** Nuxt rendering mode
	 ** See https://nuxtjs.org/api/configuration-mode
	 */
	mode: 'universal',

	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: 'server',

	debug: true,

	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,

	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api', ['@nuxtjs/google-analytics', GoogleAnalytics]],

	/**
	 ** Nuxt build folder
	 */
	buildDir: 'build',

	/**
	 ** Nuxt src folder
	 */
	srcDir: 'src',

	dir: {
		assets: 'assets',
		layouts: 'template/layouts',
		middleware: 'middleware',
		pages: 'template/pages',
		static: 'public',
		store: 'store',
	},

	/*
	 ** Nuxt.js modules
	 ** See ~/configurations/*
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		['@nuxtjs/axios', Axios],

		// Doc: https://auth.nuxtjs.org/
		['@nuxtjs/auth', Auth],

		// Doc : https://github.com/nuxt-community/modules/tree/master/packages/toast
		['@nuxtjs/toast', Toasts],

		// Doc : https://github.com/nuxt-community/sitemap-module
		['@nuxtjs/sitemap', Sitemap],

		// Doc : https://i18n.nuxtjs.org/
		['nuxt-i18n', Translations],

		// Doc : https://github.com/nuxt-community/robots-module
		['@nuxtjs/robots', Robots],
	],

	/**
	 ** Environnements variables settings
	 ** Don't forget to specifie 'process.client'
	 ** if you want to use 'window' or 'document'
	 */
	env: {},

	/**
	 ** Headers module settings
	 ** See https://fr.nuxtjs.org/guides/configuration-glossary/configuration-head/
	 */
	head: Meta,

	/**
	 ** Global style module settings
	 ** See https://fr.nuxtjs.org/guides/configuration-glossary/configuration-css
	 */
	css: ['material-icons/iconfont/material-icons.scss'],

	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [],

	/**
	 ** Build settings
	 ** See https://fr.nuxtjs.org/guides/configuration-glossary/configuration-build/
	 */
	build: {},

	/**
	 ** Nuxt generation settings
	 ** See https://fr.nuxtjs.org/api/configuration-generate/
	 */
	generate: {
		minify: {
			collapseWhitespace: false,
		},
	},

	/**
	 ** Nuxt transition settings
	 ** See https://fr.nuxtjs.org/api/configuration-transition
	 */
	pageTransition: {
		name: 'page',
		mode: 'out-in',
	},
}
