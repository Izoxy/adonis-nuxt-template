export const actions = {
	nuxtServerInit: async function ({ dispatch }) {
		dispatch('auth/reload')
	},
}
