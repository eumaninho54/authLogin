import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Browse from './components/browse'
import Home from './components/home'
import Login from './components/login'

export default function RoutesMain() {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </AnimatePresence>
  )
}


