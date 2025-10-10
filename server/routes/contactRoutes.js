const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts
} = require('../controllers/contactController');

// @route   GET /api/contacts
// @desc    Get all contacts
// @access  Public
router.get('/', getAllContacts);

// @route   GET /api/contacts/:id
// @desc    Get contact by ID
// @access  Public
router.get('/:id', getContactById);

// @route   POST /api/contacts
// @desc    Create new contact
// @access  Public
router.post('/', createContact);

// @route   PUT /api/contacts/:id
// @desc    Update contact by ID
// @access  Public
router.put('/:id', updateContact);

// @route   DELETE /api/contacts/:id
// @desc    Delete contact by ID
// @access  Public
router.delete('/:id', deleteContact);

// @route   DELETE /api/contacts
// @desc    Delete all contacts
// @access  Public
router.delete('/', deleteAllContacts);

module.exports = router;