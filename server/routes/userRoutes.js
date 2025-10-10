const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers
} = require('../controllers/userController');

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get('/', getAllUsers);

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Public
router.get('/:id', getUserById);

// @route   POST /api/users
// @desc    Create new user
// @access  Public
router.post('/', createUser);

// @route   PUT /api/users/:id
// @desc    Update user by ID
// @access  Public
router.put('/:id', updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete user by ID
// @access  Public
router.delete('/:id', deleteUser);

// @route   DELETE /api/users
// @desc    Delete all users
// @access  Public
router.delete('/', deleteAllUsers);

module.exports = router;