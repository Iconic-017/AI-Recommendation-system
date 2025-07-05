const isQueryProductRelated = (query) => {
    const keywords = [
      "snack", "vegan", "protein", "energy", "gluten", "healthy"
      , "cookie", "bar", "food", "oats", "chia", "makhana", "low sugar",
      "breakfast", "sweet", "fruit", "almond", "peanut", "seed", "bites", "nutrition"
    ];
  
    query = query.toLowerCase();
  
    return keywords.some(keyword => query.includes(keyword));
  };
  
  module.exports = isQueryProductRelated;
  