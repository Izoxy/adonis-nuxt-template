import Cookie from 'App/Models/Cookie'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DateTime } from 'luxon'

export default class CookiesController {
	public async show({ response, params }: HttpContextContract) {
		const cookie = await Cookie.findBy('ip', params.ip)
		return response.status(200).send({ cookie })
	}

	public async store({ response, request }: HttpContextContract) {
		const date = new Date()
		const ip = request.input('ip')
		const expiration = DateTime.fromJSDate(new Date(date.setMonth(date.getMonth() + 6)))
		await Cookie.updateOrCreate({ ip }, { ip, expiration })

		return response.status(201).send({ message: 'Cookies are allow for user : ' + ip })
	}
}
