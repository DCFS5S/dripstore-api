const router = require('express').Router();

const ordersController = require('../controllers/ordersController');

router.get('/:orderId', ordersController.showCart);

module.exports = router;
