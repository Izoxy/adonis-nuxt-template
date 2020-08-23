import Cookie from 'App/Models/Cookie'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DateTime } from 'luxon'

export default class CookiesController {
	public async show({ params }: HttpContextContract) {
		const cookie = await Cookie.findBy('ip', params.ip)
		return { cookie }
	}

	public async store({ request }: HttpContextContract) {
		const date = new Date()
		const ip = request.input('ip')
		const expiration = DateTime.fromJSDate(new Date(date.setMonth(date.getMonth() + 6)))
		await Cookie.updateOrCreate({ ip }, { ip, expiration })

		return { message: 'Cookies are allow for user : ' + ip }
	}
}
