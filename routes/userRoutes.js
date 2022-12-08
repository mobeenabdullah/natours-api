const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const { getAllUsers, getUser, createUser, updateUser, deleteUser } =
  userController;

const { signup, login, forgotPassword, resetPassword } = authController;

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword', resetPassword);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
