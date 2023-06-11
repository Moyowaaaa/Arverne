import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
// import './scss/index.scss'


import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from './pages/Home'
import QHSE from './pages/QHSE'
import SQ11 from './pages/SQ11'
import SQ7 from './pages/SQ7'




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/qhse" element={<QHSE />} />
    <Route path="/sk11" element={<SQ11 />} />
    <Route path="/sk7" element={<SQ7/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
