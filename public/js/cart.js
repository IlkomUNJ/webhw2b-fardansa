const CART_KEY = 'cart_data'

function loadCart() {
  const cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]')
  const container = document.getElementById('cart-items')
  if (!container) return
  container.innerHTML = ''
  cart.forEach((p) => {
    const div = document.createElement('div')
    div.className = 'flex justify-between border p-4 rounded'
    div.innerHTML = `<span>${p.name}</span><span>${p.qty} × $${p.price}</span>`
    container.appendChild(div)
  })
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]')
  const existing = cart.find((p) => p.id === product.id)
  if (existing) existing.qty += 1
  else cart.push({ ...product, qty: 1 })
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
  updateCartCounter()
}

function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]')
  const count = cart.reduce((a, c) => a + c.qty, 0)
  const el = document.getElementById('cartCounter')
  if (el) el.textContent = count
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCounter()
  loadCart()
})
