// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { utils } from '../components/utils';
import DialogueBox from '../components/dialogue';
import { useState } from 'react';
import { Grid } from '@mui/material';
import CollapsableCard from '../components/collapsable';
import ContentChart from '../components/chart';

export default function Projects() {
    return (
        <div className='bg-black text-white py-16 grid grid-cols-1 gap-8 -mt-12' id="projects">
            {/* <h1 className="text-3xl font-bold bg-black text-center grid grid-cols-1 -mb-8"><span className='text-transparent bg-clip-text bg-gradient-to-l from-white-400 to-gray-100'>About Me</span></h1> */}
            <div className="bg-gray-800 text-white py-16 grid grid-cols-1 gap-8 -mt-12 mr-9 ml-12 rounded-xl p-6">
                <h1 className='text-2xl font-bold grid grid-cols-1 mt-1'>Projects</h1>
                <div className='bg-gray text-white grid grid-rows-1 gap-4'>
                    <div className="bg-gray-900 text-white rounded-lg shadow-lg">
                        <ContentChart
                            techData={[
                                { tech: 'ReactJS', percent: 50, color: '#0066CC' },
                                { tech: 'JavaScript', percent: 20, color: '#F5921B' },
                                { tech: 'CSS', percent: 10, color: '#87BB62' },
                                { tech: 'Node/Express JS', percent: 20, color: '#876FD4' },
                            ]}
                            details={
                                <div className="space-y-3">
                                    <h2 className="text-2xl font-bold text-green-400">StrongerMe</h2>
                                    <p><span className="font-semibold text-gray-300">Duration:</span> 5 Months</p>
                                    <p><span className="font-semibold text-gray-300">Domain:</span> Health & Wellness</p>
                                    <p><span className="font-semibold text-gray-300">Technologies:</span> JavaScript, ReactJS, Express.js</p>
                                    <p><span className="font-semibold text-gray-300">Tools:</span> Visual Studio Code</p>
                                    <p>
                                        Developed an admin dashboard for managing live sessions, coaches, training programs, and personalized plans.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                                        <li>Built responsive UI using Bootstrap and Material UI</li>
                                        <li>Implemented form validation and reusable components</li>
                                        <li>Wrote clean, modular React code following best practices</li>
                                        <li>Collaborated with team to enhance UI/UX and feature planning</li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                    <div className="bg-gray-900 text-white rounded-lg shadow-lg">
                        <ContentChart
                            techData={[
                                { tech: 'ReactJS', percent: 40, color: '#0066CC' },
                                { tech: 'JavaScript', percent: 20, color: '#F5921B' },
                                { tech: 'CSS', percent: 10, color: '#87BB62' },
                                { tech: 'Node/Express JS', percent: 15, color: '#876FD4' },
                                { tech: 'MySql', percent: 15, color: '#FFCC17' }
                            ]}
                            details={
                                <div className="space-y-3">
                                    <h2 className="text-2xl font-bold text-green-400">Orchid</h2>
                                    <p><span className="font-semibold text-gray-300">Duration:</span> 3 yrs</p>
                                    <p><span className="font-semibold text-gray-300">Domain:</span> Insurance</p>
                                    <p><span className="font-semibold text-gray-300">Technologies:</span> JavaScript, ReactJS, NodeJS, MySql</p>
                                    <p><span className="font-semibold text-gray-300">Tools:</span> Visual Studio Code</p>
                                    <p>
                                        Led full development lifecycle of an insurance platform using React, internal frameworks, Node.js, and MySQL. Built the system from scratch and successfully delivered it to Production.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                                        <li>Ensured high code quality and promoted reusable, maintainable code practices.</li>
                                        <li>Aligned customer requirements with our internal framework to deliver tailored solutions.</li>
                                        <li>Developed and enhanced the React-based framework for improved performance and scalability.</li>
                                        <li>Mentored and guided junior developers to elevate team capabilities.</li>
                                        <li>Focused on delivering responsive designs for optimal user experience across devices.</li>
                                        <li>Led initiatives to improve customer satisfaction through active collaboration and feedback integration.</li>
                                        <li>Introduced a code-less framework built on React to streamline development processes.</li>
                                        <li>Collaborated closely with customers to understand needs and translate them into effective technical solutions.</li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}
