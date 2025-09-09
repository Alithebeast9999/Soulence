import React, { useState } from "react";
import Music from "./components/Music";
import Advice from "./components/Advice";
import Goals from "./components/Goals";
import Mood from "./components/Mood";

export default function App() {
  const [section, setSection] = useState("menu");

  return (
    // Используем 100dvh чтобы корректно занимать высоту в WebView/мобиле
    <div className="min-h-[100dvh] flex items-center justify-center">
      {/* Полупрозрачный центр с фоном (фон задаёт css) */}
      <div className="w-full max-w-md mx-4 p-6 rounded-3xl bg-black/40 backdrop-blur-sm shadow-2xl flex flex-col items-center">
        <header className="mb-4 text-center">
          <div className="text-2xl font-semibold">Soulence</div>
          <div className="text-sm text-white/70">music · practices · mood</div>
        </header>

        {/* Меню */}
        {section === "menu" && (
          <div className="w-full">
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => setSection("music")}
                className="btn-primary"
                aria-label="Music"
              >
                🎶 <span className="ml-2">Музыка</span>
              </button>

              <button
                onClick={() => setSection("advice")}
                className="btn-primary"
                aria-label="Advice"
              >
                🌿 <span className="ml-2">Советы</span>
              </button>

              <button
                onClick={() => setSection("goals")}
                className="btn-primary"
                aria-label="Goals"
              >
                📌 <span className="ml-2">Цели</span>
              </button>

              <button
                onClick={() => setSection("mood")}
                className="btn-primary"
                aria-label="Mood"
              >
                🙂 <span className="ml-2">Настроение</span>
              </button>
            </div>

            {/* Небольшая подсказка */}
            <div className="mt-5 text-center text-xs text-white/60">
              Нажми кнопку, чтобы войти в раздел. Для лучшего эффекта включи звук.
            </div>
          </div>
        )}

        {/* Разделы */}
        {section === "music" && <Music onBack={() => setSection("menu")} />}
        {section === "advice" && <Advice onBack={() => setSection("menu")} />}
        {section === "goals" && <Goals onBack={() => setSection("menu")} />}
        {section === "mood" && <Mood onBack={() => setSection("menu")} />}
      </div>
    </div>
  );
}
