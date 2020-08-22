import { Middleware } from '@nuxt/types'

const unauthenticated: Middleware = ({ store, redirect }) => {
	if (store.state.auth.loggedIn) {
		redirect(401, '/')
	}
}

export default unauthenticated
