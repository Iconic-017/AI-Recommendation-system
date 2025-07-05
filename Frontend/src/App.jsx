import React from 'react';
import Chat from './components/Chat';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">🛒 AI Shopping Assistant</h1>
        <Chat />
      </div>
    </div>
  );
};

export default App;
