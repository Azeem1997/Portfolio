// src/pages/Home.jsx
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-white flex flex-col items-center justify-center p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-extrabold text-indigo-600 mb-4 text-center">
        Hi, I'm Azeem
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        I'm a passionate UI/UX Developer with a love for clean design, smooth UX, and modern web tech.
      </p>
    </motion.div>
  );
}
