import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
	protected tableName = 'users'

	public async up() {
		this.schema.table(this.tableName, (table) => {
			table.string('firstname', 255).notNullable()
			table.string('lastname', 255).notNullable()
		})
	}

	public async down() {
		this.schema.table(this.tableName, (table) => {
			table.dropColumn('firstname')
			table.dropColumn('lastname')
		})
	}
}
