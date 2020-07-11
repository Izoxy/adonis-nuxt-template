export const actions = {
	nuxtServerInit({ commit }) {
		commit('auth/reload')
	},
	login({ commit }, credentials) {
		commit('auth/login', credentials)
	},
	logout({ commit }) {
		commit('auth/logout')
	},
}
