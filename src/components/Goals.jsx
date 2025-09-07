import React, { useState } from 'react';

function Goals({ onBack }) {
  const [goals, setGoals] = useState([]);
  const [input, setInput] = useState("");

  const addGoal = () => {
    if (input.trim() !== "") {
      setGoals([...goals, input.trim()]);
      setInput("");
    }
  };

  return (
    <div className="w-full max-w-sm bg-black/60 p-4 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">📌 Цели</h2>
      <div className="flex gap-2 mb-4">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Новая цель..." className="flex-1 p-2 rounded-lg text-black" />
        <button onClick={addGoal} className="px-4 py-2 bg-green-600 rounded-lg">+</button>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {goals.map((g, i) => <li key={i}>{g}</li>)}
      </ul>
      <button onClick={onBack} className="p-3 rounded-xl bg-gray-500 mt-4">⬅ Назад</button>
    </div>
  );
}

export default Goals;
