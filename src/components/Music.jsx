import React, { useState } from 'react';

const playlists = {
  calm: [
    { title: "Calm Waves", file: "/music/calm1.mp3" },
    { title: "Evening Lofi", file: "/music/calm2.mp3" },
  ],
  focus: [
    { title: "Focus Beats", file: "/music/focus1.mp3" },
  ],
  nature: [
    { title: "Rain Sounds", file: "/music/rain.mp3" },
  ],
  cozy: [
    { title: "Fireplace Ambience", file: "/music/fireplace.mp3" },
  ]
};

function Music({ onBack }) {
  const [category, setCategory] = useState(null);

  return (
    <div className="w-full max-w-sm bg-black/70 p-4 rounded-2xl shadow-lg">
      {!category && (
        <div className="grid gap-4">
          <button onClick={() => setCategory('calm')} className="p-3 rounded-xl bg-gray-700 hover:scale-105 hover:bg-gray-600 transition-transform duration-300">🌙 Спокойствие</button>
          <button onClick={() => setCategory('focus')} className="p-3 rounded-xl bg-gray-700 hover:scale-105 hover:bg-gray-600 transition-transform duration-300">☕ Фокус</button>
          <button onClick={() => setCategory('nature')} className="p-3 rounded-xl bg-gray-700 hover:scale-105 hover:bg-gray-600 transition-transform duration-300">🌊 Природа</button>
          <button onClick={() => setCategory('cozy')} className="p-3 rounded-xl bg-gray-700 hover:scale-105 hover:bg-gray-600 transition-transform duration-300">🔥 Уют</button>
          <button onClick={onBack} className="p-3 rounded-xl bg-gray-500 mt-2 hover:scale-105 transition-transform duration-300">⬅ Назад</button>
        </div>
      )}
      {category && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Выбрано: {category}</h2>
          {playlists[category].map((track, i) => (
            <div key={i} className="mb-3">
              <p>{track.title}</p>
              <audio controls className="w-full">
                <source src={track.file} type="audio/mpeg" />
              </audio>
            </div>
          ))}
          <button onClick={() => setCategory(null)} className="p-3 rounded-xl bg-gray-500 mt-4 hover:scale-105 transition-transform duration-300">⬅ Назад к категориям</button>
        </div>
      )}
    </div>
  );
}

export default Music;
