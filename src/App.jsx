import React, { useState } from 'react';
import Music from './components/Music';
import Advice from './components/Advice';
import Goals from './components/Goals';
import Mood from './components/Mood';

function App() {
  const [section, setSection] = useState('menu');

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white">
      {section === 'menu' && (
        <div className="flex items-center justify-center w-full h-full">
          <div className="grid gap-4 w-full max-w-xs">
            <button onClick={() => setSection('music')} className="p-4 rounded-2xl bg-black/60 shadow-lg hover:scale-105 hover:bg-black/80 transition-transform duration-300">🎶 Музыка</button>
            <button onClick={() => setSection('advice')} className="p-4 rounded-2xl bg-black/60 shadow-lg hover:scale-105 hover:bg-black/80 transition-transform duration-300">🌿 Советы</button>
            <button onClick={() => setSection('goals')} className="p-4 rounded-2xl bg-black/60 shadow-lg hover:scale-105 hover:bg-black/80 transition-transform duration-300">📌 Цели</button>
            <button onClick={() => setSection('mood')} className="p-4 rounded-2xl bg-black/60 shadow-lg hover:scale-105 hover:bg-black/80 transition-transform duration-300">🙂 Настроение</button>
          </div>
        </div>
      )}
      {section === 'music' && <Music onBack={() => setSection('menu')} />}
      {section === 'advice' && <Advice onBack={() => setSection('menu')} />}
      {section === 'goals' && <Goals onBack={() => setSection('menu')} />}
      {section === 'mood' && <Mood onBack={() => setSection('menu')} />}
    </div>
  );
}

export default App;
