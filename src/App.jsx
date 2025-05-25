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

function App() {

  return (
      <div className="">
      <Navbar/>
      <Home />
      <About />
      <Projects />
      <ToastContainer/>
      </div>
  )
}

export default App
