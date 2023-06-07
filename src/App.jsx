import React from 'react'
import Home from './pages/Home.jsx'
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import Messagefull from './components/Messagefull.jsx'
import Administration from './pages/Administration.jsx'
import FormComponent from './components/FormComponent.jsx'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/message/:by" element={<Messagefull/>}/>
      <Route path="/administration" element={<Administration/>}/>
      <Route path="/forms/:id" element={<FormComponent/>}/>
    </Routes>
   <Footer/>
    </>
  )
}

export default App