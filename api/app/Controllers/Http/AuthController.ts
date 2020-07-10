import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
	public async login({ response, request, auth }: HttpContextContract) {
		const rememberMe = !!request.input('remember_me')

		try {
			const validator = schema.create({
				email: schema.string({ trim: true }),
				password: schema.string({ trim: true })
			})
			const { email, password } = await request.validate({ schema: validator })
			await auth.attempt(email, password, rememberMe)

			return response.status(200).send({ user: auth.user })
		} catch (error) {
			return response.status(400).send(error)
		}
	}

	public async logout({ response, auth }: HttpContextContract) {
		try {
			await auth.logout()
			return response.status(200)
		} catch (error) {
			return response.status(400).send(error)
		}
	}

	public async auth({ response, auth }: HttpContextContract) {
		try {
			await auth.authenticate()
			return response.status(200).send({ user: auth.user })
		} catch (error) {
			return response.status(401).send({ message: 'Unauthorized' })
		}
	}
}
