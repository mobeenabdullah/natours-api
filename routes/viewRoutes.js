const express = require('express');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const { getOverview, getTour, getLoginForm, getAccount } = viewController;
const { isLoggedIn, protect } = authController;

const router = express.Router();

router.get('/', isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.get('/me', protect, getAccount);

module.exports = router;
