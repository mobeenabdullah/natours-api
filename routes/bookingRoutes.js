const express = require('express');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const { getCheckoutSession } = bookingController;

const router = express.Router();

const { protect } = authController;

router.use(protect);

router.get('/checkout-session/:tourId', getCheckoutSession);

module.exports = router;
