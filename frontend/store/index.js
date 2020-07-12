export const actions = {
	nuxtServerInit: function ({ dispatch }) {
		dispatch('auth/reload')
	},
}
