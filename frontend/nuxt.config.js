import Toasts from './configurations/Toasts'
import BootstrapVue from './configurations/BootstrapVue'
import Axios from './configurations/Axios'
import Meta from './configurations/Meta'
import Styles from './configurations/Styles'
import Plugins from './configurations/Plugins'
import Build from './configurations/Build'

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
	],

	/**
	 ** Configurations file
	 ** See ~/configurations/*
	 */

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
}
