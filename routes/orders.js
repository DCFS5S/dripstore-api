const express = require('express');
const ordersController = require('../controllers/ordersController');
const authMiddleware = require('../middlewares/authMiddleware');
const identityMiddleware = require('../middlewares/identityMiddleware');

const router = express.Router();

// TODO: Missing pagination for orders
router.get('/', authMiddleware, ordersController.list);

router.get('/cart', identityMiddleware, ordersController.showCart);
router.post('/add-product', identityMiddleware, ordersController.addProduct);
router.delete('/remove-project/:orderId', identityMiddleware, ordersController.removeProduct);

module.exports = router;
