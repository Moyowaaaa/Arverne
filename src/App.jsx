import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
// import './scss/index.scss'


import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from './pages/Home'
import QHSE from './pages/QHSE'




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/qhse" element={<QHSE />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
