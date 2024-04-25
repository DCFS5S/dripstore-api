const express = require('express');
const ordersController = require('../controllers/ordersController');

const router = express.Router();

router.get('/:orderId', ordersController.show);
router.post('/:orderId?', ordersController.addProduct);
router.delete('/:orderId', ordersController.removeProduct);

module.exports = router;
