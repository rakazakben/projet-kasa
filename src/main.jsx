import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index.jsx'
import About from './pages/about/index.jsx'
import Logement from './pages/logement/index.jsx'
import Error from './components/Error/index.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Router>
          <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/logement/:id" element={<Logement/>} />
                <Route path="*" element={<Error />} />
            </Routes>
          <Footer/>
        </Router>
  </React.StrictMode>
)
