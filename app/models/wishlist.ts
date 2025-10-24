import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Wishlist extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare productId: number

  @column()
  declare userName: string
}
