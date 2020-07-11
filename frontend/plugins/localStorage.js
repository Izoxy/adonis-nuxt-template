import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
	createPersistedState({
		key: 'auth'
	})(store)
}
