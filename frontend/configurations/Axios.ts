/*
 ** Axios module configuration
 ** See https://axios.nuxtjs.org/options
 */
export default {
	baseURL:
		process.env.NODE_ENV === 'developpement'
			? 'http://localhost:3333/api' // developpement
			: 'http://localhost:3333/api', // production
	credentials: true,
}
