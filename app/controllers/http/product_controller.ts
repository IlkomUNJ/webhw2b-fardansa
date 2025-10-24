import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ProductController {
  public async index({ view }: HttpContext) {
    const products = await Product.query()
    return view.render('user/product_list', { products })
  }

  public async show({ params, view }: HttpContext) {
    const product = await Product.find(params.id)
    return view.render('user/product_detail', { product })
  }
}
