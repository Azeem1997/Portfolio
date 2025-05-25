import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CollapsableCard = ({ title, summary, details, classes }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-gray-800 text-white rounded-xl p-6 shadow-md max-w-md w-full transition-all duration-300 ${classes}`}>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1 }}
            className="overflow-hidden mt-2 text-gray-300"
          >
            <p>{details}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-blue-400 hover:underline focus:outline-none"
      >
        {expanded ? 'Show Less' : '...More'}
      </button>
    </div>
  );
};

export default CollapsableCard;
