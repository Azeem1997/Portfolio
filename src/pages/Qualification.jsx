// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { utils } from '../components/utils';
import DialogueBox from '../components/dialogue';
import { useState } from 'react';
import { Grid } from '@mui/material';
import CollapsableCard from '../components/collapsable';
import ContentChart from '../components/chart';
import CountdownTimer from '../components/Timer';

export default function Qualification() {
    return (
        <div className='bg-black text-white py-16 grid grid-cols-1 gap-8 -mt-12' id="qualification">
            {/* <h1 className="text-3xl font-bold bg-black text-center grid grid-cols-1 -mb-8"><span className='text-transparent bg-clip-text bg-gradient-to-l from-white-400 to-gray-100'>About Me</span></h1> */}
            <div className="bg-gray-800 text-white py-16 grid grid-cols-1 gap-8 -mt-12 mr-9 ml-12 rounded-xl p-6">
                <h1 className='text-2xl font-bold grid grid-cols-1'>Qualification</h1>
                <div className='bg-gray text-white grid grid-rows-1 gap-4'>
                    <p>
                        Development In-progress
                        {[...Array(4)].map((_, i) => (
                            <span
                                key={i}
                                style={{
                                    display: 'inline-block',
                                    marginLeft: '6px',
                                    animation: 'bounceDot 1s infinite',
                                    animationDelay: `${i * 0.1}s`,
                                }}
                            >
                                .
                            </span>
                        ))}
                        <style>{`
                            @keyframes bounceDot {
                            0%, 100% { transform: translateY(1px); }
                            50% { transform: translateY(-9px); }
                            }
                        `}</style>
                    </p>
                    <CountdownTimer />
                </div>
            </div>
        </div>

    );
}
