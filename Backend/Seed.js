const mongoose = require('mongoose');
const Product = require('./Models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
  await Product.deleteMany({}); // clean db

  await Product.insertMany(
    [
        {
          "title": "Matcha Energy Bites",
          "category": "bars",
          "tags": ["gluten-free", "energy", "low sugar"],
          "price": 316,
          "description": "Boosts energy and satisfies hunger with clean nutrition.",
          "season": ["summer"],
          "popularity": 4.8,
          "image": ""
        },
        {
          "title": "Vegan Protein Cookies",
          "category": "cookies",
          "tags": ["vegan", "protein", "snack"],
          "price": 299,
          "description": "Soft, chewy cookies with 12g of plant protein per serving.",
          "season": ["all"],
          "popularity": 9.1,
          "image": ""
        },
        {
          "title": "Quinoa Trail Mix",
          "category": "snacks",
          "tags": ["gluten-free", "high fiber", "vegan"],
          "price": 275,
          "description": "Crunchy blend of roasted quinoa, seeds, and dried fruits.",
          "season": ["winter", "monsoon"],
          "popularity": 8.4,
          "image": ""
        },
        {
          "title": "Jaggery Nut Laddoos",
          "category": "sweets",
          "tags": ["ayurvedic", "natural sweetener", "festive"],
          "price": 180,
          "description": "Traditional Indian laddoos with jaggery and dry fruits.",
          "season": ["festive", "winter"],
          "popularity": 7.6,
          "image": ""
        },
        {
          "title": "Coconut Millet Bars",
          "category": "bars",
          "tags": ["millet", "coconut", "no added sugar"],
          "price": 239,
          "description": "Millet snack bars blended with coconut and natural sweetness.",
          "season": ["summer"],
          "popularity": 6.9,
          "image": ""
        },
        {
          "title": "Foxnut Masala Crunch",
          "category": "snacks",
          "tags": ["low fat", "protein", "gluten-free"],
          "price": 159,
          "description": "Crispy roasted makhana with tangy Indian masala flavor.",
          "season": ["monsoon", "all"],
          "popularity": 8.9,
          "image": ""
        },
        {
          "title": "Chia Oats Breakfast Bites",
          "category": "breakfast",
          "tags": ["chia", "fiber-rich", "breakfast"],
          "price": 349,
          "description": "Power-packed morning bites with oats and chia seeds.",
          "season": ["winter", "all"],
          "popularity": 9.4,
          "image": ""
        },
        {
          "title": "Keto Coconut Crackers",
          "category": "crackers",
          "tags": ["keto", "low carb", "snack"],
          "price": 325,
          "description": "Crunchy coconut flour crackers perfect for keto diets.",
          "season": ["summer"],
          "popularity": 6.2,
          "image": ""
        },
        {
          "title": "Pumpkin Seed Protein Mix",
          "category": "mixes",
          "tags": ["protein", "vegan", "energy"],
          "price": 210,
          "description": "Roasted pumpkin seed mix with added B12 and zinc.",
          "season": ["all"],
          "popularity": 7.8,
          "image": ""
        },
        {
          "title": "Spicy Ragi Chips",
          "category": "chips",
          "tags": ["ragi", "spicy", "fiber-rich"],
          "price": 189,
          "description": "Healthy ragi chips with spicy masala for guilt-free snacking.",
          "season": ["monsoon", "winter"],
          "popularity": 8.2,
          "image": ""
        }
      ]
      
      
);

  console.log("Seeded");
  process.exit();
});
