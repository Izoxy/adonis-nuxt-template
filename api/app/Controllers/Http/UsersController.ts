import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'
import StoreValidator from 'App/Validators/users/StoreValidator'
import UpdateValidator from 'App/Validators/users/UpdateValidator'

export default class UsersController {
	public async index({ response }: HttpContextContract) {
		return response.status(200).send({ user: await Users.all() })
	}

	public async show({ response, params }: HttpContextContract) {
		return response.status(200).send({ users: await Users.query().where('id', params.id) })
	}

	public async store({ response, request }: HttpContextContract) {
		try {
			const datas = await request.validate(StoreValidator)
			return response.status(201).send({ user: await Users.create(datas) })
		} catch (error) {
			return response.status(400).send(error.messages)
		}
	}

	public async update({ response, request, params }: HttpContextContract) {
		try {
			const datas = await request.validate(UpdateValidator)
			return response.status(200).send({ user: await Users.query().where('id', params.id).update(datas) })
		} catch (error) {
			return response.status(400).send(error.messages)
		}
	}

	public async destroy({ response, params }: HttpContextContract) {
		try {
			Users.query().where('id', params.id).delete()
			return response.status(200)
		} catch (error) {
			return response.status(400).send(error)
		}
	}
}
