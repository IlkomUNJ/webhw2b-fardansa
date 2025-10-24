import type { HttpContext } from '@adonisjs/core/http'
import Wishlist from '#models/wishlist'
import Product from '#models/product'

export default class WishlistController {
  // Menampilkan daftar wishlist user
  public async index({ view }: HttpContext) {
    const items = await Wishlist.query().preload('product')
    return view.render('user/wishlist', { items })
  }

  // Menambahkan produk ke wishlist
  public async store({ params, response }: HttpContext) {
    await Wishlist.create({ productId: params.id })
    return response.redirect('back')
  }
}
