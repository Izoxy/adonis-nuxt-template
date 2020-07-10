import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'
import StoreValidator from 'App/Validators/users/StoreValidator'
import UpdateValidator from 'App/Validators/users/UpdateValidator'
import Application from '@ioc:Adonis/Core/Application'

export default class UsersController {
	public async index({ response }: HttpContextContract) {
		return response.status(200).send({ user: await Users.all() })
	}

	public async show({ response, params }: HttpContextContract) {
		return response.status(200).send({ users: await Users.query().where('id', params.id) })
	}

	public async store({ response, request }: HttpContextContract) {
		try {
			const data = await request.validate(StoreValidator)
			const avatar = request.file('avatar', {
				extnames: ['jpg', 'jpeg', 'png', 'svg']
			})

			if (avatar?.hasErrors) {
				return avatar.errors
			}

			const user = await Users.create(data)

			await avatar?.move(Application.publicPath(`/uploads/users/avatar`), {
				name: `${user.id}.${avatar.extname}`,
				overwrite: true
			})

			await Users.query().where('id', user.id).update({ avatar: avatar?.fileName })

			return response.status(201).send({ user })
		} catch (error) {
			console.log('test')
			return response.status(400).send(error.messages)
		}
	}

	public async update({ response, request, params }: HttpContextContract) {
		try {
			const data = await request.validate(UpdateValidator)
			const avatar = request.file('avatar', {
				extnames: ['jpg', 'jpeg', 'png', 'svg']
			})

			if (avatar?.hasErrors) {
				return avatar.errors
			}

			await avatar?.move(Application.publicPath(`/uploads/users/avatar`), {
				name: `${params.id}.${avatar.extname}`,
				overwrite: true
			})

			await Users.query()
				.where('id', params.id)
				.update({ ...data, avatar: avatar?.fileName })

			return response.status(200).send({ message: 'Le compte a été mis à jour' })
		} catch (error) {
			return response.status(400).send(error.messages)
		}
	}

	public async destroy({ response, params }: HttpContextContract) {
		try {
			await Users.query().where('id', params.id).delete()
			return response.status(200)
		} catch (error) {
			return response.status(400).send(error)
		}
	}
}
