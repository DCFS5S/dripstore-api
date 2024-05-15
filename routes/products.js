const router = require('express').Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.list);
router.get('/:productId', productsController.show);
router.post('/', productsController.create);
router.delete('/:productId', productsController.remove);
router.put('/:productId', productsController.update);

module.exports = router;
