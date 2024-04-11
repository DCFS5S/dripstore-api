const router = require('express').Router();
const productController = require('../controllers/productsController');
const categoriesController = require('../controllers/categoriesController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/products', productController.list)
router.get('/products/:productId', productController.show)
router.post('/products', productController.create)
router.delete('/products/:productId', productController.remove)
router.put('/products/:productId', productController.update)

router.get('/categories', categoriesController.list)
router.post('/categories', categoriesController.create)

router.post('/register', userController.create)
router.post('/login',authController.login)

module.exports = router;
