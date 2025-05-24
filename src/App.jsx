import { useState } from 'react'
import './App.css'
import "tailwindcss";
import Home from './pages/Home'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
      <div className="">
      <Navbar/>
      <Home />
      <ToastContainer/>
      </div>
  )
}

export default App
