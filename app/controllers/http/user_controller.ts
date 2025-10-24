import type { HttpContext } from '@adonisjs/core/http'

export default class UserController {
  // login page (submit name)
  public async login({ request, view }: HttpContext) {
    const name = request.input('name')
    return view.render('user/dashboard', { name })
  }

  // dashboard user
  public async dashboard({ view }: HttpContext) {
    return view.render('user/dashboard')
  }

  // halaman cart user
  public async cart({ view }: HttpContext) {
    return view.render('user/cart')
  }

  // wishlist user
  public async wishlist({ view }: HttpContext) {
    return view.render('user/wishlist')
  }

  // daftar produk
  public async productList({ view }: HttpContext) {
    return view.render('user/product_list')
  }
}
