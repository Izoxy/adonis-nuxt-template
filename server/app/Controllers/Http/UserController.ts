// import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import StoreValidator from 'App/Validators/users/StoreValidator'
import UpdateValidator from 'App/Validators/users/UpdateValidator'

export default class UsersController {
	public async index() {
		const users = await User.all()
		return { users }
	}

	public async show({ params }: HttpContextContract) {
		const user = await User.findOrFail(params.id)
		return { user }
	}

	public async store({ request }: HttpContextContract) {
		const data = await request.validate(StoreValidator)
		const user = await User.create(data)

		return { user }
	}

	public async update({ response, request, params, auth }: HttpContextContract) {
		const user = await User.findOrFail(params.id)

		if (user.id != auth.user!.id) {
			return response.unauthorized()
		}

		const data = await request.validate(UpdateValidator)

		/**
		 *	const avatar = request.file('avatar', {
		 *		extnames: ['jpg', 'jpeg', 'png', 'svg']
		 * 	})
		 * 
		 * 	if (avatar?.hasErrors) {
		 *		return avatar.errors
		 *	}

		 *	await avatar?.move(Application.publicPath(`/uploads/users/avatar`), {
		 *		name: `${params.id}.${avatar.extname}`,
		 *		overwrite: true
		 *	})
		 */

		await auth.user!.merge({ ...data }).save()

		return { message: 'Le compte a été mis à jour' }
	}

	public async destroy({ response, params, auth }: HttpContextContract) {
		const user = await User.findOrFail(params.id)

		if (user.id != auth.user!.id) {
			return response.unauthorized()
		}

		auth.user!.delete()
		return { message: "L'utilisateur a bien été supprimé" }
	}
}
