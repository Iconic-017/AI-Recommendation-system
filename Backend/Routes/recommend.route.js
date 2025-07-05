const express = require('express');
const router = express.Router();
const Product = require('../Models/Product'); // ✅ Correct (Assuming path is capitalized)
const extractContext = require('../Utils/contExtractor.js'); // 
const generateReasoning = require('../Utils/generateReasoning.js');
const isQueryProductRelated = require('../Utils/isQueryProductRelated.js');

router.post('/', async (req, res) => {
    const query = req.body.query;
    const { tags, category, season, price } = extractContext(query);

    if (!isQueryProductRelated(query)) {
        return res.status(400).json({
          message: "⚠️ Sorry, I can only help with food/snack recommendations. Please try something like 'vegan snacks under ₹300' or 'protein-rich bars'."
        });
      }
      
  
    const filter = { price: { $lte: price } };
    if (tags.length > 0) filter.tags = { $all: tags };
    if (category) filter.category = category;
    if (season) filter.season = season;
  
    let products = await Product.find(filter);
    if (products.length === 0) {
      return res.status(404).json({
        message: "No matching products found for your preferences. Try adjusting your query."
      });
    }
  
    const scored = await Promise.all(products.map(async (p) => {
      const tagMatch = p.tags.filter(t => tags.includes(t)).length;
      const confidence = 80 + tagMatch * 5;
      const reason = await generateReasoning(p, query);
  
      return {
        title: p.title,
        price: p.price,
        confidence: Math.min(confidence, 99),
        reason
      };
    }));
  
    res.json(scored);
  });

module.exports = router;
