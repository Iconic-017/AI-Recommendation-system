// import React from 'react';
// import Chat from './components/Chat';

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
//       <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6">
//         <h1 className="text-3xl font-bold text-white mb-4 text-center">🛒 AI Shopping Assistant</h1>
//         <Chat />
//       </div>
//     </div>
//   );
// };

// export default App;




import React from 'react';
import Chat from './components/Chat';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-2xl rounded-3xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl pb-1.5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-md">
            🛍️ AI Shopping Assistant
          </h1>
          <p className="mt-2 text-gray-300 text-sm">
            Get personalized food/snack suggestions powered by AI
          </p>
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default App;
