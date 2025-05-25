// src/pages/Home.jsx
import { motion } from 'framer-motion';
import img from '../../public/Azeem_Full.jpg'
import { utils } from '../components/utils';
import DialogueBox from '../components/dialogue';
import { useState } from 'react';
import { Grid } from '@mui/material';
import CollapsableCard from '../components/collapsable';

export default function Projects() {
  return (
    <div className='bg-black text-white py-16 grid grid-cols-1 gap-8 -mt-12'>
      {/* <h1 className="text-3xl font-bold bg-black text-center grid grid-cols-1 -mb-8"><span className='text-transparent bg-clip-text bg-gradient-to-l from-white-400 to-gray-100'>About Me</span></h1> */}
      <div className="bg-gray-800 text-white py-16 grid grid-cols-1 gap-8 -mt-12 mr-9 ml-12 rounded-xl p-6">
<h1 className='text-2xl font-bold grid grid-cols-1 -mt-10'>Projects</h1>
       
      </div>
    </div>

  );
}
