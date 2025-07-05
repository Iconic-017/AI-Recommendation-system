import React from 'react';

const MessageBubble = ({ text, sender }) => {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-wrap ${
        isUser ? 'bg-blue-600 text-white' : 'bg-white/20 text-white'
      }`}>
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;
