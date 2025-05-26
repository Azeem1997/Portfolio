import { motion, MotionConfig } from 'framer-motion';

export default function Hobbies() {
    const hobbies = [
  {
    title: 'Photography',
    description: 'Capturing life in still moments.',
    icon: '📸',
  },
  {
    title: 'Gaming',
    description: 'Competitive FPS and strategy games.',
    icon: '🎮',
  },
  {
    title: 'Travel',
    description: 'Exploring cultures and landscapes.',
    icon: '🌍',
  },
];
  return (
    <div className="bg-black grid md:grid-cols-3 gap-6 p-8">
      {hobbies.map((hobby, idx) => (
        <motion.div
          key={idx}
          whileHover={{ rotateY: 18 }}
          className="relative w-full h-60 perspective-[1000px]"
        >
          <div className="absolute inset-0 transition-transform duration-700 transform preserve-3d hover:rotate-y-180">
            <div className="absolute backface-hidden bg-blue-600 text-white p-6 rounded-xl">
              <div className="text-4xl mb-2">{hobby.icon}</div>
              <h3 className="text-lg font-bold">{hobby.title}</h3>
            </div>
            <div className="absolute backface-hidden rotate-y-180 bg-blue-800 text-white p-6 rounded-xl">
              <p>{hobby.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
