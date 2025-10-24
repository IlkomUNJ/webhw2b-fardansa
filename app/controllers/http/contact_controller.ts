import type { HttpContext } from '@adonisjs/core/http'
import Contact from '#models/contact'

export default class ContactController {
  public async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'email', 'message'])
    await Contact.create(data)
    return response.redirect('/contact')
  }
}
