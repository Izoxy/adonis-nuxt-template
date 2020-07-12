export const actions = {
	nuxtServerInit: async function ({ dispatch }) {
		await dispatch('auth/reload')
	},
}
