const express = require('express');
const router = express.Router();
const { getTags, createTag, updateTag, deleteTag } = require('../controllers/tagController');
const protect = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware');

router.get('/', getTags);
router.post('/', protect, authorizeRoles('super-admin'), createTag);
router.put('/:id', protect, authorizeRoles('super-admin'), updateTag);
router.delete('/:id', protect, authorizeRoles('super-admin'), deleteTag);

module.exports = router;
