import React, { useState } from "react";

export default function Mood({ onBack }) {
  const [mood, setMood] = useState(null);
  const moods = ["😊 Радость", "😔 Грусть", "😌 Спокойствие", "😡 Злость"];

  return (
    <div className="w-full">
      <h2 className="text-xl mb-4">🙂 Настроение</h2>
      {!mood ? (
        <div className="grid gap-2">
          {moods.map((m,i)=>(<button key={i} onClick={()=>setMood(m)} className="btn-primary">{m}</button>))}
        </div>
      ) : (
        <div>
          <p className="mb-4">Ты выбрал: <strong>{mood}</strong></p>
          <button onClick={()=>setMood(null)} className="btn-primary">Изменить</button>
        </div>
      )}
      <div className="mt-4">
        <button onClick={onBack} className="btn-primary">⬅ Назад</button>
      </div>
    </div>
  );
}
