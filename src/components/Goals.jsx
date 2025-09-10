import React, { useState } from "react";

export default function Goals({ onBack }) {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState("");

  const add = () => {
    if (text.trim()) {
      setGoals(prev => [...prev, text.trim()]);
      setText("");
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl mb-4">📌 Цели</h2>
      <div className="flex gap-2 mb-4">
        <input className="flex-1 p-2 rounded-lg text-black" value={text} onChange={e=>setText(e.target.value)} placeholder="Новая цель..." />
        <button onClick={add} className="btn-primary">Добавить</button>
      </div>
      <ul className="list-disc list-inside space-y-2 mb-4">
        {goals.map((g,i)=><li key={i}>{g}</li>)}
      </ul>
      <button onClick={onBack} className="btn-primary">⬅ Назад</button>
    </div>
  );
}
