const router = require('express').Router();
const productController = require('../controllers/productsController');
const categoriesController = require('../controllers/categoriesController');

const ordersController = require('../controllers/ordersController')

router.get('/products', productController.list)
router.get('/products/:productId', productController.show)
router.post('/products', productController.create)
router.delete('/products/:productId', productController.remove)
router.put('/products/:productId', productController.update)

router.get('/categories', categoriesController.list)
router.post('/categories', categoriesController.create)


router.post('/cart', ordersController.create)
router.put('/cart/:orderId', ordersController.update)
router.get('/cart', ordersController.showCart)
router.get('/cart/:orderId', ordersController.showCart)
router.delete('/cart/:orderId', ordersController.remove)

module.exports = router;
