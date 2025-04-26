const Tag = require('../models/Tag');

exports.getTags = async (req, res) => {
  const tags = await Tag.find();
  res.json(tags);
};

exports.createTag = async (req, res) => {
  const { name } = req.body;
  const tag = await Tag.create({ name });
  res.status(201).json(tag);
};

exports.updateTag = async (req, res) => {
  const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(tag);
};

exports.deleteTag = async (req, res) => {
  const tag = await Tag.findByIdAndDelete(req.params.id);
  res.json(tag);
};
