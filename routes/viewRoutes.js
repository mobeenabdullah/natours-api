const express = require('express');
const viewController = require('../controllers/viewsController');

const { getOverview, getTour } = viewController;

const router = express.Router();

router.get('/', getOverview);
router.get('/tour/:slug', getTour);

module.exports = router;
