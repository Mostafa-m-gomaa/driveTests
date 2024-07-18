import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Media from './components/Media';
import Doc from './components/Doc';
import Exams from './components/Exams';
import Ques from './components/Ques';
import { Result } from 'postcss';
import ExamResult from './components/ExamResult';
import Login from './components/Login';
import { useNavigate } from 'react-router-dom'
import { createContext } from 'react';

export const AppContext = createContext()


function App() {
  const [login,setLogin] = useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
     setLogin(true)
    }
  } ,  [login])
  return (
    <AppContext.Provider value={{login , setLogin}}>
    <div className="bg-[#F9F9F9] flex flex-col  sm:flex-row">
    <Router>
      {login? <Nav /> : null }
   
      
        <Routes>
          
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/media" element={<Media/>} />
          <Route path="/doc" element={<Doc/>} />
          <Route path="/exam" element={<Exams/>} />
          <Route path="/ques" element={<Ques/>} />
          <Route path="/result" element={<ExamResult/>} />

        </Routes>
    </Router>
    </div>
    </AppContext.Provider>
  )
}

export default App
