import React from 'react'
import Footer from './components/Footer'
import MessageApi from './Apis/MessageApi'
import Message from './components/Message'
import About from './components/About'
import './styles/message.css'
import Recruiters from './components/Recruiters'
import Header from './components/Header'
const App = () => {
  return (
    <>
    <Header/>
    <About/>
    {MessageApi.map((curr,index)=>{
      return <Message key={index} heading={curr.heading} img = {curr.img} by={curr.by} message={curr.message} />
    })}
    <Recruiters/>
    <Footer/>
    </>
  )
}

export default App