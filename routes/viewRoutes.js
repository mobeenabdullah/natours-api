const express = require('express');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  updateUserData,
  getMyTours,
} = viewController;
const { isLoggedIn, protect } = authController;

const router = express.Router();

router.use(viewController.alerts);

router.get('/', isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);

router.post('/submit-user-data', protect, updateUserData);

module.exports = router;
