const router = require('express').Router();

const ordersController = require('../controllers/ordersController');

router.get('/:orderId', ordersController.showOrder);
router.delete('/:orderId', ordersController.deleteOrder);
router.get('/', ordersController.showAllOrders);
router.post('/', ordersController.createOrder);
router.put('/:orderId', ordersController.updateOrder);

module.exports = router;
