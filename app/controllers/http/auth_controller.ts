import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async chooseRole({ view }: HttpContext) {
    return view.render('auth/choose_role')
  }

  public async userLogin({ view }: HttpContext) {
    return view.render('auth/login_user')
  }

  public async sellerLogin({ view }: HttpContext) {
    return view.render('auth/login_seller')
  }

  public async userLoginResponse({ request, view }: HttpContext) {
    const { name } = request.all()
    return view.render('user/product_list', { userName: name })
  }

  public async sellerLoginResponse({ request, view }: HttpContext) {
    const { name } = request.all()
    return view.render('seller/dashboard', { sellerName: name })
  }
}
