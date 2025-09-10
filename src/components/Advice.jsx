import React from "react";

export default function Advice({ onBack }) {
  const advices = [
    "Дыши глубже и расслабься.",
    "Сделай паузу на 5 минут.",
    "Запиши 3 вещи, за которые благодарен."
  ];
  return (
    <div className="w-full text-left">
      <h2 className="text-xl mb-4">🌿 Советы</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        {advices.map((a,i) => <li key={i}>{a}</li>)}
      </ul>
      <button onClick={onBack} className="btn-primary">⬅ Назад</button>
    </div>
  );
}
