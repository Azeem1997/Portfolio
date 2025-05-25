// src/pages/Home.jsx
import { motion } from 'framer-motion';
import img from '../../public/Azeem_Full.jpg'
import { utils } from '../components/utils';
import DialogueBox from '../components/dialogue';
import { useState } from 'react';

export default function Home() {
   const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={img} alt='Azeem' className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
      <h1 className="text-3xl font-bold">
        Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Azeem</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        A Software Engineer specialized in building modern and responsive web application
      </p>
      <button className="mt-4 cursor-pointer bg-gradient-to-r from-orange-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full" onClick={e=>utils['contactMe'](e,setIsModalOpen)}>Contact Me</button>
      <button className="mt-4 ml-5 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full" onClick={e=>utils['download'](e)}>Resume</button>
      <DialogueBox isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className='mt-5'>
        <p className='text-1xl font-gotham font-bold'>MOBILE : 8778483080</p>
        <p className='text-1xl font-gotham font-bold'>E-MAIL : azeemrinvaz97@gmail.com</p>
        </div>
      </DialogueBox>
    </div>
  );
}
