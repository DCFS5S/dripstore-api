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

// router.get('/orders/:orderId', ordersController.show)
router.get('/cart', ordersController.showCart)
router.get('/cart/:orderId', ordersController.showCart)

module.exports = router;
