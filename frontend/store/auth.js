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

export const actions = {
	login: async function ({ commit }, payload) {
		let user = {}
		try {
			const { data } = await this.$axios.post('/authentication/login', payload)
			user = {
				id: data.user.id,
				identity: data.user.firstname + ' ' + data.user.lastname,
			}
			commit('login', { user, logged: true })
			this.$toast.global.success({ message: 'Bienvenue ' + user.identity })
			this.$router.replace('/').catch(() => {})
		} catch (error) {
			commit('login', { user: {}, logged: false })
			this.$toast.global.error({ message: 'Les identifiants sont incorrectes' })
		}
	},
	logout: async function ({ commit }) {
		await this.$axios.post('http://localhost:3333/api/authentication/logout')
		commit('logout', { user: {}, logged: false })
		this.$toast.global.success({ message: 'Déconnexion effectuée' })
	},
	reload: async function ({ commit }) {
		let user = {}
		try {
			const { data } = await this.$axios.get('/authentication/auth')
			user = {
				id: data.user.id,
				identity: data.user.firstname + ' ' + data.user.lastname,
			}
			commit('reload', { user, logged: true })
		} catch (error) {
			commit('reload', { user, logged: false })
			this.$router.replace('/authentication/login').catch(() => {})
		}
	},
}

export const mutations = {
	login: async function (state, { user, logged }) {
		state.member = { ...state.member, user, logged }
	},
	reload: async function (state, { user, logged }) {
		state.member = { ...state.member, user, logged }
	},
	logout: async function (state, { user, logged }) {
		state.member = { ...state.member, user, logged }
	},
}
