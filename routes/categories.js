const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/', categoriesController.list);
router.get('/:id', categoriesController.show);
router.post('/', categoriesController.create);
router.put('/:id', categoriesController.update);

module.exports = router;
