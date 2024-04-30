const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/categories', categoriesController.list);
router.post('/categories', categoriesController.create);

module.exports = router;
