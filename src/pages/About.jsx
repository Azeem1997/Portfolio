// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { utils } from '../components/utils';
import DialogueBox from '../components/dialogue';
import { useState } from 'react';
import { Grid } from '@mui/material';
import CollapsableCard from '../components/collapsable';

export default function About() {
  return (
    <div id="aboutme">
      {/* <h1 className="text-3xl font-bold bg-black text-center grid grid-cols-1 -mb-8"><span className='text-transparent bg-clip-text bg-gradient-to-l from-white-400 to-gray-100'>About Me</span></h1> */}
      <div className="bg-black text-white py-16 grid grid-cols-3 gap-8 -mt-12">

        <CollapsableCard
          title="About Me"
          details={
            <div>
              <p className=''>I’m a React developer focused on building clean, responsive web apps with reusable components that enhance performance and scalability. I enjoy transforming complex challenges into simple, intuitive user experiences.</p>

              <p className='mt-2'>I collaborate closely with teams and stakeholders to deliver solutions aligned with business goals, using efficient workflows and clear communication. I’m familiar with project tools like Jira for smooth development processes.</p>

              <p className='mt-2'>In addition to frontend work, I handle backend integrations and deployment pipelines, ensuring reliable code delivery. I’m always learning new technologies to stay current and deliver modern, efficient applications.</p>
            </div>
          }
          classes="ml-12"
        />
        <CollapsableCard
          title="Skill Summary"
          details={
            <div>
              <ul className="list-disc list-inside text-left text-gray-300 space-y-2">
                <li>Skilled in creating responsive and modern websites</li>
                <li>Led and mentored junior developers on team projects</li>
                <li>Proficient in React functional and class components</li>
                <li>Built reusable and modular components</li>
                <li>Optimized performance in React applications</li>
                <li>Worked on Node.js and MySQL</li>
                <li>Integrated Single Sign-On (SSO) with Azure Active Directory</li>
                <li>Wrote maintainable and scalable code for future-proof projects</li>
                <li>Collaborated with clients to analyze Jira tickets and manage project workflows</li>
                <li>Managed code deployments using Jenkins and maintained version control with Git</li>
              </ul>
            </div>
          }
          classes="ml-6"
        />
        <CollapsableCard
          title="Languages and Technologies"
          details={
            <div className="max-w-xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg space-y-4">
              <p>- HTML5, JavaScript (ES6), CSS3 with Bootstrap 5, Tailwind CSS</p>
              <p>- React.js, Redux, Vite with React</p>
              <p>- Node.js, Express.js, MySQL, MongoDB</p>
              <p>- Git, GitHub</p>
              <p>- Microsoft Office (Word, Excel, PowerPoint), VS Code, Postman, Sublime Text, Jira</p>
            </div>
          }
        />
      </div>
    </div>

  );
}
