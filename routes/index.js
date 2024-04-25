const router = require('express').Router();
const productController = require('../controllers/productsController');
const categoriesController = require('../controllers/categoriesController');

router.get('/products', productController.list)
router.get('/products/:productId', productController.show)
router.post('/products', productController.create)
router.delete('/products/:productId', productController.remove)
router.put('/products/:productId', productController.update)

router.get('/categories', categoriesController.list)
router.post('/categories', categoriesController.create)

module.exports = router;
