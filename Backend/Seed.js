const mongoose = require('mongoose');
const Product = require('./Models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
  await Product.deleteMany({}); // clean db

  await Product.insertMany(
    [
      {
          "title": "Oats & Nuts Muesli",
          "category": "energy",
          "tags": [
              "low sugar",
              "keto",
              "high fiber"
          ],
          "price": 223,
          "description": "Crafted for taste lovers who don’t want to compromise health.",
          "season": [
              "summer",
              "all-season",
              "winter"
          ],
          "popularity": 1.7,
          "image": ""
      },
      {
          "title": "Mocha Protein Bar",
          "category": "snacks",
          "tags": [
              "snack",
              "protein"
          ],
          "price": 345,
          "description": "Packed with plant-based protein and wholesome goodness.",
          "season": [
              "summer",
              "winter"
          ],
          "popularity": 1.5,
          "image": ""
      },
      {
          "title": "Mocha Protein Bar",
          "category": "snacks",
          "tags": [
              "vegan",
              "natural",
              "gluten-free"
          ],
          "price": 402,
          "description": "Rich in fiber and ideal for guilt-free indulgence.",
          "season": [
              "summer",
              "monsoon",
              "winter"
          ],
          "popularity": 1.3,
          "image": ""
      },
      {
          "title": "Mocha Protein Bar",
          "category": "bars",
          "tags": [
              "snack",
              "no preservatives",
              "low sugar"
          ],
          "price": 379,
          "description": "Perfect for on-the-go snacking and fitness fuel.",
          "season": [
              "monsoon",
              "all-season",
              "winter"
          ],
          "popularity": 1.1,
          "image": ""
      },
      {
          "title": "Oats & Nuts Muesli",
          "category": "snacks",
          "tags": [
              "keto",
              "low sugar",
              "gluten-free",
              "snack"
          ],
          "price": 322,
          "description": "Perfect for on-the-go snacking and fitness fuel.",
          "season": [
              "monsoon"
          ],
          "popularity": 3.0,
          "image": ""
      },
      {
          "title": "Gluten-Free Brownie",
          "category": "desserts",
          "tags": [
              "keto",
              "energy"
          ],
          "price": 217,
          "description": "Crafted for taste lovers who don’t want to compromise health.",
          "season": [
              "monsoon",
              "summer",
              "winter"
          ],
          "popularity": 3.4,
          "image": ""
      },
      {
          "title": "Protein Trail Mix",
          "category": "bars",
          "tags": [
              "protein",
              "keto",
              "natural"
          ],
          "price": 392,
          "description": "Packed with plant-based protein and wholesome goodness.",
          "season": [
              "winter",
              "summer"
          ],
          "popularity": 4.2,
          "image": ""
      },
      {
          "title": "Peanut Butter Cookie",
          "category": "snacks",
          "tags": [
              "low sugar",
              "gluten-free",
              "high fiber",
              "keto"
          ],
          "price": 212,
          "description": "Boosts energy and satisfies hunger with clean nutrition.",
          "season": [
              "winter",
              "summer",
              "all-season"
          ],
          "popularity": 2.1,
          "image": ""
      },
      {
          "title": "Keto Snack Mix",
          "category": "energy",
          "tags": [
              "snack",
              "protein",
              "natural",
              "low sugar"
          ],
          "price": 187,
          "description": "Packed with plant-based protein and wholesome goodness.",
          "season": [
              "summer"
          ],
          "popularity": 3.1,
          "image": ""
      },
      {
          "title": "Protein Trail Mix",
          "category": "energy",
          "tags": [
              "no preservatives",
              "snack",
              "vegan"
          ],
          "price": 117,
          "description": "Perfect for on-the-go snacking and fitness fuel.",
          "season": [
              "winter",
              "all-season"
          ],
          "popularity": 2.4,
          "image": ""
      },
      {
          "title": "Dark Chocolate Granola",
          "category": "bars",
          "tags": [
              "high fiber",
              "keto"
          ],
          "price": 345,
          "description": "Perfect for on-the-go snacking and fitness fuel.",
          "season": [
              "winter"
          ],
          "popularity": 1.1,
          "image": ""
      },
      {
          "title": "Coconut Bliss Bites",
          "category": "healthy",
          "tags": [
              "no preservatives",
              "gluten-free",
              "vegan",
              "low sugar"
          ],
          "price": 456,
          "description": "Rich in fiber and ideal for guilt-free indulgence.",
          "season": [
              "summer",
              "monsoon"
          ],
          "popularity": 1.6,
          "image": ""
      },
      {
          "title": "Almond Energy Ball",
          "category": "breakfast",
          "tags": [
              "low sugar",
              "energy"
          ],
          "price": 323,
          "description": "Perfect for on-the-go snacking and fitness fuel.",
          "season": [
              "all-season",
              "monsoon"
          ],
          "popularity": 3.8,
          "image": ""
      },
      {
          "title": "Protein Trail Mix",
          "category": "breakfast",
          "tags": [
              "vegan",
              "natural",
              "gluten-free"
          ],
          "price": 346,
          "description": "Rich in fiber and ideal for guilt-free indulgence.",
          "season": [
              "summer",
              "all-season"
          ],
          "popularity": 2.0,
          "image": ""
      },
      {
          "title": "Almond Energy Ball",
          "category": "desserts",
          "tags": [
              "protein",
              "no preservatives"
          ],
          "price": 387,
          "description": "Boosts energy and satisfies hunger with clean nutrition.",
          "season": [
              "summer",
              "all-season"
          ],
          "popularity": 3.3,
          "image": ""
      },
      {
          "title": "Matcha Energy Bites",
          "category": "healthy",
          "tags": [
              "snack",
              "keto",
              "gluten-free",
              "no preservatives"
          ],
          "price": 475,
          "description": "Rich in fiber and ideal for guilt-free indulgence.",
          "season": [
              "summer",
              "winter"
          ],
          "popularity": 3.5,
          "image": ""
      },
      {
          "title": "Almond Energy Ball",
          "category": "desserts",
          "tags": [
              "protein",
              "high fiber"
          ],
          "price": 194,
          "description": "Rich in fiber and ideal for guilt-free indulgence.",
          "season": [
              "all-season"
          ],
          "popularity": 4.8,
          "image": ""
      },
      {
          "title": "Protein Trail Mix",
          "category": "bars",
          "tags": [
              "vegan",
              "high fiber",
              "protein"
          ],
          "price": 399,
          "description": "Crafted for taste lovers who don’t want to compromise health.",
          "season": [
              "monsoon"
          ],
          "popularity": 2.2,
          "image": ""
      },
      {
          "title": "Keto Snack Mix",
          "category": "breakfast",
          "tags": [
              "protein",
              "vegan",
              "low sugar",
              "gluten-free"
          ],
          "price": 470,
          "description": "A delicious and healthy snack made from natural ingredients.",
          "season": [
              "all-season",
              "winter"
          ],
          "popularity": 4.6,
          "image": ""
      },
      {
          "title": "Coconut Bliss Bites",
          "category": "snacks",
          "tags": [
              "keto",
              "no preservatives",
              "low sugar",
              "snack"
          ],
          "price": 464,
          "description": "A delicious and healthy snack made from natural ingredients.",
          "season": [
              "winter"
          ],
          "popularity": 3.8,
          "image": ""
      },
      {
          "title": "Dark Chocolate Granola",
          "category": "healthy",
          "tags": [
              "keto",
              "gluten-free"
          ],
          "price": 398,
          "description": "Packed with plant-based protein and wholesome goodness.",
          "season": [
              "winter",
              "all-season",
              "monsoon"
          ],
          "popularity": 2.4,
          "image": ""
      },
      {
          "title": "Protein Trail Mix",
          "category": "healthy",
          "tags": [
              "snack",
              "keto",
              "low sugar"
          ],
          "price": 246,
          "description": "Rich in fiber and ideal for guilt-free indulgence.",
          "season": [
              "winter",
              "summer",
              "all-season"
          ],
          "popularity": 2.1,
          "image": ""
      },
      {
          "title": "Matcha Energy Bites",
          "category": "energy",
          "tags": [
              "snack",
              "low sugar",
              "natural"
          ],
          "price": 222,
          "description": "Perfect for on-the-go snacking and fitness fuel.",
          "season": [
              "winter",
              "all-season"
          ],
          "popularity": 2.3,
          "image": ""
      },
      {
          "title": "Vegan Protein Bar",
          "category": "healthy",
          "tags": [
              "vegan",
              "snack",
              "high fiber",
              "no preservatives"
          ],
          "price": 340,
          "description": "Rich in fiber and ideal for guilt-free indulgence.",
          "season": [
              "monsoon",
              "summer"
          ],
          "popularity": 1.3,
          "image": ""
      },
      {
          "title": "Protein Trail Mix",
          "category": "bars",
          "tags": [
              "no preservatives",
              "keto",
              "gluten-free"
          ],
          "price": 383,
          "description": "Packed with plant-based protein and wholesome goodness.",
          "season": [
              "all-season",
              "winter",
              "summer"
          ],
          "popularity": 4.4,
          "image": ""
      },
      {
          "title": "Matcha Energy Bites",
          "category": "desserts",
          "tags": [
              "high fiber",
              "snack",
              "vegan",
              "keto"
          ],
          "price": 353,
          "description": "Crafted for taste lovers who don’t want to compromise health.",
          "season": [
              "monsoon",
              "all-season"
          ],
          "popularity": 3.2,
          "image": ""
      },
      {
          "title": "Matcha Energy Bites",
          "category": "snacks",
          "tags": [
              "energy",
              "high fiber"
          ],
          "price": 246,
          "description": "Rich in fiber and ideal for guilt-free indulgence.",
          "season": [
              "all-season"
          ],
          "popularity": 1.3,
          "image": ""
      },
      {
          "title": "Gluten-Free Brownie",
          "category": "healthy",
          "tags": [
              "energy",
              "high fiber",
              "gluten-free"
          ],
          "price": 111,
          "description": "Boosts energy and satisfies hunger with clean nutrition.",
          "season": [
              "summer",
              "monsoon",
              "all-season"
          ],
          "popularity": 1.2,
          "image": ""
      },
      {
          "title": "Oats & Nuts Muesli",
          "category": "breakfast",
          "tags": [
              "gluten-free",
              "no preservatives",
              "energy"
          ],
          "price": 198,
          "description": "Rich in fiber and ideal for guilt-free indulgence.",
          "season": [
              "monsoon",
              "winter",
              "all-season"
          ],
          "popularity": 1.8,
          "image": ""
      },
      {
          "title": "Vegan Protein Bar",
          "category": "snacks",
          "tags": [
              "energy",
              "no preservatives"
          ],
          "price": 491,
          "description": "Boosts energy and satisfies hunger with clean nutrition.",
          "season": [
              "all-season",
              "monsoon",
              "winter"
          ],
          "popularity": 4.3,
          "image": ""
      },
      {
          "title": "Dark Chocolate Granola",
          "category": "breakfast",
          "tags": [
              "protein",
              "high fiber",
              "energy"
          ],
          "price": 248,
          "description": "Perfect for on-the-go snacking and fitness fuel.",
          "season": [
              "winter",
              "summer"
          ],
          "popularity": 4.9,
          "image": ""
      },
      {
          "title": "Gluten-Free Brownie",
          "category": "energy",
          "tags": [
              "no preservatives",
              "gluten-free",
              "energy",
              "natural"
          ],
          "price": 272,
          "description": "A delicious and healthy snack made from natural ingredients.",
          "season": [
              "winter"
          ],
          "popularity": 4.9,
          "image": ""
      },
      {
          "title": "Matcha Energy Bites",
          "category": "energy",
          "tags": [
              "vegan",
              "low sugar"
          ],
          "price": 487,
          "description": "Packed with plant-based protein and wholesome goodness.",
          "season": [
              "winter",
              "all-season",
              "monsoon"
          ],
          "popularity": 4.1,
          "image": ""
      },
      {
          "title": "Oats & Nuts Muesli",
          "category": "snacks",
          "tags": [
              "no preservatives",
              "high fiber",
              "gluten-free"
          ],
          "price": 249,
          "description": "Crafted for taste lovers who don’t want to compromise health.",
          "season": [
              "winter"
          ],
          "popularity": 2.2,
          "image": ""
      },
      {
          "title": "Coconut Bliss Bites",
          "category": "breakfast",
          "tags": [
              "keto",
              "gluten-free",
              "protein",
              "natural"
          ],
          "price": 220,
          "description": "Crafted for taste lovers who don’t want to compromise health.",
          "season": [
              "summer"
          ],
          "popularity": 4.5,
          "image": ""
      },
      {
          "title": "Matcha Energy Bites",
          "category": "desserts",
          "tags": [
              "no preservatives",
              "energy",
              "protein",
              "high fiber"
          ],
          "price": 307,
          "description": "A delicious and healthy snack made from natural ingredients.",
          "season": [
              "summer",
              "all-season"
          ],
          "popularity": 2.9,
          "image": ""
      },
      {
          "title": "Chia Seed Crackers",
          "category": "energy",
          "tags": [
              "vegan",
              "low sugar",
              "high fiber"
          ],
          "price": 318,
          "description": "Crafted for taste lovers who don’t want to compromise health.",
          "season": [
              "summer",
              "monsoon",
              "winter"
          ],
          "popularity": 1.9,
          "image": ""
      },
      {
          "title": "Keto Snack Mix",
          "category": "desserts",
          "tags": [
              "high fiber",
              "gluten-free",
              "no preservatives"
          ],
          "price": 238,
          "description": "Rich in fiber and ideal for guilt-free indulgence.",
          "season": [
              "summer",
              "all-season",
              "winter"
          ],
          "popularity": 2.9,
          "image": ""
      },
      {
          "title": "Mocha Protein Bar",
          "category": "energy",
          "tags": [
              "gluten-free",
              "vegan",
              "no preservatives"
          ],
          "price": 243,
          "description": "Perfect for on-the-go snacking and fitness fuel.",
          "season": [
              "monsoon",
              "summer",
              "winter"
          ],
          "popularity": 4.6,
          "image": ""
      },
      {
          "title": "Matcha Energy Bites",
          "category": "energy",
          "tags": [
              "natural",
              "keto",
              "snack"
          ],
          "price": 410,
          "description": "Perfect for on-the-go snacking and fitness fuel.",
          "season": [
              "monsoon"
          ],
          "popularity": 3.5,
          "image": ""
      },
      {
          "title": "Coconut Bliss Bites",
          "category": "healthy",
          "tags": [
              "low sugar",
              "gluten-free",
              "protein",
              "no preservatives"
          ],
          "price": 190,
          "description": "Crafted for taste lovers who don’t want to compromise health.",
          "season": [
              "all-season",
              "summer"
          ],
          "popularity": 3.2,
          "image": ""
      },
      {
          "title": "Protein Trail Mix",
          "category": "bars",
          "tags": [
              "low sugar",
              "energy",
              "high fiber",
              "snack"
          ],
          "price": 320,
          "description": "Packed with plant-based protein and wholesome goodness.",
          "season": [
              "all-season"
          ],
          "popularity": 3.9,
          "image": ""
      },
      {
          "title": "Dark Chocolate Granola",
          "category": "desserts",
          "tags": [
              "snack",
              "gluten-free",
              "natural"
          ],
          "price": 161,
          "description": "A delicious and healthy snack made from natural ingredients.",
          "season": [
              "summer",
              "monsoon",
              "all-season"
          ],
          "popularity": 2.2,
          "image": ""
      },
      {
          "title": "Matcha Energy Bites",
          "category": "desserts",
          "tags": [
              "high fiber",
              "energy",
              "keto",
              "snack"
          ],
          "price": 162,
          "description": "Perfect for on-the-go snacking and fitness fuel.",
          "season": [
              "all-season"
          ],
          "popularity": 3.5,
          "image": ""
      },
      {
          "title": "Peanut Butter Cookie",
          "category": "snacks",
          "tags": [
              "low sugar",
              "gluten-free",
              "vegan",
              "protein"
          ],
          "price": 101,
          "description": "Crafted for taste lovers who don’t want to compromise health.",
          "season": [
              "winter"
          ],
          "popularity": 4.8,
          "image": ""
      },
      {
          "title": "Protein Trail Mix",
          "category": "healthy",
          "tags": [
              "low sugar",
              "gluten-free"
          ],
          "price": 201,
          "description": "Crafted for taste lovers who don’t want to compromise health.",
          "season": [
              "winter",
              "all-season"
          ],
          "popularity": 4.0,
          "image": ""
      },
      {
          "title": "Gluten-Free Brownie",
          "category": "bars",
          "tags": [
              "vegan",
              "keto",
              "energy"
          ],
          "price": 175,
          "description": "Boosts energy and satisfies hunger with clean nutrition.",
          "season": [
              "all-season"
          ],
          "popularity": 3.8,
          "image": ""
      },
      {
          "title": "Gluten-Free Brownie",
          "category": "desserts",
          "tags": [
              "high fiber",
              "gluten-free",
              "keto"
          ],
          "price": 475,
          "description": "A delicious and healthy snack made from natural ingredients.",
          "season": [
              "summer",
              "monsoon"
          ],
          "popularity": 1.1,
          "image": ""
      },
      {
          "title": "Gluten-Free Brownie",
          "category": "breakfast",
          "tags": [
              "vegan",
              "natural",
              "gluten-free"
          ],
          "price": 277,
          "description": "Packed with plant-based protein and wholesome goodness.",
          "season": [
              "monsoon"
          ],
          "popularity": 3.5,
          "image": ""
      },
      {
          "title": "Keto Snack Mix",
          "category": "bars",
          "tags": [
              "low sugar",
              "no preservatives",
              "energy"
          ],
          "price": 240,
          "description": "Packed with plant-based protein and wholesome goodness.",
          "season": [
              "winter",
              "all-season"
          ],
          "popularity": 1.4,
          "image": ""
      }
  ]
      
);

  console.log("Seeded");
  process.exit();
});
