const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
// const authMiddleware = require('../middlewares/authMiddleware')


router.get('/categories', categoriesController.list);
router.post('/categories', categoriesController.create);

router.post('/register', userController.create)
router.post('/login',authController.login)

module.exports = router;
