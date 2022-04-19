import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Browse from './components/browse'
import Home from './components/home'
import Login from './components/login'

export default function RoutesMain() {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path={process.env.PUBLIC_URL + '/login'} element={<Login />} />
        <Route path={process.env.PUBLIC_URL + "/browse"} element={<Browse />} />
        <Route path='*' element={<Navigate to={process.env.PUBLIC_URL + "/"} replace />}/>
      </Routes>
    </AnimatePresence>
  )
}


