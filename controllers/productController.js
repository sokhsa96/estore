const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  const products = await Product.find().populate('category tags');
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category tags');
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

exports.createProduct = async (req, res) => {
  const { name, description, price, category, tags } = req.body;
  const product = await Product.create({ name, description, price, category, tags });
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.json(product);
};
