import Toasts from './configurations/Toasts'
import BootstrapVue from './configurations/BootstrapVue'
import Axios from './configurations/Axios'
import Meta from './configurations/Meta'
import Styles from './configurations/Styles'
import Plugins from './configurations/Plugins'
import Build from './configurations/Build'
import Env from './configurations/Env'
import Sitemap from './configurations/Sitemap'
import Robots from './configurations/Robots'
import Translations from './configurations/Translations'

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
	buildModules: [],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc : https://github.com/nuxt-community/modules/tree/master/packages/toast
		'@nuxtjs/toast',

		'@nuxtjs/sitemap',

		'nuxt-i18n'
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
	// Build configuration
	build: Build,
	// Generate sitemap.xml in root folder
	sitemap: Sitemap,
	// Robot redirection
	robots: Robots,
	// Lang
	translations: Translations,

	generate: {
		minify: {
			collapseWhitespace: false,
		},
	},
}
