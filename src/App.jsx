import React, { useState } from 'react';
import Music from './components/Music';

function App() {
  const [section, setSection] = useState('menu');

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      {section === 'menu' && (
        <div className="grid gap-4 w-full max-w-sm">
          <button onClick={() => setSection('music')} className="p-4 rounded-2xl bg-gray-800 shadow-lg">🎶 Музыка</button>
          <button disabled className="p-4 rounded-2xl bg-gray-800 opacity-50">🌿 Советы</button>
          <button disabled className="p-4 rounded-2xl bg-gray-800 opacity-50">📌 Цели</button>
          <button disabled className="p-4 rounded-2xl bg-gray-800 opacity-50">🙂 Настроение</button>
        </div>
      )}
      {section === 'music' && <Music onBack={() => setSection('menu')} />}
    </div>
  );
}

export default App;
