// import React from 'react';

// const MessageBubble = ({ text, sender }) => {
//   const isUser = sender === 'user';

//   return (
//     <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
//       <div className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-wrap ${
//         isUser ? 'bg-blue-600 text-white border-2' : ' text-white bg-emerald-700 border-2'
//       }`}>
//         {text}
//       </div>
//     </div>
//   );
// };

// export default MessageBubble;



import React from 'react';

const MessageBubble = ({ text, sender, type, data }) => {
  const isUser = sender === 'user';

  // Render product card if type is 'product'
  if (type === 'product') {
    return (
      <div className="flex justify-start">
        <div className="bg-emerald-600 border-2 border-white text-gray-800 rounded-xl shadow-md p-4 max-w-xs w-full text-sm">
          <div className="font-bold text-lg mb-1">{data.title}</div>
          <div className="text-gray-600 text-xs mb-2">₹{data.price} — {data.confidence}% match</div>
          <div className="text-white">{data.reason}</div>
        </div>
      </div>
    );
  }

  // Default chat bubble
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`max-w-xs px-4 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${
        isUser ? 'bg-blue-600 text-white rounded-br-none border-2' : 'bg-emerald-600 border-2 border-white text-gray-800 rounded-bl-none'
      }`}>
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;
