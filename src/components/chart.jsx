import React from 'react';
import { Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ContentChart = ({ techData, details }) => {
  const data = {
    labels: techData && techData.map(item => item.tech),
    datasets: [
      {
        data: techData && techData.map(item => item.percent),
        backgroundColor: techData && techData.map(item => item.color),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div>{details}</div>
      <div className="w-full h-64 md:h-72 lg:h-80 flex justify-center items-center">
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="bg-black dark:bg-gray-900 shadow-xl rounded-xl p-6 border border-gray-900 dark:border-gray-900 transition-transform"
        >
          <Pie data={data} />
        </motion.div>
      </div>
      {/* <div className="mt-6 space-y-3">
          {techData.map(({ tech, percent, logo }, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <img src={logo} alt={tech} className="w-6 h-6" />
              <span className="font-semibold">{tech}:</span>
              <span>{percent}%</span>
            </div>
          ))}
        </div> */}
    </div>
  );
};


export default ContentChart;
