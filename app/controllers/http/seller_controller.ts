import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class SellerController {
  // Dashboard — menampilkan semua produk milik seller
  public async dashboard({ view }: HttpContext) {
    const products = await Product.query()
    return view.render('seller/dashboard', { products })
  }

  // Form tambah produk
  public async create({ view }: HttpContext) {
    return view.render('seller/product_add')
  }

  // Simpan produk baru
  public async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'description', 'price', 'stock', 'image_url'])

    await Product.create({
      name: data.name,
      description: data.description,
      price: Number(data.price),
      stock: Number(data.stock),
      imageUrl: data.image_url,
    })

    return response.redirect('/seller/dashboard')
  }

  // Hapus produk
  public async destroy({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
    return response.redirect('/seller/dashboard')
  }
}
