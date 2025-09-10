import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: "url('/bg/background.jpg')" }}>
      <div className="flex flex-col gap-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white drop-shadow-lg"
        >
          🌿 Welcome to Soulence 🌿
        </motion.h1>

        <div className="flex flex-col gap-4">
          {[
            { label: "🎵 Music", path: "/music" },
            { label: "💡 Advice", path: "/advice" },
            { label: "🎯 Goals", path: "/goals" },
            { label: "🌈 Mood", path: "/mood" },
          ].map((btn, i) => (
            <motion.a
              key={btn.path}
              href={btn.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="px-6 py-3 rounded-2xl bg-white/80 text-gray-800 font-semibold 
                         shadow-lg backdrop-blur-md 
                         hover:bg-white hover:scale-105 hover:shadow-2xl 
                         transition-all duration-300"
            >
              {btn.label}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
