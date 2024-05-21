const router = require('express').Router();
const brandsController = require('../controllers/brandsController');

router.get('/', brandsController.list);
router.get('/:id', brandsController.show);
router.post('/', brandsController.create);
router.put('/:id', brandsController.update);

module.exports = router;
