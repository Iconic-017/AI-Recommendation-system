const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  tags: [String],
  price: Number,
  description: String,
  season: [String],
  popularity: Number,
  image: String
});

module.exports = mongoose.model('Product', productSchema);