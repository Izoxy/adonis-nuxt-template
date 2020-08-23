import { Middleware } from '@nuxt/types'

const authenticated: Middleware = ({ store, redirect }) => {
	if (!store.state.auth.loggedIn) {
		redirect(401, '/authentication/login')
	}
}

export default authenticated
