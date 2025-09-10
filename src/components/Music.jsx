import React from "react";

export default function Music({ onBack }) {
  return (
    <div className="w-full text-center">
      <h2 className="text-xl mb-4">🎵 Music</h2>
      <p className="mb-4">Здесь будет плеер. Положите mp3 в public/music/ и добавьте UI позже.</p>
      <button onClick={onBack} className="btn-primary">⬅ Назад</button>
    </div>
  );
}
