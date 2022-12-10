const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const {
  getAllReviews,
  createReview,
  deleteReview,
  updateReview,
  setTourUserIds,
} = reviewController;
const { protect, restrictTo } = authController;

const router = express.Router({
  mergeParams: true,
});

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), setTourUserIds, createReview);

router.route('/:id').patch(updateReview).delete(deleteReview);

module.exports = router;
