import React from 'react'

import Herosectiion from './component/Herosectiion'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
      <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
    </div>
  )
}

export default App
