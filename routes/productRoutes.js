const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const protect = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', protect, authorizeRoles('seller', 'super-admin'), createProduct);
router.put('/:id', protect, authorizeRoles('super-admin'), updateProduct);
router.delete('/:id', protect, authorizeRoles('super-admin'), deleteProduct);

module.exports = router;
