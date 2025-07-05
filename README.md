# AI Bot - Food Recommendation API

A smart food recommendation system that uses AI to suggest personalized snacks and food products based on user preferences, dietary restrictions, and budget constraints.

## 🚀 Features

- **Intelligent Query Processing**: Understands natural language queries about food preferences
- **Dietary Filtering**: Supports vegan, gluten-free, keto, low-sugar, and protein-rich options
- **Budget-Aware**: Filters products based on price constraints
- **Seasonal Recommendations**: Considers seasonal preferences
- **AI-Powered Reasoning**: Provides personalized explanations for recommendations
- **Category-Based Filtering**: Supports snacks, bars, cookies, chips, and breakfast items

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Ollama (for AI reasoning with Mistral model)

## 🛠️ Installation

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Ai_Bot/Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the Backend directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/ai_bot
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## 📚 API Documentation

### Base URL
```
http://localhost:5000
```

### Endpoints

#### 1. Health Check
- **GET** `/`
- **Description**: Check if the API is running
- **Response**: `"API is working"`

#### 2. Food Recommendations
- **POST** `/recommend`
- **Description**: Get personalized food recommendations based on user query

##### Request Body
```json
{
  "query": "string"
}
```

##### Query Examples
The API understands various types of queries:

- **Dietary Preferences**: "vegan snacks under ₹200"
- **Protein Focus**: "protein-rich bars for gym"
- **Budget Constraints**: "healthy snacks under ₹150"
- **Seasonal**: "summer snacks that are gluten-free"
- **Category Specific**: "breakfast bars with low sugar"

##### Response Format
```json
[
  {
    "title": "Product Name",
    "price": 150,
    "confidence": 85,
    "reason": "AI-generated explanation of why this product matches your query"
  }
]
```

##### Error Responses

**Invalid Query (Non-food related)**
```json
{
  "message": "⚠️ Sorry, I can only help with food/snack recommendations. Please try something like 'vegan snacks under ₹300' or 'protein-rich bars'."
}
```

**No Products Found**
```json
{
  "message": "No matching products found for your preferences. Try adjusting your query."
}
```

## 🔧 API Usage Examples

### Example 1: Vegan Snacks
```bash
curl -X POST http://localhost:5000/recommend \
  -H "Content-Type: application/json" \
  -d '{"query": "vegan snacks under ₹300"}'
```

### Example 2: Protein-Rich Options
```bash
curl -X POST http://localhost:5000/recommend \
  -H "Content-Type: application/json" \
  -d '{"query": "protein bars for workout"}'
```

### Example 3: Seasonal Recommendations
```bash
curl -X POST http://localhost:5000/recommend \
  -H "Content-Type: application/json" \
  -d '{"query": "summer snacks that are gluten-free"}'
```

### Example 4: Budget-Friendly Options
```bash
curl -X POST http://localhost:5000/recommend \
  -H "Content-Type: application/json" \
  -d '{"query": "healthy breakfast under ₹100"}'
```

## 🏗️ Architecture

### Backend Structure
```
Backend/
├── Models/
│   └── Product.js          # MongoDB product schema
├── Routes/
│   └── recommend.route.js  # Recommendation endpoint
├── Utils/
│   ├── contExtractor.js    # Query context extraction
│   ├── generateReasoning.js # AI reasoning generation
│   └── isQueryProductRelated.js # Query validation
├── Server.js               # Express server setup
└── Seed.js                 # Database seeding
```

### Key Components

1. **Context Extractor** (`contExtractor.js`)
   - Extracts dietary tags, categories, seasons, and price from queries
   - Supports: vegan, gluten-free, keto, low-sugar, protein tags
   - Categories: snacks, bars, cookies, chips, breakfast
   - Seasons: summer, winter, monsoon, festive

2. **Query Validator** (`isQueryProductRelated.js`)
   - Validates if queries are food-related
   - Uses keyword matching for food/snack terms

3. **AI Reasoning** (`generateReasoning.js`)
   - Integrates with Ollama (Mistral model)
   - Generates personalized explanations for recommendations

## 🎯 Supported Query Types

### Dietary Preferences
- Vegan
- Gluten-free
- Keto
- Low sugar
- Protein-rich

### Categories
- Snacks
- Bars
- Cookies
- Chips
- Breakfast

### Seasons
- Summer
- Winter
- Monsoon
- Festive

### Price Constraints
- Any amount in Indian Rupees (₹)
- Default: ₹10,000 if not specified

## 🔍 Query Processing Flow

1. **Query Reception**: API receives natural language query
2. **Validation**: Checks if query is food-related
3. **Context Extraction**: Extracts tags, category, season, and price
4. **Database Filtering**: Finds matching products based on criteria
5. **Scoring**: Calculates confidence scores based on tag matches
6. **AI Reasoning**: Generates personalized explanations
7. **Response**: Returns ranked recommendations with explanations

## 🚨 Error Handling

- **400 Bad Request**: Non-food related queries
- **404 Not Found**: No matching products
- **500 Internal Server Error**: Database or AI service issues

## 🔧 Configuration

### Environment Variables
- `MONGO_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)

### AI Model Configuration
- **Model**: Mistral (via Ollama)
- **Endpoint**: `http://localhost:11434/api/generate`
- **Timeout**: 15 seconds (commented out in current version)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
1. Check the existing issues
2. Create a new issue with detailed description
3. Include query examples and expected behavior

---

**Note**: Make sure Ollama is running with the Mistral model for AI reasoning functionality to work properly. 