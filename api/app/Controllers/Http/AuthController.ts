import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
	public async loginWeb({ request, auth }: HttpContextContract) {
		const email = request.input('email')
		const password = request.input('password')
		const remember_me = !!request.input('remember_me')
		try {
			await auth.attempt(email, password, remember_me)
			return { user: auth.user }
		} catch (error) {
			if (error.code === 'E_INVALID_AUTH_UID') return { error: "L'utilisateur n'a pas été trouvé" }
			if (error.code === 'E_INVALID_AUTH_PASSWORD') return { error: "L'identifiant ou le mot de passe est incorrecte" }
		}
	}

	public async logoutWeb({ auth }: HttpContextContract) {
		await auth.logout()
		return { message: 'Vous avez été déconnecté' }
	}

	public async loginApi({ request, auth }: HttpContextContract) {
		const email = request.input('email')
		const password = request.input('password')

		const token = await auth.use('api').attempt(email, password, {
			expiresIn: '10 days'
		})
		return { token: token.toJSON() }
	}

	public async logoutApi({ auth }: HttpContextContract) {
		await auth.use('api').logout()
		return { message: 'Vous avez été déconnecté' }
	}

	public async user({ auth }: HttpContextContract) {
		console.log('auth')
		await auth.authenticate()
		return { user: auth.user }
	}
}
