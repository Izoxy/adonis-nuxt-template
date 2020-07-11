export const actions = {
	nuxtServerInit({ commit, dispatch }) {
		dispatch('auth/reload')
	},
	login({ commit }, credentials) {
		commit('auth/login', credentials)
	},
	logout({ commit }) {
		commit('auth/logout')
	},
}
