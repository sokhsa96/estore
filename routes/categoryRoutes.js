const express = require('express');
const router = express.Router();
const { getCategories, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');
const protect = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware');

router.get('/', getCategories);
router.post('/', protect, authorizeRoles('super-admin'), createCategory);
router.put('/:id', protect, authorizeRoles('super-admin'), updateCategory);
router.delete('/:id', protect, authorizeRoles('super-admin'), deleteCategory);

module.exports = router;
