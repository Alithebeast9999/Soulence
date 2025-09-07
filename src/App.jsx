import React, { useState } from 'react';
import Music from './components/Music';
import Advice from './components/Advice';
import Goals from './components/Goals';
import Mood from './components/Mood';

function App() {
  const [section, setSection] = useState('menu');

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6 bg-[url('https://i.ibb.co/CMdQyJc/night-nature.gif')] bg-cover bg-center">
      {section === 'menu' && (
        <div className="grid gap-4 w-full max-w-xs">
          <button onClick={() => setSection('music')} className="p-4 rounded-2xl bg-black/60 shadow-lg hover:bg-black/80 transition">🎶 Музыка</button>
          <button onClick={() => setSection('advice')} className="p-4 rounded-2xl bg-black/60 shadow-lg hover:bg-black/80 transition">🌿 Советы</button>
          <button onClick={() => setSection('goals')} className="p-4 rounded-2xl bg-black/60 shadow-lg hover:bg-black/80 transition">📌 Цели</button>
          <button onClick={() => setSection('mood')} className="p-4 rounded-2xl bg-black/60 shadow-lg hover:bg-black/80 transition">🙂 Настроение</button>
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
