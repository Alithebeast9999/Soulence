import React, { useState } from 'react';

function Mood({ onBack }) {
  const [mood, setMood] = useState(null);

  const moods = ["😊 Радость", "😔 Грусть", "😌 Спокойствие", "😡 Злость"];

  return (
    <div className="w-full max-w-sm bg-black/60 p-4 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">🙂 Настроение</h2>
      {!mood && (
        <div className="grid gap-3">
          {moods.map((m, i) => (
            <button key={i} onClick={() => setMood(m)} className="p-3 rounded-xl bg-gray-700 hover:bg-gray-600">{m}</button>
          ))}
        </div>
      )}
      {mood && (
        <div>
          <p className="mb-4">Ты выбрал: <span className="font-bold">{mood}</span></p>
          <button onClick={() => setMood(null)} className="p-3 rounded-xl bg-gray-500">Изменить настроение</button>
        </div>
      )}
      <button onClick={onBack} className="p-3 rounded-xl bg-gray-500 mt-4">⬅ Назад</button>
    </div>
  );
}

export default Mood;
