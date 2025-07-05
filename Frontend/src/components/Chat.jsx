import React, { useState } from 'react';
import axios from 'axios';
import MessageBubble from './MessageBubble';

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "👋 Hi! I'm your AI shopping assistant. Ask me about snacks, food, etc.", sender: 'bot' }
  ]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = { text: query, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/recommend', { query });

      const products = Array.isArray(res.data) ? res.data : [];
      if (products.length === 0) {
        setMessages(prev => [...prev, { text: "🙁 No matching products found.", sender: 'bot' }]);
      } else {
        const formatted = products.map(p =>
          `• ${p.title} (₹${p.price}) — ${p.confidence}% match\nWhy: ${p.reason}`
        ).join('\n\n');

        setMessages(prev => [...prev, { text: formatted, sender: 'bot' }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { text: "⚠️ Error: Could not fetch response.", sender: 'bot' }]);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="space-y-2 h-96 overflow-y-auto border p-3 rounded bg-white/5 text-white mb-3">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} text={msg.text} sender={msg.sender} />
        ))}
        {loading && <MessageBubble text="🤖 Thinking..." sender="bot" />}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2 focus:outline-none"
          placeholder="Ask something like 'vegan snacks under ₹300'"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </>
  );
};

export default Chat;
