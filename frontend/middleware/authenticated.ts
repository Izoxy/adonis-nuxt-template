import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = ({ store, redirect }) => {
	if (!store.state.auth.loggedIn) {
		redirect(401, '/')
	}
}

export default myMiddleware
