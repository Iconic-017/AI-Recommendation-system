const extractContext = (query) => {
    const tags = [];
    const dietTags = ["vegan", "gluten-free", "keto", "low sugar", "protein"];
    const categories = ["snacks", "bars", "cookies", "chips", "breakfast"];
    const seasons = ["summer", "winter", "monsoon", "festive"];
  
    const lower = query.toLowerCase();
  
    dietTags.forEach(tag => {
      if (lower.includes(tag)) tags.push(tag);
    });
  
    const category = categories.find(cat => lower.includes(cat)) || null;
    const season = seasons.find(season => lower.includes(season)) || null;
  
    const priceMatch = lower.match(/₹?\s?(\d+)/);
    const price = priceMatch ? parseInt(priceMatch[1]) : 10000;
  
    return { tags, category, season, price };
  };
  
  module.exports = extractContext;
  