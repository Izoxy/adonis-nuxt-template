import { Middleware } from '@nuxt/types'

const unAuthenticated: Middleware = ({ store, redirect }) => {
	if (store.state.auth.loggedIn) {
		redirect(401, '/')
	}
}

export default unAuthenticated
