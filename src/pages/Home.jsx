// src/pages/Home.jsx
import { motion } from 'framer-motion';
import img from '../../public/Azeem_Full.jpg'
export default function Home() {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={img} alt='Azeem' className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
      <h1 className="text-3xl font-bold">
        Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Azeem</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        A Software Engineer specialized in building modern and responsive web application
      </p>
    </div>
  );
}
