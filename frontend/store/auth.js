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
		try {
			const { data } = await this.$axios.post('/authentication/login', payload)
			const user = {
				id: data.user.id,
				identity: data.user.firstname + ' ' + data.user.lastname,
			}
			commit('refresh', { user: user, logged: true })
			this.$toast.global.success({ message: 'Bienvenue ' + user.identity })
			this.$router.replace('/').catch(() => {})
		} catch (error) {
			this.$toast.global.error({ message: 'Les identifiants sont incorrectes' })
		}
	},
	logout: async function ({ commit }) {
		await this.$axios.post('http://localhost:3333/api/authentication/logout')
		commit('refresh', { user: {}, logged: false })
		this.$toast.global.success({ message: 'Déconnexion effectuée' })
	},
	reload: async function ({ commit }) {
		try {
			const { data } = await this.$axios.get('/authentication/auth')
			const user = {
				id: data.user.id,
				identity: data.user.firstname + ' ' + data.user.lastname,
			}
			commit('refresh', { user, logged: true })
		} catch (error) {
			commit('refresh', { user:{}, logged: false })
			this.$router.replace('/authentication/login').catch(() => {})
		}
	},
}

export const mutations = {
	refresh: function (state, { user, logged }) {
		state.member = { ...state.member, user, logged }
	},
}
