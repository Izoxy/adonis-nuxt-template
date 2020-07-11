/*
 ** Axios module configuration
 ** See https://axios.nuxtjs.org/options
 */
export default {
	baseURL: process.env.NODE_ENV === 'dev' ? 'http://localhost:3333/api' : 'https://my-domain.com/api',
	credentials: true,
}
