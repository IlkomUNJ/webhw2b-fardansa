import router from '@adonisjs/core/services/router'

/*
|--------------------------------------------------------------------------
| Public Pages
|--------------------------------------------------------------------------
*/
router.get('/', async ({ view }) => view.render('pages/home'))
router.get('/about', async ({ view }) => view.render('pages/about'))
router.get('/contact', async ({ view }) => view.render('pages/contact'))

/*
|--------------------------------------------------------------------------
| Auth / Role Selection
|--------------------------------------------------------------------------
| Login → pilih role: user atau seller
*/
router.get('/login', async ({ view }) => view.render('pages/login_choice'))
router.get('/login/user', async ({ view }) => view.render('user/login'))
router.get('/login/seller', async ({ view }) => view.render('seller/login'))

router.post('/login/user', async ({ request, view }) => {
  const { username } = request.all()
  return view.render('user/dashboard', { username })
})

router.post('/login/seller', async ({ request, view }) => {
  const { username } = request.all()
  return view.render('seller/dashboard', { username })
})

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/
router.get('/user/dashboard', async ({ view }) => view.render('user/dashboard'))
router.get('/user/products', async ({ view }) => view.render('user/product_list'))
router.get('/user/cart', async ({ view }) => view.render('user/cart'))
router.get('/user/wishlist', async ({ view }) => view.render('user/wishlist'))

/*
|--------------------------------------------------------------------------
| Seller Routes
|--------------------------------------------------------------------------
*/
router.get('/seller/dashboard', async ({ view }) => view.render('seller/dashboard'))
router.get('/seller/product/add', async ({ view }) => view.render('seller/product_add'))

/*
|--------------------------------------------------------------------------
| API-like Post Routes
|--------------------------------------------------------------------------
*/
router.post('/contact/submit', async ({ request }) => {
  const form = request.all()
  console.log('Contact form submitted:', form)
})

router.post('/wishlist/add', async ({ request }) => {
  const item = request.all()
  console.log('Item added to wishlist:', item)
})
