import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cooky extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public ip: string

	@column.dateTime({ autoCreate: true })
	public expiration: DateTime
}
