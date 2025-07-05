const axios = require('axios');

const generateReasoning = async (product, userQuery) => {
  const prompt = `
User Query: "${userQuery}"
Product: "${product.title}" (₹${product.price})
Tags: ${product.tags.join(", ")}

Explain why this product is a great match for the user.
`;

  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: "mistral",
      prompt: prompt,
      stream: false
    },
    // {
    //     timeout: 15000 // 15 seconds timeout
    // }
);

    return response.data.response.trim();
  } catch (err) {
    console.error("LLM Error:", err.message);
    return "Sorry, couldn't generate reasoning at the moment.";
  }
};

module.exports = generateReasoning;
