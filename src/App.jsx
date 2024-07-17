import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Media from './components/Media';
import Doc from './components/Doc';

function App() {

  return (
    <div className="bg-[#F9F9F9] flex flex-col  sm:flex-row">
    <Router>
    <Nav />
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/media" element={<Media/>} />
          <Route path="/doc" element={<Doc/>} />

        </Routes>
    </Router>
    </div>
  )
}

export default App
