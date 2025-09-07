import React from 'react';

function Advice({ onBack }) {
  const advices = [
    "Дыши глубже и расслабься.",
    "Сделай паузу на 5 минут.",
    "Попробуй записать мысли в блокнот."
  ];

  return (
    <div className="w-full max-w-sm bg-black/70 p-4 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">🌿 Советы</h2>
      <ul className="list-disc list-inside space-y-2">
        {advices.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
      <button onClick={onBack} className="p-3 rounded-xl bg-gray-500 mt-4 hover:scale-105 transition-transform duration-300">⬅ Назад</button>
    </div>
  );
}

export default Advice;
