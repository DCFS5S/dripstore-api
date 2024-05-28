const express = require('express');
const ordersController = require('../controllers/ordersController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, ordersController.list);
router.get('/:orderId', ordersController.show);
router.post('/', authMiddleware, ordersController.addProduct);
router.delete('/:orderId', ordersController.removeProduct);

module.exports = router;
