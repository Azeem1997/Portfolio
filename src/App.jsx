import { useState } from 'react'
import './App.css'
import "tailwindcss";
import Home from './pages/Home'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import About from './pages/About'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects';
import Qualification from './pages/Qualification';
import { motion, MotionConfig } from 'framer-motion';

function App() {

  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // delay between children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // 50px down
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

  return (
     <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className=""
    >
      <Navbar />
      <Home />
      <motion.div variants={itemVariants}><About /></motion.div>
      <motion.div variants={itemVariants}><Projects /></motion.div>
      <motion.div variants={itemVariants}><Qualification /></motion.div>
      <motion.div variants={itemVariants}><ToastContainer /></motion.div>
    </motion.div>
  )
}

export default App
