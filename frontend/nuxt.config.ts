import { Auth, Axios, BootstrapVue, Build, Env, Meta, Plugins, Robots, Sitemap, Styles, Toasts, Translations } from './configurations'

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

	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,

	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: ['@nuxt/typescript-build'],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc: https://auth.nuxtjs.org/
		'@nuxtjs/auth',
		// Doc : https://github.com/nuxt-community/modules/tree/master/packages/toast
		'@nuxtjs/toast',

		'@nuxtjs/sitemap',

		'nuxt-i18n',
	],

	/**
	 ** Configurations file
	 ** See ~/configurations/*
	 */

	// Environnements variables configuration
	env: Env,
	// Headers module configuration
	head: Meta,
	// Global style module configuration
	css: Styles,
	// Plugins to load before mounting the App
	plugins: Plugins,
	// Bootstrat-vue module configuration
	bootstrapVue: BootstrapVue,
	// Toasts module configuration
	toast: Toasts,
	// Axios module configuration
	axios: Axios,
	// Auth configuration
	auth: Auth,
	// Build configuration
	build: Build,
	// Generate sitemap.xml in root folder
	sitemap: Sitemap,
	// Robot redirection
	robots: Robots,
	// Lang
	i18n: Translations,

	generate: {
		minify: {
			collapseWhitespace: false,
		},
	},
}
