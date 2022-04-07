import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Browse from './components/browse'
import Home from './components/home'
import Login from './components/login'

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path="/browse" element={<Browse />}/>
      </Routes>
    </BrowserRouter>
  )
}

