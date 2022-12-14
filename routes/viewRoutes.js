const express = require('express');
const viewController = require('../controllers/viewsController');

const { getOverview, getTour, getLoginForm } = viewController;

const router = express.Router();

router.get('/', getOverview);
router.get('/tour/:slug', getTour);
router.get('/login', getLoginForm);

module.exports = router;
