const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const { getAllReviews, createReview, deleteReview } = reviewController;
const { protect, restrictTo } = authController;

const router = express.Router({
  mergeParams: true,
});

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), createReview);

router.route('/:id').delete(deleteReview);

module.exports = router;
