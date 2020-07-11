import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

export const state = () => ({
	member: {
		user: {},
		logged: false,
	},
})

export const plugins = createPersistedState({
	storage: {
		getItem: (key) => Cookies.get(key),
		setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
		removeItem: (key) => Cookies.remove(key),
	},
})

export const mutations = {
	login: async function (state, credentials) {
		let user = {}
		try {
			const { data } = await this.$axios.post('/authentication/login', credentials)
			user = {
				id: data.user.id,
				identity: data.user.firstname + ' ' + data.user.lastname,
			}
			state.member = { ...state.member, user, logged: true }
			this.$router.replace('/')
		} catch (error) {
			state.member = { ...state.member, user, logged: false }
		}
	},
	reload: async function (state) {
		let user = {}
		try {
			const { data } = await this.$axios.get('/authentication/auth')
			user = {
				id: data.user.id,
				identity: data.user.firstname + ' ' + data.user.lastname,
			}
			state.member = { ...state.member, user, logged: true }
		} catch (error) {
			state.member = { ...state.member, user, logged: false }
		}
	},
	logout: async function (state) {
		try {
			await this.$axios.get('http://localhost:3333/api/authentication/logout')
			state.member = { ...state.member, user: {}, logged: false }
		} catch (error) {
			state.member = { ...state.member, user: {}, logged: false }
		}
	},
}
