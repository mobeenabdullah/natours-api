const express = require('express');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const { getOverview, getTour, getLoginForm } = viewController;
const { isLoggedIn } = authController;

const router = express.Router();

router.use(isLoggedIn);

router.get('/', getOverview);
router.get('/tour/:slug', getTour);
router.get('/login', getLoginForm);

module.exports = router;
